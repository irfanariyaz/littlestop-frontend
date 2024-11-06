import React, { useState } from 'react';

const ProductDetails = () => {
  const product = {
    id: 1,
    name: 'Sample Product',
    price: 29.99,
    description: 'A wonderful product that brings joy and convenience to your life.',
    images: [
      '/images/image1.jpg',
      '/images/heroImage.png',
      '/images/logo.jpeg',
      '/images/littlestop.png',
    ],
  };

  const [mainImage, setMainImage] = useState(product.images[0]);

  return (
    <div className="flex flex-col md:flex-row max-w-6xl mx-auto p-6 space-y-6 md:space-y-0 md:space-x-8 md:p-10">
      {/* Left Column - Thumbnails */}
      <div className="flex md:flex-col space-x-5 md:space-y-4 justify-center md:justify-start  md:space-x-0">
        {product.images.map((image, index) => (
          <img
            key={index}
            src={image}
            // alt={`Product thumbnail ${index + 1}`}
          alt={image}
            onMouseEnter={() => setMainImage(image)}
            className="w-10 h-10 cursor-pointer object-cover rounded border border-gray-300 hover:border-gray-400"
          />
         
        ))}
      </div>

      {/* Middle Column - Main Image */}
      <div className="flex justify-center items-center">
        <img
          src={mainImage}
          alt="Main product"
          className="w-[400px] h-[500px] object-contain rounded-lg shadow-md transition-transform duration-300"
        />
      </div>

      {/* Right Column - Product Details */}
      <div className="flex flex-col space-y-4 p-4">
        <h1 className="text-3xl font-semibold">{product.name}</h1>
        <p className="text-3xl font-bold text-black">${product.price}</p>
        <p className="text-gray-700">{product.description}</p>
        
        <button className="mt-4 bg-primary text-black px-6 py-2 rounded-md hover:bg-primary-dark transition duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
