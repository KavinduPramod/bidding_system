import React, { useState } from 'react';


/**
 * A form component for creating a product.
 * Handles form submission by preventing default form behavior and
 * logging the form fields to the console.
 *
 * @returns {JSX.Element} A JSX element representing the CreateProduct component.
 */
function CreateProduct() {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [auctionEndDate, setAuctionEndDate] = useState('');


  /**
   * Handles form submission by preventing default form behavior and
   * logging the form fields to the console.
   * @param {Event} e The form submission event.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      productName,
      productPrice,
      description,
      category,
      image,
      auctionEndDate,
    });
  };

  return (
    <div className="p-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg h-full">
      <h2 className="text-2xl font-bold text-white mb-6 text-start">Create Product</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg p-4 shadow-md grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[80vh] overflow-auto"
      >
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Product Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="" disabled>Select a category</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="home">Home</option>
            <option value="toys">Toys</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Product Name</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Product Price ($)</label>
          <input
            type="number"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Auction End Date and Time</label>
          <input
            type="datetime-local"
            value={auctionEndDate}
            onChange={(e) => setAuctionEndDate(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Image Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Image</label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            accept="image/*"
            required
          />
        </div>

        {/* Description next to Image Input */}
        <div className="mb-4 col-span-1 md:col-span-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="4"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-green-500 hover:to-blue-600 transition duration-300 col-span-2"
        >
          Create Product
        </button>
      </form>
    </div>
  );
}

export default CreateProduct;
