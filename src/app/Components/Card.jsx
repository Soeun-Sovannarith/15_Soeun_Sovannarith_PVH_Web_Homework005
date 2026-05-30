"use client"
import React from "react";

import { Bookmark } from 'lucide-react';
import ViewButton from './ViewButton';

import { useBookmark } from "./BookmarkContext";

export default function Card({ item }) {
  const { toggleBookmark, isBookmarked } = useBookmark();
  const bookmarked = isBookmarked(item.id);

  function handleBookmark() {
    toggleBookmark(item);
  }
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 bg-[#0b0d12]/50 p-3 sm:p-4 rounded-2xl border border-gray-800/20 hover:border-gray-700/50 transition-all group">
    
      <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 overflow-hidden rounded-xl">
        <img
          src={item.image}
          alt={item.item_name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      

      
      <div className="grow w-full">
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-1">
          <h3 className="text-white font-semibold text-base sm:text-lg">{item.item_name}</h3>
          <button className="cursor-pointer w-fit" onClick={handleBookmark}>{bookmarked ? <Bookmark size={18} className="sm:w-5 sm:h-5" fill="yellow" /> : <Bookmark size={18} className="sm:w-5 sm:h-5" fill="white" />}</button>
          <span className="text-gray-400 text-sm">${item.item_price}</span>
          {item.saved}
        </div>
        
        <p className="text-gray-500 text-xs sm:text-sm line-clamp-2 max-w-2xl">
          {item.item_description}
        </p>
      </div>
      

    
      <div className="shrink-0 w-full sm:w-auto">
        {/* render a fresh button instance with the current item */}
        <ViewButton item={item} />
      </div>
    </div>
  );
}