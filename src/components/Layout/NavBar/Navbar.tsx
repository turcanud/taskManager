import {AiFillCaretDown} from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="flex justify-end px-6 bg-navBg h-14 items-center border-b border-lines">
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
