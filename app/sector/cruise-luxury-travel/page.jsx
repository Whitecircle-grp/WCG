'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function CruiseLuxuryTravelPage() {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const luxuryPackages = [
    {
      id: 1,
      title: 'Maldives Overwater Villa Retreat',
      destination: 'Male, Maldives',
      duration: '5 Days / 4 Nights',
      price: '₹1,25,000',
      originalPrice: '₹1,55,000',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
      features: ['Overwater Villa', 'Spa Access', 'Private Beach', 'Luxury Dining'],
      rating: 9,
      category: 'Luxury',
    },
    {
      id: 2,
      title: 'Mediterranean Cruise Experience',
      destination: 'Italy, France & Spain',
      duration: '7 Days / 6 Nights',
      price: '₹2,10,000',
      originalPrice: '₹2,60,000',
      image: 'https://images.unsplash.com/photo-1670773973654-a6ddc703e1a4?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      features: ['Ocean View Cabins', 'Gourmet Meals', 'Shore Excursions', 'Evening Shows'],
      rating: 9,
      category: 'Cruise',
    },
    {
      id: 3,
      title: 'Dubai Yacht Getaway',
      destination: 'Dubai Marina',
      duration: '3 Days / 2 Nights',
      price: '₹85,000',
      originalPrice: '₹1,10,000',
      image: 'https://plus.unsplash.com/premium_photo-1661963885635-2b428cedce28?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      features: ['Luxury Yacht', 'Champagne on Board', 'Sunset Dinner', 'Skyline Views'],
      rating: 8,
      category: 'Yacht',
    }
  ];

  const handleQuickBook = (id) => {
    setSelectedPackage(id);
    setTimeout(() => {
      alert(`Booking initiated for package ${id}!`);
      setSelectedPackage(null);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-sky-600 to-blue-800 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1688269910705-2d2a9d943a95?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl px-6">
          <h1 className="text-5xl font-bold mb-4">Cruise & Luxury Escapes</h1>
          <p className="text-xl mb-8">Indulge in the world’s most opulent and relaxing travel experiences</p>
          <div className="flex justify-center space-x-4">
            <Link href="#packages" className="bg-white text-blue-700 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
              View Packages
            </Link>
            <Link href="/" className="border border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Cruise & Luxury Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover premium destinations with luxury accommodations and top-tier services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {luxuryPackages.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="relative">
                  <img src={pkg.image} alt={pkg.title} className="w-full h-48 object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Save ₹{parseInt(pkg.originalPrice.replace('₹', '')) - parseInt(pkg.price.replace('₹', ''))}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <div className="flex items-center">
                      <i className="ri-star-fill text-yellow-400 mr-1"></i>
                      <span className="text-sm font-medium">{pkg.rating}</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-blue-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {pkg.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{pkg.title}</h3>
                  <p className="text-gray-600 mb-1">{pkg.destination}</p>
                  <p className="text-sm text-gray-500 mb-4">{pkg.duration}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {pkg.features.map((feature, i) => (
                      <span key={i} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-gray-800">{pkg.price}</span>
                      <span className="text-sm text-gray-500 line-through ml-2">{pkg.originalPrice}</span>
                    </div>
                    <span className="text-sm text-gray-500">per person</span>
                  </div>

                  <button
                    onClick={() => handleQuickBook(pkg.id)}
                    disabled={selectedPackage === pkg.id}
                    className={`w-full py-3 px-6 rounded-full font-medium transition-all ${
                      selectedPackage === pkg.id
                        ? 'bg-gray-400 text-white'
                        : 'bg-blue-700 text-white hover:bg-blue-800'
                    }`}
                  >
                    {selectedPackage === pkg.id ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                        Booking...
                      </div>
                    ) : (
                      'Book Now'
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
