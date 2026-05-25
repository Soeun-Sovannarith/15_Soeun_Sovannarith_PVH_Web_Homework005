"use client";
import React from "react";
import { CalendarDays } from "lucide-react";

export default function DateRangeFilter({ startDate, endDate, onStartDateChange, onEndDateChange, onClear }) {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      <CalendarDays className="w-4 h-4 text-gray-400" />
      <div className="flex items-center gap-2">
        <label className="text-gray-400 text-sm">From</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => onStartDateChange(e.target.value)}
          className="bg-[#1a1d23] text-gray-300 text-sm rounded-lg px-3 py-1.5 border border-gray-800/30 outline-none focus:ring-1 focus:ring-gray-500"
        />
      </div>
      <div className="flex items-center gap-2">
        <label className="text-gray-400 text-sm">To</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => onEndDateChange(e.target.value)}
          className="bg-[#1a1d23] text-gray-300 text-sm rounded-lg px-3 py-1.5 border border-gray-800/30 outline-none focus:ring-1 focus:ring-gray-500"
        />
      </div>
      {(startDate || endDate) && (
        <button
          onClick={onClear}
          className="text-gray-400 hover:text-white text-xs px-2 py-1 rounded border border-gray-700 hover:border-gray-500 transition-colors"
        >
          Clear
        </button>
      )}
    </div>
  );
}
