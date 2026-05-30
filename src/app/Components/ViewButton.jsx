"use client"
import React from "react"


export default function ViewButton({ item }) {
  const [open, setOpen] = React.useState(false);

  function viewButton(){
    setOpen(!open);
  }

  return (
    <>
  {open && (
        <dialog
          open
          className="w-full h-full flex justify-center items-center fixed inset-0 bg-gray-400/30 p-3 sm:p-5 rounded-md z-50"
        >
          <div className="w-full sm:w-[500px] max-h-[80vh] bg-gray-900 rounded-xl p-4 sm:p-5 text-white overflow-y-auto">
            <button
              onClick={() => setOpen(!open)}
              className="float-end py-1 px-3 sm:py-2 sm:px-4 bg-black rounded text-white text-sm sm:text-base"
            >
              close
            </button>
        
            <div className="clear-both text-sm sm:text-base">ID: {item?.id}</div>
            <div className="text-sm sm:text-base">Name: {item?.item_name}</div>
            <div className="text-sm sm:text-base">Description: {item?.item_description}</div>
            <div className="text-sm sm:text-base">Price: ${item?.item_price}</div>
          </div>
        </dialog>
      )}
    <button onClick={viewButton} className="bg-[#1a1d23] text-gray-300 px-4 sm:px-6 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-[#252a33] transition-colors border border-gray-800/30 w-full sm:w-auto">
      View
    </button>

    </>
  );
}
