import React from 'react';
import { motion } from 'framer-motion';
import { Share2, Calendar, MessageCircle, TrendingUp, CheckCircle } from 'lucide-react';

export const SocialMediaPage: React.FC = () => {
  const services = [
    {
      icon: Share2,
      title: 'Monthly Content Creation',
      description: 'Professional content creation tailored to your brand and audience'
    },
    {
      icon: Calendar,
      title: 'Post Scheduling & Growth Management',
      description: 'Strategic posting schedules and growth optimization techniques'
    },
    {
      icon: MessageCircle,
      title: 'Customer Engagement',
      description: 'Active community management and customer interaction'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#E1306C] to-[#405DE6] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <Share2 size={40} className="text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Social Media Marketing</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Build meaningful connections with your audience through strategic content creation, community management, and growth-focused social media strategies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8 hover-lift text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#E1306C] to-[#405DE6] rounded-lg flex items-center justify-center mx-auto mb-6">
                  <service.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-[#022877] mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#022877] mb-6">Platforms We Manage</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { 
                name: 'Instagram', 
                color: '#E1306C',
                icon: 'https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000'
              },
              { 
                name: 'Facebook', 
                color: '#1877F2',
                icon: 'https://img.icons8.com/?size=100&id=118497&format=png&color=000000'
              },
              { 
                name: 'TikTok', 
                color: '#000000',
                icon: 'https://img.icons8.com/?size=100&id=118638&format=png&color=000000'
              },
              { 
                name: 'YouTube', 
                color: '#FF0000',
                icon: 'https://img.icons8.com/?size=100&id=19318&format=png&color=000000'
              }
            ].map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 text-center shadow-lg hover-lift"
                style={{ borderTop: `4px solid ${platform.color}` }}
              >
                <div className="flex justify-center mb-3">
                  <img 
                    src={platform.icon}
                    alt={`${platform.name} icon`}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <h3 className="font-semibold text-[#022877]">{platform.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#022877] mb-6">Content We Create</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'Graphics & Visuals',
                description: 'Eye-catching graphics, infographics, and branded visuals'
              },
              {
                icon: MessageCircle,
                title: 'Video Content',
                description: 'Short-form videos, reels, stories, and promotional content'
              },
              {
                icon: Calendar,
                title: 'Written Content',
                description: 'Engaging captions, blog posts, and social media copy'
              }
            ].map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-gray-50 rounded-lg p-6"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-[#E1306C] to-[#405DE6] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <type.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#022877] mb-3">{type.title}</h3>
                <p className="text-gray-600">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#022877] mb-6">Our Social Media Approach</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              'Brand-consistent content across all platforms',
              'Data-driven content strategy and optimization',
              'Community building and audience engagement',
              'Hashtag research and trend analysis',
              'Regular performance reporting and insights',
              'Crisis management and reputation monitoring',
              'Influencer collaboration and partnerships',
              'Cross-platform content repurposing'
            ].map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start"
              >
                <CheckCircle className="h-6 w-6 text-[#E1306C] mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};