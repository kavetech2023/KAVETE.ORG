import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'
import MobileMenu from './MobileMenu'
import logo from "../assets/logo.png"

const navItems = [
  { name: 'Home', href: '#home', offset: 100 },
  { name: 'How it Works', href: '#work', offset: 50 },
  { name: 'Testimonials', href: '#testimonials', offset: 80 },
  { name: 'FAQs', href: '#faqs', offset: 50 },
]

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="bg-white/80 backdrop-blur-lg shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <img className="h-8 w-auto" src={logo} alt="Logo" />
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <AnchorLink
                  key={item.name}
                  href={item.href}
                  offset={item.offset}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeMenu === item.name.toLowerCase() ? 'text-primary' : 'text-gray-700'
                  }`}
                  onClick={() => setActiveMenu(item.name.toLowerCase())}
                >
                  {item.name}
                </AnchorLink>
              ))}
            </nav>
            <div className="hidden md:block">
              <Link
                to="/dashboard" scrollToTop
                className="inline-flex bg-black items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-dark transition-colors"
              >
                + My Jobs
              </Link>
            </div>
            <div className="flex md:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <MobileMenu open={mobileMenuOpen} setOpen={setMobileMenuOpen} />
    </header>
  )
}

export default Navbar