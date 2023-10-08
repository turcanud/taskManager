import {BsFillPlusCircleFill} from "react-icons/bs";

const Sidebar = () => {
  return (
    <aside className="bg-sideBg border-r border-lines min-h-screen w-1/6 px-5 flex flex-col justify-between">
      <div className="">
        <div className="border-b border-lines flex py-8">
          <button type="button" className="bg-green-700 rounded-full w-12 h-12">
            TD
          </button>
          <div className="ml-3">
            <h2 className="text-lg">Turcanu Dorin</h2>
            <h4 className="text-xs">dorinturcanu.r@gmail.com</h4>
          </div>
        </div>
        <div className="border-b border-lines">
          <ul className="space-y-2 my-2">
            <li className="cursor-pointer hover:bg-navHoverBg rounded-lg p-1 px-2 ease-in-out duration-200">
              Home
            </li>
            <li className="cursor-pointer hover:bg-navHoverBg rounded-lg p-1 px-2 ease-in-out duration-200">
              My Tasks
            </li>
          </ul>
        </div>
        <div className="">
          <h1 className="text-lines font-bold text-sm">Projects</h1>
          <ul className="space-y-2 my-2">
            <li className="cursor-pointer hover:bg-navHoverBg rounded-lg p-1 px-2 ease-in-out duration-200">
              ecom-proj
            </li>
            <li className="cursor-pointer hover:bg-navHoverBg rounded-lg p-1 px-2 ease-in-out duration-200">
              web Build
            </li>
          </ul>
        </div>
      </div>
      <div className="mb-16">
        <button
          type="button"
          className="rounded-full h-10 w-full border font-medium flex justify-center items-center space-x-1">
          <BsFillPlusCircleFill className="text-2xl text-red-400" />
          <h1>Create</h1>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
