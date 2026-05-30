import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const GiftBox = ({ isOpened, onOpen, onAnimationComplete }) => {
  useEffect(() => {
    if (isOpened && onAnimationComplete) {
      // Wait for lid animation (approx 0.8s) + box fade out (0.5s) + padding
      const timer = setTimeout(() => {
        onAnimationComplete();
      }, 1400); 
      return () => clearTimeout(timer);
    }
  }, [isOpened, onAnimationComplete]);

  return (
    <motion.div 
      className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center z-30"
      animate={isOpened ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.8, ease: "easeInOut" }}
    >
      <motion.div 
        className={`relative w-48 h-48 md:w-56 md:h-56 cursor-pointer ${!isOpened ? 'animate-box-bounce hover:gift-box-glow rounded-xl transition-shadow duration-300' : ''}`}
        onClick={() => !isOpened && onOpen()}
        whileHover={!isOpened ? { scale: 1.05 } : {}}
        whileTap={!isOpened ? { scale: 0.95 } : {}}
      >
        {/* Box Shadow */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-8 bg-black/40 blur-xl rounded-full" />

        {/* Box Base */}
        <motion.div 
          className="absolute bottom-0 w-full h-3/4 bg-gradient-to-br from-red-500 to-red-700 rounded-b-xl shadow-inner overflow-hidden border border-red-800/50"
          initial={false}
        >
          {/* Vertical Ribbon */}
          <div className="absolute left-1/2 -translate-x-1/2 w-8 h-full bg-gradient-to-b from-yellow-300 to-yellow-500 shadow-sm" />
          {/* Horizontal Ribbon */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full h-8 bg-gradient-to-r from-yellow-300 to-yellow-500 shadow-sm" />
        </motion.div>

        {/* Box Lid */}
        <motion.div 
          className="absolute top-0 w-[105%] -left-[2.5%] h-1/3 bg-gradient-to-br from-red-400 to-red-600 rounded-t-xl rounded-b-sm shadow-lg z-10 border border-red-700/50 origin-bottom"
          initial={false}
          animate={isOpened ? { 
            y: -120, 
            rotateX: 75, 
            opacity: 0,
            scale: 1.1
          } : { 
            y: 0, 
            rotateX: 0, 
            opacity: 1,
            scale: 1
          }}
          transition={{ 
            type: "spring", 
            stiffness: 100, 
            damping: 15,
            opacity: { duration: 0.4, delay: 0.2 }
          }}
        >
          {/* Lid Vertical Ribbon */}
          <div className="absolute left-1/2 -translate-x-1/2 w-8 h-full bg-gradient-to-b from-yellow-300 to-yellow-500" />
          
          {/* Bow */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-20 h-12 flex justify-center">
            <div className="w-10 h-10 border-4 border-yellow-400 rounded-full absolute -left-4 top-2 rotate-12 shadow-sm" />
            <div className="w-10 h-10 border-4 border-yellow-400 rounded-full absolute -right-4 top-2 -rotate-12 shadow-sm" />
            <div className="w-6 h-6 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full absolute top-4 z-10 shadow-md" />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default GiftBox;