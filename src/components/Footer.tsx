import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const services = [
    { name: 'Amazon Services', path: '/services/amazon' },
    { name: 'Shopify Services', path: '/services/shopify' },
    { name: 'Meta Ads', path: '/services/meta-ads' },
    { name: 'Social Media Marketing', path: '/services/social-media' },
    { name: 'Web Development', path: '/services/web-development' },
    { name: 'UGC Content Creation', path: '/services/ugc-content' },
  ];

  return (
    <footer className="bg-white text-[#022877] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#022877]">Company</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => {
                    if (window.location.pathname !== '/') {
                      window.location.href = '/#about';
                    } else {
                      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-gray-600 hover:text-[#05ccc2] transition-colors"
                >
                  About
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#022877]">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.path}>
                  <Link 
                    to={service.path} 
                    className="text-gray-600 hover:text-[#05ccc2] transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#022877]">Contact</h3>
            <div className="space-y-3">
              <a 
                href="mailto:webifyra@gmail.com" 
                className="flex items-center text-gray-600 hover:text-[#05ccc2] transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                webifyra@gmail.com
              </a>
              <a 
                href="https://www.instagram.com/webifyra" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-[#05ccc2] transition-colors"
              >
                <Instagram className="h-4 w-4 mr-2" />
                @webifyra
              </a>
            </div>
          </div>
        </div>

        {/* Logo and Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <p className="text-sm text-gray-500 text-center md:text-left mb-4 md:mb-0">
              © 2025 Webifyra. All rights reserved.
            </p>
            <div className="flex justify-center md:justify-end">
              <img 
                src="https://i.postimg.cc/wvFxd6fP/Logo-1.png" 
                alt="Webifyra Logo" 
                className="h-16 md:h-20 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};