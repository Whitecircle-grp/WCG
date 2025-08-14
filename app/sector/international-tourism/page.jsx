
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function InternationalTourismPage() {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const internationalPackages = [
    {
      id: 1,
      title: 'Dubai & Abu Dhabi',
      destination: 'UAE - Dubai & Abu Dhabi',
      duration: '6 Days / 5 Nights',
      price: '₹89,999',
      originalPrice: '₹1,05,999',
      image: 'https://plus.unsplash.com/premium_photo-1697729914552-368899dc4757?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      features: ['Burj Khalifa Visit', 'Desert Safari', 'Luxury Hotels', 'Shopping Tours'],
      rating: 9,
      category: 'Luxury'
    },
    {
      id: 2,
      title: 'Singapore & Malaysia',
      destination: 'Singapore & Kuala Lumpur',
      duration: '7 Days / 6 Nights',
      price: '₹95,999',
      originalPrice: '₹1,12,999',
      image: 'https://images.unsplash.com/photo-1508964942454-1a56651d54ac?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      features: ['Marina Bay Sands', 'Universal Studios', 'Petronas Towers', 'Food Tours'],
      rating: 8,
      category: 'City Break'
    },
    {
      id: 3,
      title: 'Thailand Paradise',
      destination: 'Bangkok, Phuket & Pattaya',
      duration: '8 Days / 7 Nights',
      price: '₹75,999',
      originalPrice: '₹89,999',
      image: 'https://images.unsplash.com/photo-1690299490301-2eb3865bee58?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      features: ['Beach Resorts', 'Temple Tours', 'Island Hopping', 'Thai Massage'],
      rating: 7,
      category: 'Beach & Culture'
    },
    {
      id: 4,
      title: 'Europe Grand Tour',
      destination: 'Paris, Rome & London',
      duration: '10 Days / 9 Nights',
      price: '₹1,85,999',
      originalPrice: '₹2,15,999',
      image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      features: ['Historic Landmarks', 'Museum Tours', 'European Cuisine', 'City Walks'],
      rating: 9,
      category: 'Heritage'
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
      <section className="relative h-96 bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://plus.unsplash.com/premium_photo-1675975635390-6ca4d5c056b2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl px-6">
          <h1 className="text-5xl font-bold mb-4">Explore the World</h1>
          <p className="text-xl mb-8">
            Discover amazing international destinations with our carefully curated global travel packages
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="#packages" className="bg-white text-purple-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
              Explore Packages
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">International Tour Packages</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Embark on extraordinary journeys to world-famous destinations with our premium international travel experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {internationalPackages.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-2xl shadow-lg overflow-hidden transition-shadow hover:shadow-xl">
                <div className="relative">
                  <img src={pkg.image} alt={pkg.title} className="w-full h-48 object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Save ₹
                      {parseInt(pkg.originalPrice.replace(/₹|,/g, '')) -
                        parseInt(pkg.price.replace(/₹|,/g, ''))}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <div className="flex items-center">
                      <i className="ri-star-fill text-yellow-400"></i>
                      <span className="text-sm font-medium ml-1">{pkg.rating}</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
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
                      <span key={index} className="bg-purple-50 text-purple-600 px-3 py-1 rounded-full text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-2xl font-bold text-gray-800">{pkg.price}</span>
                    <span className="text-sm text-gray-500 line-through">{pkg.originalPrice}</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">per person</p>

                  <button
                    onClick={() => handleQuickBook(pkg.id)}
                    disabled={selectedPackage === pkg.id}
                    className={`w-full py-3 px-6 rounded-full font-medium transition-all ${
                      selectedPackage === pkg.id
                        ? 'bg-gray-400 text-white'
                        : 'bg-purple-600 text-white hover:bg-purple-700'
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
            <Link href="/" className="bg-gray-100 text-gray-700 px-8 py-3 rounded-full hover:bg-gray-200 transition-colors">
              View More Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-12 bg-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                icon: 'ri-earth-line',
                title: '50+ Countries',
                description: 'Covering major international destinations worldwide',
              },
              {
                icon: 'ri-passport-line',
                title: 'Visa Assistance',
                description: 'Complete visa support and documentation help',
              },
              {
                icon: 'ri-flight-takeoff-line',
                title: 'Flight Bookings',
                description: 'Best flight deals and convenient booking options',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                  <i className={`${item.icon} text-purple-600 text-xl`}></i>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

