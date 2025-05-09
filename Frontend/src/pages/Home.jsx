import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import CoursePreview from '../components/CoursePreview';
import TestimonialSection from '../components/TestimonialSection';
import NewsletterSection from '../components/NewsletterSection';
import PartnerSection from '../components/PartnerSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <CoursePreview />
      <TestimonialSection />
      <NewsletterSection />
      <PartnerSection />
    </div>
  );
};

export default Home;
