"use client";
import templeBlogs from "@/data/blogs";
import {
  ArrowLeft,
  Bookmark,
  Building,
  Calendar,
  Clock,
  ExternalLink,
  MapPin,
  Share2,
  Star,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const page = () => {
  const { id } = useParams();

  const blog = templeBlogs.find((b) => b.id.toString() === id);

  if (!blog) {
    return {
      title: "Temple Not Found",
      description: "The requested temple article could not be found.",
    };
  }
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral-50">
      {/* Hero Section */}
      <div className="relative">
        {/* Hero Image */}
        <div className="relative h-[400px] md:h-[500px] overflow-hidden">
          {blog.images?.[0] ? (
            <Image
              src={blog.images[0].url}
              alt={blog.images[0].alt}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br " />
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 container max-w-5xl px-4 md:px-8 pb-8 md:pb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1.5 bg-primary-500 text-white text-sm font-medium rounded-full">
                {blog.dynasty.name}
              </span>
              <span
                className={`px-3 py-1.5 text-sm font-medium rounded-full ${
                  blog.difficulty === "Beginner"
                    ? "bg-green-100 text-green-800"
                    : blog.difficulty === "Intermediate"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {blog.difficulty}
              </span>
              {blog.isFeatured && (
                <span className="px-3 py-1.5 bg-accent-gold/20 text-accent-gold text-sm font-medium rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  Featured
                </span>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 leading-tight">
              {blog.name}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-6 max-w-3xl">
              {blog.title}
            </p>

            {/* Metadata */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-base">
                  {blog.dynasty.year}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-base">
                  {blog.readingTime} read
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-base">
                  {blog.location.city}, {blog.location.province}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-base">{blog.author}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="container max-w-5xl mx-auto px-4 md:px-8">
          <div className="py-4 border-b border-neutral-200">
            <nav className="text-sm text-neutral-600">
              <Link href="/" className="hover:text-primary-600">
                Home
              </Link>
              {" > "}
              <Link href="/blogs" className="hover:text-primary-600">
                Temples
              </Link>
              {" > "}
              <span className="text-neutral-900 font-medium">{blog.name}</span>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container max-w-5xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
          {/* Article Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Excerpt */}
            <div className="p-6 bg-gradient-to-r from-primary-50 to-white rounded-xl border border-primary-200">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-full bg-primary-500 rounded-full"></div>
                <div>
                  <h2 className="text-lg font-semibold text-neutral-900 mb-2">
                    Overview
                  </h2>
                  <p className="text-neutral-700 leading-relaxed">
                    {blog.excerpt}
                  </p>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="prose prose-lg max-w-none">
              {blog.content.split("\n\n").map((paragraph, index) => (
                <p
                  key={index}
                  className="mb-6 text-base md:text-lg leading-relaxed text-neutral-700"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Architectural Details */}
            {(blog.architecturalStyle || blog.keyStructures) && (
              <div className="space-y-6">
                {/* Style */}
                {blog.architecturalStyle && (
                  <div className="p-6 bg-gradient-to-br from-secondary-50 to-white rounded-xl border">
                    <h2 className="text-xl font-heading font-bold mb-4 flex items-center gap-3">
                      <Building className="w-5 h-5 text-secondary-600" />
                      Architectural Style
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {blog.architecturalStyle.map((style, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 bg-white border border-secondary-200 text-secondary-700 rounded-lg text-sm"
                        >
                          {style}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Structures */}
                {blog.keyStructures && blog.keyStructures.length > 0 && (
                  <div>
                    <h2 className="text-xl font-heading font-bold mb-4">
                      Key Structures
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {blog.keyStructures.map((structure, index) => (
                        <div
                          key={index}
                          className="p-4 bg-white rounded-lg border border-neutral-200 hover:border-primary-300 transition-colors"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-semibold text-neutral-900">
                              {structure.name}
                            </h3>
                            <span className="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs rounded">
                              {structure.type}
                            </span>
                          </div>
                          <div className="space-y-1 text-sm text-neutral-600">
                            {structure?.height && (
                              <div className="flex justify-between">
                                <span>Height:</span>
                                <span className="font-medium">
                                  {structure?.height}
                                </span>
                              </div>
                            )}
                            {structure.material && (
                              <div className="flex justify-between">
                                <span>Material:</span>
                                <span className="font-medium">
                                  {structure.material}
                                </span>
                              </div>
                            )}
                            {structure.era && (
                              <div className="flex justify-between">
                                <span>Era:</span>
                                <span className="font-medium">
                                  {structure.era}
                                </span>
                              </div>
                            )}
                            {structure.feature && (
                              <div className="text-xs text-neutral-500 mt-2">
                                {structure.feature}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Special Features */}
            {blog.specialFeatures && blog.specialFeatures.length > 0 && (
              <div>
                <h2 className="text-xl font-heading font-bold mb-4">
                  Special Features
                </h2>
                <ul className="space-y-3">
                  {blog.specialFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-primary-600 text-sm">✓</span>
                      </div>
                      <span className="text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Image Gallery */}
            {blog.images && blog.images.length > 1 && (
              <div>
                <h2 className="text-xl font-heading font-bold mb-4">Gallery</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {blog.images.slice(1).map((image, index) => (
                    <div
                      key={index}
                      className="relative h-56 md:h-64 rounded-lg overflow-hidden group"
                    >
                      <Image
                        src={image.url}
                        alt={image.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <p className="text-white text-sm">{image.caption}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="pt-6 border-t border-neutral-200">
                <h3 className="text-sm font-medium text-neutral-700 mb-3">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, index) => (
                    <Link
                      key={index}
                      href={`/blogs?search=${encodeURIComponent(tag)}`}
                      className="px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-lg transition-colors text-sm"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Facts */}
            <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
              <div className="p-6 border-b border-neutral-200">
                <h3 className="font-semibold text-lg text-neutral-900 mb-4">
                  Quick Facts
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-neutral-700 mb-2">
                      Location
                    </h4>
                    <p className="text-neutral-900">{blog.location.address}</p>
                    <p className="text-sm text-neutral-600 mt-1">
                      {blog.location.city}, {blog.location.province}
                    </p>
                  </div>

                  {blog.dimensions && (
                    <div>
                      <h4 className="text-sm font-medium text-neutral-700 mb-2">
                        Dimensions
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <div className="text-xs text-neutral-500">Area</div>
                          <div className="font-medium">
                            {blog.dimensions.area}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-neutral-500">Length</div>
                          <div className="font-medium">
                            {blog.dimensions.length}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Visitor Info */}
              {blog.visitorInfo && (
                <div className="p-6 bg-neutral-50">
                  <h4 className="text-sm font-medium text-neutral-700 mb-3">
                    Visitor Information
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-neutral-600">Hours:</span>
                      <span className="font-medium">
                        {blog.visitorInfo.openHours}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-neutral-600">Ticket:</span>
                      <span className="font-medium text-primary-600">
                        {blog.visitorInfo.ticketPrice}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-neutral-600">
                        Best Time:
                      </span>
                      <span className="font-medium">
                        {blog.visitorInfo.bestTime}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-neutral-600">
                        Crowd Level:
                      </span>
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          blog.visitorInfo.crowdLevel === "Low"
                            ? "bg-green-100 text-green-800"
                            : blog.visitorInfo.crowdLevel === "Medium"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {blog.visitorInfo.crowdLevel}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Share Widget */}
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <h3 className="font-semibold text-lg text-neutral-900 mb-4">
                Share This Article
              </h3>
              <div className="flex gap-2">
                <button className="flex-1 p-3 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm">
                  <span>Twitter</span>
                </button>
                <button className="flex-1 p-3 bg-gray-50 hover:bg-gray-100 text-gray-600 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm">
                  <span>Copy Link</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Between Articles */}
        <div className="mt-12 pt-8 border-t border-neutral-200">
          <div className="flex flex-col md:flex-row gap-4">
            {blog.id > 1 && (
              <Link
                href={`/blogs/${blog.id - 1}`}
                className="group flex-1 p-6 rounded-xl border border-neutral-200 hover:border-primary-300 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="text-primary-600 group-hover:text-primary-700">
                    <ArrowLeft className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-neutral-600">Previous Temple</p>
                    <p className="font-semibold group-hover:text-primary-600 transition-colors">
                      {templeBlogs.find((b) => b.id === blog.id - 1)?.name}
                    </p>
                  </div>
                </div>
              </Link>
            )}

            {blog.id < templeBlogs.length && (
              <Link
                href={`/blogs/${blog.id + 1}`}
                className="group flex-1 p-6 rounded-xl border border-neutral-200 hover:border-primary-300 transition-colors"
              >
                <div className="flex items-center gap-4 justify-end">
                  <div className="text-right">
                    <p className="text-sm text-neutral-600">Next Temple</p>
                    <p className="font-semibold group-hover:text-primary-600 transition-colors">
                      {templeBlogs.find((b) => b.id === blog.id + 1)?.name}
                    </p>
                  </div>
                  <div className="text-primary-600 group-hover:text-primary-700">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
