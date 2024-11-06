import React from 'react'
import ProductCard from './ProductCard';

export default function Products() {
  const items = [
    { id: 1, name: 'Product 1', image: 'images/image1.jpg', price: 19.99 },
    { id: 2, name: 'Product 2', image: 'images/image1.jpg', price: 29.99 },
    { id: 3, name: 'Product 3', image: 'images/image1.jpg', price: 39.99 },
    { id: 4, name: 'Product 4', image: 'images/image1.jpg', price: 49.99 },
    { id: 5, name: 'Product 5', image: 'images/image1.jpg', price: 59.99 },
    { id: 6, name: 'Product 6', image: 'images/image1.jpg', price: 69.99 },
    { id: 7, name: 'Product 7', image: 'images/image1.jpg', price: 79.99 },
    { id: 8, name: 'Product 8', image: 'images/image1.jpg', price: 89.99 },
    { id: 9, name: 'Product 9', image: 'images/image1.jpg', price: 99.99 }
  ];
  return (
    <div className='container  w-[90%] mt-4  md:w-[80%] m-auto'>
     
         <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2  md:ml-10 p-3">
           {items.map((item, index) => (
                <ProductCard key={index} product={item} />
              ))}
         </div>

         <div class="flex justify-center mb-4">
           <button className="bg-primary text-black px-4 py-2 rounded-md mt-4 ">
              Load More
           </button>
         </div>

    </div>
  )
}
