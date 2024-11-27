import { Menu, Video, User } from 'lucide-react';
import { useContext } from 'react';
import { SidebarContext } from '../../../context/slidebarContext';

const Sidebar = () => {

  const {isOpen} = useContext(SidebarContext)
  return (
    <div style={{transition: "ease-in 0.6s"}} className={ isOpen ? "w-64 p-4 border-r h-screen hidden md:block " : "w-15 p-4 border-r h-screen hidden md:block"}>
      <div className="flex flex-col space-y-2">
        <button className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded">
          <Menu className="w-5 h-5" />
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