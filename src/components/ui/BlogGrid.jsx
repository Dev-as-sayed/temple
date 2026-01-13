// components/blog/BlogGrid.jsx
import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, Star } from "lucide-react";

export default function BlogGrid({ blogs }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogs.map((blog) => (
        <Link key={blog.id} href={`/blogs/${blog.id}`} className="group block">
          <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-neutral-200 h-full">
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              {blog.images?.[0] ? (
                <Image
                  src={blog.images[0].url}
                  alt={blog.images[0].alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              ) : (
                <div className="absolute inset-0 bg-linear-to-br from-secondary-600 to-primary-600" />
              )}

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <span className="px-3 py-1 bg-primary-500 text-white text-sm font-medium rounded-full">
                  {blog.dynasty.name.split(" ")[0]}
                </span>
                {blog.isFeatured && (
                  <span className="px-3 py-1 bg-accent-gold text-white text-sm font-medium rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Featured
                  </span>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span
                  className={`px-3 py-1 text-xs font-medium rounded-full ${
                    blog.difficulty === "Beginner"
                      ? "bg-green-100 text-green-800"
                      : blog.difficulty === "Intermediate"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {blog.difficulty}
                </span>
                <span className="text-sm text-neutral-500">
                  {blog.readingTime}
                </span>
              </div>

              <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                {blog.name}
              </h3>

              <p className="text-neutral-600 mb-4 line-clamp-3">
                {blog.excerpt}
              </p>

              {/* Metadata */}
              <div className="flex items-center justify-between text-sm text-neutral-500 pt-4 border-t border-neutral-100">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{blog.location.city}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{blog.dynasty.year}</span>
                </div>
              </div>

              {/* Tags */}
              {blog.tags && blog.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {blog.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-neutral-100 text-neutral-700 rounded text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
}
