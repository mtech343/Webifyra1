import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const services = [
    { name: 'Amazon Services', path: '/services/amazon' },
    { name: 'Shopify Services', path: '/services/shopify' },
    { name: 'Meta Ads', path: '/services/meta-ads' },
    { name: 'Social Media Marketing', path: '/services/social-media' },
    { name: 'Web Development', path: '/services/web-development' },
    { name: 'UGC Content Creation', path: '/services/ugc-content' },
  ];

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById('hero');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else {
    const element = document.getElementById('hero');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 relative">
          {/* Desktop Logo - Left Side */}
          <button onClick={handleLogoClick} className="hidden md:flex items-center">
            <img 
              src="https://i.postimg.cc/kGL816N6/Logo-1.png" 
              alt="Webifyra Logo" 
              className="h-[65px] w-auto object-contain"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center flex-1 space-x-6">
            <Link 
              to="/" 
              onClick={() => handleLogoClick()}
              className="font-medium text-[#022877] hover:text-[#05ccc2] transition-colors text-sm"
            >
              Home
            </Link>
            
            <button
              onClick={() => scrollToSection('about')}
              className="font-medium text-[#022877] hover:text-[#05ccc2] transition-colors text-sm"
            >
              About
            </button>
            
            <div className="relative">
              <button
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className="flex items-center font-medium text-[#022877] hover:text-[#05ccc2] transition-colors text-sm"
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
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="block px-4 py-2 text-[#022877] hover:text-[#05ccc2] hover:bg-gray-50 transition-colors text-sm"
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
              className="font-medium text-[#022877] hover:text-[#05ccc2] transition-colors text-sm"
            >
              Reviews
            </button>
          </nav>

          {/* Spacer for desktop layout balance */}
          <div className="hidden md:block w-12"></div>

          {/* Mobile Logo and Menu */}
          <div className="md:hidden flex items-center justify-center flex-1">
            <button onClick={handleLogoClick} className="flex items-center">
              <img 
                src="https://i.postimg.cc/kGL816N6/Logo-1.png" 
                alt="Webifyra Logo" 
                className="h-[60px] w-auto object-contain"
              />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[#022877] absolute right-0"
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
              <div className="py-3 space-y-1">
                <Link
                  to="/"
                  onClick={() => {
                    handleLogoClick();
                    setIsMenuOpen(false);
                  }}
                  className="block px-4 py-2 text-[#022877] hover:text-[#05ccc2] font-medium text-sm"
                >
                  Home
                </Link>
                <button
                  onClick={() => {
                    scrollToSection('about');
                    setIsMenuOpen(false);
                  }}
                  className="block px-4 py-2 text-[#022877] hover:text-[#05ccc2] font-medium w-full text-left text-sm"
                >
                  About
                </button>
                <div className="px-4 py-1">
                  <div className="text-[#022877] font-medium mb-1 text-sm">Services</div>
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        setIsMenuOpen(false);
                      }}
                      className="block pl-4 py-1 text-[#022877] hover:text-[#05ccc2] text-xs"
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
                  className="block px-4 py-2 text-[#022877] hover:text-[#05ccc2] font-medium w-full text-left text-sm"
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