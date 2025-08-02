import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, TrendingUp, BarChart3, CheckCircle } from 'lucide-react';

export const MetaAdsPage: React.FC = () => {
  const services = [
    {
      icon: Target,
      title: 'Facebook & Instagram Ad Campaigns',
      description: 'Strategic advertising campaigns across Meta\'s entire ecosystem'
    },
    {
      icon: Users,
      title: 'Targeting & Audience Setup',
      description: 'Advanced audience targeting to reach your ideal customers'
    },
    {
      icon: TrendingUp,
      title: 'Creative Optimization',
      description: 'A/B testing and optimization of ad creatives for maximum performance'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#1877F2] to-[#E1306C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <Target size={40} className="text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Meta Ads</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Reach your target audience with precision through strategic Facebook and Instagram advertising campaigns that drive results and maximize ROI.
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
                <div className="w-16 h-16 bg-gradient-to-r from-[#1877F2] to-[#E1306C] rounded-lg flex items-center justify-center mx-auto mb-6">
                  <service.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-[#022877] mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#022877] mb-6">Campaign Types We Manage</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Brand Awareness',
              'Lead Generation',
              'Website Traffic',
              'Conversions',
              'App Installs',
              'Video Views',
              'Engagement',
              'Catalog Sales'
            ].map((type, index) => (
              <motion.div
                key={type}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 text-center shadow-lg hover-lift"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-[#1877F2] to-[#E1306C] rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 size={24} className="text-white" />
                </div>
                <h3 className="font-semibold text-[#022877]">{type}</h3>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-4xl font-bold text-[#022877] mb-6">What You Get</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              'Detailed audience research and persona development',
              'Custom ad creative design and copywriting',
              'Advanced targeting using Meta\'s powerful tools',
              'Continuous A/B testing and optimization',
              'Comprehensive performance tracking and reporting',
              'Regular strategy reviews and adjustments',
              'Retargeting campaigns to maximize conversions',
              'Cross-platform campaign coordination'
            ].map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start"
              >
                <CheckCircle className="h-6 w-6 text-[#1877F2] mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};