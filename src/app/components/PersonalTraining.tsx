import React, { useState } from "react";
import Image from "next/image";
import trainer from "../../assets/trainer.jpg";

// Personal Training Section Component
const PersonalTraining = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex flex-col md:flex-row w-full bg-stone-50 min-h-screen">
      <div className="w-full md:w-1/2 p-8 md:p-24 flex flex-col justify-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          PERSONAL TRAINER
        </h2>
        <p className="text-base md:text-lg mb-8 text-gray-800 leading-relaxed">
          Designed to overcome obstacles, pick up the pace, and achieve lasting
          results, personal training combines the expertise of a strong team
          with the discipline of a tailored approach.
        </p>

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
      <div className="w-full md:w-1/2 relative overflow-hidden h-[600px] md:h-auto">
        <Image
          src={trainer}
          alt="Personal Training"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
          priority
        />
        <div className="absolute bottom-20 right-10 text-white text-right max-w-xs">
          <p className="text-xl md:text-2xl italic">
            « Success is within reach—and personal training helps you get there
            faster. »
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonalTraining;
