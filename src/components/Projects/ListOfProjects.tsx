import {AiOutlineUnorderedList} from "react-icons/ai";

interface Project {
  name: string;
}

interface ListOfProjectsProps {
  projects: Project[];
}

const ListOfProjects: React.FC<ListOfProjectsProps> = ({projects}) => {
  return (
    <div className="visible">
      <ul className="space-y-2 my-2">
        {projects.map((project) => (
          <li className="cursor-pointer flex items-center space-x-2 hover:bg-navHoverBg rounded-lg p-1 px-2 ease-in-out duration-200">
            <AiOutlineUnorderedList className="text-xl text-yellow-300" />
            <h1>{project.name}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfProjects;
