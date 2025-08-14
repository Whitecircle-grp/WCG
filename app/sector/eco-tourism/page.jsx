
'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function EcoTourismPage() {
  const packages = [
    {
      id: 1,
      name: "Western Ghats Biodiversity Tour",
      location: "Kerala & Karnataka",
      price: "₹32,999",
      duration: "6 days",
      rating: 8,
      category: "Wildlife",
      image: "https://plus.unsplash.com/premium_photo-1697730310113-e44fced8e86c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      features: ["Wildlife Safaris", "Bird Watching", "Nature Walks", "Eco Lodges"]
    },
    {
      id: 2,
      name: "Himalayan Conservation Trek",
      location: "Himachal Pradesh",
      price: "₹45,999",
      duration: "8 days",
      rating: 9,
      category: "Conservation",
      image: "https://plus.unsplash.com/premium_photo-1692299547964-7c38e8ff94cf?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      features: ["Eco Trekking", "Conservation Projects", "Local Communities", "Organic Meals"]
    },
    {
      id: 3,
      name: "Mangrove Ecosystem Exploration",
      location: "Sunderbans, West Bengal",
      price: "₹28,999",
      duration: "5 days",
      rating: 7,
      category: "Marine Life",
      image: "https://images.unsplash.com/photo-1589556183130-530470785fab?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      features: ["Boat Safaris", "Marine Biology", "Eco Guides", "Sustainable Tourism"]
    },
    {
      id: 4,
      name: "Organic Farm Experience",
      location: "Uttarakhand Hills",
      price: "₹22,999",
      duration: "4 days",
      rating: 6,
      category: "Agro Tourism",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      features: ["Farm Activities", "Organic Cooking", "Rural Experience", "Eco Workshops"]
    }
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Wildlife':
        return 'bg-green-100 text-green-800';
      case 'Conservation':
        return 'bg-blue-100 text-blue-800';
      case 'Marine Life':
        return 'bg-cyan-100 text-cyan-800';
      case 'Agro Tourism':
        return 'bg-lime-100 text-lime-800';
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
          backgroundImage: `url('https://images.unsplash.com/photo-1635802270753-00ba6b11f3fd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Eco-Tourism</h1>
          <p className="text-xl md:text-2xl mb-8">Sustainable Travel for a Better Tomorrow</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {["Wildlife Conservation", "Sustainable Tourism", "Local Communities", "Zero Waste"].map((label, i) => (
              <span key={i} className="bg-green-600 px-3 py-1 rounded-full">{label}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: "ri-leaf-line", title: "Sustainable Travel", desc: "Minimize environmental impact while exploring" },
              { icon: "ri-heart-3-line", title: "Conservation Support", desc: "Contribute to wildlife and habitat protection" },
              { icon: "ri-community-line", title: "Local Communities", desc: "Support local economies and traditions" },
              { icon: "ri-recycle-line", title: "Zero Waste", desc: "Eco-friendly practices throughout your journey" }
            ].map((item, i) => (
              <div key={i}>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${item.icon} text-green-600 w-8 h-8`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eco-Tourism Packages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Eco-Tourism Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img src={pkg.image} alt={pkg.name} className="w-full h-48 object-cover object-top" />
                  <div className="absolute top-4 left-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getCategoryColor(pkg.category)}`}>
                      {pkg.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                    <div className="flex items-center">
                      <i className="ri-star-fill text-yellow-400 w-4 h-4"></i>
                      <span className="ml-1 text-sm font-semibold">{pkg.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-4 flex items-center">
                    <i className="ri-map-pin-line mr-2 w-4 h-4"></i>
                    {pkg.location}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-green-600">{pkg.price}</div>
                    <div className="text-gray-500">{pkg.duration}</div>
                  </div>
                  <div className="space-y-2 mb-6">
                    {pkg.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-600">
                        <i className="ri-check-line text-green-500 mr-2 w-4 h-4"></i>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors">
                    Go Green
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

