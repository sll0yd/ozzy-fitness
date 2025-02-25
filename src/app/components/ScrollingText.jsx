import React from 'react';
import { motion } from 'framer-motion';

const ScrollingText = () => {
  const text = "COMMIT. EXECUTE. ENDURE. "; // Text to scroll
  const duplicates = 6; // Number of times to duplicate the text

  return (
    <div 
      className="w-full overflow-hidden whitespace-nowrap flex items-center" 
      style={{ 
        height: '150px', // Increase banner height
        backgroundColor: '#1B1D1F', // Dark background color
      }}
    >
      <motion.div
        className="inline-block text-4xl font-bold whitespace-nowrap" // Smaller text
        style={{ color: 'red' }} // Red text color
        initial={{ x: 0 }} // Start with text already visible
        animate={{
          x: ['0%', '-50%'], // Move from current position to left
        }}
        transition={{
          duration: 20, // Slower animation
          repeat: Infinity, // Loop infinitely
          ease: 'linear', // Smooth linear animation
        }}
      >
        {Array.from({ length: duplicates }).map((_, index) => (
          <span key={index} style={{ marginLeft: index === 0 ? 0 : '4rem' }}>
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollingText;