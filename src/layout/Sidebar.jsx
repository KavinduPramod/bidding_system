import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="h-full w-1/5 p-6 bg-white shadow-lg flex flex-col">
      <div className="flex items-center gap-4 mb-8">
        <img
          src="https://randomuser.me/api/portraits/men/75.jpg" // Example URL
          alt="Admin"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <p className="font-bold">Admin</p>
          <p className="text-sm text-gray-500">admin@gmail.com</p>
        </div>
      </div>

      <nav className="flex-1 space-y-4">
        <NavLink
          to="/layout/dashboard"
          className="block text-gray-700 bg-gray-200 hover:bg-green-100 hover:text-green-500 rounded-lg p-3"
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/layout/all-product-list"
          className="block text-gray-700 bg-gray-200 hover:bg-green-100 hover:text-green-500 rounded-lg p-3"
        >
        Product List
        </NavLink>
        <NavLink
          to="/layout/create-product"
          className="block text-gray-700 bg-gray-200 hover:bg-green-100 hover:text-green-500 rounded-lg p-3"
        >
          Create Product
        </NavLink>
        <NavLink
          to="/layout/all-users"
          className="block text-gray-700 bg-gray-200 hover:bg-green-100 hover:text-green-500 rounded-lg p-3"
        >
          Users List
        </NavLink>
        <NavLink
          to="/layout/categories"
          className="block text-gray-700 bg-gray-200 hover:bg-green-100 hover:text-green-500 rounded-lg p-3"
        >
          Categories
        </NavLink>
      </nav>
    </div>
  );
};

export default SideBar;
