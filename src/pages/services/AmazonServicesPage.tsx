import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, TrendingUp, Target, Settings, Award, CheckCircle } from 'lucide-react';

export const AmazonServicesPage: React.FC = () => {
  const services = [
    {
      icon: ShoppingCart,
      title: 'Product Listing Creation',
      description: 'Professional product listings optimized for maximum visibility and conversions'
    },
    {
      icon: TrendingUp,
      title: 'Listing Optimization',
      description: 'Enhance existing listings with SEO-focused content and compelling visuals'
    },
    {
      icon: Target,
      title: 'PPC Campaign Management',
      description: 'Strategic advertising campaigns that maximize ROI and drive qualified traffic'
    },
    {
      icon: Settings,
      title: 'Account Management',
      description: 'Complete Amazon seller account management and performance optimization'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#022877] to-[#05ccc2] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <ShoppingCart size={40} className="text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Amazon Services</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Maximize your Amazon presence with our comprehensive suite of services designed to boost visibility, increase sales, and optimize your seller performance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8 hover-lift"
              >
                <div className="w-16 h-16 bg-gradient-brand rounded-lg flex items-center justify-center mb-6">
                  <service.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-[#022877] mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amazon Certification Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <Award size={48} className="text-[#05ccc2]" />
            </div>
            <h2 className="text-4xl font-bold text-[#022877] mb-6">Amazon Ads Certified</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
              Webifyra is officially certified in Amazon Advertising, ensuring expert-level strategy for your product campaigns. We understand how to optimize PPC ads to drive visibility and ROI.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-lg shadow-lg p-4"
              >
                <img 
                  src="https://i.postimg.cc/Qxn6v7zj/Ads-Certificate.png" 
                  alt="Amazon Ads Certificate" 
                  className="w-full h-auto rounded-lg"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-lg shadow-lg p-4"
              >
                <img 
                  src="https://i.postimg.cc/ZRcHHv3t/Certificate.png" 
                  alt="Amazon Certificate" 
                  className="w-full h-auto rounded-lg"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#022877] mb-6">Why Choose Our Amazon Services?</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              'Increased product visibility and ranking',
              'Higher conversion rates and sales',
              'Reduced advertising costs through optimization',
              'Comprehensive keyword research and targeting',
              'Regular performance monitoring and reporting',
              'Expert knowledge of Amazon\'s algorithm updates'
            ].map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start"
              >
                <CheckCircle className="h-6 w-6 text-[#05ccc2] mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};