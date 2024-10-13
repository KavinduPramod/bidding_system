import React from "react";

const UsersList = () => {
  const users = [
    { id: 1, username: 'Admin', email: 'admin@gmail.com', role: 'Admin', date: '4 Aug 2024', photo: 'https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D' },
    { id: 2, username: 'Ann', email: 'Ann@gmail.com', role: 'Manager', date: '4 Aug 2024', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn9zilY2Yu2hc19pDZFxgWDTUDy5DId7ITqA&s' },
    { id: 3, username: 'Ram Gurung', email: 'ram@gmail.com', role: 'Buyer', date: '4 Aug 2024', photo: 'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2312' },
    { id: 4, username: 'Prabin BK', email: 'prabin@gmail.com', role: 'Seller', date: '4 Aug 2024', photo: 'https://media.licdn.com/dms/image/v2/C4D03AQEeEyYzNtDq7g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1524234561685?e=2147483647&v=beta&t=uHzeaBv3V2z6Tp6wvhzGABlTs9HR-SP-tEX1UbYNn4Q' },
    // Add more users with their respective photo URLs
  ];

  const handleUpdate = (id) => {
    // Update logic here
    console.log(`Update user with id: ${id}`);
  };

  const handleDelete = (id) => {
    // Delete logic here
    console.log(`Delete user with id: ${id}`);
  };

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
                <img src={user.photo} alt={user.username} className="w-8 h-8 rounded-full inline-block" />
              </td>
              <td className="border px-4 py-2">{user.date}</td>
              <td className="border px-4 py-2">
              <button 
                  className="bg-green-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-green-600"
                >
                  View
                </button>
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
