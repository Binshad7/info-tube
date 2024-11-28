import { Video, User, Home } from 'lucide-react';
import { useContext } from 'react';
import { SidebarContext } from '../../../context/slidebarContext';

const Sidebar = () => {

  const {isOpen} = useContext(SidebarContext) // expanding context for slidebar

  return (
    <div className={ `transition-[width] duration-1000 ease-in-out p-4 border-r h-screen hidden md:block transition ${isOpen ? "w-[250px]" : "w-[70px]"} `}>
      <div className="flex flex-col space-y-2">
        <button className="flex items-center space-x-2 p-2 bg-gray-100 rounded shadow-md ">
          <Home className="w-5 h-5" />
          {isOpen && <span>Home</span>}
        </button>
        <button className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded">
          <Video className="w-5 h-5" />
          {isOpen && <span>Subscriptions</span>}
        </button>
        <button className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded">
          <User className="w-5 h-5" />
          {isOpen && <span>Library</span>}
        </button>
      </div>
    </div>
  );

}
export default Sidebar