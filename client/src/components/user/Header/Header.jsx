import React, { useContext } from 'react'
import { Search, Menu, Bell, Video, User } from 'lucide-react';
import { SidebarContext } from '../../../context/slidebarContext';


const Header = ({ onSearch }) =>{ 
  
  
  const {updateIsOpen} = useContext(SidebarContext)
  
  return (
  <header className="flex items-center justify-between p-4 bg-white border-b">
    <div className="flex items-center space-x-4">
      <Menu className="w-6 h-6 cursor-pointer" onClick={updateIsOpen}/>
      <h1 className="text-2xl font-bold text-red-600">InfoTube</h1>
    </div>
    <div className="flex flex-1 mx-4 max-w-2xl">
      <input
        type="text"
        placeholder="Search"
        className="w-full px-3 py-2 border rounded-l focus:outline-none"
        onChange={(e) => onSearch(e.target.value)}
      />
      <button className="px-6 py-2 bg-gray-100 border rounded-r">
        <Search className="w-5 h-5" />
      </button>
    </div>
    <div className="flex items-center space-x-4">
      <Video className="w-6 h-6 cursor-pointer" />
      <Bell className="w-6 h-6 cursor-pointer" />
      <User className="w-6 h-6 cursor-pointer" />
    </div>
  </header>
)
}

export default Header
