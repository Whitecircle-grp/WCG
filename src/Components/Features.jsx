import React, { useState } from "react";
import { Link } from "react-router-dom";

import rid from "../assets/rid.webp";
import cid from "../assets/cid.webp";
import lsa from "../assets/lsa.webp";
import hd from "../assets/hd.jpg";
import rsd from "../assets/rsd.jpg";
import hcd from "../assets/hcd.jpg";
import osd from "../assets/osd.webp";
import mfd from "../assets/mfd.jpg";
import her from "../assets/her.webp";
import id from "../assets/id.jpg";

// Each image has a static rating (1 to 5)
const sectors = [
  {
    name: "Residential Interior Design",
    images: [
      { src: rid, rating: 5 },
      { src: rsd, rating: 4 },
      { src: cid, rating: 4 },
    ],
  },
  {
    name: "Commercial Interior Design",
    images: [{ src: cid, rating: 3 }],
  },
  {
    name: "Landscape Architecture",
    images: [{ src: lsa, rating: 5 }],
  },
  {
    name: "Hospitality Design (Hotels, Resorts)",
    images: [{ src: hd, rating: 4 }],
  },
  {
    name: "Retail & Showroom Design",
    images: [{ src: rsd, rating: 3 }],
  },
  {
    name: "Healthcare Design (Clinics, Hospitals)",
    images: [{ src: hcd, rating: 5 }],
  },
  {
    name: "Institutional Design (Schools, Colleges)",
    images: [{ src: id, rating: 4 }],
  },
  {
    name: "Office Space Design",
    images: [{ src: osd, rating: 4 }],
  },
  {
    name: "Heritage & Cultural Restoration",
    images: [{ src: her, rating: 5 }],
  },
  {
    name: "Modular Furniture & Space Planning",
    images: [{ src: mfd, rating: 4 }],
  },
];

// Helper to render static stars
const StaticStars = ({ rating }) => {
  return (
    <div className="flex gap-1 text-xl" aria-label={`Rating: ${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>{i < rating ? "★" : "☆"}</span>
      ))}
    </div>
  );
};

const Features = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedSector, setSelectedSector] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleClick = (sector) => {
    setSelectedSector(sector);
    setActiveImageIndex(0);
    setShowModal(true);
  };

  return (
    <section
      id="features"
      className="bg-[#B6D9E0] py-16 px-4 text-center relative"
    >
      <h2 className="text-4xl font-bold text-[#7F543D] mb-4">
        Our Design Services
      </h2>
      <p className="text-1xl text-[#335765] text-base mb-8">
        Click the following to see the preview:
      </p>

      <div className="max-w-3xl mx-auto text-left mt-6">
        <ul className="list-disc list-inside space-y-4">
          {sectors.map((sector, index) => (
            <li key={index}>
              <button
                onClick={() => handleClick(sector)}
                className="text-[#335765] text-xl hover:text-[#7F543D] hover:text-2xl transition-all duration-200"
              >
                {sector.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Modal */}
      {showModal && selectedSector && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
          <div className="relative bg-white p-6 rounded-md shadow-lg max-w-3xl w-full text-center">
            {/* Close Button */}
            <button
              className="absolute top-2 right-4 text-gray-600 hover:text-red-600 text-xl font-bold"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-4 text-[#7F543D]">
              {selectedSector.name}
            </h3>

            {/* Image Display */}
            <div className="relative">
              <img
                src={selectedSector.images[activeImageIndex].src}
                alt={`${selectedSector.name} ${activeImageIndex + 1}`}
                className="w-full h-auto rounded-md"
              />

              {/* Static Rating for current image */}
              <div className="mt-3 flex justify-center items-center gap-2">
                <StaticStars
                  rating={
                    selectedSector.images[activeImageIndex].rating || 0
                  }
                />
                <span className="text-sm text-[#335765]">
                  {selectedSector.images[activeImageIndex].rating} / 5
                </span>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mt-6">
                <button
                  className="px-4 py-2 bg-[#335765] text-white rounded-md hover:bg-[#74A8A4] disabled:opacity-50"
                  onClick={() =>
                    setActiveImageIndex((prev) =>
                      Math.max(0, prev - 1)
                    )
                  }
                  disabled={activeImageIndex === 0}
                >
                  Previous
                </button>

                <div className="flex flex-col items-center">
                  <span className="text-[#335765] font-medium">
                    {activeImageIndex + 1} of {selectedSector.images.length}
                  </span>
                </div>

                <button
                  className="px-4 py-2 bg-[#335765] text-white rounded-md hover:bg-[#74A8A4] disabled:opacity-50"
                  onClick={() =>
                    setActiveImageIndex((prev) =>
                      Math.min(
                        selectedSector.images.length - 1,
                        prev + 1
                      )
                    )
                  }
                  disabled={
                    activeImageIndex === selectedSector.images.length - 1
                  }
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Features;
