import {AiFillCaretDown, AiOutlineSearch} from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="flex fixed inset-0 justify-between px-6 bg-navBg h-14 items-center border-b border-lines">
      <div className="py-4 text-4xl font-bold text-center">
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

      <div className="flex items-center space-x-1">
        <button
          type="button"
          className="bg-slate-800 rounded-full w-11 h-11 border border-lines"></button>
        <AiFillCaretDown className="" />
      </div>
    </nav>
  );
};

export default Navbar;
