import React from 'react';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';

function Allproductlist() {
  const products = [
    { id: 1, title: 'Camera', price: '$10', bidAmount: '$12', image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg' },
    { id: 2, title: 'Hand bag', price: '$15', bidAmount: '$18', image: 'https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D' },
    { id: 3, title: 'Sprite bottle', price: '$20', bidAmount: '$22', image: 'https://cdn.shopify.com/s/files/1/1859/8979/files/image17_3cfc7cfb-8215-40b7-a297-db7285d5375b.png?v=1610384290' },
    { id: 4, title: 'washing bottle', price: '$25', bidAmount: '$30', image: 'https://cloudfront.omsphotopg.com/wp-content/uploads/2020/03/14131027/OMS-Photo-PG-product-photography-nancy-armstrong-038.jpg' },
    // Add more products as needed
  ];


  /**
   * Handles previewing a category.
   * @param {number} id The ID of the category to preview.
   */
  const handlePreview = (id) => {
    // Preview logic here
    console.log(`Preview category with id: ${id}`);
  };

  /**
   * Handles editing a category.
   * @param {number} id The ID of the category to edit.
   */
  const handleUpdate = (id) => {
    // Edit logic here
    console.log(`Edit category with id: ${id}`);
  };

  /**
   * Handles deleting a category.
   * @param {number} id The ID of the category to delete.
   */
  const handleDelete = (id) => {
    // Delete logic here
    console.log(`Delete category with id: ${id}`);
  };

  return (
    <div className="relative p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Product List</h2>
      <button
        className="absolute top-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        onClick={() => {
          //redirect to create product
          window.location.href = '/layout/create-product';
        }}
      >
        Create Product
      </button>
      <table className="min-w-full table-auto mt-8">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2">S.N</th>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Bid Amount</th>
            <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id} className="text-center">
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{product.title}</td>
              <td className="border px-4 py-2">{product.price}</td>
              <td className="border px-4 py-2">{product.bidAmount}</td>
              <td className="border px-4 py-2">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-8 h-8 rounded-full inline-block"
                />
              </td>
              <td className="border py-2">
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-green-600"
                  onClick={() => handlePreview(product.id)}
                >
                  <FaEye className="mr-1" />
                </button>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-blue-600"
                  onClick={() => handleUpdate(product.id)}
                >
                  <FaEdit className="mr-1" />
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                  onClick={() => handleDelete(product.id)}
                >
                  <FaTrash className="mr-1" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  );
}

export default Allproductlist;
