import { Home, Grid, Clock, Heart, ThumbsUp, Upload} from 'lucide-react';

import { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../../../context/slidebarContext';

const Sidebars = () => {
  const [state, setState] = useState(false)
  const {isOpen} = useContext(SidebarContext) // expanding context for slidebar

  const icons = [
    {icon: Home,name: "home"},
    {icon:Grid, name: "f"}, 
    {icon: Clock, name:"s"}, 
    {icon: Heart, name: "likes"}, 
    {icon:ThumbsUp, name: "likes"}, 
    {icon:Upload, name: "upload"}
  ];

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setState(true);
      }, 300); // 2 seconds delay

      return () => clearTimeout(timer); // Cleanup timer
    } else {
      setState(false); // Reset if `isUser` becomes false
    }
  }, [isOpen]);

  return (
    <aside className={` bg-gray-900 border-r border-gray-800 ${isOpen ? 'w-[230px]': 'w-[56px]'}`}>
      <div className={`flex flex-col items-center py-4 space-y-6`}>
        {icons.map((obj, index) => {
          let Icon = obj.icon;
          
          return( 
            <div className={`flex justify-center w-[100%]`}>
              <Icon
                key={index} 
                className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" 
              />
              <h3 className=''>{state ? obj.name : ""}</h3>
            </div>
          )
        })}
      </div>
    </aside>
      
    
  );

}
export default Sidebars