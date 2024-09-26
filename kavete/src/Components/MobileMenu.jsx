import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '#home', offset: 100 },
  { name: 'How it Works', href: '#work', offset: 250 },
  { name: 'Services', href: '#services', offset: 100 },
  { name: 'Testimonials', href: '#testimonials', offset: 80 },
  { name: 'FAQs', href: '#pricing', offset: 50 },
]

const MobileMenu = ({ open, setOpen }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-white md:hidden"
        >
          <div className="flex  h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <img className="h-8 w-auto" src={logo} alt="Logo" />
              </Link>
            </div>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navItems.map((item) => (
                  <AnchorLink
                    key={item.name}
                    href={item.href}
                    offset={item.offset}
                    className="mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setOpen(false)}
                  >
                    {item.name}
                  </AnchorLink>
                ))}
              </div>
              <div className="py-6">
                <Link
                  to="/dashboard"
                  className="mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setOpen(false)}
                >
                  My Jobs
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MobileMenu