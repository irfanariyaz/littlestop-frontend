import React, { useContext, useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import axios from 'axios';
import { DataContext } from './context/DataContext';

export default function Products() {
  const{products,setProducts,loadmoreProducts,isLastPage} = useContext(DataContext);

  return (
    <div className='container  w-[90%] mt-4  md:w-[80%] m-auto'>
     
         <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2  md:ml-10 p-3">
           {products?.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
         </div>
              {!isLastPage && (
         <div class="flex justify-center mb-4">
           <button className="bg-primary text-black px-4 py-2 rounded-md mt-4" onClick={loadmoreProducts}>
              Load More
           </button >
         </div>
              )}

    </div>
  )
}
