// components/blog/BlogFilters.jsx
"use client";

import { Search, Filter, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function BlogFilters({
  dynasties,
  difficulties,
  selectedDynasty,
  selectedDifficulty,
  searchQuery,
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [localSearch, setLocalSearch] = useState(searchQuery || "");

  const handleFilterChange = (key, value) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value && value !== "all") {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    params.delete("page"); // Reset to first page when filtering
    router.push(`/blogs?${params.toString()}`);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    handleFilterChange("search", localSearch);
  };

  const clearFilters = () => {
    router.push("/blogs");
    setLocalSearch("");
  };

  const hasFilters = selectedDynasty || selectedDifficulty || searchQuery;

  return (
    <div className="mb-8">
      <form onSubmit={handleSearch} className="space-y-6">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search temples by name, location, or features..."
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-4 text-lg border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors"
          >
            Search
          </button>
        </div>

        {/* Filter Row */}
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
          <div className="flex items-center gap-2 text-neutral-700">
            <Filter className="w-5 h-5" />
            <span className="font-medium">Filter by:</span>
          </div>

          <div className="flex flex-wrap gap-4 flex-1">
            {/* Dynasty Filter */}
            <div>
              <label
                htmlFor="dynasty"
                className="block text-sm font-medium text-neutral-700 mb-1"
              >
                Dynasty
              </label>
              <select
                id="dynasty"
                value={selectedDynasty || "all"}
                onChange={(e) => handleFilterChange("dynasty", e.target.value)}
                className="px-4 py-2 border border-neutral-300 rounded-lg bg-white"
              >
                <option value="all">All Dynasties</option>
                {dynasties.map((dynasty, index) => (
                  <option key={index} value={dynasty}>
                    {dynasty}
                  </option>
                ))}
              </select>
            </div>

            {/* Difficulty Filter */}
            <div>
              <label
                htmlFor="difficulty"
                className="block text-sm font-medium text-neutral-700 mb-1"
              >
                Difficulty
              </label>
              <select
                id="difficulty"
                value={selectedDifficulty || "all"}
                onChange={(e) =>
                  handleFilterChange("difficulty", e.target.value)
                }
                className="px-4 py-2 border border-neutral-300 rounded-lg bg-white"
              >
                <option value="all">All Levels</option>
                {difficulties.map((difficulty, index) => (
                  <option key={index} value={difficulty}>
                    {difficulty}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Clear Filters Button */}
          {hasFilters && (
            <button
              type="button"
              onClick={clearFilters}
              className="flex items-center gap-2 px-4 py-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors"
            >
              <X className="w-4 h-4" />
              Clear Filters
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
