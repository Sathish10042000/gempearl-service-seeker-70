
import React from 'react';
import Header from '@/components/Header';
import SearchHero from '@/components/SearchHero';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import WebDevelopment from '@/components/WebDevelopment';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <SearchHero />
      <Services />
      <WhyChooseUs />
      <WebDevelopment />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Index;
