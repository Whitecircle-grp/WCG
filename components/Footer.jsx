
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Social Links */}
          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Pacifico, serif' }}>
              Vitara
            </h3>
            <p className="text-gray-400 mb-4">
              Your trusted travel companion for unforgettable adventures around the world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                <i className="ri-facebook-fill w-6 h-6 flex items-center justify-center"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                <i className="ri-twitter-fill w-6 h-6 flex items-center justify-center"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                <i className="ri-instagram-fill w-6 h-6 flex items-center justify-center"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                <i className="ri-youtube-fill w-6 h-6 flex items-center justify-center"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Tour Packages
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Travel Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Travel Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/sector/domestic-tourism" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Domestic Tourism
                </Link>
              </li>
              <li>
                <Link href="/sector/international-tourism" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  International Tourism
                </Link>
              </li>
              <li>
                <Link href="/sector/adventure-tourism" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Adventure Tourism
                </Link>
              </li>
              <li>
                <Link href="/sector/cultural-tourism" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Cultural Tourism
                </Link>
              </li>
              <li>
                <Link href="/sector/eco-tourism" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Eco-Tourism
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center">
                <i className="ri-map-pin-line mr-2 w-5 h-5 flex items-center justify-center"></i>
                123 Travel Street, Tourism City, TC 12345
              </p>
              <p className="flex items-center">
                <i className="ri-phone-line mr-2 w-5 h-5 flex items-center justify-center"></i>
                +91 99xxxxxxxx
              </p>
              <p className="flex items-center">
                <i className="ri-mail-line mr-2 w-5 h-5 flex items-center justify-center"></i>
                info@vitara.com
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          &copy; 2025 Vitara. All rights reserved. | Privacy Policy | Terms of Service
        </div>
      </div>
    </footer>
  );
}

