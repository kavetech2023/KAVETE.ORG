import React, { useContext, useEffect, useState } from "react";
import demo from "../assets/kavete_main_pic.png";
import Tag from "./Tag";

const Hero = () => {
  return (
    <section id="home" className="hero-section text-center mt-10 flex flex-col">
      <Tag>
        <div className="flex items-center cursor-pointer">
          <span>Kavete v0.1</span>
        </div>
      </Tag>

      <div className="mx-auto max-w-[800px]">
      <h1 className="text-4xl font-extrabold  leading-15 text-black sm:text-6xl">
      AI Job Matchmaker
      </h1>
      <h2 className="text-4xl font-bold bg-gradient-to-r w-full block mt-4 from-pink-500 via-indigo-600 to-pink-500 bg-clip-text text-transparent">
        Your Dream Job Awaits
        </h2>
        <h3 className="text-1xl font-extrabold mt-4 leading-15 text-black sm:text-3xl">(+70,000 USD Salaries)</h3>

      </div>
      

    
     

     

      <div className="mt-10 items-center justify-center ">
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
  );
};

export default Hero;
