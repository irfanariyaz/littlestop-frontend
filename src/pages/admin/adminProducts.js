import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { DataContext } from '../context/DataContext';
import { useNavigate } from 'react-router-dom';

const ProductTable = () => {
  const {products, setProducts,isLastPage,loadmoreProducts} =useContext(DataContext);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    // Logic to delete the product with the given id
    console.log('Delete product', id);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Product List</h2>
      <table className="min-w-full bg-white border rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">ID</th>
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Description</th>
            <th className="py-3 px-6 text-left">Price</th>
            <th className="py-3 px-6 text-left">Inventory</th>
            <th className="py-3 px-6 text-left">Best Selling</th>
            <th className="py-3 px-6 text-left">Brand</th>
            <th className="py-3 px-6 text-left">Category</th>
            <th className="py-3 px-6 text-center">Edit</th>
            <th className="py-3 px-6 text-center">Delete</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {products.map((product) => (
            <tr key={product.id} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left whitespace-nowrap">{product.id}</td>
              <td className="py-3 px-6 text-left">{product.name}</td>
              <td className="py-3 px-6 text-left">{product.description.length > 9 
                                                ? `${product.description.substring(0, 9)}...` 
                                                        : product.description}</td>
              <td className="py-3 px-6 text-left">${product.price}</td>
              <td className="py-3 px-6 text-left">{product.inventory}</td>
              <td className="py-3 px-6 text-left">{product.isBestSelling ? 'Yes' : 'No'}</td>
              <td className="py-3 px-6 text-left">{product.brand || 'N/A'}</td>
              <td className="py-3 px-6 text-left">{product.category || 'N/A'}</td>
              <td className="py-3 px-6 text-center">
              <button 
                    onClick={() => navigate(`/products/add/${product.id}`)} 
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                    Edit
              </button>
              </td>
              <td className="py-3 px-6 text-center">
                <button
                  onClick={() => handleDelete(product.id)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {!isLastPage && (
         <div class="flex justify-center mb-4">
           <button className="bg-primary text-black px-4 py-2 rounded-md mt-4" onClick={loadmoreProducts}>
              Load More
           </button >
         </div>
              )}
    </div>
  );
};

export default ProductTable;
