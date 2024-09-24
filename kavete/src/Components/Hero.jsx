import React from "react";
import { motion } from "framer-motion";
import { BriefcaseBusiness } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="py-20 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            className="inline-flex items-center bg-white p-4 rounded-full shadow-lg cursor-pointer mb-8"
          >
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mr-4">
              AI Job Finder
            </h1>
            <div className="bg-indigo-100 p-3 rounded-full">
              <BriefcaseBusiness className="w-8 h-8 text-indigo-600" />
            </div>
          </motion.div>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Discover your dream job with the power of AI. Let our intelligent system match you with the perfect opportunities.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full aspect-video border-indigo/400/30 rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/vkdLST5UkEQ?si=M51DoVBHfXEA1qF0&rel=0&loop=1"
              title="AI Job Finder Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;