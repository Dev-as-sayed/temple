// components/blog/Pagination.jsx
"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Pagination({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (page) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`/blogs?${params.toString()}`);
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      let start = Math.max(1, currentPage - 2);
      let end = Math.min(totalPages, start + maxVisible - 1);

      if (end - start < maxVisible - 1) {
        start = Math.max(1, end - maxVisible + 1);
      }

      if (start > 1) pages.push(1, "...");
      for (let i = start; i <= end; i++) pages.push(i);
      if (end < totalPages) pages.push("...", totalPages);
    }

    return pages;
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="text-sm text-neutral-600">
        Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
        {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems}{" "}
        temples
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`p-2 rounded-lg border ${
            currentPage === 1
              ? "border-neutral-200 text-neutral-400 cursor-not-allowed"
              : "border-neutral-300 hover:border-primary-500 hover:text-primary-600"
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {renderPageNumbers().map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === "number" && handlePageChange(page)}
            disabled={page === "..."}
            className={`px-4 py-2 rounded-lg border ${
              page === currentPage
                ? "bg-primary-500 text-white border-primary-500"
                : page === "..."
                ? "border-transparent text-neutral-400 cursor-default"
                : "border-neutral-300 hover:border-primary-500 hover:text-primary-600"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`p-2 rounded-lg border ${
            currentPage === totalPages
              ? "border-neutral-200 text-neutral-400 cursor-not-allowed"
              : "border-neutral-300 hover:border-primary-500 hover:text-primary-600"
          }`}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="text-sm text-neutral-600">
        Page {currentPage} of {totalPages}
      </div>
    </div>
  );
}
