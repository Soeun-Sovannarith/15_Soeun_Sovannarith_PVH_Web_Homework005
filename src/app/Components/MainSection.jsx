import { items } from "../items";
import React from "react";
import SecondarySection from "./SecondarySection";

export default function MainSection({ searchQuery = "", setSearchQuery }) {
  return (
    <div className="grow bg-[#090c10] min-h-screen text-white p-6">
      <SecondarySection
        items={items}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    </div>
  );
}
