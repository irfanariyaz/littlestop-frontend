import React, { useContext, useEffect, useState } from 'react';

import { DataContext } from './context/DataContext';
import { useNavigate, useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import axiosInstance from './admin/axiosInstance';
const AddProduct = () => {
const {categories,setCategories,brands,setBrands} = useContext(DataContext);
const {id}= useParams();
const navigate = useNavigate() 
  const [thumbnailIndex, setThumbnailIndex] = useState(0); // Track the selected thumbnail
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [newBrand, setNewBrand] = useState('');
  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const [isAddingBrand, setIsAddingBrand] = useState(false);
  const [updateImages,setUpdateImages] = useState(false);
  const [productData, setProductData] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
    brand:'',
    inventory:'',
    isBestSelling:false,
    images: [],
    
  });
  const [isEditing, setIsEditing] = useState(id?true:false);
  // const [isBestSelling, setIsBestSelling] = useState(false);

  const handleRadioChange = (event) => {
    
    setProductData((prevData) => ({
      ...prevData,
      isBestSelling: event.target.value=="true"
    }));
  };
  useEffect(()=>{
      const fetchProduct = async ()=>{
        const response = await axiosInstance.get(`api/v1/products/product/${id}`);
        const product = response.data.data;
        console.log("get product by id",product)
        setProductData({
          name: product.name,
          price: product.price,
          description: product.description,
          category: product.category,
          brand:product.brand,
          inventory:product.inventory,
          isBestSelling:product.isBestSelling,
          images: [],
        });
        setSelectedImages(product.images);
      }
      if(id){
        fetchProduct();
      }
  },[id]);
  useEffect(() => {
    if (!id) {
      // Reset the form state when there's no product ID (Add mode)
      setProductData({
        name: '',
        price: '',
        description: '',
        category: '',
        brand: '',
        inventory: '',
        isBestSelling: false,
        images: [],
      });
      setSelectedImages([]);
      setIsEditing(false);
      setThumbnailIndex(0);
    }
  }, [id]);

  const handleAddCategory = () => {
    if (newCategory) {
           setCategories((prev)=>{
          return [...prev,{name:newCategory}]
        });
        setIsAddingCategory(false)
    }
  };const handleAddBrand = () => {
    if (newBrand) {
        setBrands((prev)=>{
          return [...prev,{name:newBrand}]
        });
        setIsAddingBrand(false)
    }
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleImageUpload = (e) => {
    if(isEditing){
      setUpdateImages(true)
    }
    const files = Array.from(e.target.files);
    setProductData((prevData) => ({
      ...prevData,
      images: [...prevData.images, ...files]
    }))
    setSelectedImages(files);
  };

  const handleThumbnailChange = (index) => {
    setThumbnailIndex(index);  
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Forming FormData to send images and other data
    const formData = new FormData();
    // Add the `productRequest` JSON as a single part
      formData.append('productRequest', new Blob([JSON.stringify({
        name: productData.name,
        price: productData.price,
        description: productData.description,
        category: productData.category,
        thumbnailIndex: thumbnailIndex,
        brand: productData.brand,
        inventory: productData.inventory,
        isBestSelling:productData.isBestSelling
    
      })], { type: 'application/json' }));

  productData.images.forEach((image, index) => {
    formData.append(`images`, image); // The backend should treat this as a List<MultipartFile>
  });
  try {
    const updateUrl = `api/v1/products/update/${id}`;
    const addUrl = 'api/v1/products/add'; 
     
        if(isEditing){
          const response = await axiosInstance.put(updateUrl, formData);
          alert(response.data.message);
          navigate('/admin/products')
        }else{
          console.log("formdata",formData)
          const response = await axiosInstance.post(addUrl, formData);
          alert(response.data.message);
          setProductData({
              name: '',
              price: '',
              description: '',
              category: '',
              brand:'',
              inventory:'',
              isBestSelling:false,
              images: [],
            });
        }
        setSelectedImages([]);
       
  } catch (error) {
    if (error.response) {
      alert(`Error: ${error.response.data.message || 'Something went wrong!'}`);
    } else if (error.request) {
      alert('Network error: No response received. Check your connection.');
    } else {
      alert(`Error: ${error.message}`);
    }
  } 
  };


  return (

    <div className='flex mx-auto  bg-primary w-[80%] gap-24 '>
       <aside className="w-[200px] text-gray-800 flex flex-col">
        <div className="p-4 border-b border-gray-500">
          <h2 className="text-xl font-bold">Admin Panel</h2>
        </div>
        <nav className="flex-1 p-4 space-y-4">
          <NavLink
            to="/admin/products"
            className={({ isActive }) =>
              `block px-4 py-2 rounded hover:bg-red-200 ${
                isActive ? "bg-red-200" : ""
              }`
            }
          >
            View All Products
          </NavLink>
          <NavLink
            to="/products/add"
            className={({ isActive }) =>
              `block px-4 py-2 rounded hover:bg-red-200 ${
                isActive ? "bg-red-200" : ""
              }`
            }
          >
            Add a Product
          </NavLink>
        </nav>
      </aside>

      <div className=" max-w-2xl mt-10 mb-10 p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">{isEditing?"Edit a Product":"Add a Product"}</h2>
      <form onSubmit={handleSubmit} className={!isEditing?"space-y-4":"space-y-1"}>
        {isEditing && <label  className="text-gray-700">Name</label>}
        <input
          type="text"
          name="name"
          value={productData.name}
          onChange={handleInputChange}
          placeholder="Product Name"
          className="border p-2 w-full "
          required
        />
      
          {isEditing && <label  className="text-gray-700">Brand</label>}
       <div className='flex items-center space-x-2'>
           <select
              name="brand"
              value={productData.brand}
              onChange={handleInputChange}
              className="border p-2 w-full"
              required
            >
              <option value="" disabled>Select a brand</option>
              {brands?.map((brand,index) => (
                <option key={index} value={brand.name}>{brand.name}</option>
              ))}
            </select>
            <button
                type="button"
                onClick={() => setIsAddingBrand(!isAddingBrand)}
                className="p-2 text-blue-500"
              >
                +
              </button>
       </div>
       {isAddingBrand && (
              <div className="flex items-center space-x-2 mt-2">
                <input
                  type="text"
                  value={newBrand}
                  onChange={(e) => setNewBrand(e.target.value)}
                  placeholder="New Brand"
                  className="flex-grow p-2 border rounded"
                />
                <button
                  type="button"
                  onClick={handleAddBrand}
                  className="p-2 bg-blue-500 text-white rounded"
                >
                  Add
                </button>
              </div>
            )}
        {isEditing && <label  className="text-gray-700">Price</label>}
        <input
          type="number"
          name="price"
          value={productData.price}
          onChange={handleInputChange}
          placeholder="Price"
          className="border p-2 w-full"
          required
        />
        {isEditing && <label  className="text-gray-700">Inventory</label>}
        <input
          type="number"
          name="inventory"
          value={productData.inventory}
          onChange={handleInputChange}
          placeholder="Inventory"
          className="border p-2 w-full"
          required
        />
        {isEditing && <label  className="text-gray-700">Description</label>}
        <textarea
          name="description"
          value={productData.description}
          onChange={handleInputChange}
          placeholder="Description"
          className="border p-2 w-full"
          required
        />
      
         {isEditing && <label  className="text-gray-700">Category</label>}
       <div className='flex items-center space-x-2'>
           <select
              name="category"
              value={productData.category}
              onChange={handleInputChange}
              className="border p-2 w-full"
              required
            >
              <option value="" disabled>Select a category</option>
              {categories?.map((cat,index) => (
                <option key={index} value={cat.name}>{cat.name}</option>
              ))}
            </select>
            <button
                type="button"
                onClick={() => setIsAddingCategory(!isAddingCategory)}
                className="p-2 text-blue-500"
              >
                +
              </button>
       </div>
       {isAddingCategory && (
              <div className="flex items-center space-x-2 mt-2">
                <input
                  type="text"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  placeholder="New category"
                  className="flex-grow p-2 border rounded"
                />
                <button
                  type="button"
                  onClick={handleAddCategory}
                  className="p-2 bg-blue-500 text-white rounded"
                >
                  Add
                </button>
              </div>
            )}
      
        <div>
          <label className="block">{isEditing? "Images" :"Upload Images"}</label>
          <input
            type="file"
            multiple
            onChange={handleImageUpload}
            className="border p-2 w-full"
            accept="image/*"
          />
          <div className="flex flex-wrap gap-4 mt-4">
            {selectedImages.map((image, index) => (
              <div key={index} className={`relative`}>
                {isEditing && !updateImages?
                <img
                src={image.image}
                alt={image.name}
                className={`w-20 h-20 object-cover  ${thumbnailIndex==index?"border-4 border-blue-400 shadow-blue-50 shadow-lg": ""}` }
                onClick={() => handleThumbnailChange(index)}
              />
                  :
                 <img
                  src={URL.createObjectURL(image)}
                  alt={image.name}
                  className={`w-20 h-20 object-cover  ${thumbnailIndex==index?"border-4 border-blue-400 shadow-blue-50 shadow-lg": ""}` }
                  onClick={() => handleThumbnailChange(index)}
                />
                }
      
      
                <label className="text-xs">Set as Thumbnail</label>
              </div>
            ))}
          </div>
        </div>
            {/* //create a radio input to chech if it is best selling product */}
            <label className="block font-semibold mb-2">Is this a best-selling product?</label>
            <div className="flex items-center gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="bestSelling"
                value="true"
                checked={productData.isBestSelling === true}
                onChange={handleRadioChange}
                className="mr-2"
              />
              Yes
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="bestSelling"
                value="false"
                checked={productData.isBestSelling === false}
                onChange={handleRadioChange}
                className="mr-2"
              />
              No
            </label>
          </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          {isEditing?"Update Product":"Create new Product"}
        </button>
      </form>
      </div>
    </div>
  );
};

export default AddProduct;
