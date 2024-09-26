import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import demo from '../assets/demo.jpeg'
import { Link } from 'react-router-dom'


const FeatureItem = ({ text }) => (
  <motion.li
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="flex items-center space-x-2 text-gray-700"
  >
    <CheckCircle className="h-5 w-5 text-emerald-500" />
    <span>{text}</span>
  </motion.li>
)



const FeaturesSection = () => {
  return (
    <section id='work' className="py-20 max-w-7xl overflow-hidden mx-auto">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl transform rotate-3 scale-105 opacity-20 blur-xl"></div>
              <img
                src={demo}
                alt="Product showcase"
                className="relative rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-full p-4 shadow-xl">
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <svg className="w-16 h-16 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Let our AI
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> do all the work for you. </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Experience a new level of productivity with our cutting-edge tools designed to streamline your job application process and boost efficiency.
            </p>
            <ul className="space-y-4 mb-10">
              <FeatureItem text="AI-powered jobs suggestion" />
              <FeatureItem text="Real-time resume editing" />
              <FeatureItem text="Advanced analytics dashboard" />
              <FeatureItem text="Customizable workflow templates" />
            </ul>
            <Link to="/edit">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition duration-300 flex items-center space-x-2"
              >
                <span>Go to Resume Editor</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection