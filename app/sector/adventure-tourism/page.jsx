'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function AdventureTourismPage() {
  const packages = [
    {
      id: 1,
      name: "Himalayan Trekking Expedition",
      location: "Himachal Pradesh & Uttarakhand",
      price: "₹65,999",
      duration: "12 days",
      rating: 8,
      difficulty: "Extreme",
      image: "https://plus.unsplash.com/premium_photo-1754590179764-0f36db5fcbb0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      features: ["High Altitude Camping", "Professional Guides", "Technical Equipment", "Medical Support"]
    },
    {
      id: 2,
      name: "White Water Rafting Rishikesh",
      location: "Uttarakhand",
      price: "₹18,999",
      duration: "3 days",
      rating: 6,
      difficulty: "Moderate",
      image: "https://images.unsplash.com/photo-1715230655559-c72e0cd1559e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      features: ["Rapids Training", "Safety Equipment", "Riverside Camping", "Yoga Sessions"]
    },
    {
      id: 3,
      name: "Desert Safari & Dune Bashing",
      location: "Rajasthan",
      price: "₹35,999",
      duration: "5 days",
      rating: 7,
      difficulty: "Easy",
      image: "https://images.unsplash.com/photo-1624062999726-083e5268525d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      features: ["4x4 Vehicles", "Camel Riding", "Desert Camping", "Cultural Shows"]
    },
    {
      id: 4,
      name: "Scuba Diving Andaman",
      location: "Andaman Islands",
      price: "₹45,999",
      duration: "6 days",
      rating: 9,
      difficulty: "Moderate",
      image: "https://plus.unsplash.com/premium_photo-1750316539292-1a5cedfb9f03?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      features: ["PADI Certification", "Underwater Photography", "Marine Life Tours", "Island Hopping"]
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-100 text-green-800';
      case 'Moderate':
        return 'bg-yellow-100 text-yellow-800';
      case 'Extreme':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-96 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1468078809804-4c7b3e60a478?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Adventure Tourism</h1>
          <p className="text-xl md:text-2xl mb-8">Push Your Limits & Discover the Extraordinary</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {["Extreme Sports", "Professional Guides", "Safety First", "All Skill Levels"].map((tag) => (
              <span key={tag} className="bg-red-600 px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: "ri-mountain-line", title: "Extreme Adventures", desc: "Challenging expeditions for thrill seekers" },
              { icon: "ri-shield-check-line", title: "Safety Certified", desc: "Professional equipment and trained guides" },
              { icon: "ri-award-line", title: "Expert Instructors", desc: "Learn from the best in the industry" },
              { icon: "ri-camera-line", title: "Capture Memories", desc: "Professional photography included" },
            ].map((item, i) => (
              <div key={i}>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${item.icon} text-red-600 text-2xl`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Adventure Packages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Adventure Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-48 object-cover object-top"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(pkg.difficulty)}`}>
                      {pkg.difficulty}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                      <div className="flex items-center">
                        <i className="ri-star-fill text-yellow-400 text-sm"></i>
                        <span className="ml-1 text-sm font-semibold">{pkg.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-4 flex items-center">
                    <i className="ri-map-pin-line mr-2 text-lg text-red-500"></i>
                    {pkg.location}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-red-600">{pkg.price}</div>
                    <div className="text-gray-500">{pkg.duration}</div>
                  </div>
                  <div className="space-y-2 mb-6">
                    {pkg.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <i className="ri-check-line text-green-500 mr-2"></i>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <button className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors">
                    Book Adventure
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
