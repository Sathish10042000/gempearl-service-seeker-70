
import React from 'react';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import WebDevelopment from '@/components/WebDevelopment';
import ReferEarn from '@/components/ReferEarn';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <SearchBar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <WebDevelopment />
        <WhyChooseUs />
        <ReferEarn />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
