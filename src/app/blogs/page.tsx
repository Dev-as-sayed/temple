// app/blogs/page.jsx

import templeBlogs from "@/data/blogs";
import BlogFilters from "@/components/ui/BlogFilters";
import BlogGrid from "@/components/ui/BlogGrid";
import Pagination from "@/components/ui/Pagination";

// Metadata for SEO
export const metadata = {
  title:
    "Chinese Temple Architecture Blogs | Historical & Architectural Analysis",
  description:
    "Explore detailed articles on China's most significant temple architecture, from Tang dynasty masterpieces to Ming-Qing innovations.",
  keywords:
    "Chinese temples, Buddhist architecture, temple history, architectural analysis, heritage sites",
  openGraph: {
    title: "Chinese Temple Architecture Blogs",
    description:
      "In-depth exploration of China's temple architectural heritage",
    type: "website",
  },
};

export default function BlogsPage({ searchParams }) {
  // Extract pagination and filter parameters
  const currentPage = Number(searchParams?.page) || 1;
  const itemsPerPage = 9;
  const selectedDynasty = searchParams?.dynasty;
  const selectedDifficulty = searchParams?.difficulty;
  const searchQuery = searchParams?.search?.toLowerCase() || "";

  // Filter logic
  let filteredBlogs = templeBlogs.filter((blog) => blog.isPublished);

  if (selectedDynasty && selectedDynasty !== "all") {
    filteredBlogs = filteredBlogs.filter((blog) =>
      blog.dynasty.name.toLowerCase().includes(selectedDynasty.toLowerCase())
    );
  }

  if (selectedDifficulty && selectedDifficulty !== "all") {
    filteredBlogs = filteredBlogs.filter(
      (blog) =>
        blog.difficulty.toLowerCase() === selectedDifficulty.toLowerCase()
    );
  }

  if (searchQuery) {
    filteredBlogs = filteredBlogs.filter(
      (blog) =>
        blog.name.toLowerCase().includes(searchQuery) ||
        blog.title.toLowerCase().includes(searchQuery) ||
        blog.excerpt.toLowerCase().includes(searchQuery) ||
        blog.tags.some((tag) => tag.toLowerCase().includes(searchQuery)) ||
        blog.location.city.toLowerCase().includes(searchQuery)
    );
  }

  // Pagination logic
  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedBlogs = filteredBlogs.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Get unique dynasties and difficulties for filter dropdowns
  const uniqueDynasties = [
    ...new Set(templeBlogs.map((blog) => blog.dynasty.name.split(" ")[0])),
  ];
  const uniqueDifficulties = [
    ...new Set(templeBlogs.map((blog) => blog.difficulty)),
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary-500/10 to-secondary-500/10 py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              <span className="text-neutral-900">Temple</span>
              <span className="text-gradient-vermilion"> Architecture</span>
              <span className="text-neutral-900"> Blogs</span>
            </h1>
            <p className="text-xl text-neutral-700 mb-8">
              Explore in-depth analysis of China's most significant temple
              architecture, from Tang dynasty timber masterpieces to Ming-Qing
              cosmological innovations.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-primary-600">
                  {templeBlogs.length}
                </div>
                <div className="text-sm text-neutral-600">Temples</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-secondary-600">
                  {uniqueDynasties.length}
                </div>
                <div className="text-sm text-neutral-600">Dynasties</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-accent-jade">
                  {
                    templeBlogs.filter((b) => b.difficulty === "Beginner")
                      .length
                  }
                </div>
                <div className="text-sm text-neutral-600">Beginner</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-accent-gold">
                  {templeBlogs.filter((b) => b.isFeatured).length}
                </div>
                <div className="text-sm text-neutral-600">Featured</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-7xl px-4 py-8">
        {/* Filters Section */}
        <BlogFilters
          dynasties={uniqueDynasties}
          difficulties={uniqueDifficulties}
          selectedDynasty={selectedDynasty}
          selectedDifficulty={selectedDifficulty}
          searchQuery={searchQuery}
        />

        {/* Results Info */}
        <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-2xl font-heading font-semibold text-neutral-900">
              {selectedDynasty ? `${selectedDynasty} Dynasty` : "All"} Temples
            </h2>
            <p className="text-neutral-600">
              Showing {paginatedBlogs.length} of {filteredBlogs.length} articles
              {searchQuery && ` for "${searchQuery}"`}
            </p>
          </div>

          {/* Sort Options */}
          <div className="flex items-center gap-4">
            <select className="px-4 py-2 border border-neutral-300 rounded-lg bg-white text-sm">
              <option>Sort by: Newest</option>
              <option>Oldest First</option>
              <option>Reading Time</option>
              <option>Difficulty</option>
            </select>
          </div>
        </div>

        {/* Blog Grid */}
        {paginatedBlogs.length > 0 ? (
          <>
            <BlogGrid blogs={paginatedBlogs} />

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  totalItems={filteredBlogs.length}
                  itemsPerPage={itemsPerPage}
                />
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <div className="text-5xl mb-4">🏛️</div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              No Temples Found
            </h3>
            <p className="text-neutral-600 mb-8">
              Try adjusting your search or filters to find what you're looking
              for.
            </p>
            <a
              href="/blogs"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors"
            >
              Clear All Filters
            </a>
          </div>
        )}

        {/* Featured Section */}
        {!selectedDynasty && !selectedDifficulty && !searchQuery && (
          <div className="mt-16 pt-8 border-t border-neutral-200">
            <h3 className="text-2xl font-heading font-bold mb-6">
              Featured Articles
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {templeBlogs
                .filter((blog) => blog.isFeatured)
                .slice(0, 3)
                .map((blog) => (
                  <div
                    key={blog.id}
                    className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl border border-primary-200"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded">
                        Featured
                      </span>
                      <span className="px-2 py-1 bg-secondary-100 text-secondary-700 text-xs font-medium rounded">
                        {blog.difficulty}
                      </span>
                    </div>
                    <h4 className="font-bold text-lg mb-2">{blog.name}</h4>
                    <p className="text-sm text-neutral-600 mb-4 line-clamp-2">
                      {blog.excerpt}
                    </p>
                    <a
                      href={`/blogs/${blog.id}`}
                      className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 font-medium text-sm"
                    >
                      Read Article →
                    </a>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
