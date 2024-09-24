import React from "react";
import TagLine from "./TagLine";

const Features = () => {
  return (
    <section id="Features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <TagLine>Features</TagLine>
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          Let the jobs come to you
        </h2>

        <div className="flex flex-col items-center">
          <div className="relative mx-auto mb-8">
            <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
              <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
                <img
                  src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen.png"
                  className="dark:hidden h-[156px] md:h-[278px] w-full rounded-lg"
                  alt="Laptop mockup"
                />
                <img
                  src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen-dark.png"
                  className="hidden dark:block h-[156px] md:h-[278px] w-full rounded-lg"
                  alt="Laptop mockup dark"
                />
              </div>
            </div>
            <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
              <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
            </div>
          </div>
          
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Our AI-powered platform brings the most relevant job opportunities directly to you, 
            saving you time and effort in your job search.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
