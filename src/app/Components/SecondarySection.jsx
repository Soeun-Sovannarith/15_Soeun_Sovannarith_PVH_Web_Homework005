"use client";
import React from "react";
import { useBookmark } from "./BookmarkContext";
import Sort from "./Sort";
import Card from "./Card";
import DateRangeFilter from "./DateRangeFilter";

export default function SecondarySection({
  items,
  searchQuery,
  setSearchQuery,
}) {
  const [sortOrder, setSortOrder] = React.useState(null);
  const [showBookmarked, setShowBookmarked] = React.useState(false);
  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");
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

  if (startDate) {
    filteredItems = filteredItems.filter(
      (item) => item.date_added >= startDate,
    );
  }

  if (endDate) {
    filteredItems = filteredItems.filter(
      (item) => item.date_added <= endDate,
    );
  }

  if (sortOrder === "asc") {
    filteredItems.sort((a, b) => a.item_name.localeCompare(b.item_name));
  } else if (sortOrder === "desc") {
    filteredItems.sort((a, b) => b.item_name.localeCompare(a.item_name));
  }

  const handleClearDates = () => {
    setStartDate("");
    setEndDate("");
  };

  return (
    <>
      <Sort
        setSortOrder={setSortOrder}
        setShowBookmarked={setShowBookmarked}
        showBookmarked={showBookmarked}
        setSearchQuery={setSearchQuery}
      />
      <div className="mb-6 max-w-5xl mx-auto">
        <DateRangeFilter
          startDate={startDate}
          endDate={endDate}
          onStartDateChange={setStartDate}
          onEndDateChange={setEndDate}
          onClear={handleClearDates}
        />
      </div>
      <div className="flex flex-col gap-4 max-w-5xl mx-auto">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => <Card key={item.id} item={item} />)
        ) : (
          <p className="text-gray-500 text-center py-10">No items found.</p>
        )}
      </div>
    </>
  );
}
