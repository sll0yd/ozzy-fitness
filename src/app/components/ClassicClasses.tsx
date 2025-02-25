import React, { useState } from "react";
import Image from "next/image";
import classes from "../../assets/classes.jpg";

// Classic Courses Section Component
const ClassicClasses = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex flex-col md:flex-row w-full bg-stone-50">
      {/* Image on the left */}
      <div className="w-full md:w-1/2 min-h-[700px] relative overflow-hidden order-1 md:order-1">
        <Image
          src={classes} // Replace with your image path
          alt="Group Classes"
          layout="fill" // Fill the container
          objectFit="cover" // Cover the container while maintaining aspect ratio
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-black/10"></div>
        {/* Text overlay on the image */}
        <div className="absolute bottom-20 right-10 text-white text-right max-w-xs">
          <p className="text-xl md:text-2xl italic">
            « It doesn't get easier. You get stronger with every session. »
          </p>
        </div>
        <div className="absolute inset-0 flex items-end justify-center">
          <div className="w-full h-2/3 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
      </div>

      {/* Text content on the right */}
      <div className="w-full md:w-1/2 p-8 md:p-24 flex flex-col justify-center order-2 md:order-2">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          GROUP CLASSES
        </h2>
        <p className="text-base md:text-lg mb-12 text-gray-800 leading-relaxed">
          Experience the energy of training together! Designed to enhance your
          fitness journey, our group classes create a powerful synergy between
          energy expenditure, active recovery, and improved mobility—all within
          a motivating and supportive community.
        </p>

        {/* Single Button */}
        <button
          className={`border border-gray-800 px-6 py-3 w-48 text-sm uppercase tracking-wide transition duration-300 ${
            hovered ? "bg-gray-800 text-white" : "bg-transparent text-gray-800"
          }`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          SEE MORE
        </button>
      </div>
    </div>
  );
};

export default ClassicClasses;