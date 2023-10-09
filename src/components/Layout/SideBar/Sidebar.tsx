import {PiHouse} from "react-icons/pi";
import ListOfProjects from "../../Projects/ListOfProjects";
import {AiOutlinePlus, AiOutlineStar} from "react-icons/ai";

const Sidebar = () => {
  return (
    <aside className="bg-sideBg border-r border-lines min-h-screen w-72 flex flex-col justify-between fixed inset-y-14">
      <div className="border-b px-5 border-lines flex py-8">
        <button type="button" className="bg-green-700 rounded-full w-12 h-12">
          TD
        </button>
        <div className="ml-3">
          <h2 className="text-lg">Turcanu Dorin</h2>
          <h4 className="text-xs">dorinturcanu.r@gmail.com</h4>
        </div>
      </div>
      <div className="border-b px-5 border-lines">
        <ul className="space-y-2 my-2">
          <li className="flex items-center space-x-2 cursor-pointer hover:bg-navHoverBg rounded-lg p-1 px-2 ease-in-out duration-200">
            <PiHouse className="text-lg text-blue-300" />
            <h1>Tasks</h1>
          </li>
          <li className="flex items-center space-x-2 cursor-pointer hover:bg-navHoverBg rounded-lg p-1 px-2 ease-in-out duration-200">
            <AiOutlineStar className="text-xl text-pink-300" />
            <h1>Important</h1>
          </li>
        </ul>
      </div>
      <h1 className="text-lines font-bold text-sm px-4 mt-1">Projects</h1>
      <div className="px-5 overflow-auto invisible hover:visible">
        <ListOfProjects />
      </div>
      <div className="mb-16 w-72 pt-2 bg-navBg border-t border-r border-lines flex items-center justify-center">
        <button
          type="button"
          className="rounded-lg h-10 border w-full font-medium flex justify-start items-center space-x-1 mx-2 px-2 border-lines focus:border-white">
          <AiOutlinePlus className="text-2xl" />
          <h1>New Project</h1>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
