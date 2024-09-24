import React, { useState } from 'react'
import { ShoppingCart, Search, Menu, X, ChevronRight } from 'lucide-react'

const Button = ({ children, className, ...props }) => (
  <button
    className={`px-4 py-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
    {...props}
  >
    {children}
  </button>
)

const Input = ({ className, ...props }) => (
  <input
    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
    {...props}
  />
)

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const featuredProducts = [
    { id: 1, name: 'Luxe Shampoo', description: 'Nourish and revitalize' },
    { id: 2, name: 'Silk Conditioner', description: 'Smooth and soften' },
    { id: 3, name: 'Curl Enhancer', description: 'Define and moisturize' },
    { id: 4, name: 'Repair Mask', description: 'Restore and strengthen' },
  ]

  const mostShoppedProducts = [
    { id: 5, name: 'Volume Boost Spray', description: 'Lift and fullness' },
    { id: 6, name: 'Frizz Control Serum', description: 'Smooth and shine' },
    { id: 7, name: 'Color Protect Shampoo', description: 'Preserve and enhance' },
    { id: 8, name: 'Scalp Treatment', description: 'Soothe and balance' },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container mx-auto px-4 flex h-14 items-center justify-between">
          <div className="flex items-center">
            <button onClick={toggleMobileMenu} className="mr-2 md:hidden">
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle Menu</span>
            </button>
            <a className="flex items-center space-x-2" href="#">
              <span className="font-bold text-xl">LuxeLocksHair</span>
            </a>
          </div>
          <nav className={`${isMobileMenuOpen ? 'block' : 'hidden'} absolute top-14 left-0 right-0 bg-white md:static md:block`}>
            <ul className="flex flex-col md:flex-row md:items-center md:space-x-6 p-4 md:p-0">
              <li><a className="block py-2 md:py-0" href="#">Products</a></li>
              <li><a className="block py-2 md:py-0" href="#">Collections</a></li>
              <li><a className="block py-2 md:py-0" href="#">About</a></li>
              <li><a className="block py-2 md:py-0" href="#">Contact</a></li>
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="hidden md:block relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
              <Input type="search" placeholder="Search products..." className="pl-8 w-60" />
            </div>
            <Button className="bg-transparent hover:bg-gray-100">
              <ShoppingCart className="h-6 w-6" />
              <span className="sr-only">Shopping Cart</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Discover Your Perfect Hair
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  Luxurious hair products for every type and texture. Transform your locks today.
                </p>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Button className="bg-blue-600 text-white hover:bg-blue-700">Shop Now</Button>
                  <Button className="bg-gray-200 text-gray-800 hover:bg-gray-300">Learn More</Button>
                </div>
              </div>
              <div className="mx-auto aspect-video overflow-hidden rounded-xl">
                <img
                  alt="Hero Image"
                  className="object-cover w-full h-full"
                  src="/placeholder.svg?height=550&width=800"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">Featured Products</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {featuredProducts.map((product) => (
                <div key={product.id} className="relative group overflow-hidden rounded-lg bg-white shadow-md">
                  <img
                    alt={product.name}
                    className="object-cover w-full h-60 transition-transform group-hover:scale-105"
                    src={`/placeholder.svg?height=300&width=400`}
                  />
                  <div className="p-4">
                    <h3 className="font-bold">{product.name}</h3>
                    <p className="text-sm text-gray-600">{product.description}</p>
                    <Button className="mt-2 bg-blue-600 text-white hover:bg-blue-700">
                      View Product
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">Most Shopped Products</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {mostShoppedProducts.map((product) => (
                <div key={product.id} className="relative group overflow-hidden rounded-lg bg-white shadow-md">
                  <img
                    alt={product.name}
                    className="object-cover w-full h-60 transition-transform group-hover:scale-105"
                    src={`/placeholder.svg?height=300&width=400`}
                  />
                  <div className="p-4">
                    <h3 className="font-bold">{product.name}</h3>
                    <p className="text-sm text-gray-600">{product.description}</p>
                    <Button className="mt-2 bg-green-600 text-white hover:bg-green-700">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">Why Choose Us</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Premium Quality", description: "Only the finest ingredients for your hair" },
                { title: "Expert Formulations", description: "Developed by hair care professionals" },
                { title: "Sustainable Packaging", description: "Eco-friendly solutions for a better planet" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white">
                    <ChevronRight className="w-6 h-6" />
                  </div>
                  <h3 className="mt-4 font-bold">{item.title}</h3>
                  <p className="mt-2 text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm">&copy; 2024 LuxeLocksHair. All rights reserved.</p>
            <nav className="flex gap-4 mt-4 sm:mt-0">
              <a className="text-sm hover:underline" href="#">Terms of Service</a>
              <a className="text-sm hover:underline" href="#">Privacy Policy</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}