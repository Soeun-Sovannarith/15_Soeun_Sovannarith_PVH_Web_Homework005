"use client";
import { items } from "../items";
import Card from "./Card";

export default function MainSection({ viewButton }) {
  return (
    <div className="grow bg-[#090c10] min-h-screen text-white p-6">
      {/* Header */}
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
             <svg className="w-5 h-5 cursor-pointer hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
             </svg>
             <svg className="w-5 h-5 cursor-pointer hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
             </svg>
           </div>
        </div>
      </div>

      {/* Items List */}
      <div className="flex flex-col gap-4 max-w-5xl mx-auto">
        {items.map((item) => (
          <Card key={item.id} item={item} viewButton={viewButton} />
        ))}
      </div>
    </div>
  );
}