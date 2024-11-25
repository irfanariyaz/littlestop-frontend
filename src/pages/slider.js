import React, { useContext, useEffect, useRef, useState } from 'react';
//import { left_arrow_icon, right_arrow_icon } from 'react-icons'; // Adjust the import path as necessary
import ProductCard from './ProductCardForCategories';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import ProductCardForCatagoreies from './ProductCardForCategories';

import { DataContext } from './context/DataContext';
import  axios  from 'axios';

const Slider = () => {
  const [items,setItems] = useState([]);
useEffect(()=>{
  const fetchData =async()=>{
    const response = await axios.get(`api/v1/products/best-selling`);
    const products = response.data.data;
    setItems(products);
  };
  fetchData();
  
},[])
  const [arrowLeft, setArrowLeft] = useState(false);
  const [arrowRight, setArrowRight] = useState(true);
  const sliderRef = useRef(null);
  let x = 0;

  const goLeft = () => {
    if (x - 960 >= 0) {
      sliderRef.current.scrollTo(x - 960, 0);
    } else {
      sliderRef.current.scrollTo(0, 0);
    }
  };

  const goRight = () => {
    if (x + 960 <= 2871) {
      sliderRef.current.scrollTo(x + 960, 0);
    } else {
      sliderRef.current.scrollTo(2871, 0);
    }
  };

  const onSlide = () => {
    x = sliderRef.current.scrollLeft;
    setArrowLeft(x > 0);
    setArrowRight(x < 2871);
  };

  return (
    <div className=" mt-3 ">
        <h1 className='md:hidden flex justify-center text-2xl font-bold'>Best Selling Products</h1>
     
        <div class="flex items-center">
            {/* Left Arrow */}
                <div
            style={{ visibility: arrowLeft ? 'visible' : 'hidden' }}
            className="absolute left-0 p-2  bg-primary hover:bg-gray-200 rounded-full cursor-pointer"
            onClick={goLeft}
                  >
            <FaArrowLeft className=' '/>
                  </div>
                  
                  <div className=" hidden md:block md:max-w-[250px] md:self-start md:pt-10  md:bg-white md:p-4  ml-4 ">
                    <h1 className="text-xl  md:text-3xl font-bold mb-4">Best Selling Products</h1>
                    <p className="text-gray-500 ml-2 mb-4">
                        Check out our latest best selling products liked by our customers
                     </p>
                    <button className="bg-primary hover:bg-gray-200 p-2 text-black md:px-4 md:py-2 rounded-md ml-4">
                        See more <FaArrowRight className="inline-block ml-2" />
                     </button>
                </div>
            
                  <div
            ref={sliderRef}
            className=" flex overflow-x-scroll no-scrollbar overflow-y-hidden  space-x-5 p-4 "
            onScroll={onSlide}
                  >
            {items?.map((item, index) => (
              <ProductCardForCatagoreies key={index} product={item} />
            ))}
                  </div>
                  <div
            style={{ visibility: arrowRight ? 'visible' : 'hidden' }}
            className="absolute right-0 p-2 bg-primary hover:bg-gray-200 rounded-full cursor-pointer"
            onClick={goRight}
                  >
                   <FaArrowRight/>
                  </div>
        </div>
    </div>
  );
};

export default Slider;
