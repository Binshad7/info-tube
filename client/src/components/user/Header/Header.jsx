import React, { useContext } from 'react'
import { Search, Menu } from 'lucide-react';
import { SidebarContext } from '../../../context/slidebarContext';
// import { Search, Menu, Bell, Video, User } from 'lucide-react';
// import React from 'react';

export const Header = () => {
  const {updateIsOpen} = useContext(SidebarContext)
  return (
    <header className="p-4 border-b border-gray-800">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Menu className="w-6 h-6" onClick={updateIsOpen}/>
          <h1 className="text-xl font-bold text-red-500">Info<span className="text-gray-400 text-sm">Tube</span></h1>
        </div>
        <div className="flex-1 max-w-2xl mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="search for names, category, relat"
              className="w-full bg-gray-800 rounded-lg px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
          </div>
        </div>
        <button className="px-4 py-2 bg-red-500 rounded-lg hover:bg-red-600 transition-colors">
          Live
        </button>
      </div>
    </header>
  );
};
export default Header
