
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import TopNavBar from "../components/TopNavBar";

const Layout = () => {
  return (
    <div className="h-screen w-full flex overflow-hidden">
      <SideBar />
      <div className="flex-1 p-6 bg-gray-100">
        <TopNavBar />
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
