
import React from 'react';
import { Code, Globe, ShoppingCart, Monitor, CreditCard, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface WebServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const WebServiceCard: React.FC<WebServiceCardProps> = ({ icon, title, description, features }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100 hover:border-gempearl-teal/30">
      <div className="p-6">
        <div className="bg-gempearl-navy/5 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4 text-gempearl-teal">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gempearl-navy">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-gempearl-teal mr-2">•</span>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button className="w-full bg-gempearl-navy hover:bg-gempearl-teal text-white">
          Learn More
        </Button>
      </div>
    </div>
  );
};

const WebDevelopment = () => {
  const webServices = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Business Website Development",
      description: "Professional websites that establish your online presence and showcase your services.",
      features: [
        "Responsive, mobile-friendly design",
        "SEO-optimized structure",
        "Content management system",
        "Custom branding and design",
        "Contact forms and lead capture"
      ]
    },
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "E-commerce Solutions",
      description: "Sell your products online with a secure, user-friendly e-commerce website.",
      features: [
        "Product catalog and inventory management",
        "Secure payment gateway integration",
        "Shopping cart functionality",
        "Order management system",
        "Customer account creation"
      ]
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Custom Web Application",
      description: "Tailored web applications to streamline your business processes and operations.",
      features: [
        "Custom database design",
        "User authentication and authorization",
        "Workflow automation",
        "Integration with existing systems",
        "Scalable architecture"
      ]
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "User-centric design that enhances user experience and drives engagement.",
      features: [
        "User research and personas",
        "Wireframing and prototyping",
        "Visual design and branding",
        "Usability testing",
        "Conversion optimization"
      ]
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Payment Gateway Integration",
      description: "Secure payment processing solutions for your online business.",
      features: [
        "Multiple payment method support",
        "Recurring billing options",
        "Transaction management",
        "Fraud protection",
        "PCI DSS compliance"
      ]
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Web Hosting & Maintenance",
      description: "Reliable hosting solutions and ongoing website maintenance to keep your site running smoothly.",
      features: [
        "Fast, secure web hosting",
        "Regular backups and updates",
        "Performance optimization",
        "Technical support",
        "Security monitoring"
      ]
    }
  ];

  return (
    <section id="web-development" className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gempearl-navy">Web & E-commerce Development</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Establish your online presence with our professional web development services. From simple business websites to complex e-commerce platforms, we build digital solutions that drive growth.
          </p>
        </div>

        {/* Development Process */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center text-gempearl-navy">Our Development Process</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-gempearl-teal text-center">
              <div className="bg-gempearl-teal/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gempearl-teal">1</span>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gempearl-navy">Discovery & Planning</h4>
              <p className="text-gray-600">
                We start by understanding your business needs, target audience, and project requirements to create a detailed development plan.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-gempearl-navy text-center">
              <div className="bg-gempearl-navy/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gempearl-navy">2</span>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gempearl-navy">Design & Development</h4>
              <p className="text-gray-600">
                Our team creates visually appealing designs and develops functional websites with attention to detail and user experience.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-gempearl-gold text-center">
              <div className="bg-gempearl-gold/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gempearl-gold">3</span>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gempearl-navy">Testing & Launch</h4>
              <p className="text-gray-600">
                We thoroughly test your website across devices and browsers before launch, ensuring it performs flawlessly for your users.
              </p>
            </div>
          </div>
        </div>

        {/* Web Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {webServices.map((service, index) => (
            <WebServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>
        
        {/* Technologies */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-6 text-center text-gempearl-navy">Technologies We Work With</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {["React", "WordPress", "Shopify", "WooCommerce", "PHP", "JavaScript", "HTML/CSS", "Node.js", "MySQL", "MongoDB", "AWS", "Digital Ocean"].map((tech, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-md text-center border border-gray-200 hover:border-gempearl-teal transition-colors">
                <p className="font-medium text-gempearl-navy">{tech}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <div className="mt-16 bg-gempearl-navy text-white p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Ready to Build Your Online Presence?</h3>
              <p className="mb-4">
                Whether you need a simple business website or a complex e-commerce platform, our team is ready to help you succeed online.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="mr-2 text-gempearl-teal">✓</span>
                  <span>Custom solutions tailored to your business</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-gempearl-teal">✓</span>
                  <span>Responsive design for all devices</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-gempearl-teal">✓</span>
                  <span>SEO-friendly development</span>
                </li>
              </ul>
            </div>
            <div className="text-center md:text-right">
              <a
                href="#contact"
                className="inline-block px-8 py-4 bg-gempearl-teal hover:bg-gempearl-gold hover:text-gempearl-navy text-white font-medium rounded-md transition-colors duration-200"
              >
                Get a Free Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDevelopment;
