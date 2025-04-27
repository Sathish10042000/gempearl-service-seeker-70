import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Show success toast
    toast({
      title: "Message Sent Successfully",
      description: "We'll get back to you within 24 hours.",
      variant: "default",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-16 md:py-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gempearl-navy">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or ready to get started? Reach out to our team for expert assistance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6 md:p-8">
            <h3 className="text-2xl font-semibold mb-6 text-gempearl-navy">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gempearl-teal"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gempearl-teal"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gempearl-teal"
                    placeholder="+91 98765 43210"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Interested In</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gempearl-teal"
                  >
                    <option value="">Select a service</option>
                    <option value="company-registration">Company Registration</option>
                    <option value="llp-registration">LLP Registration</option>
                    <option value="gst-registration">GST Registration</option>
                    <option value="trademark">Trademark Registration</option>
                    <option value="bookkeeping">Bookkeeping</option>
                    <option value="tax-filing">Tax Filing</option>
                    <option value="payroll">Payroll Management</option>
                    <option value="financial-reporting">Financial Reporting</option>
                    <option value="other">Other Services</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gempearl-teal"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>
              
              <Button type="submit" className="bg-gempearl-teal hover:bg-gempearl-navy text-white w-full sm:w-auto px-6 py-3">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>
          
          <div className="bg-gempearl-navy text-white rounded-lg shadow-md p-6 md:p-8">
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-gempearl-teal/20 p-2 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-gempearl-teal" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Our Office</h4>
                  <p className="text-gray-300">
                    A-16, Promise Nagar, FC Godown Backside<br />
                    Therukupalayam Pirivu, Palladam Road<br />
                    Tirupur - 641 664, Tamil Nadu, India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gempearl-teal/20 p-2 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-gempearl-teal" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email Us</h4>
                  <a href="mailto:sathishskca@gmail.com" className="text-gray-300 hover:text-white">
                    sathishskca@gmail.com
                  </a><br />
                  <a href="mailto:sadanavgicai@gmail.com" className="text-gray-300 hover:text-white">
                    sadanavgicai@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gempearl-teal/20 p-2 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-gempearl-teal" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Call Us</h4>
                  <a href="tel:+918428308032" className="text-gray-300 hover:text-white">
                    +91 84283 08032
                  </a><br />
                  <a href="tel:+916380153021" className="text-gray-300 hover:text-white">
                    +91 63801 53021
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gempearl-teal/30">
              <h4 className="font-medium mb-3">Business Hours</h4>
              <ul className="space-y-1 text-gray-300">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
