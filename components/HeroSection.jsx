'use client';

import { useState } from 'react';

export default function HeroSection() {
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');

  const handleSearch = () => {
    console.log('Search:', { destination, checkIn, checkOut, guests });
  };

  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://plus.unsplash.com/premium_photo-1661885523029-fc960a2bb4f3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 w-full min-h-screen flex flex-col justify-center">
        <div className="px-6 py-12">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Discover Incredible
              <br />
              <span className="text-yellow-300">India</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              From ancient monuments to vibrant festivals, spiritual journeys to royal palaces. 
              Experience the rich heritage and diverse beauty of India with us.
            </p>

            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 max-w-4xl">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                {/* Destination */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      placeholder="Where to?"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                    <i className="ri-map-pin-line absolute right-3 top-3 text-gray-400 w-5 h-5 flex items-center justify-center"></i>
                  </div>
                </div>

                {/* Check-in */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Check-in</label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>

                {/* Check-out */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Check-out</label>
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>

                {/* Guests */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Guests</label>
                  <div className="relative">
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm pr-8"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5+">5+ Guests</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Search Button */}
              <button
                onClick={handleSearch}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center"
              >
                <i className="ri-search-line mr-2 w-5 h-5 flex items-center justify-center"></i>
                Search Trips
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

