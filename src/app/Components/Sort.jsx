"use client"
import React from 'react'
import {ArrowUpAZ,ArrowDownAZ} from "lucide-react"

export default function Bookmark({setSortOrder, setShowBookmarked, showBookmarked, setSearchQuery}) {
  const handleBack = () => {
    setShowBookmarked(false);
    if (setSearchQuery) setSearchQuery("");
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-6 sm:mb-8">
        <button onClick={handleBack} className="bg-white text-black px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-bold flex items-center gap-1 cursor-pointer">
          Back
        </button>
        
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-gray-400 w-full sm:w-auto">
           <div 
             onClick={() => setShowBookmarked(!showBookmarked)}
             className={`flex items-center gap-2 cursor-pointer hover:text-white transition-colors relative text-sm sm:text-base ${showBookmarked ? 'text-yellow-500 hover:text-yellow-400' : ''}`}
           >
             <span className="font-semibold">Your Bookmark</span>
             <div className="relative">
               <svg className={`w-4 h-4 sm:w-5 sm:h-5 ${showBookmarked ? 'fill-yellow-500 stroke-yellow-500' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
               </svg>
             </div>
           </div>
           
           <div className="flex items-center gap-2 sm:gap-3">
             <button onClick={() => setSortOrder("asc")} className='hover:text-yellow-500 p-1'>
                <ArrowUpAZ size={18} className="sm:w-5 sm:h-5" />
             </button>
             <button onClick={() => setSortOrder("desc")} className='hover:text-yellow-500 p-1'>
             <ArrowDownAZ size={18} className="sm:w-5 sm:h-5" />
             </button>
           </div>
        </div>
      </div>
  )
}
