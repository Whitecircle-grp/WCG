
'use client';

import Link from 'next/link';

export default function SectorHeader() {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-white/20">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-2xl font-bold text-blue-600" style={{ fontFamily: 'Pacifico, serif' }}>
              logo
            </Link>
            <nav className="hidden md space-x-8">
              <Link href="/" className="text-gray-700 hover-blue-600 transition-colors whitespace-nowrap cursor-pointer">
                Home
              </Link>
              <Link href="/packages" className="text-gray-700 hover-blue-600 transition-colors whitespace-nowrap cursor-pointer">
                Packages
              </Link>
              <Link href="/destinations" className="text-gray-700 hover-blue-600 transition-colors whitespace-nowrap cursor-pointer">
                Destinations
              </Link>
              <Link href="/about" className="text-gray-700 hover-blue-600 transition-colors whitespace-nowrap cursor-pointer">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover-blue-600 transition-colors whitespace-nowrap cursor-pointer">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover-blue-600 transition-colors whitespace-nowrap cursor-pointer px-4 py-2 rounded-full hover-blue-50">
              Login
            </button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover-blue-700 transition-colors whitespace-nowrap cursor-pointer">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
