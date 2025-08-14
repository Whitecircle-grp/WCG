'use client';

import { useState } from 'react';

export default function FeaturedPackages() {
  const [selectedPackage, setSelectedPackage] = useState(null);


  const packages = [
    {
      id: 1,
      title: 'Kashmir Paradise',
      destination: 'Srinagar, Gulmarg & Pahalgam',
      duration: '6 Days / 5 Nights',
      price: '₹45,999',
      originalPrice: '₹55,999',
      image: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      features: ['Houseboat Stay', 'Shikara Ride', 'Gulmarg Gondola', 'Saffron Gardens'],
      rating: 9
    },
    {
      id: 2,
      title: 'Manali Adventure',
      destination: 'Manali, Solang Valley & Rohtang',
      duration: '5 Days / 4 Nights',
      price: '₹28,999',
      originalPrice: '₹35,999',
      image: 'https://images.unsplash.com/photo-1712388430474-ace0c16051e2?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      features: ['Adventure Sports', 'River Rafting', 'Paragliding', 'Mountain Views'],
      rating: 8
    },
    {
      id: 3,
      title: 'Kedarnath Spiritual Journey',
      destination: 'Kedarnath, Rudraprayag & Guptkashi',
      duration: '4 Days / 3 Nights',
      price: '₹22,999',
      originalPrice: '₹28,999',
      image: 'https://images.unsplash.com/photo-1612438214708-f428a707dd4e?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      features: ['Temple Darshan', 'Helicopter Service', 'Spiritual Guides', 'Sacred Rituals'],
      rating: 7
    },
    {
      id: 4,
      title: 'South India Heritage',
      destination: 'Kerala, Tamil Nadu & Karnataka',
      duration: '8 Days / 7 Nights',
      price: '₹52,999',
      originalPrice: '₹65,999',
      image: 'https://plus.unsplash.com/premium_photo-1697729438401-fcb4ff66d9a8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      features: ['Backwater Cruise', 'Temple Tours', 'Cultural Shows', 'Ayurvedic Spa'],
      rating: 9
    },
    {
      id: 5,
      title: 'Rajasthan Royal Experience',
      destination: 'Jaipur, Udaipur & Jodhpur',
      duration: '7 Days / 6 Nights',
      price: '₹42,999',
      originalPrice: '₹52,999',
      image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      features: ['Palace Hotels', 'Desert Safari', 'Cultural Tours', 'Royal Dining'],
      rating: 8
    },
    {
      id: 6,
      title: 'Goa Beach Escape',
      destination: 'North & South Goa',
      duration: '5 Days / 4 Nights',
      price: '₹32,999',
      originalPrice: '₹39,999',
      image: 'https://plus.unsplash.com/premium_photo-1697729594707-0fc9e51c8eed?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      features: ['Beach Resorts', 'Water Sports', 'Sunset Cruise', 'Nightlife'],
      rating: 6
    }
  ];

  const handleQuickBook = (packageId) => {
    setSelectedPackage(packageId);
    // Simulate booking process
    setTimeout(() => {
      alert(`Booking initiated for package ${packageId}!`);
      setSelectedPackage(null);
    }, 1000);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Featured Tour Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the incredible diversity of India with our carefully curated domestic tour packages
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {packages.map((pkg) => (
    <div key={pkg.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-48 object-cover object-top"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Save ₹
            {parseInt(pkg.originalPrice.replace('₹', '').replace(',', '')) -
              parseInt(pkg.price.replace('₹', '').replace(',', ''))}
          </span>
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
          <div className="flex items-center">
            <i className="ri-star-fill text-yellow-400 w-4 h-4 flex items-center justify-center"></i>
            <span className="text-sm font-medium ml-1">{pkg.rating}</span>
          </div>
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

        <div className="flex items-center justify-between mb-1">
          <div>
            <span className="text-2xl font-bold text-gray-800">{pkg.price}</span>
            <span className="text-sm text-gray-500 line-through ml-2">{pkg.originalPrice}</span>
          </div>
        </div>
        <span className="text-sm text-gray-500">per person</span>
      </div>

      <div className="px-6 pb-6">
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
            'Quick Book Now'
          )}
        </button>
      </div>
    </div>
  ))}
</div>


        <div className="text-center mt-12">
          <button className="bg-gray-100 text-gray-700 px-8 py-3 rounded-full hover-gray-200 transition-colors whitespace-nowrap cursor-pointer">
            View All Packages
          </button>
        </div>
      </div>
    </section>
  );
}