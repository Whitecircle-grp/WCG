
'use client';

import { useState, useEffect } from 'react';

export default function DestinationCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const destinations = [
    {
      name: 'Santorini, Greece',
      description: 'Iconic blue domes and stunning sunsets',
      image: 'https://plus.unsplash.com/premium_photo-1661963725253-c0632ab8782d?q=80&w=1207&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 'From $1,299'
    },
    {
      name: 'Bali, Indonesia',
      description: 'Tropical paradise with rich culture',
      image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 'From $899'
    },
    {
      name: 'Machu Picchu, Peru',
      description: 'Ancient wonder of the world',
      image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 'From $1,599'
    },
    {
      name: 'Kyoto, Japan',
      description: 'Traditional temples and gardens',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 'From $1,199'
    },
    {
      name: 'Maldives',
      description: 'Overwater villas and crystal waters',
      image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 'From $2,299'
    },
    {
      name: 'Swiss Alps',
      description: 'Majestic mountains and alpine lakes',
      image: 'https://images.unsplash.com/photo-1593186344142-ef775a6e596f?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 'From $1,799'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % destinations.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [destinations.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % destinations.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + destinations.length) % destinations.length);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Popular Global Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the world's most captivating destinations, each offering unique experiences and unforgettable memories
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {destinations.map((destination, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 lg-cols-2 bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="relative h-96 lg-auto">
                      <img
                        src={destination.image}
                        alt={destination.name}
                        className="w-full h-full object-cover object-top"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {destination.price}
                        </span>
                      </div>
                    </div>
                    <div className="p-8 lg-12 flex flex-col justify-center">
                      <h3 className="text-3xl font-bold text-gray-800 mb-4">
                        {destination.name}
                      </h3>
                      <p className="text-lg text-gray-600 mb-6">
                        {destination.description}
                      </p>
                      <div className="flex space-x-4">
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover-blue-700 transition-colors whitespace-nowrap cursor-pointer">
                          Book Now
                        </button>
                        <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full hover-blue-50 transition-colors whitespace-nowrap cursor-pointer">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover-white text-gray-700 p-3 rounded-full shadow-lg transition-all cursor-pointer"
          >
            <i className="ri-arrow-left-line w-6 h-6 flex items-center justify-center"></i>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover-white text-gray-700 p-3 rounded-full shadow-lg transition-all cursor-pointer"
          >
            <i className="ri-arrow-right-line w-6 h-6 flex items-center justify-center"></i>
          </button>

          <div className="flex justify-center mt-6 space-x-2">
            {destinations.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
