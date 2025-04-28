
import React from 'react';
import Header from '@/components/Header';
import SearchHero from '@/components/SearchHero';
import HeroSection from '@/components/HeroSection';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import WebDevelopment from '@/components/WebDevelopment';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import ReferEarn from '@/components/ReferEarn';

const Index = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <SearchHero />
      <HeroSection />
      <Services />
      <WhyChooseUs />
      <WebDevelopment />
      <ReferEarn />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Index;
