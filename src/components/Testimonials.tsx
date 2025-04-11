
import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  name: string;
  company: string;
  rating: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, company, rating }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
      <div className="flex text-gempearl-gold mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-current" />
        ))}
      </div>
      <p className="text-gray-700 mb-6 italic">"{quote}"</p>
      <div>
        <p className="font-semibold text-gempearl-navy">{name}</p>
        <p className="text-sm text-gray-500">{company}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Gem Pearl helped us streamline our accounting processes and significantly reduced our tax burden. Their expertise in business tax strategies has been invaluable to our growth.",
      name: "Rajesh Sharma",
      company: "Innovate Technologies Pvt. Ltd.",
      rating: 5
    },
    {
      quote: "The team at Gem Pearl made our company registration process incredibly smooth. Their knowledge of regulatory requirements and attention to detail saved us time and prevented potential issues.",
      name: "Priya Patel",
      company: "EcoGreen Solutions",
      rating: 5
    },
    {
      quote: "We've been working with Gem Pearl for our bookkeeping and tax filing needs for over 3 years now. Their team is responsive, thorough, and always available to answer our questions.",
      name: "Amit Singh",
      company: "Global Trade Partners",
      rating: 5
    },
    {
      quote: "Gem Pearl's financial reporting services have provided us with valuable insights that have helped us make better business decisions. Their strategic advice has been a game-changer for our company.",
      name: "Neha Gupta",
      company: "Sunrise Retail Chain",
      rating: 5
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gempearl-navy">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about our services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              company={testimonial.company}
              rating={testimonial.rating}
            />
          ))}
        </div>
        
        <div className="mt-12 bg-gempearl-navy text-white p-8 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Join Our Growing List of Satisfied Clients</h3>
              <p className="mb-4">
                We've helped over 5,000 businesses across India with their accounting and business registration needs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Star className="h-5 w-5 text-gempearl-gold mr-2 fill-current" />
                  <span>Rated 4.9/5 based on 500+ reviews</span>
                </li>
                <li className="flex items-center">
                  <Star className="h-5 w-5 text-gempearl-gold mr-2 fill-current" />
                  <span>98% client retention rate</span>
                </li>
                <li className="flex items-center">
                  <Star className="h-5 w-5 text-gempearl-gold mr-2 fill-current" />
                  <span>Award-winning accounting services</span>
                </li>
              </ul>
            </div>
            <div className="text-center md:text-right">
              <a
                href="#contact"
                className="inline-block px-6 py-3 bg-gempearl-teal hover:bg-gempearl-gold hover:text-gempearl-navy text-white font-medium rounded-md transition-colors duration-200"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
