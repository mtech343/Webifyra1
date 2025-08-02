import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const HeroSection: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const backgroundImages = [
    'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg', // Amazon/eCommerce
    'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg', // Shopify/Online store
    'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg', // Social Media
    'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg', // Web Development
    'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg', // UGC Content
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [backgroundImages.length]);

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <img 
              src={backgroundImages[currentImage]}
              alt="Digital Agency Background"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-[#022877]/70 to-[#05ccc2]/50" />
      </div>

      <div className="relative z-10 h-full flex items-center pt-20 md:pt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight font-['Rajdhani'] mt-8 md:mt-0"
          >
            Elevate Your Brand with{' '}
            <span className="text-gradient bg-gradient-to-r from-[#05ccc2] to-white bg-clip-text text-transparent">
              Digital Precision
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-lg md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed mt-4 md:mt-0"
          >
            Webifyra empowers Amazon sellers, business owners, and brands with modern tech, 
            strategy, and creative content.
          </motion.p>
        </div>
      </div>
    </section>
  );
};