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
    <div className="relative w-full h-[85vh] md:h-[93vh] overflow-hidden">
      {/* Background Image with specific mobile optimizations */}
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full">
          <Image
            src={ozzybgimage}
            alt="Fitness Background"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center sm:object-center md:object-[center_40%]"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
      </div>

      {/* Modified gradient overlay for better visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 z-10" />

      {/* Text Overlay with Modern Design - Moved higher for mobile */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="absolute top-10 sm:top-16 md:top-20 left-1/2 transform -translate-x-1/2 z-20 w-full px-4"
      >
        <div className="flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0 md:space-x-6 mb-20 sm:mb-16 md:mb-0">
          {/* Card 1 */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bg-black/60 backdrop-blur-md border border-white/10 rounded-lg p-3 sm:p-5 shadow-xl hover:shadow-red-600/10 transition-all duration-300 w-full md:max-w-sm"
          >
            <h3 className="text-lg sm:text-xl font-black text-white mb-1 sm:mb-2 tracking-wider">
              <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                24/7
              </span>{" "}
              ACCESS
            </h3>
            <p className="text-gray-200 text-xs sm:text-sm md:text-base leading-relaxed">
              Always open to achieve your goals no matter what time it is.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bg-black/60 backdrop-blur-md border border-white/10 rounded-lg p-3 sm:p-5 shadow-xl hover:shadow-red-600/10 transition-all duration-300 w-full md:max-w-sm"
          >
            <h3 className="text-lg sm:text-xl font-black text-white mb-1 sm:mb-2 tracking-wider">
              VARIETY OF{" "}
              <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                CLASSES
              </span>
            </h3>
            <p className="text-gray-200 text-xs sm:text-sm md:text-base leading-relaxed">
              A variety of classes to suit different goals, we make sure of it.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bg-black/60 backdrop-blur-md border border-white/10 rounded-lg p-3 sm:p-5 shadow-xl hover:shadow-red-600/10 transition-all duration-300 w-full md:max-w-sm"
          >
            <h3 className="text-lg sm:text-xl font-black text-white mb-1 sm:mb-2 tracking-wider">
              EXPERT{" "}
              <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                TRAINERS
              </span>
            </h3>
            <p className="text-gray-200 text-xs sm:text-sm md:text-base leading-relaxed">
              We care about your journey. Our experts are here to help you every
              step of the way.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Quote with enhanced styling - slightly bigger than previous mobile version */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-3 sm:bottom-12 right-3 sm:right-8 max-w-[180px] sm:max-w-xs md:max-w-sm text-white z-20"
      >
        <div className="relative">
          <p className="text-white/90 text-[10px] sm:text-sm md:text-base font-light leading-tight bg-black/70 backdrop-blur-md p-2 sm:p-4 pt-2 sm:pt-6 rounded-lg border border-white/10">
            Discipline is the powerful art of choosing long-term well-being over
            short-term comfort.
            <span className="block mt-1 sm:mt-2 text-[9px] sm:text-xs text-right font-bold tracking-widest">
              <span className="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">#WHATEVER</span><span className="text-white/70">IT</span><span className="bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent">TAKES</span>
            </span>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;