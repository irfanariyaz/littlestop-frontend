import React, { useState ,useEffect, useContext} from 'react';
import { FaShoppingCart, FaUser, FaBars, FaTimes ,FaSearch} from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";
import { DataContext } from './context/DataContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const {setProducts,setPageNo,isLastPage} = useContext(DataContext);
  const [search,setSearch] = useState('');
 

  const navigate = useNavigate();

  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
     
      handleClick();
    }
  };
  const handleClick = async() => {  
      if(search.length>0){       
        setProducts([]);
        setPageNo(0);
        console.log("go to search")
        navigate(`/products?searchTerm=${search}`)     
      }
      else{
        alert("Please enter a search term")
      }
    }
    // Toggle dark color when scrolled beyond 200px
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 200) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const linkClasses = ({ isActive }) => 
    isActive ? 'text-gray-300' : 'hover:text-gray-300';

  return (
    <nav className=" text-1E1E1E px-10 md:px-40 py-3 shadow-lg fixed w-full bg-white ">
      {/* <nav className={`px-10 md:px-40 py-3 fixed w-full transition-colors duration-300 shadow-lg ${isScrolled ? 'bg-gray-800 text-white' : 'bg-white text-[#1E1E1E]'}`}></nav> */}
      <div className="container flex mx-auto  justify-between items-center " >
        
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold">
          <img src="/images/logo.jpeg" alt="Logo" className="h-20 w-auto" />
        </NavLink>

        {/* Desktop Nav NavLinks */}
        <div className="hidden md:flex space-x-8 text-lg">
          <NavLink to="/" className={linkClasses}>Home</NavLink>
          <a href="/products" className={linkClasses}> Products</a>
          <NavLink to="/categories" className={linkClasses}>Categories</NavLink> 
          {/* <NavLink to="/brands" className={linkClasses}>Brand</NavLink>  */}
          <NavLink to="/contact" className={linkClasses}>Contact</NavLink>
        </div>
        {/* create search bar  */}
        <div className="relative flex items-center bg-white border-transparent rounded-md ">
        <input
          type="text"
          placeholder="  Search for products..."
          className="flex-1 outline-none h-[40px] pl-3 pr-6 bg-primary text-black rounded-lg"  // Adjust padding to make space for the icon
          onChange={handleChange}
          onKeyDown={handleKeyDown}  // Detect "Enter" key
        />
        
        {/* Search Icon positioned inside the input */}
        <FaSearch 
          className="absolute right-2  text-gray-400 text-[20px] cursor-pointer" 
          onClick={handleClick} 
        />
      </div>

        {/* Icons */}
        <div className="hidden md:flex space-x-4 items-center">
          <IoCartOutline  size= {40} className="cursor-pointer" />
          <FaUser  size= {26} className="cursor-pointer  w-10/12" />
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden ">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#FFE8E2] absolute top-15 w-full z-10 py-4">
          <NavLink to="/" className="block py-2 px-4 text-center hover:bg-[#f7dcd5]" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/products" className="block py-2 px-4 text-center hover:bg-[#f7dcd5]" onClick={() => setIsOpen(false)}>Products</NavLink>
          <NavLink to="/contact" className="block py-2 px-4 text-center hover:bg-[#f7dcd5]" onClick={() => setIsOpen(false)}>Contact</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
