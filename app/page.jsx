
'use client';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import DestinationCarousel from '@/components/DestinationCarousel';
import FeaturedPackages from '@/components/FeaturedPackages';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <DestinationCarousel />
      <FeaturedPackages />
      <Footer />
    </div>
  );
}
