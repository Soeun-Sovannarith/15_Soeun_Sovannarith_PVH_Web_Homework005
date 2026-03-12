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
          className="w-full h-full flex justify-center items-center absolute inset-0 bg-gray-400/30 p-5 rounded-md"
        >
          <div className="w-[500px] h-[200px] bg-gray-900 rounded-xl p-5 text-white">
            <button
              onClick={() => setOpen(!open)}
              className="float-end py-2 px-4 bg-black rounded text-white"
            >
              close
            </button>
        
            <div className="clear-both">ID: {item?.id}</div>
            <div className="">Name: {item?.item_name}</div>
            <div className="">Description: {item?.item_description}</div>
            <div className="">Price: ${item?.item_price}</div>
          </div>
        </dialog>
      )}
    <button onClick={viewButton} className="bg-[#1a1d23] text-gray-300 px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#252a33] transition-colors border border-gray-800/30">
      View
    </button>

    </>
  );
}
