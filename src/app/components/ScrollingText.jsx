import React from 'react';
import { motion } from 'framer-motion';

const ScrollingText = () => {
  const text = "COMMIT. EXECUTE. ENDURE. "; // Text to scroll
  const duplicates = 6; // Number of times to duplicate the text

  return (
    <div 
      className="w-full overflow-hidden whitespace-nowrap flex items-center" 
      style={{ 
        height: '100px', // Réduit la hauteur de 150px à 100px
        backgroundColor: '#1B1D1F', // Dark background color
      }}
    >
      <motion.div
        className="inline-block text-4xl font-bold whitespace-nowrap text-white" // Ajout de text-white
        initial={{ x: 0 }} // Start with text already visible
        animate={{
          x: ['0%', '-50%'], // Move from current position to left
        }}
        transition={{
          duration: 30, // Slower animation
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