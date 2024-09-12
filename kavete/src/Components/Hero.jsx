import React, { useContext, useEffect, useState } from "react";
import demo from "../assets/kavete_main_pic.png";
import Tag from "./Tag";

const Hero = () => {
  return (
    <section className="hero-section text-center mt-10 flex flex-col">
      <Tag>
        <div className="flex items-center cursor-pointer">
          <span>Kavete v0.1</span>
        </div>
      </Tag>

      <div className="mx-auto max-w-[800px]">
      <h1 className="text-4xl font-extrabold  leading-15 text-black sm:text-6xl">
        Using AI to Get 
        
        <span className="bg-gradient-to-r w-full block mt-4 from-pink-500 via-indigo-600 to-pink-500 bg-clip-text text-transparent">
        42M+ Africans Employed.
        </span>
      </h1>
      <hr className="mt-6 border-b-2 border-gray-700 border-solid rounded-b-md box-shadow-[rgb(38,57,77)_0px_20px_30px_-10px]"/>

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
