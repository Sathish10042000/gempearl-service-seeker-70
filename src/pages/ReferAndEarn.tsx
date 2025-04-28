
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReferEarn from '@/components/ReferEarn';

const ReferAndEarn = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gempearl-navy">
            Refer & Earn Program
          </h1>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Share GemPearl with your friends and family to earn exciting rewards. Our referral program 
            is designed to say thank you for helping us grow.
          </p>
        </div>
      </div>
      <ReferEarn />
      <Footer />
    </main>
  );
};

export default ReferAndEarn;
