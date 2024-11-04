import React, { useState } from 'react';
import { FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const linkClasses = ({ isActive }) => 
    isActive ? 'text-gray-300' : 'hover:text-gray-300';

  return (
    <nav className=" text-1E1E1E px-10 md:px-40 py-3 shadow-lg fixed w-full ">
      <div className="container flex mx-auto  justify-between items-center " >
        
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold">
          <img src="/images/littlestop.png" alt="Logo" className="h-20 w-auto" />
        </NavLink>

        {/* Desktop Nav NavLinks */}
        <div className="hidden md:flex space-x-8 text-lg">
          <NavLink to="/" className={linkClasses}>Home</NavLink>
          <NavLink to="/products" className={linkClasses}>Products</NavLink>
          <NavLink to="/contact" className={linkClasses}>Contact</NavLink>
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
