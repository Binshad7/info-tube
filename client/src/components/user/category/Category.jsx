import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const CategoryBar = ({ categories }) => {
    return (
      <div className="relative flex items-center mb-6">
        <button className="p-2 bg-gray-800 rounded-full mr-4">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors whitespace-nowrap"
            >
              {category}
            </button>
          ))}
        </div>
        <button className="p-2 bg-gray-800 rounded-full ml-4">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    );
  };