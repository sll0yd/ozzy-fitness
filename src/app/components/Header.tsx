import Image from "next/image";
import React from "react";
import ozzybgimage from "../../assets/NEEDA-CLEANA-WEBSITE-1-10.png";

const Header = () => {
  return (
    <div className="relative w-full h-screen">
      {" "}
      {/* Full viewport height */}
      <Image
        src={ozzybgimage}
        alt=""
        layout="fill"
        objectFit="cover"
        className="w-full h-full"
      />
      {/* Text Overlay with Modern Design */}
      <div className="absolute top-20 md:top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4">
        {" "}
        {/* Adjusted top position */}
        <div className="flex flex-col md:flex-row justify-around items-center space-y-6 md:space-y-0 md:space-x-4">
          {/* Card 1 */}
          <div className="bg-white bg-opacity-5 backdrop-blur-md rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full md:max-w-sm">
            {" "}
            {/* Reduced padding */}
            <h3 className="text-2xl font-bold text-white mb-2">24/7 ACCESS</h3>
            <p className="text-gray-200 text-sm md:text-base pr-2">
              Always open to achieve your goals no matter what time it is.
            </p>{" "}
            {/* Reduced right padding */}
          </div>

          {/* Card 2 */}
          <div className="bg-white bg-opacity-5 backdrop-blur-md rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full md:max-w-sm">
            {" "}
            {/* Reduced padding */}
            <h3 className="text-2xl font-bold text-white mb-2">
              VARIETY OF CLASSES
            </h3>
            <p className="text-gray-200 text-sm md:text-base pr-2">
              A variety of classes to suit different goals, we make sure of it.
            </p>{" "}
            {/* Reduced right padding */}
          </div>

          {/* Card 3 */}
          <div className="bg-white bg-opacity-5 backdrop-blur-md rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full md:max-w-sm">
            {" "}
            {/* Reduced padding */}
            <h3 className="text-2xl font-bold text-white mb-2">
              EXPERT TRAINERS
            </h3>
            <p className="text-gray-200 text-sm md:text-base pr-2">
              We care about your journey. Our experts are here to help you every
              step of the way.
            </p>{" "}
            {/* Reduced right padding */}
          </div>
        </div>
      </div>
      {/* Quote at the bottom right of the image */}
      <div className="absolute bottom-4 right-8 text-white/90 text-sm md:text-base lg:text-lg font-light italic leading-tight">
        Discipline is the powerful art of choosing long-term well-being over short-term comfort.
      </div>
    </div>
  );
};

export default Header;
