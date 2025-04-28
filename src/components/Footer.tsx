
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gempearl-navy text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">
              <span className="text-gempearl-teal">Gem</span>Pearl
            </h3>
            <p className="text-gray-300 mb-6">
              Your trusted partner for comprehensive accounting, business registration, and web development services. We help businesses navigate complexities with ease.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-gempearl-teal text-white p-2 rounded-full transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-gempearl-teal text-white p-2 rounded-full transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-gempearl-teal text-white p-2 rounded-full transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-gempearl-teal text-white p-2 rounded-full transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gempearl-gold">Our Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gempearl-teal font-medium">Company Registration:</span></li>
              <li><a href="#" className="text-gray-300 hover:text-gempearl-teal pl-3">Private Limited Company</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gempearl-teal pl-3">Limited Liability Partnership</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gempearl-teal pl-3">One Person Company</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gempearl-teal pl-3">Sole Proprietorship</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gempearl-teal pl-3">Nidhi Company</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gempearl-teal pl-3">Producer Company</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gempearl-teal pl-3">Partnership Firm</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gempearl-teal pl-3">Startup India Registration</a></li>
              <li className="mt-2"><a href="#" className="text-gray-300 hover:text-gempearl-teal">Licenses and Registration</a></li>
              <li><span className="text-gempearl-teal font-medium">Web Development:</span></li>
              <li><a href="#web-development" className="text-gray-300 hover:text-gempearl-teal pl-3">Business Websites</a></li>
              <li><a href="#web-development" className="text-gray-300 hover:text-gempearl-teal pl-3">E-commerce Solutions</a></li>
              <li className="mt-2">
                <a href="/earn-with-us" className="text-gray-300 hover:text-gempearl-teal font-medium">Earn With Us</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-gempearl-teal">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-gempearl-teal">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-gempearl-teal">Services</a></li>
              <li><a href="#web-development" className="text-gray-300 hover:text-gempearl-teal">Web Development</a></li>
              <li><a href="/earn-with-us" className="text-gray-300 hover:text-gempearl-teal">Earn With Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gempearl-teal">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gempearl-teal">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gempearl-teal">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gempearl-teal">Terms & Conditions</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gempearl-teal mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  A-16, Promise Nagar, FC Godown Backside<br />
                  Therukupalayam Pirivu, Palladam Road<br />
                  Tirupur - 641 664, Tamil Nadu, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gempearl-teal mr-3 flex-shrink-0" />
                <a href="tel:+918428308032" className="text-gray-300 hover:text-white">
                  +91 84283 08032
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gempearl-teal mr-3 flex-shrink-0" />
                <a href="mailto:sathishskca@gmail.com" className="text-gray-300 hover:text-white">
                  sathishskca@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center md:flex md:justify-between md:items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Gem Pearl Accounting Services. All rights reserved.
          </p>
          <div className="flex justify-center md:justify-end space-x-6">
            <a href="#" className="text-gray-400 hover:text-gempearl-teal">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-gempearl-teal">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-gempearl-teal">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
