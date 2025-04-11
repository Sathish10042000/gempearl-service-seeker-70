
import React from 'react';
import { Shield, Clock, Users, Award, CheckCircle } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 mt-1 bg-gempearl-teal/10 p-3 rounded-full text-gempearl-teal">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2 text-gempearl-navy">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Expert Team",
      description: "Our team of certified accountants and business consultants brings years of industry experience to every client engagement."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Timely Delivery",
      description: "We understand the importance of deadlines and ensure that all services are delivered on time, every time."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Personalized Approach",
      description: "We take the time to understand your unique business needs and provide tailored solutions that drive growth."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Quality Assurance",
      description: "We maintain the highest standards of quality in all our services, ensuring accuracy and compliance."
    }
  ];

  const benefits = [
    "Comprehensive accounting and business services under one roof",
    "Transparent pricing with no hidden fees",
    "Dedicated account manager for personalized support",
    "Regular updates and reports on your business finances",
    "Compliance with all regulatory requirements",
    "Strategic financial advice to help grow your business"
  ];

  return (
    <section id="about" className="py-16 md:py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gempearl-navy">
              Why Choose Gem Pearl Accounting Services?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              At Gem Pearl, we combine expertise with personalized service to help your business navigate financial
              complexities and achieve sustainable growth. Our client-focused approach ensures that your unique needs
              are met with tailored solutions.
            </p>
            
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <Feature
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg border border-gray-100">
            <h3 className="text-2xl font-semibold mb-6 text-gempearl-navy">
              Benefits of Working With Us
            </h3>
            
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-gempearl-teal mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="text-center">
                <h4 className="text-xl font-semibold mb-2 text-gempearl-navy">Ready to get started?</h4>
                <p className="text-gray-600 mb-4">
                  Contact us today for a free initial consultation
                </p>
                <a
                  href="#contact"
                  className="inline-block px-6 py-3 bg-gempearl-teal hover:bg-gempearl-navy text-white font-medium rounded-md transition-colors duration-200"
                >
                  Schedule Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
