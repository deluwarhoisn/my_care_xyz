import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <header className="px-4 py-3 border-b-2 border-gray-500 flex justify-between items-center flex-wrap ">
          <Link href="/">Care.xyz </Link>
          <nav className='space-x-4'>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/service">Service</Link>
            <Link href="/tutorials">Tutorials</Link>
            <Link href="/register">Register</Link>
            <Link href="/login">Login</Link>
          </nav>
        </header>
    );
};

export default Header;