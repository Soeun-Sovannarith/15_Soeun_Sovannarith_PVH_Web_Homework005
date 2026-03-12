"use client"
import React from 'react'
// import { items } from '../items'
import {ArrowUpAZ,ArrowDownAZ} from "lucide-react"

export default function Bookmark({setSortOrder}) {

     const [sort, setsort] = React.useState(true);
    
      function asc_sorted(){
        // sort(items, (a, b))
        alert("Items is sorted ascendingly");
        
      }
    
      function desc_sorted(){
        alert("Item is sorted descendingly");
        // sort(items, (a, b) => a.)
      }
  return (
    <div className="flex items-center justify-between mb-8">
        <button className="bg-white text-black px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
          Back
        </button>
        
        <div className="flex items-center gap-6 text-gray-400">
           <div className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
             <span className="text-sm">Your Bookmark</span>
             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
             </svg>
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
