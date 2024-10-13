import React from 'react';

/**
 * @function Dashboard
 * @description A page that displays some statistics about the current state of the application.
 * @returns {JSX.Element} A JSX element representing the Dashboard page.
 */

function Dashboard() {
  // Example data, you can replace these with actual data from your API or state management
  const stats = {
    auctions: 10,
    bids: 25,
    users: 100,
    categories: 5,
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      {/* Outer white card for background */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card for Auctions */}
          <div className="bg-gray-100 shadow-md rounded-lg p-6 flex items-center justify-center h-48">
            <div className="text-center">
              <h2 className="text-xl font-semibold">Auctions</h2>
              <p className="text-3xl font-bold text-green-500">{stats.auctions}</p>
            </div>
          </div>

          {/* Card for Bids */}
          <div className="bg-gray-100 shadow-md rounded-lg p-6 flex items-center justify-center h-48">
            <div className="text-center">
              <h2 className="text-xl font-semibold">Bids</h2>
              <p className="text-3xl font-bold text-blue-500">{stats.bids}</p>
            </div>
          </div>

          {/* Card for Users */}
          <div className="bg-gray-100 shadow-md rounded-lg p-6 flex items-center justify-center h-48">
            <div className="text-center">
              <h2 className="text-xl font-semibold">Users</h2>
              <p className="text-3xl font-bold text-yellow-500">{stats.users}</p>
            </div>
          </div>

          {/* Card for Categories */}
          <div className="bg-gray-100 shadow-md rounded-lg p-6 flex items-center justify-center h-48">
            <div className="text-center">
              <h2 className="text-xl font-semibold">Categories</h2>
              <p className="text-3xl font-bold text-red-500">{stats.categories}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
