import { useState } from "react";
import Tag from "./Tag";
import { motion } from "framer-motion";
import { BriefcaseBusiness } from 'lucide-react';


const Hero = () => {


  return (
    <>
    
    <section id="home" className="hero-section text-center mt-10 flex flex-col">
      <Tag>
        <div className="flex items-center cursor-pointer">
          <span>Kavete v0.1</span>
        </div>
      </Tag>

      <div className="mx-auto max-w-[850px] mb-4 px-5">
        <motion.div whileHover={{ scale: 1.1  }} className="flex grid-cols-1 sm:grid-cols-2 cursor-pointer bg-white p-2 shadow-lg rounded-lg">
          <div className="justify-start  p-2">
            <h1 className="text-2xl font-extrabold  leading-15 text-gray-700 sm:text-4xl">
              AI Job Finder
            </h1>
          </div>
      <div>
      <div className="bg-white border border-gray-300 w-12 h-12 flex justify-center items-center rounded-full shadow-lg" >
      <BriefcaseBusiness />
      </div>
      </div>
      
      
    
        </motion.div>
        </div>
      

      <div className="mt-10 items-center justify-center p-2">
        <div class="mx-auto max-w-[850px] bg-white border border-indigo/400/30 rounded-lg shadow-lg ">
          <iframe
            className="w-full aspect-video border-indigo/400/30 rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/vkdLST5UkEQ?si=M51DoVBHfXEA1qF0&rel=0&loop=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
           
        </div>
      </div>
    </section>
    </>
  );
};

export default Hero;
