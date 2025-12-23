"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="px-4 md:px-8 py-4 border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo + Name */}
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

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          <Link href="/" className="hover:text-indigo-600 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-indigo-600 transition">
            About
          </Link>
          <Link href="/service" className="hover:text-indigo-600 transition">
            Service
          </Link>
          <Link href="/tutorials" className="hover:text-indigo-600 transition">
            Tutorials
          </Link>
          <Link
            href="/register"
            className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
          >
            Register
          </Link>
          <Link
            href="/login"
            className="px-4 py-2 rounded-lg border border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition"
          >
            Login
          </Link>
        </nav>

      </div>
    </header>
  );
};

export default Header;
