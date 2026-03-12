"use client"
import { items } from "../items";
import Card from "./Card";
import React from "react";
import Bookmark from "./Sort"

export default function MainSection() {
    const [sortOrder, setSortOrder] = React.useState(null);
  
    let sortedItems = [...items];
  
    if (sortOrder === "asc") {
      sortedItems.sort((a, b) => a.item_name.localeCompare(b.item_name));
    } else if (sortOrder === "desc") {
      sortedItems.sort((a, b) => b.item_name.localeCompare(a.item_name));
    }
  
 
  return (
    <div className="grow bg-[#090c10] min-h-screen text-white p-6">
      <Bookmark setSortOrder={setSortOrder}/>
      <div className="flex flex-col gap-4 max-w-5xl mx-auto">
        {sortedItems.map((item) => (
      <Card key={item.id} item={item} />))}
      
    
    
      </div>
    </div>

    
  );
}

{/* <h1>Descendingly</h1>
      </div>
      <div className="flex flex-col gap-4 max-w-5xl mx-auto">
        {[...items].sort((a, b) => b.item_name.localeCompare(a.item_name)).map((item) => (
      <Card key={item.id} item={item} />))}

// {[...users] */}
//   .sort((a, b) => a.name.localeCompare(b.name))
//   .map(user => (
//     <p key={user.id}>{user.name}</p>
// ))}

{/* <div className="flex flex-col gap-4 max-w-5xl mx-auto">
        {items.map((item) => (
      <Card key={item.id} item={item} />))}
      </div>

      <h1>Ascendingly</h1> */}