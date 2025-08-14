
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const sectors = [
    'Domestic Tourism',
    'International Tourism',
    'Adventure Tourism',
    'Cultural Tourism',
    'Eco-Tourism',
    'Religious Tourism',
    'Cruise Luxury Travel',
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-white/20">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-2xl font-bold text-blue-600" style={{ fontFamily: 'Pacifico, serif' }}>
              Vitara
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
                Home
              </Link>

              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer flex items-center"
                >
                  Explore Sectors
                  <i className="ri-arrow-down-s-line ml-1 w-4 h-4 flex items-center justify-center"></i>
                </button>

                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white/90 backdrop-blur-md rounded-lg shadow-lg border border-gray-200/50 py-2 z-50">
                    {sectors.map((sector, index) => (
                      <Link
                        key={index}
                        href={`/sector/${sector.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        {sector}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link href="/#footer" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
                Contact
              </Link>

              <Link href="/feedback" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
                Feedback
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/login" passHref>
              <span className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer px-4 py-2 rounded-full hover:bg-blue-50">
                Login
              </span>
            </Link>

            <Link href="/signup" passHref>
              <span className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
                Sign Up
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

