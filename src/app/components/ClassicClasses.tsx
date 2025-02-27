import React, { useState } from "react";
import Image from "next/image";
import classes from "../../assets/classes.jpg";

// Classic Courses Section Component
const ClassicClasses: React.FC = () => {
  const [hovered, setHovered] = useState<boolean>(false);

  // Content without sanitization
  const content = {
    quote: "« It doesn't get easier. You get stronger with every session. »",
    title: "GROUP CLASSES",
    description: "Experience the energy of training together! Designed to enhance your fitness journey, our group classes create a powerful synergy between energy expenditure, active recovery, and improved mobility—all within a motivating and supportive community.",
    buttonText: "SEE MORE"
  };

  return (
    <div className="flex flex-col md:flex-row w-full bg-stone-50">
      {/* Image on the left */}
      <div className="w-full md:w-1/2 min-h-[700px] relative overflow-hidden order-1 md:order-1">
        <Image
          src={classes}
          alt="Group Classes"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
        {/* Text overlay on the image */}
        <div className="absolute bottom-20 right-10 text-white text-right max-w-xs">
          <p className="text-xl md:text-2xl italic">
            {content.quote}
          </p>
        </div>
      </div>

      {/* Text content on the right */}
      <div className="w-full md:w-1/2 p-8 md:p-24 flex flex-col justify-center order-2 md:order-2">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          {content.title}
        </h2>
        <p className="text-base md:text-lg mb-12 text-gray-800 leading-relaxed">
          {content.description}
        </p>

        {/* Single Button */}
        <button
          className={`border border-gray-800 px-6 py-3 w-48 text-sm uppercase tracking-wide transition duration-300 ${
            hovered ? "bg-gray-800 text-white" : "bg-transparent text-gray-800"
          }`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {content.buttonText}
        </button>
      </div>
    </div>
  );
};

export default ClassicClasses;