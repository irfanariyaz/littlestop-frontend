import React, { useContext, useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import axios from 'axios';
import { DataContext } from './context/DataContext';

export default function SearchProducts() {
  const{isLastSearchPage,recordCount,searchTerm,setIsLastsearchPage} = useContext(DataContext);
  const [searchPageNo,setSearchPageNo] = useState(0);
  const [searchProducts,setSearchProducts] = useState([])
  const loadmoresearchProducts = ()=>{
    setSearchPageNo(searchPageNo+1)
}
useEffect(() =>{
    const getSearchProducts = async () => {
        try {
            const response = await axios.get(`/api/v1/products/search/${searchTerm}/${searchPageNo}/${recordCount}`);
            const { products: newProducts, last } = response.data.data;
            setSearchProducts((prevProducts) => [...prevProducts, ...newProducts]);
            setIsLastsearchPage(last); // Set `isLastPage` based on backend response
          } catch (error) {
            alert(error.response.data.message);
            console.error('Error fetching products:', error);
          }
        };
        getSearchProducts();
},[searchPageNo])
  return (
    <div className='container  w-[90%] mt-4  md:w-[80%] m-auto'>
     
         <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2  md:ml-10 p-3">
           {searchProducts?.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
         </div>
              {!isLastSearchPage && (
         <div class="flex justify-center mb-4">
           <button className="bg-primary text-black px-4 py-2 rounded-md mt-4" onClick={loadmoresearchProducts}>
              Load More
           </button >
         </div>
              )}

    </div>
  )
}
