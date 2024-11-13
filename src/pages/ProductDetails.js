import React, { useContext, useEffect, useState, useRef } from 'react';
import { DataContext } from './context/DataContext';
import { useLocation, useParams } from 'react-router-dom';
import  axios  from 'axios';

const ProductDetails = () => {
  const product_id  = useParams();
  const location = useLocation();
  const[product,setProduct] = useState(location.state?.product);  // Access product from state
  const[mainImage , setMainImage] = useState(product? product.images[0].image :null);

  useEffect(() => {
    // Find the product with the matching ID in the context
    console.log("inside useEffect",product_id.id)
    const id = parseInt(product_id?.id);
    // Fetch additional images if the product exists
    if (product) {
      const fetchImages = async () => {
        try {
          const response = await axios.get(`/api/v1/images/images/${id}`);
          console.log("request sent")
          setProduct((prevProduct) => ({
            ...prevProduct,
            images: response.data.data,
          }))
          console.log("response",response.data.data)
        } catch (error) {
          console.error('Error fetching images:', error);
        }
      };
      fetchImages();
    }
  }, []);

const handleImageHover = (image) => {
    console.log("image hovered",image.fileName)
  setMainImage(image.image);
  };
  

  return (
    <div className="flex flex-col md:flex-row max-w-6xl mx-auto p-6 space-y-6 md:space-y-0 md:space-x-8 md:p-10">
      {/* Left Column - Thumbnails */}
      <div className="flex md:flex-col space-x-5 md:space-y-4 justify-center md:justify-start  md:space-x-0">
        {product?.images?.map((image, index) => (
          <img
            key={index}
            src={image.image}
            // alt={`Product thumbnail ${index + 1}`}
          alt={`image ${index + 1}` }
            onMouseOver={() => handleImageHover(image)}
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
        <h1 className="text-3xl font-semibold">{product?.name}</h1>
        <p className="text-3xl font-bold text-black">${product?.price}</p>
        <p className="text-gray-700">{product?.description}</p>
        
        <button className="mt-4 bg-primary text-black px-6 py-2 rounded-md hover:bg-primary-dark transition duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
