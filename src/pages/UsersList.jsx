
import React from "react";

const UsersList = () => {
  const users = [
    { id: 1, username: 'Admin', email: 'admin@gmail.com', role: 'Admin', date: '4 Aug 2024' },
    { id: 2, username: 'Sunil', email: 'sunil@gmail.com', role: 'Seller', date: '4 Aug 2024' },
    { id: 3, username: 'Ram Gurung', email: 'ram@gmail.com', role: 'Buyer', date: '4 Aug 2024' },
    { id: 4, username: 'Prabin BK', email: 'prabin@gmail.com', role: 'Seller', date: '4 Aug 2024' },
    // Add more users as needed
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">User Lists</h2>
      <table className="min-w-full table-auto">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2">S.N</th>
            <th className="px-4 py-2">Username</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Role</th>
            <th className="px-4 py-2">Photo</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id} className="text-center">
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{user.username}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.role}</td>
              <td className="border px-4 py-2">
                <img src="/path-to-avatar.jpg" alt="User" className="w-8 h-8 rounded-full inline-block" />
              </td>
              <td className="border px-4 py-2">{user.date}</td>
              <td className="border px-4 py-2">
              <button 
      className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-blue-600"
      onClick={() => handleUpdate(user.id)} 
    >
      Update
    </button>
    <button 
      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
      onClick={() => handleDelete(user.id)} 
    >
      Delete
    </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
