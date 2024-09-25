import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Play } from 'lucide-react'
import { Link } from 'react-router-dom'

const FeatureItem = ({ text }) => (
  <motion.li
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className="flex items-center space-x-2 text-sm text-gray-600"
  >
    <CheckCircle className="h-5 w-5 text-green-500" />
    <span>{text}</span>
  </motion.li>
)

const Hero = () => {
  return (
    <div id="home" className="relative overflow-hidden bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-50">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] bg-fixed"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
              AI, Jobs{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Finder
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Boost productivity and streamline your processes with our cutting-edge platform.
              Experience the future of work today.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
            <Link to={"/dashboard"}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg hover:shadow-xl transition duration-300"
              >
                Go to Jobs
              </motion.button>
              </Link>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full bg-white text-gray-900 font-semibold shadow-lg hover:shadow-xl transition duration-300 flex items-center"
              >
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/vkdLST5UkEQ?si=M51DoVBHfXEA1qF0&rel=0&loop=1"
                title="Product Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full aspect-video border-indigo/400/30 rounded-lg shadow-lg"
              ></iframe>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div className="rounded-full bg-white/20 p-4 backdrop-blur-sm">
                <Play className="w-16 h-16 text-white" />
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20"
        >
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-3 bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-50 text-lg font-medium text-gray-900">
                Why Choose Us
              </span>
            </div>
          </div>
          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureItem text="Intuitive and easy to use interface" />
            <FeatureItem text="Advanced AI-powered insights" />
            <FeatureItem text="Seamless integration with your tools" />
            <FeatureItem text="Real-time collaboration features" />
            <FeatureItem text="Customizable workflows" />
            <FeatureItem text="24/7 customer support" />
          </ul>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero;