"use client";
import React, { createContext, useContext, useState } from "react";

const BookmarkContext = createContext();

export const BookmarkProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([]);

  const toggleBookmark = (item) => {
    setBookmarks((prev) => {
      const isAlreadyBookmarked = prev.find((b) => b.id === item.id);
      if (isAlreadyBookmarked) {
        return prev.filter((b) => b.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  };

  const isBookmarked = (id) => {
    return bookmarks.some((item) => item.id === id);
  };

  return (
    <BookmarkContext.Provider value={{ bookmarks, toggleBookmark, isBookmarked }}>
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmark = () => {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error("useBookmark must be used within a BookmarkProvider");
  }
  return context;
};
