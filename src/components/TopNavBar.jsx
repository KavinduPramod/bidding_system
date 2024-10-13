
import React from "react";

const TopNavBar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="flex items-center">
        <img src="/vite.svg" alt="Bid Out" className="w-10 h-10" />
        <span className="ml-3 text-lg font-bold">Bid Out</span>
      </div>
      <nav className="space-x-6">
        <a href="/home" className="text-gray-600">Home</a>
        <a href="/product" className="text-gray-600">Product</a>
        <a href="/blog" className="text-gray-600">Blog</a>
        <a href="/about" className="text-gray-600">About</a>
        <a href="/services" className="text-gray-600">Services</a>
        <a href="/contact" className="text-gray-600">Contact</a>
      </nav>
      <div className="flex items-center space-x-4">
        <input type="text" placeholder="Search" className="border rounded-md p-2" />
        <img src="/path-to-avatar.jpg" alt="User Avatar" className="w-10 h-10 rounded-full" />
      </div>
    </div>
  );
};

export default TopNavBar;
