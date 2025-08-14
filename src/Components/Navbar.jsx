import React from 'react';

const Navbar = () => {
  return (
    <nav className="px-6 py-4 flex items-center justify-between flex-wrap bg-[#335765] text-white">
      
      <div className="flex flex-col items-center">
        <span className="text-4xl">𝔇</span>
        <span className="text-xs font-serif tracking-wide mt-1">Design𝒱ista Studio</span>
      </div>

      
      <ul className="flex space-x-6 mt-2 sm:mt-0">
        <li>
          <a href="#home" className="hover:text-[#74A8A4] font-medium transition">
            Home
          </a>
        </li>
        <li>
          <a href="#features" className="hover:text-[#74A8A4] font-medium transition">
            Features
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-[#74A8A4] font-medium transition">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
