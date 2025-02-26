'use client'

import React from 'react';
import { motion } from 'framer-motion';

const FreeTrial = () => {
  return (
    <div className="relative bg-gradient-to-b from-black to-zinc-900 py-16 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent" />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute h-96 w-96 -top-48 -right-48 bg-red-600/20 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute h-96 w-96 -bottom-48 -left-48 bg-red-600/20 rounded-full blur-3xl" 
        />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxYjFkMWYiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMzBjMCAxNi41NjktMTMuNDMxIDMwLTMwIDMwQzEzLjQzMSA2MCAwIDQ2LjU2OSAwIDMwIDAgMTMuNDMxIDEzLjQzMSAwIDMwIDBjMTYuNTY5IDAgMzAgMTMuNDMxIDMwIDMweiIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')] opacity-5" />
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
          {/* Main Heading with improved visual hierarchy */}
          <div className="space-y-2">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-block text-gray-400 text-lg tracking-widest font-medium"
            >
              TRANSFORM YOUR JOURNEY
            </motion.span>
            
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Unleash Your Potential
              <span className="block mt-1">
                <span className="relative">
                  <span className="relative z-10 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                    3 DAYS FREE ACCESS
                  </span>
                  <span className="absolute -bottom-1 left-0 w-full h-2 bg-red-600/20 -skew-x-12 rounded-sm" />
                </span>
              </span>
            </h2>
          </div>

          {/* Enhanced Description with more compelling message */}
          <p className="text-lg text-gray-300/90 max-w-2xl mx-auto leading-relaxed">
            Take the first step toward a stronger, better you. 
            We're removing all barriers – experience our premium training platform
            with no commitment required.
          </p>

          {/* Animated Pillars with reduced spacing */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12 py-1">
            {[
              { text: 'COMMIT', desc: 'to yourself' },
              { text: 'EXECUTE', desc: 'with precision' },
              { text: 'ENDURE', desc: 'beyond limits' }
            ].map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group cursor-default"
              >
                <div className="flex flex-col items-center space-y-0">
                  <span className="text-xl font-bold text-white relative">
                    {item.text}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full" />
                  </span>
                  <span className="text-xs font-light text-gray-400 opacity-0 transform translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    {item.desc}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Enhanced Tagline with reduced spacing */}
          <motion.p 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-2xl font-black text-white tracking-wider mt-2"
          >
            <span className="opacity-70">#</span>WHATEVER<span className="opacity-70">IT</span>TAKES
          </motion.p>

          {/* Rectangular CTA Button with rounded edges */}
          <div className="flex flex-col items-center space-y-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 rounded-lg blur-md opacity-70 animate-pulse" />
              <button className="relative px-12 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white text-lg font-bold rounded-lg shadow-lg transition-all duration-300 hover:shadow-red-600/30 hover:shadow-xl">
                Start Your Free Trial
              </button>
            </motion.div>
            
            {/* Added trust indicator */}
            <p className="text-gray-400 text-sm">
              No credit card required • Cancel anytime
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FreeTrial;