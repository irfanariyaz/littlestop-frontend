import React, { useContext } from 'react';
import { DataContext } from './context/DataContext';
import { useNavigate } from 'react-router-dom';

const HomeCategoreies = () => {
  const{setProducts}= useContext(DataContext)
  const navigate = useNavigate();
  const items = [
    { id: 1, image: 'images/categories/cat-book.png', title: 'Books' },
    { id: 2, image: 'images/categories/cat-mats.png', title: 'Mats' },
    { id: 3, image: 'images/categories/cat-prayerDress.png', title: 'Prayer  Dress' },
  ];
  const exploreCategories = () => {
    setProducts([]);
    navigate('/categories');
  };

  return (
    <div className='mt-10  bg-primary '>
      <div className='flex flex-col items-center mb-8 '>
            <h1 className=' text-2xl font-bold mt-4'>Categories</h1>
            <p className='text-sm'>Find what you are looking for</p>
        </div>
{/* <div className="md:w-[70%] md:m-auto flex  flex-col items-center mb-6  overflow-x-scroll no-scrollbar overflow-y-hidden "> */}
      {/* Item Display */}
      
      {/* <div className="   min-w-[250px] flex justify-center space-x-4 p-4 gap-6">  */}
      <div className=" flex overflow-x-scroll no-scrollbar overflow-y-hidden space-x-5 p-7  w-full md:w-[70%] md:m-auto justify-around ">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`w-[250px] h-[400px] flex  flex-col items-center  rounded-lg flex-shrink-0 ${
              index === 0 ? '-mt-12' : index === 2 ? '-mt-10' : 'mt-10'
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className=" w-full h-full object-cover rounded-lg shadow-lg "
            />
            <p className="text-center font-semibold mt-2">{item.title}</p>
          </div>
        ))}
       </div>       
      <div class="flex flex-col items-center ">
        <p className=" text-gray-600 mb-4 px-6">
          Discover our exclusive collection of items carefully crafted for you.
        </p>
        {/* Button */}
        <button className=" bg-white text-black px-6 py-2 rounded-md shadow hover:bg-primary-dark transition duration-300 mb-4"
        onClick={exploreCategories}>
          Explore More
        </button>
      </div>

    {/* Paragraph */}
    
    </div>
  );
};

export default HomeCategoreies;
