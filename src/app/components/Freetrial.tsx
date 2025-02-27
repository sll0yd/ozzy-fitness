"use client";

import React from "react";
import { motion } from "framer-motion";
import DOMPurify from 'dompurify';

// Utility function for sanitizing text
function sanitizeText(text: string): string {
  return DOMPurify.sanitize(text, {
    ALLOWED_TAGS: [],  // Strip all HTML tags
    ALLOWED_ATTR: []   // Strip all attributes
  });
}

const FreeTrial: React.FC = () => {
  // Centralized content with sanitization
  const content = {
    preHeading: sanitizeText("TRANSFORM YOUR JOURNEY"),
    mainHeading: {
      primary: sanitizeText("Unleash Your Potential"),
      highlight: sanitizeText("3 DAYS FREE ACCESS")
    },
    description: sanitizeText(
      "Take the first step toward a stronger, better you. We're removing all barriers – experience our premium training platform with no commitment required."
    ),
    ctaButton: sanitizeText("Start Your Free Trial"),
    trustIndicator: sanitizeText("No credit card required • Cancel anytime")
  };

  return (
    <div className="relative bg-[#1B1D1F] py-16 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute h-96 w-96 -top-48 -right-48 bg-red-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute h-96 w-96 -bottom-48 -left-48 bg-red-600/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main Heading */}
          <div className="space-y-2">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-block text-gray-400 text-lg tracking-widest font-medium"
            >
              {content.preHeading}
            </motion.span>

            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              {content.mainHeading.primary}
              <span className="block mt-1">
                <span className="relative">
                  <span className="relative z-10 text-red-500">
                    {content.mainHeading.highlight}
                  </span>
                  <span className="absolute -bottom-1 left-0 w-full h-2 bg-red-600/20 -skew-x-12 rounded-sm" />
                </span>
              </span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-300/90 max-w-2xl mx-auto leading-relaxed">
            {content.description}
          </p>

          {/* CTA Button */}
          <div className="flex flex-col items-center space-y-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="relative"
            >
              <button className="relative px-12 py-4 bg-red-600 text-white text-lg font-bold rounded-lg shadow-lg transition-all duration-300 hover:shadow-red-600/30 hover:shadow-xl">
                {content.ctaButton}
              </button>
            </motion.div>

            {/* Trust Indicator */}
            <p className="text-gray-400 text-sm">
              {content.trustIndicator}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FreeTrial;