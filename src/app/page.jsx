import Image from "next/image";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Search from "./Components/Search";
import MainSection from "./Components/MainSection";
import Bookmark from "./Components/Sort"

export default function Home() {
 
  return (
    <div className="flex flex-col h-screen">
      <Navbar searchBar={<Search />} />
      <div className="flex flex-row grow overflow-hidden">
        <Sidebar />
        <main className="grow overflow-y-auto">
          <div className="grow bg-[#090c10] min-h-screen text-white p-6">
           
          <MainSection />
          </div>
          
        </main>
      </div>
    </div>
  );
}
