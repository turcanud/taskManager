import {FiMenu} from "react-icons/fi";
import {AiFillCaretDown} from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="flex justify-between px-6 bg-navBg h-14 items-center border-b border-lines">
      <button type="button" className="text-3xl">
        <FiMenu />
      </button>
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
