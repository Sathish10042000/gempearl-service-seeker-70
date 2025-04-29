
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
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calculator } from 'lucide-react';

const Index = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <SearchHero />
      <HeroSection />
      <div className="container-custom py-10">
        <div className="flex justify-center">
          <Link to="/calculators">
            <Button size="lg" className="gap-2">
              <Calculator className="h-5 w-5" />
              Explore Financial Calculators
            </Button>
          </Link>
        </div>
      </div>
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
