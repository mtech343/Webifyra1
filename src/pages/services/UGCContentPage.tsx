import React from 'react';
import { motion } from 'framer-motion';
import { Video, Users, Sparkles, Camera, CheckCircle } from 'lucide-react';

export const UGCContentPage: React.FC = () => {
  const services = [
    {
      icon: Video,
      title: 'AI-based Avatar Product Reviews',
      description: 'Realistic AI-generated product reviews that build trust and credibility'
    },
    {
      icon: Users,
      title: 'Realistic & Trustworthy Social Ads',
      description: 'Authentic-looking user-generated content for social media advertising'
    },
    {
      icon: Sparkles,
      title: 'Personalized Videos for Brand Engagement',
      description: 'Custom video content that resonates with your target audience'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#FF0000] to-[#FF6B6B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <Video size={40} className="text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">UGC Content Creation</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Transform your brand engagement with authentic, AI-powered user-generated content that builds trust and drives conversions.
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
                <div className="w-16 h-16 bg-gradient-to-r from-[#FF0000] to-[#FF6B6B] rounded-lg flex items-center justify-center mx-auto mb-6">
                  <service.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-[#022877] mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* UGC Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#022877] mb-6">Content Types We Create</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Camera,
                title: 'Product Unboxing Videos',
                description: 'Engaging unboxing experiences that showcase your products'
              },
              {
                icon: Users,
                title: 'Customer Testimonials',
                description: 'Authentic testimonials from satisfied customers'
              },
              {
                icon: Video,
                title: 'Tutorial & How-To Videos',
                description: 'Educational content showing product usage and benefits'
              },
              {
                icon: Sparkles,
                title: 'Behind-the-Scenes Content',
                description: 'Authentic glimpses into your brand and company culture'
              },
              {
                icon: Camera,
                title: 'Social Media Stories',
                description: 'Engaging story content for Instagram, Facebook, and TikTok'
              },
              {
                icon: Video,
                title: 'Product Demonstrations',
                description: 'Clear demonstrations showing product features and benefits'
              }
            ].map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-white rounded-lg p-6 shadow-lg"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-[#FF0000] to-[#FF6B6B] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <type.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#022877] mb-3">{type.title}</h3>
                <p className="text-gray-600">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Technology */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#022877] mb-6">AI-Powered Innovation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our cutting-edge AI technology creates realistic avatars and personalized content that resonates with your audience while maintaining authenticity and trust.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-[#022877]">Why Choose AI-Generated UGC?</h3>
              <div className="space-y-4">
                {[
                  'Cost-effective alternative to traditional UGC',
                  'Scalable content production for multiple campaigns',
                  'Consistent brand messaging across all content',
                  'Customizable avatars for different demographics',
                  'Quick turnaround times for urgent campaigns',
                  'Complete creative control over messaging'
                ].map((benefit, index) => (
                  <div key={benefit} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-[#FF0000] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#FF0000]/10 to-[#FF6B6B]/10 rounded-2xl p-8"
            >
              <div className="text-center">
                <Sparkles size={64} className="text-[#FF0000] mx-auto mb-6" />
                <h4 className="text-2xl font-bold text-[#022877] mb-4">Advanced AI Features</h4>
                <ul className="text-left space-y-3 text-gray-600">
                  <li>• Realistic facial expressions and gestures</li>
                  <li>• Natural voice synthesis and lip-sync</li>
                  <li>• Multiple language and accent options</li>
                  <li>• Custom avatar creation and branding</li>
                  <li>• Emotion-based content adaptation</li>
                  <li>• Real-time content personalization</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#022877] mb-6">Our UGC Creation Process</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Strategy & Brief',
                description: 'Define content goals, target audience, and key messaging'
              },
              {
                step: '02',
                title: 'Avatar Creation',
                description: 'Design and customize AI avatars that match your brand'
              },
              {
                step: '03',
                title: 'Content Production',
                description: 'Generate high-quality UGC using AI technology'
              },
              {
                step: '04',
                title: 'Optimization & Delivery',
                description: 'Refine content and deliver in your preferred formats'
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#FF0000] to-[#FF6B6B] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-[#022877] mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};