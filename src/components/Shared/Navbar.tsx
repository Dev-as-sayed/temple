"use client";
import { useState } from "react";
import { Menu, X, Search, Home, Info, BookOpen } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      name: "Home",
      href: "/",
      icon: <Home className="w-4 h-4" />,
    },
    {
      name: "History",
      href: "/about",
      icon: <Info className="w-4 h-4" />,
    },
    {
      name: "Temples",
      href: "/blogs",
      icon: <BookOpen className="w-4 h-4" />,
    },
    { name: "Architecture", href: "/architecture" },
    { name: "Innovators", href: "/innovators" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-neutral-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-linear-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-xl">檐</span>
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-neutral-900">
                Temple Architecture
              </h1>
              <p className="text-xs text-neutral-500 -mt-1">
                Historical Legacy
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all hover:bg-neutral-100 hover:text-primary-600"
              >
                {item.icon && <span className="mr-2">{item.icon}</span>}
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Search + CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="text"
                placeholder="Search temples..."
                className="pl-10 pr-4 py-2 w-48 text-sm border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <button className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm font-medium rounded-lg shadow-sm">
              Explore Timeline
            </button>
          </div>

          {/* Mobile Buttons */}
          <div className="lg:hidden flex items-center space-x-2">
            <button className="p-2 hover:bg-neutral-100 rounded-lg">
              <Search className="w-5 h-5 text-neutral-600" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-neutral-100 rounded-lg"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-neutral-700" />
              ) : (
                <Menu className="w-6 h-6 text-neutral-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-neutral-200 mt-2 pt-2 pb-4">
            <div className="space-y-1 px-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center px-3 py-3 text-base font-medium rounded-lg hover:bg-neutral-100 hover:text-primary-600"
                >
                  {item.icon && <span className="mr-3">{item.icon}</span>}
                  {item.name}
                </Link>
              ))}

              <div className="pt-4 mt-4 border-t border-neutral-200">
                <button className="w-full px-4 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg">
                  Explore Temple Timeline
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
