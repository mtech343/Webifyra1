import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        y: -100,
        transition: { duration: 0.8, ease: "easeInOut" }
      }}
      className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center"
    >
      {/* Logo */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-12"
      >
        <img 
          src="https://i.postimg.cc/9X7cF6Y4/Logo-1.png" 
          alt="Webifyra Logo" 
          className="h-20 md:h-24 w-auto object-contain"
        />
      </motion.div>

      {/* Circular Progress Animation */}
      <div className="relative mb-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="relative w-20 h-20"
        >
          {/* Background Circle */}
          <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 80 80">
            <circle
              cx="40"
              cy="40"
              r="32"
              stroke="#f0f0f0"
              strokeWidth="6"
              fill="none"
            />
            {/* Progress Circle */}
            <motion.circle
              cx="40"
              cy="40"
              r="32"
              stroke="#05ccc2"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={201.06} // 2 * π * 32
              strokeDashoffset={201.06 - (201.06 * progress) / 100}
              style={{
                filter: 'drop-shadow(0 0 8px #05ccc2)',
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </svg>
          
          {/* Progress Percentage */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg font-semibold text-[#022877]"
            >
              {Math.round(progress)}%
            </motion.span>
          </div>
        </motion.div>
      </div>

      {/* Horizontal Progress Bar Alternative */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: 280, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="w-70 h-1 bg-gray-200 rounded-full overflow-hidden mb-6"
      >
        <motion.div
          className="h-full bg-gradient-to-r from-[#05ccc2] to-[#05ccc2]/80 rounded-full relative"
          style={{
            width: `${progress}%`,
            boxShadow: '0 0 12px #05ccc2, 0 0 24px #05ccc2/50'
          }}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
        </motion.div>
      </motion.div>

      {/* Loading Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-center"
      >
        <p className="text-[#022877]/70 text-sm font-medium tracking-wide">
          Loading your digital experience...
        </p>
      </motion.div>

      {/* Subtle pulse animation for the entire container */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            'radial-gradient(circle at center, rgba(5, 204, 194, 0.03) 0%, transparent 70%)',
            'radial-gradient(circle at center, rgba(5, 204, 194, 0.08) 0%, transparent 70%)',
            'radial-gradient(circle at center, rgba(5, 204, 194, 0.03) 0%, transparent 70%)'
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
};