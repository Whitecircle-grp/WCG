'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function CulturalTourismPage() {
  const packages = [
    {
      id: 1,
      name: "Golden Triangle Heritage Tour",
      location: "Delhi, Agra, Jaipur",
      price: "₹38,999",
      duration: "7 days",
      rating: 8,
      category: "UNESCO Sites",
      image: "https://images.unsplash.com/photo-1640618225440-877bbc22cd30?q=80&w=628&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      features: ["UNESCO World Heritage Sites", "Local Cultural Shows", "Traditional Cuisine", "Heritage Walks"]
    },
    {
      id: 2,
      name: "Rajasthan Royal Heritage",
      location: "Udaipur, Jodhpur, Jaisalmer",
      price: "₹55,999",
      duration: "9 days",
      rating: 9,
      category: "Royal Experience",
      image: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      features: ["Palace Hotels Stay", "Folk Music & Dance", "Camel Safari", "Royal Dining"]
    },
    {
      id: 3,
      name: "South Indian Temple Trail",
      location: "Tamil Nadu, Karnataka",
      price: "₹42,999",
      duration: "8 days",
      rating: 7,
      category: "Spiritual Journey",
      image: "https://plus.unsplash.com/premium_photo-1697729444936-8c6a6f643312?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      features: ["Ancient Temples", "Spiritual Ceremonies", "Classical Music", "Traditional Art"]
    }
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case 'UNESCO Sites':
        return 'bg-amber-100 text-amber-800';
      case 'Royal Experience':
        return 'bg-purple-100 text-purple-800';
      case 'Spiritual Journey':
        return 'bg-orange-100 text-orange-800';
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
          backgroundImage: `url('https://images.unsplash.com/photo-1572945015532-741f8c49a7b2?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Cultural Tourism</h1>
          <p className="text-xl md:text-2xl mb-8">Immerse in India's Rich Heritage & Traditions</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {["UNESCO Sites", "Local Experiences", "Traditional Arts", "Heritage Walks"].map((tag) => (
              <span key={tag} className="bg-orange-600 px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: "ri-ancient-pavilion-line", title: "Heritage Sites", desc: "Explore ancient monuments and UNESCO sites" },
              { icon: "ri-user-heart-line", title: "Local Experiences", desc: "Authentic cultural immersion with locals" },
              { icon: "ri-palette-line", title: "Traditional Arts", desc: "Witness classical music, dance, and crafts" },
              { icon: "ri-restaurant-line", title: "Culinary Heritage", desc: "Taste authentic regional cuisines" }
            ].map((item, index) => (
              <div key={index}>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${item.icon} text-orange-600 text-2xl`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Packages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Cultural Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-48 object-cover object-top"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getCategoryColor(pkg.category)}`}>
                      {pkg.category}
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
                    <i className="ri-map-pin-line mr-2 text-lg text-orange-500"></i>
                    {pkg.location}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-orange-600">{pkg.price}</div>
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
                  <button className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors">
                    Explore Culture
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
