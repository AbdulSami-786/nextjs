'use client';
import React, { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600 cursor-pointer">
          MyStore
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-semibold">
          <a href="/" className="hover:text-blue-600">Home</a>
          <a href="/products" className="hover:text-blue-600">Products</a>
          <a href="/about" className="hover:text-blue-600">About</a>
          <a href="/contact" className="hover:text-blue-600">Contact</a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <a href="/" className="block px-6 py-3 text-gray-700 font-semibold hover:bg-blue-50">Home</a>
          <a href="/products" className="block px-6 py-3 text-gray-700 font-semibold hover:bg-blue-50">Products</a>
          <a href="/about" className="block px-6 py-3 text-gray-700 font-semibold hover:bg-blue-50">About</a>
          <a href="/contact" className="block px-6 py-3 text-gray-700 font-semibold hover:bg-blue-50">Contact</a>
        </nav>
      )}
    </header>
  );
}

export default Header;
