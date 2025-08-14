"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import {
  Shirt,
  Smartphone,
  ShoppingCart,
  Heart,
  Home,
  Sparkles,
  GraduationCap,
  Baby,
  Car,
  BookOpen,
  PawPrint,
  Gem,
  Building2,
  Plane,
  ShoppingBag,
} from "lucide-react"

interface Product {
  id: string
  name: string
  price: number
  description: string
  image: string
}

interface Sector {
  id: string
  name: string
  icon: React.ReactNode
  description: string
  color: string
  products: Product[]
}

const sectors: Sector[] = [
  {
    id: "fashion",
    name: "Fashion & Apparel",
    icon: <Shirt className="w-6 h-6" />,
    description: "Clothing, shoes, and fashion accessories marketplace",
    color: "bg-pink-500 hover:bg-pink-600",
    products: [
      {
        id: "f1",
        name: "Designer Summer Dress",
        price: 89.99,
        description:
          "Elegant floral summer dress made from premium cotton blend. Perfect for casual and semi-formal occasions.",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        id: "f2",
        name: "Premium Leather Jacket",
        price: 299.99,
        description: "Genuine leather jacket with modern cut. Durable, stylish, and perfect for all seasons.",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        id: "f3",
        name: "Athletic Running Shoes",
        price: 129.99,
        description: "High-performance running shoes with advanced cushioning and breathable mesh upper.",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        id: "f4",
        name: "Luxury Silk Scarf",
        price: 45.99,
        description: "100% pure silk scarf with hand-printed patterns. Adds elegance to any outfit.",
        image: "/placeholder.svg?height=200&width=200",
      },
    ],
  },
  {
    id: "electronics",
    name: "Electronics & Gadgets",
    icon: <Smartphone className="w-6 h-6" />,
    description: "Latest technology and electronic devices",
    color: "bg-blue-500 hover:bg-blue-600",
    products: [
      {
        id: "e1",
        name: "Wireless Bluetooth Headphones",
        price: 199.99,
        description: "Premium noise-canceling headphones with 30-hour battery life and crystal-clear audio quality.",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        id: "e2",
        name: "Smart Fitness Watch",
        price: 349.99,
        description: "Advanced fitness tracker with heart rate monitoring, GPS, and smartphone connectivity.",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        id: "e3",
        name: "Portable Power Bank",
        price: 39.99,
        description: "High-capacity 20,000mAh power bank with fast charging and multiple USB ports.",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        id: "e4",
        name: "4K Webcam",
        price: 89.99,
        description: "Ultra HD webcam with auto-focus and built-in microphone for professional video calls.",
        image: "/placeholder.svg?height=200&width=200",
      },
    ],
  },
  {
    id: "automotive",
    name: "Automotive",
    icon: <Car className="w-6 h-6" />,
    description: "Car parts, accessories, and automotive services",
    color: "bg-gray-500 hover:bg-gray-600",
    products: [
      {
        id: "a1",
        name: "Premium Engine Oil",
        price: 24.99,
        description: "High-performance synthetic engine oil for optimal engine protection and fuel efficiency.",
        image: "/images/automotive-shop.png",
      },
      {
        id: "a2",
        name: "LED Headlight Kit",
        price: 149.99,
        description: "Ultra-bright LED headlight conversion kit with easy installation and long lifespan.",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        id: "a3",
        name: "Car Dashboard Camera",
        price: 79.99,
        description: "Full HD dashboard camera with night vision and automatic accident detection.",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        id: "a4",
        name: "Tire Pressure Monitor",
        price: 59.99,
        description: "Wireless tire pressure monitoring system with real-time alerts and smartphone app.",
        image: "/placeholder.svg?height=200&width=200",
      },
    ],
  },
  {
    id: "health",
    name: "Health & Wellness",
    icon: <Heart className="w-6 h-6" />,
    description: "Healthcare products and wellness solutions",
    color: "bg-red-500 hover:bg-red-600",
    products: [
      {
        id: "h1",
        name: "Digital Blood Pressure Monitor",
        price: 69.99,
        description: "Accurate digital blood pressure monitor with large display and memory storage.",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        id: "h2",
        name: "Vitamin D3 Supplements",
        price: 19.99,
        description: "High-potency Vitamin D3 capsules for bone health and immune system support.",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        id: "h3",
        name: "Yoga Mat Premium",
        price: 34.99,
        description: "Non-slip premium yoga mat with extra cushioning and eco-friendly materials.",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        id: "h4",
        name: "Essential Oil Diffuser",
        price: 49.99,
        description: "Ultrasonic aromatherapy diffuser with LED lights and timer settings.",
        image: "/placeholder.svg?height=200&width=200",
      },
    ],
  },
]

export default function ServicesPage() {
  const [selectedSector, setSelectedSector] = useState<Sector | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSectorClick = (sector: Sector) => {
    setSelectedSector(sector)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedSector(null)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <ShoppingBag className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">EcomHub</span>
            </div>
            <div className="flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
                Home
              </Link>
              <Link href="/services" className="text-gray-900 hover:text-blue-600 font-medium">
                Services
              </Link>
              <Link href="/feedback" className="text-gray-700 hover:text-blue-600 font-medium">
                Feedback
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive e-commerce solutions across various industries. Click on any sector to view our
            products and services.
          </p>
        </div>

        {/* Services Sections */}
        <div className="space-y-16">
          {/* Featured Sectors */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Sectors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sectors.map((sector) => (
                <Card
                  key={sector.id}
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => handleSectorClick(sector)}
                >
                  <CardHeader className="text-center">
                    <div
                      className={`${sector.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white`}
                    >
                      {sector.icon}
                    </div>
                    <CardTitle className="text-lg">{sector.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm text-center">{sector.description}</p>
                    <Button className="w-full mt-4 bg-transparent" variant="outline">
                      View Products
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* All Sectors Grid */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">All Industries</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { name: "Grocery & Food", icon: <ShoppingCart className="w-5 h-5" />, color: "bg-green-500" },
                { name: "Furniture & Home", icon: <Home className="w-5 h-5" />, color: "bg-amber-500" },
                { name: "Beauty & Care", icon: <Sparkles className="w-5 h-5" />, color: "bg-purple-500" },
                { name: "Education", icon: <GraduationCap className="w-5 h-5" />, color: "bg-indigo-500" },
                { name: "Toys & Kids", icon: <Baby className="w-5 h-5" />, color: "bg-orange-500" },
                { name: "Books & Stationery", icon: <BookOpen className="w-5 h-5" />, color: "bg-teal-500" },
                { name: "Pet Supplies", icon: <PawPrint className="w-5 h-5" />, color: "bg-emerald-500" },
                { name: "Jewelry", icon: <Gem className="w-5 h-5" />, color: "bg-yellow-500" },
                { name: "B2B Industrial", icon: <Building2 className="w-5 h-5" />, color: "bg-slate-500" },
                { name: "Travel", icon: <Plane className="w-5 h-5" />, color: "bg-cyan-500" },
              ].map((item, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="h-20 flex flex-col items-center gap-2 hover:shadow-md transition-shadow bg-transparent"
                >
                  <div className={`${item.color} w-8 h-8 rounded-full flex items-center justify-center text-white`}>
                    {item.icon}
                  </div>
                  <span className="text-xs text-center">{item.name}</span>
                </Button>
              ))}
            </div>
          </section>
        </div>

        {/* Product Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
            {selectedSector && (
              <>
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-3 text-2xl">
                    {selectedSector.icon}
                    {selectedSector.name}
                  </DialogTitle>
                </DialogHeader>

                <div className="space-y-6">
                  <p className="text-gray-600 text-lg">{selectedSector.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {selectedSector.products.map((product) => (
                      <Card key={product.id} className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex gap-4">
                            <img
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                            />
                            <div className="flex-1">
                              <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                              <p className="text-2xl font-bold text-blue-600 mb-2">${product.price}</p>
                              <p className="text-gray-600 text-sm">{product.description}</p>
                              <Button className="mt-3 w-full" size="sm">
                                Add to Cart
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
