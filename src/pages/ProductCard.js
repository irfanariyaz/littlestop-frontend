import React from 'react'
import { Link } from 'react-router-dom';

function ProductCard({index,product}) {
  return (
    
  <Link
    to={`/productDetail/${product.id}`}
    state={{ product }}  // Pass product as state
    key={index}
    className=" max-h-[400px] max-w-[250px]  bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 "
  >
    <div className="md:w-[200px] md:h-[250px] bg-gray-100 rounded-lg  mb-4">
    
      <img
        src={`data:image/jpeg;base64,${product.images[0].image}`}
        alt={product.name}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 shadow-lg shadow-slate-700"
      />
    </div>
    <h3 className="text-lg font-semibold first-letter:capitalize text-gray-600">{product.name}</h3>
    <p className="text-gray-800 bg-primary inline-block w-fit px-2 font-bold rounded-lg">${product.price}</p>
  </Link>

  )
}

export default ProductCard