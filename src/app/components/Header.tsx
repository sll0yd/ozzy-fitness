import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import ozzybgimage from "../../assets/NEEDA-CLEANA-WEBSITE-1-10.png";

const Header = () => {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image with optimized mobile view */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div className="absolute inset-0">
        <Image
          src={ozzybgimage}
          alt="Fitness Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
          priority
          className="w-full h-full md:object-cover object-contain sm:object-[center_top]"
        />
      </div>

      {/* Enhanced gradient overlay for better mobile visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/50 z-10" />

      {/* Text Overlay with Modern Design - Adjusted for better mobile positioning */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="absolute top-16 sm:top-20 md:top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4 z-20"
      >
        <div className="flex flex-col md:flex-row justify-around items-center space-y-6 md:space-y-0 md:space-x-6">
          {/* Card 1 */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bg-black/50 backdrop-blur-md border border-white/10 rounded-lg p-4 sm:p-5 shadow-xl hover:shadow-red-600/10 transition-all duration-300 w-full md:max-w-sm"
          >
            <h3 className="text-xl font-black text-white mb-2 tracking-wider">
              <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                24/7
              </span>{" "}
              ACCESS
            </h3>
            <p className="text-gray-200 text-sm md:text-base leading-relaxed">
              Always open to achieve your goals no matter what time it is.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bg-black/50 backdrop-blur-md border border-white/10 rounded-lg p-4 sm:p-5 shadow-xl hover:shadow-red-600/10 transition-all duration-300 w-full md:max-w-sm"
          >
            <h3 className="text-xl font-black text-white mb-2 tracking-wider">
              VARIETY OF{" "}
              <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                CLASSES
              </span>
            </h3>
            <p className="text-gray-200 text-sm md:text-base leading-relaxed">
              A variety of classes to suit different goals, we make sure of it.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bg-black/50 backdrop-blur-md border border-white/10 rounded-lg p-4 sm:p-5 shadow-xl hover:shadow-red-600/10 transition-all duration-300 w-full md:max-w-sm"
          >
            <h3 className="text-xl font-black text-white mb-2 tracking-wider">
              EXPERT{" "}
              <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                TRAINERS
              </span>
            </h3>
            <p className="text-gray-200 text-sm md:text-base leading-relaxed">
              We care about your journey. Our experts are here to help you every
              step of the way.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Quote with enhanced styling and better mobile positioning */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 max-w-xs md:max-w-sm text-white z-20"
      >
        <div className="relative">
          <p className="text-white/90 text-sm md:text-base font-light leading-relaxed bg-black/50 backdrop-blur-md p-4 pt-6 rounded-lg border border-white/10">
            Discipline is the powerful art of choosing long-term well-being over
            short-term comfort.
            <span className="block mt-2 text-xs text-right text-red-400 font-medium tracking-wider">
              #WHATEVER<span className="opacity-70">IT</span>TAKES
            </span>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
