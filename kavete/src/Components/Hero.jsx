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
      <h1 className="text-4xl font-extrabold leading-[1.15] text-black sm:text-6xl">
        Using AI to
        <br />
        <span className="bg-gradient-to-r from-pink-500 via-indigo-600 to-pink-500 bg-clip-text text-transparent">
          Get Africans Employed.
        </span>
      </h1>
      <h2 className="mt-5 text-gray-600 sm:text-xl">
        Kavete.org is an online opportunities platform for all who want to earn.
      </h2>

      <div></div>

      <div className="mx-auto mt-5 flex max-w-fit ">
        <a
          href="#"
          className="rounded-full mx-auto max-w-fit border px-5 py-2 text-sm font-medium shadow-sm border-black hover:ring-gray-700 hover:ring-2"
        >
          Get Started
        </a>
      </div>
      <div className="mt-5 items-center justify-center ">
        <div class="mx-auto max-w-[850px] bg-white border border-indigo/400/30 rounded-lg shadow-lg sm:w-1/2 md:w-3/4 lg:w-full h-48 sm:h-64 md:h-96">
          <iframe
            className="w-full h-full border-indigo/400/30 rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/vkdLST5UkEQ?si=M51DoVBHfXEA1qF0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>{" "}
           
        </div>
      </div>
    </section>
  );
};

export default Hero;
