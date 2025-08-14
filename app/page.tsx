"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  ShoppingBag,
  Users,
  Award,
  Truck,
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
  Star,
  MessageCircle,
  Send,
  Menu,
  X,
  Search,
  User,
  Eye,
  EyeOff,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Clock,
  Moon,
  Sun,
  Shield,
  Coffee,
  Gamepad2,
  Music,
  Camera,
  Dumbbell,
  Utensils,
  Palette,
  Briefcase,
} from "lucide-react"

interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  description: string
  image: string
  rating: number
  reviews: number
  inStock: boolean
  category: string
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
        price: 7499,
        originalPrice: 9999,
        description:
          "Elegant floral summer dress made from premium cotton blend. Perfect for casual and semi-formal occasions.",
        image: "/placeholder.svg?height=200&width=200&text=Summer+Dress",
        rating: 4.5,
        reviews: 128,
        inStock: true,
        category: "Women's Clothing",
      },
      {
        id: "f2",
        name: "Premium Leather Jacket",
        price: 24999,
        description: "Genuine leather jacket with modern cut. Durable, stylish, and perfect for all seasons.",
        image: "/placeholder.svg?height=200&width=200&text=Leather+Jacket",
        rating: 4.8,
        reviews: 89,
        inStock: true,
        category: "Men's Clothing",
      },
      {
        id: "f3",
        name: "Athletic Running Shoes",
        price: 10799,
        originalPrice: 12999,
        description: "High-performance running shoes with advanced cushioning and breathable mesh upper.",
        image: "/placeholder.svg?height=200&width=200&text=Running+Shoes",
        rating: 4.6,
        reviews: 256,
        inStock: true,
        category: "Footwear",
      },
      {
        id: "f4",
        name: "Luxury Silk Scarf",
        price: 3799,
        description: "100% pure silk scarf with hand-printed patterns. Adds elegance to any outfit.",
        image: "/placeholder.svg?height=200&width=200&text=Silk+Scarf",
        rating: 4.3,
        reviews: 67,
        inStock: false,
        category: "Accessories",
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
        price: 16599,
        originalPrice: 19999,
        description: "Premium noise-canceling headphones with 30-hour battery life and crystal-clear audio quality.",
        image: "/placeholder.svg?height=200&width=200&text=Headphones",
        rating: 4.7,
        reviews: 342,
        inStock: true,
        category: "Audio",
      },
      {
        id: "e2",
        name: "Smart Fitness Watch",
        price: 29099,
        description: "Advanced fitness tracker with heart rate monitoring, GPS, and smartphone connectivity.",
        image: "/placeholder.svg?height=200&width=200&text=Smart+Watch",
        rating: 4.4,
        reviews: 198,
        inStock: true,
        category: "Wearables",
      },
      {
        id: "e3",
        name: "Portable Power Bank",
        price: 3299,
        originalPrice: 3999,
        description: "High-capacity 20,000mAh power bank with fast charging and multiple USB ports.",
        image: "/placeholder.svg?height=200&width=200&text=Power+Bank",
        rating: 4.2,
        reviews: 445,
        inStock: true,
        category: "Accessories",
      },
      {
        id: "e4",
        name: "4K Webcam",
        price: 7499,
        description: "Ultra HD webcam with auto-focus and built-in microphone for professional video calls.",
        image: "/placeholder.svg?height=200&width=200&text=Webcam",
        rating: 4.5,
        reviews: 123,
        inStock: true,
        category: "Computer Accessories",
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
        price: 2099,
        originalPrice: 2499,
        description: "High-performance synthetic engine oil for optimal engine protection and fuel efficiency.",
        image: "/images/automotive-shop.png",
        rating: 4.6,
        reviews: 234,
        inStock: true,
        category: "Engine Care",
      },
      {
        id: "a2",
        name: "LED Headlight Kit",
        price: 12499,
        description: "Ultra-bright LED headlight conversion kit with easy installation and long lifespan.",
        image: "/placeholder.svg?height=200&width=200&text=LED+Headlights",
        rating: 4.8,
        reviews: 156,
        inStock: true,
        category: "Lighting",
      },
      {
        id: "a3",
        name: "Car Dashboard Camera",
        price: 6699,
        originalPrice: 7999,
        description: "Full HD dashboard camera with night vision and automatic accident detection.",
        image: "/placeholder.svg?height=200&width=200&text=Dash+Cam",
        rating: 4.4,
        reviews: 189,
        inStock: true,
        category: "Electronics",
      },
      {
        id: "a4",
        name: "Tire Pressure Monitor",
        price: 4999,
        description: "Wireless tire pressure monitoring system with real-time alerts and smartphone app.",
        image: "/placeholder.svg?height=200&width=200&text=TPMS",
        rating: 4.3,
        reviews: 98,
        inStock: true,
        category: "Safety",
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
        price: 5799,
        originalPrice: 6999,
        description: "Accurate digital blood pressure monitor with large display and memory storage.",
        image: "/placeholder.svg?height=200&width=200&text=BP+Monitor",
        rating: 4.5,
        reviews: 167,
        inStock: true,
        category: "Medical Devices",
      },
      {
        id: "h2",
        name: "Vitamin D3 Supplements",
        price: 1699,
        description: "High-potency Vitamin D3 capsules for bone health and immune system support.",
        image: "/placeholder.svg?height=200&width=200&text=Vitamin+D3",
        rating: 4.2,
        reviews: 289,
        inStock: true,
        category: "Supplements",
      },
      {
        id: "h3",
        name: "Yoga Mat Premium",
        price: 2899,
        originalPrice: 3499,
        description: "Non-slip premium yoga mat with extra cushioning and eco-friendly materials.",
        image: "/placeholder.svg?height=200&width=200&text=Yoga+Mat",
        rating: 4.7,
        reviews: 145,
        inStock: true,
        category: "Fitness",
      },
      {
        id: "h4",
        name: "Essential Oil Diffuser",
        price: 4199,
        description: "Ultrasonic aromatherapy diffuser with LED lights and timer settings.",
        image: "/placeholder.svg?height=200&width=200&text=Diffuser",
        rating: 4.4,
        reviews: 112,
        inStock: true,
        category: "Aromatherapy",
      },
    ],
  },
  {
    id: "grocery",
    name: "Grocery & Food",
    icon: <ShoppingCart className="w-6 h-6" />,
    description: "Fresh groceries and gourmet food delivery",
    color: "bg-green-500 hover:bg-green-600",
    products: [
      {
        id: "g1",
        name: "Organic Basmati Rice",
        price: 899,
        originalPrice: 1099,
        description: "Premium quality organic basmati rice, aged for perfect aroma and taste.",
        image: "/placeholder.svg?height=200&width=200&text=Basmati+Rice",
        rating: 4.6,
        reviews: 456,
        inStock: true,
        category: "Grains",
      },
      {
        id: "g2",
        name: "Cold Pressed Olive Oil",
        price: 1299,
        description: "Extra virgin cold pressed olive oil, perfect for cooking and salads.",
        image: "/placeholder.svg?height=200&width=200&text=Olive+Oil",
        rating: 4.5,
        reviews: 234,
        inStock: true,
        category: "Oils",
      },
      {
        id: "g3",
        name: "Himalayan Pink Salt",
        price: 399,
        originalPrice: 499,
        description: "Pure Himalayan pink salt with natural minerals and health benefits.",
        image: "/placeholder.svg?height=200&width=200&text=Pink+Salt",
        rating: 4.3,
        reviews: 189,
        inStock: true,
        category: "Spices",
      },
      {
        id: "g4",
        name: "Organic Honey",
        price: 699,
        description: "100% pure organic honey sourced directly from beekeepers.",
        image: "/placeholder.svg?height=200&width=200&text=Honey",
        rating: 4.7,
        reviews: 312,
        inStock: true,
        category: "Natural Sweeteners",
      },
    ],
  },
  {
    id: "furniture",
    name: "Furniture & Home",
    icon: <Home className="w-6 h-6" />,
    description: "Modern furniture and home decor essentials",
    color: "bg-amber-500 hover:bg-amber-600",
    products: [
      {
        id: "fu1",
        name: "Ergonomic Office Chair",
        price: 18999,
        originalPrice: 22999,
        description: "Premium ergonomic office chair with lumbar support and adjustable height.",
        image: "/placeholder.svg?height=200&width=200&text=Office+Chair",
        rating: 4.6,
        reviews: 178,
        inStock: true,
        category: "Office Furniture",
      },
      {
        id: "fu2",
        name: "Wooden Coffee Table",
        price: 12499,
        description: "Handcrafted solid wood coffee table with modern design and storage.",
        image: "/placeholder.svg?height=200&width=200&text=Coffee+Table",
        rating: 4.4,
        reviews: 89,
        inStock: true,
        category: "Living Room",
      },
      {
        id: "fu3",
        name: "LED Floor Lamp",
        price: 5999,
        originalPrice: 7499,
        description: "Modern LED floor lamp with adjustable brightness and color temperature.",
        image: "/placeholder.svg?height=200&width=200&text=Floor+Lamp",
        rating: 4.5,
        reviews: 134,
        inStock: true,
        category: "Lighting",
      },
      {
        id: "fu4",
        name: "Storage Ottoman",
        price: 3999,
        description: "Multi-functional storage ottoman with premium fabric upholstery.",
        image: "/placeholder.svg?height=200&width=200&text=Ottoman",
        rating: 4.2,
        reviews: 67,
        inStock: true,
        category: "Storage",
      },
    ],
  },
  {
    id: "beauty",
    name: "Beauty & Personal Care",
    icon: <Sparkles className="w-6 h-6" />,
    description: "Premium beauty and personal care products",
    color: "bg-purple-500 hover:bg-purple-600",
    products: [
      {
        id: "b1",
        name: "Anti-Aging Serum",
        price: 2999,
        originalPrice: 3999,
        description: "Advanced anti-aging serum with vitamin C and hyaluronic acid.",
        image: "/placeholder.svg?height=200&width=200&text=Serum",
        rating: 4.7,
        reviews: 245,
        inStock: true,
        category: "Skincare",
      },
      {
        id: "b2",
        name: "Professional Hair Dryer",
        price: 8999,
        description: "Ionic hair dryer with multiple heat settings and cool shot button.",
        image: "/placeholder.svg?height=200&width=200&text=Hair+Dryer",
        rating: 4.5,
        reviews: 156,
        inStock: true,
        category: "Hair Care",
      },
      {
        id: "b3",
        name: "Luxury Perfume Set",
        price: 4599,
        originalPrice: 5999,
        description: "Premium perfume collection with three signature fragrances.",
        image: "/placeholder.svg?height=200&width=200&text=Perfume+Set",
        rating: 4.6,
        reviews: 189,
        inStock: true,
        category: "Fragrance",
      },
      {
        id: "b4",
        name: "Makeup Brush Set",
        price: 1899,
        description: "Professional makeup brush set with synthetic bristles and wooden handles.",
        image: "/placeholder.svg?height=200&width=200&text=Brush+Set",
        rating: 4.4,
        reviews: 123,
        inStock: true,
        category: "Makeup Tools",
      },
    ],
  },
  {
    id: "sports",
    name: "Sports & Fitness",
    icon: <Dumbbell className="w-6 h-6" />,
    description: "Sports equipment and fitness gear",
    color: "bg-orange-500 hover:bg-orange-600",
    products: [
      {
        id: "s1",
        name: "Adjustable Dumbbells",
        price: 15999,
        originalPrice: 18999,
        description: "Space-saving adjustable dumbbells with quick-change weight system.",
        image: "/placeholder.svg?height=200&width=200&text=Dumbbells",
        rating: 4.8,
        reviews: 267,
        inStock: true,
        category: "Strength Training",
      },
      {
        id: "s2",
        name: "Treadmill Pro",
        price: 89999,
        description: "Professional treadmill with incline, heart rate monitor, and preset programs.",
        image: "/placeholder.svg?height=200&width=200&text=Treadmill",
        rating: 4.6,
        reviews: 89,
        inStock: true,
        category: "Cardio Equipment",
      },
      {
        id: "s3",
        name: "Resistance Bands Set",
        price: 1299,
        originalPrice: 1599,
        description: "Complete resistance bands set with door anchor and exercise guide.",
        image: "/placeholder.svg?height=200&width=200&text=Resistance+Bands",
        rating: 4.4,
        reviews: 234,
        inStock: true,
        category: "Accessories",
      },
      {
        id: "s4",
        name: "Protein Shaker Bottle",
        price: 599,
        description: "BPA-free protein shaker with mixing ball and measurement markings.",
        image: "/placeholder.svg?height=200&width=200&text=Shaker",
        rating: 4.2,
        reviews: 345,
        inStock: true,
        category: "Nutrition",
      },
    ],
  },
]

const additionalIndustries = [
  { name: "Education & E-Learning", icon: <GraduationCap className="w-5 h-5" />, color: "bg-indigo-500" },
  { name: "Toys & Kids", icon: <Baby className="w-5 h-5" />, color: "bg-pink-400" },
  { name: "Books & Stationery", icon: <BookOpen className="w-5 h-5" />, color: "bg-teal-500" },
  { name: "Pet Supplies", icon: <PawPrint className="w-5 h-5" />, color: "bg-emerald-500" },
  { name: "Jewelry & Accessories", icon: <Gem className="w-5 h-5" />, color: "bg-yellow-500" },
  { name: "B2B Industrial", icon: <Building2 className="w-5 h-5" />, color: "bg-slate-500" },
  { name: "Travel & Tourism", icon: <Plane className="w-5 h-5" />, color: "bg-cyan-500" },
  { name: "Food & Restaurants", icon: <Utensils className="w-5 h-5" />, color: "bg-red-400" },
  { name: "Art & Crafts", icon: <Palette className="w-5 h-5" />, color: "bg-violet-500" },
  { name: "Gaming & Entertainment", icon: <Gamepad2 className="w-5 h-5" />, color: "bg-blue-400" },
  { name: "Music & Instruments", icon: <Music className="w-5 h-5" />, color: "bg-purple-400" },
  { name: "Photography", icon: <Camera className="w-5 h-5" />, color: "bg-gray-600" },
  { name: "Coffee & Beverages", icon: <Coffee className="w-5 h-5" />, color: "bg-amber-600" },
  { name: "Professional Services", icon: <Briefcase className="w-5 h-5" />, color: "bg-blue-700" },
]

const customerTestimonials = [
  {
    name: "Priya Sharma",
    company: "Fashion Boutique Mumbai",
    rating: 5,
    message: "EcomHub transformed our online presence. Sales increased by 300% in just 3 months! Amazing platform.",
  },
  {
    name: "Rajesh Kumar",
    company: "Tech Solutions Delhi",
    rating: 5,
    message: "Outstanding service and support. The electronics platform exceeded our expectations completely.",
  },
  {
    name: "Anita Rodriguez",
    company: "Auto Parts Plus Bangalore",
    rating: 4,
    message: "Great automotive e-commerce solution. Easy to manage inventory and process orders efficiently.",
  },
  {
    name: "Vikram Singh",
    company: "Wellness Store Chennai",
    rating: 5,
    message: "The health & wellness platform is perfect for our needs. Highly recommended for all businesses!",
  },
]

export default function ECommerceHub() {
  const [currentPage, setCurrentPage] = useState<"home" | "services" | "feedback" | "auth">("home")
  const [selectedSector, setSelectedSector] = useState<Sector | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [cart, setCart] = useState<Product[]>([])
  const [wishlist, setWishlist] = useState<Product[]>([])
  const [isAuthLogin, setIsAuthLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 5,
    message: "",
  })
  const [authData, setAuthData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    phone: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSectorClick = (sector: Sector) => {
    setSelectedSector(sector)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedSector(null)
  }

  const addToCart = (product: Product) => {
    setCart([...cart, product])
  }

  const addToWishlist = (product: Product) => {
    if (!wishlist.find((item) => item.id === product.id)) {
      setWishlist([...wishlist, product])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", rating: 5, message: "" })
    }, 3000)
  }

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate authentication
    alert(isAuthLogin ? "Login successful!" : "Account created successfully!")
    setCurrentPage("home")
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleAuthInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthData({
      ...authData,
      [e.target.name]: e.target.value,
    })
  }

  // Navigation Component
  const Navigation = () => (
    <nav
      className={`${isDarkMode ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"} shadow-sm border-b sticky top-0 z-50`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <ShoppingBag className="h-8 w-8 text-blue-600" />
            <span className={`ml-2 text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>EcomHub</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => setCurrentPage("home")}
              className={`font-medium ${currentPage === "home" ? "text-blue-600" : `${isDarkMode ? "text-gray-300 hover:text-blue-400" : "text-gray-700 hover:text-blue-600"}`}`}
            >
              Home
            </button>
            <button
              onClick={() => setCurrentPage("services")}
              className={`font-medium ${currentPage === "services" ? "text-blue-600" : `${isDarkMode ? "text-gray-300 hover:text-blue-400" : "text-gray-700 hover:text-blue-600"}`}`}
            >
              Services
            </button>
            <button
              onClick={() => setCurrentPage("feedback")}
              className={`font-medium ${currentPage === "feedback" ? "text-blue-600" : `${isDarkMode ? "text-gray-300 hover:text-blue-400" : "text-gray-700 hover:text-blue-600"}`}`}
            >
              Feedback
            </button>

            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-64"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={() => setIsDarkMode(!isDarkMode)} className="p-2">
                {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>

              <Button variant="ghost" size="sm" className="relative">
                <Heart className="h-4 w-4" />
                {wishlist.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                    {wishlist.length}
                  </Badge>
                )}
              </Button>

              <Button variant="ghost" size="sm" className="relative">
                <ShoppingCart className="h-4 w-4" />
                {cart.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                    {cart.length}
                  </Badge>
                )}
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage("auth")}
                className="flex items-center gap-2"
              >
                <User className="h-4 w-4" />
                Login
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => {
                  setCurrentPage("home")
                  setIsMobileMenuOpen(false)
                }}
                className={`text-left font-medium ${currentPage === "home" ? "text-blue-600" : `${isDarkMode ? "text-gray-300" : "text-gray-700"}`}`}
              >
                Home
              </button>
              <button
                onClick={() => {
                  setCurrentPage("services")
                  setIsMobileMenuOpen(false)
                }}
                className={`text-left font-medium ${currentPage === "services" ? "text-blue-600" : `${isDarkMode ? "text-gray-300" : "text-gray-700"}`}`}
              >
                Services
              </button>
              <button
                onClick={() => {
                  setCurrentPage("feedback")
                  setIsMobileMenuOpen(false)
                }}
                className={`text-left font-medium ${currentPage === "feedback" ? "text-blue-600" : `${isDarkMode ? "text-gray-300" : "text-gray-700"}`}`}
              >
                Feedback
              </button>
              <button
                onClick={() => {
                  setCurrentPage("auth")
                  setIsMobileMenuOpen(false)
                }}
                className={`text-left font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
              >
                Login / Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )

  // Enhanced Footer Component
  const Footer = () => (
    <footer className={`${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-900 text-white"} py-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <ShoppingBag className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">EcomHub</span>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering businesses across industries with comprehensive e-commerce solutions.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="p-2 hover:bg-blue-600">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-blue-400">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-pink-600">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-blue-700">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-red-600">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => setCurrentPage("home")} className="text-gray-400 hover:text-white">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage("services")} className="text-gray-400 hover:text-white">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage("feedback")} className="text-gray-400 hover:text-white">
                  Feedback
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Industries</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Fashion & Apparel
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Electronics
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Automotive
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Health & Wellness
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Grocery & Food
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  View All Industries
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-blue-400 mr-2" />
                <span className="text-gray-400">support@ecomhub.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-blue-400 mr-2" />
                <span className="text-gray-400">+91 98765 43210</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 text-blue-400 mr-2" />
                <span className="text-gray-400">Mumbai, Maharashtra, India</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 text-blue-400 mr-2" />
                <span className="text-gray-400">Mon-Fri 9AM-6PM IST</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
            <p className="text-gray-400">Subscribe to our newsletter for latest updates and offers</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email" className="flex-1" />
            <Button className="bg-blue-600 hover:bg-blue-700">Subscribe</Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2024 EcomHub. All rights reserved. Made with ❤️ in India</p>
        </div>
      </div>
    </footer>
  )

  // Auth Page Component
  const AuthPage = () => (
    <div className={`min-h-screen ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      <Navigation />

      <div className="max-w-md mx-auto px-4 py-12">
        <Card className={isDarkMode ? "bg-gray-800 border-gray-700" : ""}>
          <CardHeader className="text-center">
            <CardTitle className={`text-2xl ${isDarkMode ? "text-white" : ""}`}>
              {isAuthLogin ? "Welcome Back" : "Create Account"}
            </CardTitle>
            <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
              {isAuthLogin ? "Sign in to your account" : "Join thousands of satisfied customers"}
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAuthSubmit} className="space-y-4">
              {!isAuthLogin && (
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={authData.fullName}
                    onChange={handleAuthInputChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              )}

              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={authData.email}
                  onChange={handleAuthInputChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              {!isAuthLogin && (
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={authData.phone}
                    onChange={handleAuthInputChange}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
              )}

              <div>
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={authData.password}
                    onChange={handleAuthInputChange}
                    placeholder="Enter your password"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              {!isAuthLogin && (
                <div>
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={authData.confirmPassword}
                    onChange={handleAuthInputChange}
                    placeholder="Confirm your password"
                    required
                  />
                </div>
              )}

              <Button type="submit" className="w-full">
                {isAuthLogin ? "Sign In" : "Create Account"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                {isAuthLogin ? "Don't have an account? " : "Already have an account? "}
                <button
                  onClick={() => setIsAuthLogin(!isAuthLogin)}
                  className="text-blue-600 hover:text-blue-500 font-medium"
                >
                  {isAuthLogin ? "Sign up" : "Sign in"}
                </button>
              </p>
            </div>

            {/* Social Login */}
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className={`w-full border-t ${isDarkMode ? "border-gray-700" : "border-gray-300"}`} />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className={`px-2 ${isDarkMode ? "bg-gray-800 text-gray-400" : "bg-white text-gray-500"}`}>
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <Button variant="outline" className="w-full bg-transparent">
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Google
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  <Facebook className="w-4 h-4 mr-2" />
                  Facebook
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  // Home Page Component
  const HomePage = () => (
    <div className={`min-h-screen ${isDarkMode ? "bg-gray-900" : "bg-gradient-to-br from-blue-50 to-indigo-100"}`}>
      <Navigation />

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className={`text-4xl md:text-6xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"} mb-6`}>
              E-Commerce Solutions
              <span className="block text-blue-600">Across All Industries</span>
            </h1>
            <p className={`text-xl ${isDarkMode ? "text-gray-300" : "text-gray-600"} mb-8 max-w-3xl mx-auto`}>
              Discover comprehensive e-commerce platforms tailored for every industry. From fashion to automotive, we
              provide cutting-edge solutions that drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                onClick={() => setCurrentPage("services")}
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-3 bg-transparent"
                onClick={() => setCurrentPage("feedback")}
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className={`py-24 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"} mb-4`}>
              Why Choose Our Platform?
            </h2>
            <p className={`text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"} max-w-2xl mx-auto`}>
              We provide industry-specific e-commerce solutions with advanced features and seamless user experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card
              className={`text-center p-8 hover:shadow-lg transition-shadow ${isDarkMode ? "bg-gray-700 border-gray-600" : ""}`}
            >
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? "text-white" : ""}`}>Industry Expertise</h3>
                <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                  Specialized solutions for 20+ industries with deep domain knowledge.
                </p>
              </CardContent>
            </Card>

            <Card
              className={`text-center p-8 hover:shadow-lg transition-shadow ${isDarkMode ? "bg-gray-700 border-gray-600" : ""}`}
            >
              <CardContent className="pt-6">
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? "text-white" : ""}`}>Premium Quality</h3>
                <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                  High-quality products with competitive pricing and excellent support.
                </p>
              </CardContent>
            </Card>

            <Card
              className={`text-center p-8 hover:shadow-lg transition-shadow ${isDarkMode ? "bg-gray-700 border-gray-600" : ""}`}
            >
              <CardContent className="pt-6">
                <Truck className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? "text-white" : ""}`}>Fast Delivery</h3>
                <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                  Quick implementation with 24/7 support and maintenance.
                </p>
              </CardContent>
            </Card>

            <Card
              className={`text-center p-8 hover:shadow-lg transition-shadow ${isDarkMode ? "bg-gray-700 border-gray-600" : ""}`}
            >
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? "text-white" : ""}`}>Secure & Reliable</h3>
                <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                  Bank-grade security with 99.9% uptime guarantee.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className={`py-16 ${isDarkMode ? "bg-gray-900" : "bg-blue-600"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">10K+</div>
              <div className="text-blue-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">20+</div>
              <div className="text-blue-100">Industries Served</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-blue-100">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-100">Customer Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className={`py-24 ${isDarkMode ? "bg-blue-900" : "bg-blue-600"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that trust our e-commerce solutions to drive their success.
          </p>
          <Button size="lg" variant="secondary" className="px-8 py-3" onClick={() => setCurrentPage("services")}>
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  )

  // Services Page Component
  const ServicesPage = () => (
    <div className={`min-h-screen ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl md:text-5xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"} mb-4`}>
            Our Services
          </h1>
          <p className={`text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"} max-w-3xl mx-auto`}>
            Explore our comprehensive e-commerce solutions across various industries. Click on any sector to view our
            products and services.
          </p>
        </div>

        {/* Featured Sectors */}
        <section className="mb-16">
          <h2 className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"} mb-8`}>Featured Sectors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((sector) => (
              <Card
                key={sector.id}
                className={`hover:shadow-lg transition-shadow cursor-pointer ${isDarkMode ? "bg-gray-800 border-gray-700 hover:bg-gray-750" : ""}`}
                onClick={() => handleSectorClick(sector)}
              >
                <CardHeader className="text-center">
                  <div
                    className={`${sector.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white`}
                  >
                    {sector.icon}
                  </div>
                  <CardTitle className={`text-lg ${isDarkMode ? "text-white" : ""}`}>{sector.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={`text-sm text-center mb-4 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                    {sector.description}
                  </p>
                  <Button className="w-full bg-transparent" variant="outline">
                    View Products
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* All Industries Grid */}
        <section>
          <h2 className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"} mb-8`}>All Industries</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
            {additionalIndustries.map((item, index) => (
              <Button
                key={index}
                variant="outline"
                className={`h-20 flex flex-col items-center gap-2 hover:shadow-md transition-shadow bg-transparent ${isDarkMode ? "border-gray-600 hover:bg-gray-800" : ""}`}
              >
                <div className={`${item.color} w-8 h-8 rounded-full flex items-center justify-center text-white`}>
                  {item.icon}
                </div>
                <span className={`text-xs text-center ${isDarkMode ? "text-gray-300" : ""}`}>{item.name}</span>
              </Button>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )

  // Feedback Page Component
  const FeedbackPage = () => (
    <div className={`min-h-screen ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl md:text-5xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"} mb-4`}>
            Customer Feedback
          </h1>
          <p className={`text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"} max-w-3xl mx-auto`}>
            We value your feedback and continuously strive to improve our services. Share your experience with us!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Feedback Form */}
          <div>
            <Card className={isDarkMode ? "bg-gray-800 border-gray-700" : ""}>
              <CardHeader>
                <CardTitle className={`flex items-center gap-2 ${isDarkMode ? "text-white" : ""}`}>
                  <MessageCircle className="h-6 w-6 text-blue-600" />
                  Send Us Your Feedback
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-4">
                      <h3 className="font-semibold mb-2">Thank you for your feedback!</h3>
                      <p>We appreciate your time and will review your message shortly.</p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="rating">Rating</Label>
                      <div className="flex items-center gap-2 mt-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setFormData({ ...formData, rating: star })}
                            className={`p-1 ${star <= formData.rating ? "text-yellow-400" : "text-gray-300"}`}
                          >
                            <Star className="h-6 w-6 fill-current" />
                          </button>
                        ))}
                        <span className={`ml-2 text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                          {formData.rating} out of 5 stars
                        </span>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Your Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your experience..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      <Send className="h-5 w-5 mr-2" />
                      Send Feedback
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Customer Testimonials */}
          <div>
            <h2 className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"} mb-6`}>
              What Our Customers Say
            </h2>
            <div className="space-y-6">
              {customerTestimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className={`hover:shadow-lg transition-shadow ${isDarkMode ? "bg-gray-800 border-gray-700" : ""}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-blue-600 font-semibold">
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className={`font-semibold ${isDarkMode ? "text-white" : ""}`}>{testimonial.name}</h3>
                          <span className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                            - {testimonial.company}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 mb-3">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className={`italic ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                          "{testimonial.message}"
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-16 text-center">
          <Card className={`max-w-2xl mx-auto ${isDarkMode ? "bg-gray-800 border-gray-700" : ""}`}>
            <CardContent className="p-8">
              <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? "text-white" : ""}`}>Get In Touch</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div>
                  <h4 className={`font-medium mb-2 ${isDarkMode ? "text-white" : ""}`}>Email</h4>
                  <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>support@ecomhub.com</p>
                </div>
                <div>
                  <h4 className={`font-medium mb-2 ${isDarkMode ? "text-white" : ""}`}>Phone</h4>
                  <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>+91 98765 43210</p>
                </div>
                <div>
                  <h4 className={`font-medium mb-2 ${isDarkMode ? "text-white" : ""}`}>Hours</h4>
                  <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>Mon-Fri 9AM-6PM IST</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )

  return (
    <div className={isDarkMode ? "dark" : ""}>
      {currentPage === "home" && <HomePage />}
      {currentPage === "services" && <ServicesPage />}
      {currentPage === "feedback" && <FeedbackPage />}
      {currentPage === "auth" && <AuthPage />}

      {/* Product Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent
          className={`max-w-6xl max-h-[90vh] overflow-y-auto ${isDarkMode ? "bg-gray-800 border-gray-700" : ""}`}
        >
          {selectedSector && (
            <>
              <DialogHeader>
                <DialogTitle className={`flex items-center gap-3 text-2xl ${isDarkMode ? "text-white" : ""}`}>
                  {selectedSector.icon}
                  {selectedSector.name}
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                <p className={`text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                  {selectedSector.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {selectedSector.products.map((product) => (
                    <Card
                      key={product.id}
                      className={`hover:shadow-lg transition-shadow ${isDarkMode ? "bg-gray-700 border-gray-600" : ""}`}
                    >
                      <CardContent className="p-6">
                        <div className="flex gap-4">
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                          />
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <h3 className={`font-semibold text-lg ${isDarkMode ? "text-white" : ""}`}>
                                {product.name}
                              </h3>
                              <Button variant="ghost" size="sm" onClick={() => addToWishlist(product)} className="p-1">
                                <Heart className="h-4 w-4" />
                              </Button>
                            </div>

                            <div className="flex items-center gap-2 mb-2">
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-3 w-3 ${
                                      i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                                ({product.reviews} reviews)
                              </span>
                            </div>

                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-2xl font-bold text-blue-600">
                                ₹{product.price.toLocaleString()}
                              </span>
                              {product.originalPrice && (
                                <span
                                  className={`text-sm line-through ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                                >
                                  ₹{product.originalPrice.toLocaleString()}
                                </span>
                              )}
                              {product.originalPrice && (
                                <Badge variant="secondary" className="text-xs">
                                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                                  OFF
                                </Badge>
                              )}
                            </div>

                            <p className={`text-sm mb-3 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                              {product.description}
                            </p>

                            <div className="flex items-center gap-2 mb-3">
                              <Badge variant={product.inStock ? "default" : "secondary"} className="text-xs">
                                {product.inStock ? "In Stock" : "Out of Stock"}
                              </Badge>
                              <span className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                                Category: {product.category}
                              </span>
                            </div>

                            <Button
                              className="w-full"
                              size="sm"
                              disabled={!product.inStock}
                              onClick={() => addToCart(product)}
                            >
                              {product.inStock ? "Add to Cart" : "Out of Stock"}
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
  )
}
