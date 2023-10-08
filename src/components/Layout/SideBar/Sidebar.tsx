import {BsFillPlusCircleFill} from "react-icons/bs";

const Sidebar = () => {
  return (
    <aside className="bg-sideBg border-r border-lines min-h-screen w-1/6 flex-col">
      <div className="border-b border-lines">
        <ul>
          <li>Home</li>
          <li>My Tasks</li>
        </ul>
      </div>
      <div className="border-b border-lines">
        <h1>Projects</h1>
        <ul>
          <li>ecom-proj</li>
          <li>web Build</li>
        </ul>
      </div>
      <div className="border-b border-lines">
        <h1>Team</h1>
        My Workspace
      </div>
      <div className="">
        <button
          type="button"
          className="rounded-full py-2 px-4 border font-medium flex items-center space-x-1">
          <BsFillPlusCircleFill className="text-2xl text-red-400" />
          <h1>Create</h1>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
