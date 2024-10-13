import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="h-full w-1/5 p-6 bg-white shadow-lg flex flex-col">
      <div className="flex items-center gap-4 mb-8">
        <img
          src="/path-to-avatar.jpg"
          alt="Admin"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <p className="font-bold">Admin</p>
          <p className="text-sm text-gray-500">admin@gmail.com</p>
        </div>
      </div>

      <nav className="flex-1 space-y-4">
        <NavLink to="/dashboard" className="block text-gray-700 hover:text-green-500">
          Dashboard
        </NavLink>
        <NavLink to="/products" className="block text-gray-700 hover:text-green-500">
          All Product List
        </NavLink>
        <NavLink to="/create-product" className="block text-gray-700 hover:text-green-500">
          Create Product
        </NavLink>
        <NavLink to="/users" className="block text-gray-700 hover:text-green-500">
          All Users
        </NavLink>
        <NavLink to="/categories" className="block text-gray-700 hover:text-green-500">
          Categories
        </NavLink>
      </nav>
    </div>
  );
};

export default SideBar;
