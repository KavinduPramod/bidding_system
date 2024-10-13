import React, { useState } from 'react';

function Createproduct() {

  const [productName, setProductName] =useState('');
  const [productPrice, setProductPrice] =useState('');
  const [description, setDescription] =useState('');
  const [image, setImage] =useState('');
  const [category, setCategory] =useState('');
  const [auctionEndDate, setAuctionEndDate] =useState('');

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
  <div className="p-6 bg-white rounded-lg shadow-lg">
  <h2 className="text-2xl font-bold mb-4">Create Product</h2>
  <form onSubmit={handleSubmit}>
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">Product Category</label>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border border-gray-300 rounded-lg p-2 w-full"
      >
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
        <option value="home">Home</option>
        <option value="toys">Toys</option>
      </select>
    </div>

    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">Product Name</label>
      <input
        type="text"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        className="border border-gray-300 rounded-lg p-2 w-full"
        required
      />
    </div>

    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">Product Price</label>
      <input
        type="number"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
        className="border border-gray-300 rounded-lg p-2 w-full"
        required
      />
    </div>

    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">Description</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border border-gray-300 rounded-lg p-2 w-full"
        rows="4"
        required
      />
    </div>

    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">Image</label>
      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
        className="border border-gray-300 rounded-lg p-2 w-full"
        accept="image/*"
        required
      />
    </div>

    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">Auction End Date and Time</label>
      <input
        type="datetime-local"
        value={auctionEndDate}
        onChange={(e) => setAuctionEndDate(e.target.value)}
        className="border border-gray-300 rounded-lg p-2 w-full"
        required
      />
    </div>

    <button
      type="submit"
      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
    >
      Create Product
    </button>
  </form>
</div>
);
}

export default Createproduct;
