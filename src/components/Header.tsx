import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const services = [
    { name: 'Amazon Services', path: '/services/amazon' },
    { name: 'Shopify Services', path: '/services/shopify' },
    { name: 'Meta Ads', path: '/services/meta-ads' },
    { name: 'Social Media Marketing', path: '/services/social-media' },
    { name: 'Web Development', path: '/services/web-development' },
    { name: 'UGC Content Creation', path: '/services/ugc-content' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 relative">

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center flex-1 space-x-8 mr-32">
            <Link 
              to="/" 
              className={`font-medium transition-colors ${location.pathname === '/' ? 'text-[#05ccc2]' : 'text-[#022877] hover:text-[#05ccc2]'}`}
            >
              Home
            </Link>
            
            <button
              onClick={() => scrollToSection('about')}
              className="font-medium text-[#022877] hover:text-[#05ccc2] transition-colors"
            >
              About
            </button>
            
            <div className="relative">
              <button
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className="flex items-center font-medium text-[#022877] hover:text-[#05ccc2] transition-colors"
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 border"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block px-4 py-2 text-[#022877] hover:text-[#05ccc2] hover:bg-gray-50 transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <button
              onClick={() => scrollToSection('testimonials')}
              className="font-medium text-[#022877] hover:text-[#05ccc2] transition-colors"
            >
              Reviews
            </button>
          </nav>

          {/* Desktop Logo - Top Right */}
          <Link to="/" className="hidden md:flex items-center absolute top-1/2 right-5 transform -translate-y-1/2">
            <img 
              src="https://i.postimg.cc/9X7cF6Y4/Logo-1.png" 
              alt="Webifyra Logo" 
              className="h-[120px] w-auto object-contain"
            />
          </Link>

          {/* Mobile Logo and Menu */}
          <div className="md:hidden flex items-center space-x-4">
            <Link to="/" className="flex items-center">
              <img 
                src="https://i.postimg.cc/9X7cF6Y4/Logo-1.png" 
                alt="Webifyra Logo" 
                className="h-[80px] w-auto object-contain"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[#022877] ml-auto"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t bg-white"
            >
              <div className="py-4 space-y-2">
                <Link
                  to="/"
                  className="block px-4 py-2 text-[#022877] hover:text-[#05ccc2] font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <button
                  onClick={() => {
                    scrollToSection('about');
                    setIsMenuOpen(false);
                  }}
                  className="block px-4 py-2 text-[#022877] hover:text-[#05ccc2] font-medium w-full text-left"
                >
                  About
                </button>
                <div className="px-4 py-2">
                  <div className="text-[#022877] font-medium mb-2">Services</div>
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block pl-4 py-1 text-[#022877] hover:text-[#05ccc2] text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
                <button
                  onClick={() => {
                    scrollToSection('testimonials');
                    setIsMenuOpen(false);
                  }}
                  className="block px-4 py-2 text-[#022877] hover:text-[#05ccc2] font-medium w-full text-left"
                >
                  Reviews
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};