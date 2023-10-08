import Navbar from "./NavBar/Navbar";
import Mainboard from "./MainBoard/Mainboard";
import Sidebar from "./SideBar/Sidebar";

const Layout = () => {
  return (
    <>
      <div className="text-txtColor font-poppins">
        <Navbar />
        <div className="flex">
          <Sidebar />
          <Mainboard />
        </div>
      </div>
    </>
  );
};

export default Layout;
