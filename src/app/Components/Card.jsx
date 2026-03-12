"use client"
import React from "react";

import { Bookmark } from 'lucide-react';
import ViewButton from './ViewButton';

export default function Card({ item }) {

  const [isBookmarked, setIsBookmarked] = React.useState(false);
  function handleBookmark() {
    setIsBookmarked(!isBookmarked);
  }
  return (
    <div className="flex items-center gap-4 bg-[#0b0d12]/50 p-4 rounded-2xl border border-gray-800/20 hover:border-gray-700/50 transition-all group">
    
      <div className="w-24 h-24 shrink-0 overflow-hidden rounded-xl">
        <img
          src={item.image}
          alt={item.item_name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      

      
      <div className="grow">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-white font-semibold text-lg">{item.item_name}</h3>
          <button className="cursor-pointer" onClick={handleBookmark}>{isBookmarked ? <Bookmark size={20} fill="yellow" /> : <Bookmark size={20} fill="white" />}</button>
          <span className="text-gray-400 text-sm">${item.item_price}</span>
          {item.saved}
        </div>
        
        <p className="text-gray-500 text-sm line-clamp-2 max-w-2xl">
          {item.item_description}
        </p>
      </div>
      

    
      <div className="shrink-0">
        {/* render a fresh button instance with the current item */}
        <ViewButton item={item} />
      </div>
    </div>
  );
}