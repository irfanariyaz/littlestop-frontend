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
            <div className="flex items-center mb-4 space-x-2">
              <div className="text-gray-600">10K+ Customers</div>
              <div className="w-px h-5 bg-gray-400"></div>
              <div className="text-gray-600">500+ Reviews</div>
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
