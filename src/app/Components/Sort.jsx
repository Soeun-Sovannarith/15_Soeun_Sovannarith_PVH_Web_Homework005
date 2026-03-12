"use client"
import React from 'react'
import {ArrowUpAZ,ArrowDownAZ} from "lucide-react"

export default function Bookmark({setSortOrder, setShowBookmarked, showBookmarked, setSearchQuery}) {
  const handleBack = () => {
    setShowBookmarked(false);
    if (setSearchQuery) setSearchQuery("");
  };

  return (
    <div className="flex items-center justify-between mb-8">
        <button onClick={handleBack} className="bg-white text-black px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1 cursor-pointer">
          Back
        </button>
        
        <div className="flex items-center gap-6 text-gray-400">
           <div 
             onClick={() => setShowBookmarked(!showBookmarked)}
             className={`flex items-center gap-2 cursor-pointer hover:text-white transition-colors relative ${showBookmarked ? 'text-yellow-500 hover:text-yellow-400' : ''}`}
           >
             <span className="text-sm font-semibold">Your Bookmark</span>
             <div className="relative">
               <svg className={`w-5 h-5 ${showBookmarked ? 'fill-yellow-500 stroke-yellow-500' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
               </svg>
             </div>
           </div>
           
           <div className="flex items-center gap-3">
             <button onClick={() => setSortOrder("asc")} className='hover:text-yellow-500'>
                <ArrowUpAZ />
             </button>
             <button onClick={() => setSortOrder("desc")} className='hover:text-yellow-500'>
             <ArrowDownAZ />
             </button>
           </div>
        </div>
      </div>
  )
}
