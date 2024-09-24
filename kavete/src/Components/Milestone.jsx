import React from 'react'
import { motion } from 'framer-motion'

const Milestone = ({ title, description, icon, lastItem }) => {
  return (
    <div id="work" className="flex w-full items-start mb-8 relative">
      <div className="flex flex-col items-center mr-4">
        <motion.div 
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
          whileHover={{ scale: 1.1 }}
          className="z-20 bg-white shadow-lg p-3 rounded-full flex-shrink-0 cursor-grab"
        >
          {icon}
        </motion.div>
        {!lastItem && (
          <div className="w-0.5 h-full bg-gray-200 absolute top-12 left-6 -z-10"></div>
        )}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden"
      >
        <div className="bg-primary text-white p-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <span className="text-sm opacity-75">11:46</span>
        </div>
        <div className="p-4">
          <p className="text-sm text-gray-600">{description}</p>
        </div>
        <div className="bg-gray-50 px-4 py-3 mt-auto">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-primary text-sm font-medium hover:underline"
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}

export default Milestone
