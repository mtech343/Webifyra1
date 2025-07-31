import React from 'react';
import { motion } from 'framer-motion';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <iframe 
          className="w-full h-full object-cover"
          src="https://www.youtube.com/embed/ejiRDhze_fY?autoplay=1&mute=1&loop=1&playlist=ejiRDhze_fY&controls=0&showinfo=0&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1"
          frameBorder="0" 
          allow="autoplay; encrypted-media" 
          allowFullScreen
          title="Webifyra Background Video"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#022877]/70 to-[#05ccc2]/50" />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-['Rajdhani']"
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
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Webifyra empowers Amazon sellers, business owners, and brands with modern tech, 
            strategy, and creative content.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="bg-gradient-brand text-white px-8 py-4 rounded-lg font-semibold text-lg hover-lift shadow-lg">
              Get Started
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#022877] transition-all duration-300">
              View Our Work
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};