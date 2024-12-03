import React, { useContext } from 'react'
import { DataContext } from './context/DataContext'
import { useNavigate, useSearchParams } from 'react-router-dom';

function Categories() {
    const {categories,setProducts} = useContext(DataContext)
    const navigate = useNavigate();
  
    const handleCategoryClick = (categoryId) => {
        // Navigate to the category page with the selected category ID
        setProducts([]);
        navigate(`/products?category=${categoryId}`)
        
      };
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-10 w-[90%]">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">Explore Categories</h1>
          <p className="text-gray-600 mt-2">Browse through our collection of categories.</p>
        </header>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-lg shadow-md cursor-pointer p-6 hover:shadow-lg transition duration-300 flex flex-col justify-between"
              onClick={() => handleCategoryClick(category.id)}
            >
              {/* Category Title */}
              {/* <h2 className="text-xl font-semibold text-gray-800 mb-2">{category.name}</h2> */}

              {/* Placeholder Icon */}
              <div className="flex items-center justify-center h-32  w-32 bg-primary text-amber-900 rounded-full mx-auto mb-4">
                <span className="text-2xl font-bold text-center first-letter:capitalize  ">{category.name}</span>
              </div>
              {/* View More Link */}
              <a
               // href={`/categories/${category.id}`}
                className="text-amber-900font-medium text-sm text-center block mt-auto"
                onClick={() => handleCategoryClick(category.id)}
              >
                View More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>

  )
}

export default Categories