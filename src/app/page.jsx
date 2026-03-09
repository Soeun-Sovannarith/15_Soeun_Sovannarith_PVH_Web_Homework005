import Image from "next/image";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Search from "./Components/Search";
import MainSection from "./Components/MainSection";
import ViewButton from "./Components/ViewButton";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar searchBar={<Search />} />
      <div className="flex flex-row grow overflow-hidden">
        <Sidebar />
        <main className="grow overflow-y-auto">
          <MainSection viewButton={<ViewButton />} />
        </main>
      </div>
    </div>
  );
}
