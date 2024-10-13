import React from 'react';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';


/**
 * Displays a list of categories in a table format.
 * Each row in the table represents a category, with columns for the category's ID, user, title, date, and actions (preview, edit, delete).
 * Handles previewing, editing, and deleting categories when the respective buttons are clicked.
 * @type {React.FC}
 */
function Categories() {
  const categories = [
    { id: 1, user: 'Admin', title: 'Electronics', date: '4 Aug 2024' },
    { id: 2, user: 'Ann', title: 'Fashion', date: '4 Aug 2024' },
    { id: 3, user: 'Ram Gurung', title: 'Home Appliances', date: '4 Aug 2024' },
    { id: 4, user: 'Prabin BK', title: 'Books', date: '4 Aug 2024' },
    // Add more categories as needed
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
  const handleEdit = (id) => {
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
      <h2 className="text-2xl font-bold mb-4">Category Lists</h2>
      <button
        className="absolute top-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        onClick={() => {
          /* Add your create category logic here */
        }}
      >
        Create Category
      </button>
        <table className="min-w-full table-auto">
            <thead className="bg-gray-200">
            <tr>
                <th className="px-4 py-2">S.N</th>
                <th className="px-4 py-2">USER</th>
                <th className="px-4 py-2">TITLE</th>
                <th className="px-4 py-2">DATE</th>
                <th className="px-4 py-2">ACTION</th>
            </tr>
            </thead>
            <tbody>
            {categories.map((category, index) => (
                <tr key={category.id} className="text-center">
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{category.user}</td>
                <td className="border px-4 py-2">{category.title}</td>
                <td className="border px-4 py-2">{category.date}</td>
                <td className="border px-4 py-2 flex justify-center">
                    <button 
                    className="bg-green-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-green-600"
                    onClick={() => handlePreview(category.id)}
                    >
                    <FaEye className="mr-1" />
                    
                    </button>
                    <button 
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-blue-600"
                    onClick={() => handleEdit(category.id)} 
                    >
                    <FaEdit className="mr-1" />
                    
                    </button>
                    <button 
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 flex items-center"
                    onClick={() => handleDelete(category.id)} 
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

export default Categories;
