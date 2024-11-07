import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {

  const [categories, setCategories] = useState(['Electronics', 'Clothing', 'Accessories']); // Sample categories
  const [thumbnailIndex, setThumbnailIndex] = useState(0); // Track the selected thumbnail
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const [productData, setProductData] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
    brand:'',
    inventory:'',
    images: [],
    
  });

  const handleAddCategory = () => {
    if (newCategory) {
        setCategories([...categories, newCategory]);
        setIsAddingCategory(false)
    //   axios.post('/api/categories', { name: newCategory })
    //     .then(response => {
    //       setCategories([...categories, response.data]);
    //       setSelectedCategory(response.data.name);
    //       setNewCategory('');
    //       setIsAddingCategory(false);
    //     })
    //     .catch(error => console.error('Error adding category:', error));
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setProductData((prevData) => ({
      ...prevData,
      images: [...prevData.images, ...files]
    }))
    // const imageDtos = files.map((file, index) => ({
    //   fileName: file.name,
    //   fileType: file.type,
    //   isThumbnail: index === thumbnailIndex // Set initially to the first image as thumbnail
    // }));
    // console.log("imageDtos",imageDtos)
    // setProductData((prevData)=>{
    //     return {...prevData,images:[...prevData.images,...imageDtos]}
    // });
    // console.log("productData.images",productData.images)
    setSelectedImages(files);
  };

  const handleThumbnailChange = (index) => {
    setThumbnailIndex(index);  
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Forming FormData to send images and other data
    const formData = new FormData();
    formData.append('name', productData.name);
    formData.append('price', productData.price);
    formData.append('description', productData.description);
    formData.append('category', productData.category);
    //formData.append('images', productData.images);
    formData.append('thumbnailIndex', thumbnailIndex.toString());
    formData.append('brand', productData.brand);
    formData.append('inventory', productData.inventory.toString());
      // Append each image individually
  productData.images.forEach((image, index) => {
    formData.append(`images`, image); // The backend should treat this as a List<MultipartFile>
  });
  try {
    const response = await axios.post('http://localhost:8080/api/v1/products/add', formData);
    console.log('Product added:', response.data);
    alert(response.data.message);
    setProductData({
        name: '',
        price: '',
        description: '',
        category: '',
        brand:'',
        inventory:'',
        images: [],
      });
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
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Add a Product</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        value={productData.name}
        onChange={handleInputChange}
        placeholder="Product Name"
        className="border p-2 w-full"
        required
      />
      <input
        type="text"
        name="brand"
        value={productData.brand}
        onChange={handleInputChange}
        placeholder="Product Brand"
        className="border p-2 w-full"
        required
      />
      <input
        type="number"
        name="price"
        value={productData.price}
        onChange={handleInputChange}
        placeholder="Price"
        className="border p-2 w-full"
        required
      />
      <input
        type="number"
        name="inventory"
        value={productData.inventory}
        onChange={handleInputChange}
        placeholder="Inventory"
        className="border p-2 w-full"
        required
      />
      <textarea
        name="description"
        value={productData.description}
        onChange={handleInputChange}
        placeholder="Description"
        className="border p-2 w-full"
        required
      />
       

     <div className='flex items-center space-x-2'>
         <select
            name="category"
            value={productData.category}
            onChange={handleInputChange}
            className="border p-2 w-full"
            required
          >
            <option value="" disabled>Select a category</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>{cat}</option>
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

      <label className="block">Upload Images</label>
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
            <img
              src={URL.createObjectURL(image)}
              alt={image.name}
              className={`w-20 h-20 object-cover  ${thumbnailIndex==index?"border-4 border-blue-400 shadow-blue-50 shadow-lg": ""}` }
              onClick={() => handleThumbnailChange(index)}
            />
            {/* <input
              type="radio"
              name="thumbnail"
              checked={index === thumbnailIndex}
              onChange={() => handleThumbnailChange(index)}
              className="absolute top-0 left-0"
            /> */}
            <label className="text-xs">Set as Thumbnail</label>
          </div>
        ))}
      </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Product
      </button>
    </form>
    </div>
  );
};

export default AddProduct;
