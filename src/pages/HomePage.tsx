import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { ServicesSection } from '../components/ServicesSection';
import { TestimonialsSection } from '../components/TestimonialsSection';

export const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
    </div>
  );
};