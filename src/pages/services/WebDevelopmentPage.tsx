import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Shield, Smartphone, CheckCircle } from 'lucide-react';

export const WebDevelopmentPage: React.FC = () => {
  const services = [
    {
      icon: Globe,
      title: 'Business Websites',
      description: 'Professional websites that represent your brand and drive business growth'
    },
    {
      icon: Code,
      title: 'Landing Pages',
      description: 'High-converting landing pages optimized for specific campaigns and goals'
    },
    {
      icon: Shield,
      title: 'Admin Panels',
      description: 'Custom admin interfaces and management systems for your business needs'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#61DAFB] to-[#022877] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <Code size={40} className="text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Web Development</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Create powerful digital experiences with modern, responsive websites that drive engagement, conversions, and business growth.
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
                <div className="w-16 h-16 bg-[#61DAFB] rounded-lg flex items-center justify-center mx-auto mb-6">
                  <service.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-[#022877] mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#022877] mb-6">Technologies We Use</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'React', color: '#61DAFB' },
              { name: 'Node.js', color: '#339933' },
              { name: 'TypeScript', color: '#3178C6' },
              { name: 'Next.js', color: '#000000' },
              { name: 'MongoDB', color: '#47A248' },
              { name: 'MySQL', color: '#4479A1' },
              { name: 'AWS', color: '#FF9900' }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-lg p-4 text-center shadow-lg hover-lift"
                style={{ borderTop: `4px solid ${tech.color}` }}
              >
                <h3 className="font-semibold text-[#022877] text-sm">{tech.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#022877] mb-6">Key Features</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Smartphone,
                title: 'Responsive Design',
                description: 'Perfect on all devices and screen sizes'
              },
              {
                icon: Shield,
                title: 'Security First',
                description: 'Built with security best practices and protocols'
              },
              {
                icon: Code,
                title: 'Clean Code',
                description: 'Well-structured, maintainable, and scalable code'
              },
              {
                icon: Globe,
                title: 'SEO Optimized',
                description: 'Built for search engine visibility and ranking'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-gray-50 rounded-lg p-6"
              >
                <div className="w-12 h-12 bg-[#61DAFB] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#022877] mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
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
            <h2 className="text-4xl font-bold text-[#022877] mb-6">Our Development Process</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              'Comprehensive requirement analysis and planning',
              'Modern UI/UX design with user experience focus',
              'Agile development with regular progress updates',
              'Comprehensive testing across devices and browsers',
              'Performance optimization and speed enhancement',
              'SEO implementation and search engine optimization',
              'Security auditing and vulnerability assessment',
              'Ongoing maintenance and technical support'
            ].map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start"
              >
                <CheckCircle className="h-6 w-6 text-[#61DAFB] mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{step}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};