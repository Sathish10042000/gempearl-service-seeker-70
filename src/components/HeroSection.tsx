
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-gempearl-navy to-gempearl-dark text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-gempearl-teal rounded-tl-full"></div>
        <div className="absolute left-0 top-0 w-1/4 h-1/4 bg-gempearl-gold rounded-br-full"></div>
      </div>
      
      <div className="container-custom relative z-10 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Expert Accounting Services for Business Growth
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-xl">
              GemPearl provides comprehensive accounting and business registration services to help your business thrive in today's complex financial landscape.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#2CB49F] hover:bg-gempearl-gold hover:text-gempearl-navy text-white font-medium px-6 py-3 rounded-md text-lg">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-gempearl-navy font-medium px-6 py-3 rounded-md text-lg">
                Our Services
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="flex items-center">
                <div className="bg-[#2CB49F]/20 p-2 rounded-full">
                  <div className="bg-[#2CB49F] h-10 w-10 rounded-full flex items-center justify-center text-white font-bold">
                    10+
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-gray-300">Years of</p>
                  <p className="font-semibold">Experience</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-gempearl-gold/20 p-2 rounded-full">
                  <div className="bg-gempearl-gold h-10 w-10 rounded-full flex items-center justify-center text-gempearl-navy font-bold">
                    5k+
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-gray-300">Happy</p>
                  <p className="font-semibold">Clients</p>
                </div>
              </div>
              
              <div className="flex items-center col-span-2 md:col-span-1">
                <div className="bg-white/20 p-2 rounded-full">
                  <div className="bg-white h-10 w-10 rounded-full flex items-center justify-center text-gempearl-navy font-bold">
                    100%
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-gray-300">Client</p>
                  <p className="font-semibold">Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="bg-white text-gempearl-navy rounded-lg shadow-xl relative">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Request a Free Consultation</h3>
              <form className="space-y-4">
                <div>
                  <Input 
                    type="text" 
                    placeholder="Full Name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gempearl-teal"
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gempearl-teal"
                  />
                </div>
                <div>
                  <Input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gempearl-teal"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gempearl-teal bg-white">
                    <option value="">Select Service</option>
                    <option value="company-registration">Company Registration</option>
                    <option value="gst-registration">GST Registration</option>
                    <option value="tax-filing">Tax Filing</option>
                    <option value="bookkeeping">Bookkeeping</option>
                    <option value="other">Other Services</option>
                  </select>
                </div>
                <Button className="w-full bg-[#2CB49F] hover:bg-gempearl-navy text-white py-3">
                  Get Free Consultation
                </Button>
              </form>
            </CardContent>
            <div className="absolute top-4 left-4 w-full h-full bg-gempearl-gold/20 rounded-lg -z-10"></div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
