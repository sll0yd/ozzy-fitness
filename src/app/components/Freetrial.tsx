'use client'

import React from 'react';
import { motion } from 'framer-motion';

const FreeTrial = () => {
  return (
    <div className="relative bg-[#1B1D1F] py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent" />
        <div className="absolute h-96 w-96 -top-48 -right-48 bg-red-600/30 rounded-full blur-3xl" />
        <div className="absolute h-96 w-96 -bottom-48 -left-48 bg-red-600/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {/* Main Heading */}
          <h2 className="text-5xl font-extrabold text-white tracking-tight">
            GET STARTED TODAY WITH{" "}
            <span className="relative">
              <span className="relative z-10 text-red-600">3 DAYS FREE!</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-red-600/20 -skew-x-12" />
            </span>
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-300/90 max-w-2xl mx-auto leading-relaxed">
            That&apos;s why, we would like to make it as easy as we can for you.
            Let us help you with your fitness goals.
          </p>

          {/* Motivational Tagline */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16">
            {['COMMIT', 'EXECUTE', 'ENDURE'].map((text, index) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group cursor-default"
              >
                <span className="text-2xl font-bold text-red-600 relative">
                  {text}
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full" />
                </span>
              </motion.div>
            ))}
          </div>

          {/* Tagline */}
          <p className="text-3xl font-bold text-white tracking-wider">
            WHATEVER IT TAKES
          </p>

          {/* Call-to-Action Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <button className="px-10 py-4 bg-red-600 text-white text-lg font-bold rounded-full shadow-[0_0_20px_rgba(220,38,38,0.5)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(220,38,38,0.7)] hover:bg-red-500">
              Claim Your Free Trial
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default FreeTrial;