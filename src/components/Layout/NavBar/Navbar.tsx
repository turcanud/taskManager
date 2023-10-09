import {AiOutlineSearch} from "react-icons/ai";
import {BsThreeDots} from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="flex fixed inset-0 justify-between px-6 bg-navBg h-14 items-center border-b border-lines">
      <div className="py-4 text-4xl font-bold text-center pointer-events-none">
        <span className="gradient-text">Task Manager</span>
      </div>

      <div className="w-1/3 flex items-center relative">
        <AiOutlineSearch className="text-3xl absolute left-3 text-txtColor border-r border-lines" />
        <input
          type="text"
          name="search"
          placeholder="Search"
          className="py-2 w-full px-11 rounded-full border border-lines bg-navBg placeholder:text-txtColor"
        />
      </div>

      <BsThreeDots className="text-xl" />
    </nav>
  );
};

export default Navbar;
