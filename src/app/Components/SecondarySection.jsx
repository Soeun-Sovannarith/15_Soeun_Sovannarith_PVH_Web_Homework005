"use client";
import React from "react";
import { useBookmark } from "./BookmarkContext";
import Sort from "./Sort";
import Card from "./Card";

export default function SecondarySection({
  items,
  searchQuery,
  setSearchQuery,
}) {
  const [sortOrder, setSortOrder] = React.useState(null);
  const [showBookmarked, setShowBookmarked] = React.useState(false);
  const { isBookmarked } = useBookmark();

  let filteredItems = [...items];

  if (searchQuery) {
    filteredItems = filteredItems.filter((item) =>
      item.item_name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }

  if (showBookmarked) {
    filteredItems = filteredItems.filter((item) => isBookmarked(item.id));
  }

  if (sortOrder === "asc") {
    filteredItems.sort((a, b) => a.item_name.localeCompare(b.item_name));
  } else if (sortOrder === "desc") {
    filteredItems.sort((a, b) => b.item_name.localeCompare(a.item_name));
  }

  return (
    <>
      <Sort
        setSortOrder={setSortOrder}
        setShowBookmarked={setShowBookmarked}
        showBookmarked={showBookmarked}
        setSearchQuery={setSearchQuery}
      />
      <div className="flex flex-col gap-2 sm:gap-4 max-w-5xl mx-auto">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => <Card key={item.id} item={item} />)
        ) : (
          <p className="text-gray-500 text-center py-10">No items found.</p>
        )}
      </div>
    </>
  );
}
