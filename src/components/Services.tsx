
import React from 'react';
import { ChevronRight, Building, FileText, PenTool, BarChart, FileCheck, CreditCard, Landmark, Users } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  url: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, url }) => {
  return (
    <div className="service-card bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
      <div className="mb-4 text-gempearl-teal">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-gempearl-navy">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a 
        href={url} 
        className="inline-flex items-center text-gempearl-teal hover:text-gempearl-navy font-medium"
      >
        Learn More <ChevronRight className="ml-1 h-4 w-4" />
      </a>
    </div>
  );
};

const Services = () => {
  const businessServices = [
    {
      title: "Company Registration",
      description: "Register your business as a Private Limited Company, OPC, or Public Limited with our expert assistance.",
      icon: <Building className="h-10 w-10" />,
      url: "#"
    },
    {
      title: "LLP Registration",
      description: "Form a Limited Liability Partnership with our streamlined process and expert guidance.",
      icon: <Users className="h-10 w-10" />,
      url: "#"
    },
    {
      title: "GST Registration",
      description: "Comply with GST regulations and register your business with our hassle-free service.",
      icon: <FileCheck className="h-10 w-10" />,
      url: "#"
    },
    {
      title: "Trademark Registration",
      description: "Protect your brand identity with trademark registration services from our experts.",
      icon: <PenTool className="h-10 w-10" />,
      url: "#"
    }
  ];

  const accountingServices = [
    {
      title: "Bookkeeping",
      description: "Maintain accurate financial records with our comprehensive bookkeeping services.",
      icon: <FileText className="h-10 w-10" />,
      url: "#"
    },
    {
      title: "Tax Filing",
      description: "Stay compliant with tax regulations with our expert tax filing services for businesses.",
      icon: <Landmark className="h-10 w-10" />,
      url: "#"
    },
    {
      title: "Payroll Management",
      description: "Streamline your payroll process with our efficient and accurate payroll management services.",
      icon: <CreditCard className="h-10 w-10" />,
      url: "#"
    },
    {
      title: "Financial Reporting",
      description: "Get insightful financial reports to make informed business decisions and track performance.",
      icon: <BarChart className="h-10 w-10" />,
      url: "#"
    }
  ];

  return (
    <section id="services" className="py-16 md:py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gempearl-navy">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive business and accounting solutions tailored to meet the unique needs of your business
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-gempearl-navy border-b border-gray-200 pb-2">
            Business Formation & Registration
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessServices.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                url={service.url}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-8 text-gempearl-navy border-b border-gray-200 pb-2">
            Accounting & Financial Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {accountingServices.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                url={service.url}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Need a service not listed here? We offer customized solutions for businesses of all sizes.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-gempearl-navy hover:bg-gempearl-teal text-white font-medium rounded-md transition-colors duration-200"
          >
            Request Custom Service
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
