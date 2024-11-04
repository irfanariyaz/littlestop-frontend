import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className=" ">
      <div class="md:container  p-10 md:p-0 bg-primary  md:w-[70%] md:m-auto flex flex-col md:flex-row items-center">
          {/* Left Section */}
          <div className="flex-1 md:p-6">
            {/* Main Title */}
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Quality islamic products,delivered to you!
            </h1>
            {/* Customer Count Section */}
            <div className="flex items-center md:justify-between mb-4 ">
              <div className='flex items-center gap-2'>
              <div className="text-gray-600">
                <p className='font-bold'>10K+</p> 
                <p>Customers</p>
                </div>
              <div className="w-px h-5 m-4 bg-gray-400"></div>
              <div className="text-gray-600">
              <p className='font-bold'>500+</p> 
              <p>Reviews</p>
              </div>
               </div>
               <img src='images/Vector_186.png' className='hidden md:block md:w-[100px] mr-10 '></img>
        
            </div>
            {/* Search Bar */}
            <div className="flex items-center bg-white border-transparent rounded-md ">
             
              <input
                type="text"
                placeholder="Search for products..."
                className="flex-1 outline-none h-[40px] pl-2"
              />
              
              <FaSearch className="text-gray-400 mr-2 w-[30px] h-[30px] border rounded-lg text-[20px] p-2 bg-primary"  />
          
              
            </div>
          </div>
           {/* Right Section (Hidden on mobile) */}
          <div className="hidden md:block flex-1">
            <img
              src="images/heroImage.png"
              alt="Hero"
              className="w-full h-[300px] object-cover rounded-md"
            />
          </div>
      </div>
    </section>
  );
};

export default Hero;
