"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="px-4 md:px-8 py-4 border-b border-gray-200 bg-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/download (2).jpg"
            alt="Care.xyz Logo"
            width={50}
            height={50}
            className="rounded-xl object-cover"
          />
          <span className="text-xl font-bold text-indigo-600">
            Care.xyz
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          <Link href="/" className="hover:text-indigo-600 transition">Home</Link>
          <Link href="/about" className="hover:text-indigo-600 transition">About</Link>
          <Link href="/service" className="hover:text-indigo-600 transition">Service</Link>
          <Link href="/tutorials" className="hover:text-indigo-600 transition">Tutorials</Link>
          <Link href="/register" className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition">Register</Link>
          <Link href="/login" className="px-4 py-2 rounded-lg border border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition">Login</Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 px-4 pb-4 space-y-2 bg-white border-t border-gray-200">
          <Link href="/" className="block hover:text-indigo-600 transition">Home</Link>
          <Link href="/about" className="block hover:text-indigo-600 transition">About</Link>
          <Link href="/service" className="block hover:text-indigo-600 transition">Service</Link>
          <Link href="/tutorials" className="block hover:text-indigo-600 transition">Tutorials</Link>
          <Link href="/register" className="block px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition">Register</Link>
          <Link href="/login" className="block px-4 py-2 rounded-lg border border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition">Login</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
