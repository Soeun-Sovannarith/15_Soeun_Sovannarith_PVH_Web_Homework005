"use client";
import React, { useState } from "react";
import Image from "next/image";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Search from "./Components/Search";
import MainSection from "./Components/MainSection";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
 
  return (
    <div className="flex flex-col h-screen">
      <Navbar searchBar={<Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />} />
      <div className="flex flex-row grow overflow-hidden">
        <Sidebar />
        <main className="grow overflow-y-auto">
          <div className="grow bg-[#090c10] min-h-screen text-white p-6">
           
          <MainSection searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          </div>
          
        </main>
      </div>
    </div>
  );
}
