'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function DomesticTourismPage() {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const domesticPackages = [
    {
      id: 1,
      title: 'Ladakh Adventure',
      destination: 'Leh, Nubra Valley & Pangong Lake',
      duration: '7 Days / 6 Nights',
      price: '₹42,999',
      originalPrice: '₹52,999',
      image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      features: ['High Altitude Lakes', 'Monastery Visits', 'Desert Safari', 'Mountain Views'],
      rating: 8,
      category: 'Adventure',
    },
    {
      id: 2,
      title: 'Kerala Backwaters',
      destination: 'Alleppey, Kumarakom & Kochi',
      duration: '5 Days / 4 Nights',
      price: '₹28,999',
      originalPrice: '₹35,999',
      image: 'https://plus.unsplash.com/premium_photo-1697729438401-fcb4ff66d9a8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      features: ['Houseboat Stay', 'Backwater Cruise', 'Spice Gardens', 'Ayurvedic Spa'],
      rating: 9,
      category: 'Relaxation',
    },
    {
      id: 3,
      title: 'Himachal Hill Stations',
      destination: 'Shimla, Manali & Dharamshala',
      duration: '6 Days / 5 Nights',
      price: '₹32,999',
      originalPrice: '₹39,999',
      image: 'https://plus.unsplash.com/premium_photo-1697729729075-3e56242aef49?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      features: ['Mountain Views', 'Colonial Heritage', 'Adventure Sports', 'Apple Orchards'],
      rating: 7,
      category: 'Hill Station',
    },
    {
      id: 4,
      title: 'Rajasthan Royal Circuit',
      destination: 'Jaipur, Udaipur & Jaisalmer',
      duration: '8 Days / 7 Nights',
      price: '₹48,999',
      originalPrice: '₹58,999',
      image: 'https://images.unsplash.com/photo-1631867675167-90a456a90863?q=80&w=1179&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      features: ['Palace Hotels', 'Desert Safari', 'Cultural Shows', 'Heritage Walks'],
      rating: 9,
      category: 'Heritage',
    },
    {
      id: 5,
      title: 'Goa Beach Paradise',
      destination: 'North & South Goa',
      duration: '4 Days / 3 Nights',
      price: '₹22,999',
      originalPrice: '₹28,999',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      features: ['Beach Resorts', 'Water Sports', 'Portuguese Heritage', 'Nightlife'],
      rating: 6,
      category: 'Beach',
    },
    {
      id: 6,
      title: 'Uttarakhand Spiritual Journey',
      destination: 'Rishikesh, Haridwar & Dehradun',
      duration: '5 Days / 4 Nights',
      price: '₹26,999',
      originalPrice: '₹32,999',
      image: 'https://plus.unsplash.com/premium_photo-1697730398251-40cd8dc57e0b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      features: ['Spiritual Tours', 'Yoga Classes', 'River Rafting', 'Temple Visits'],
      rating: 8,
      category: 'Spiritual',
    }
  ];

  const handleQuickBook = (packageId) => {
    setSelectedPackage(packageId);
    setTimeout(() => {
      alert(`Booking initiated for package ${packageId}!`);
      setSelectedPackage(null);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1519998994457-43c1f2c8460b?q=80&w=1272&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl px-6">
          <h1 className="text-5xl font-bold mb-4">Discover Domestic India</h1>
          <p className="text-xl mb-8">Explore the incredible diversity of Indian destinations from mountains to beaches, heritage to spirituality</p>
          <div className="flex justify-center space-x-4">
            <Link href="#packages" className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
              Explore Packages
            </Link>
            <Link href="/" className="border border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors whitespace-nowrap cursor-pointer">
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
              Domestic Tour Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Carefully curated experiences showcasing India's rich heritage, natural beauty, and cultural diversity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {domesticPackages.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-48 object-cover object-top"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Save ₹{parseInt(pkg.originalPrice.replace('₹', '').replace(',', '')) - parseInt(pkg.price.replace('₹', '').replace(',', ''))}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <div className="flex items-center">
                      <i className="ri-star-fill text-yellow-400 w-4 h-4 flex items-center justify-center"></i>
                      <span className="text-sm font-medium ml-1">{pkg.rating}</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {pkg.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{pkg.title}</h3>
                  <p className="text-gray-600 mb-1">{pkg.destination}</p>
                  <p className="text-sm text-gray-500 mb-4">{pkg.duration}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {pkg.features.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm"
                      >
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
                    className={`w-full py-3 px-6 rounded-full font-medium transition-all whitespace-nowrap cursor-pointer ${
                      selectedPackage === pkg.id
                        ? 'bg-gray-400 text-white'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
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

          <div className="text-center mt-12">
            <Link href="/" className="bg-gray-100 text-gray-700 px-8 py-3 rounded-full hover:bg-gray-200 transition-colors whitespace-nowrap cursor-pointer">
              View More Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-map-pin-line text-blue-600 w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">28+ Destinations</h3>
              <p className="text-gray-600">Covering all major Indian states and union territories</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-green-600 w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">100% Safe Travel</h3>
              <p className="text-gray-600">All tours follow safety protocols and guidelines</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-customer-service-line text-purple-600 w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer support during your journey</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
