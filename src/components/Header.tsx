import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LoginModal, SignupModal } from './auth/AuthModals';

interface SubMenuItem {
  name: string;
  href: string;
  submenu?: SubMenuItem[];
}

interface MenuItem {
  name: string;
  href: string;
  submenu?: SubMenuItem[];
}

const menuItems: MenuItem[] = [
  { name: 'Home', href: '#' },
  { 
    name: 'Business Setup', 
    href: '#services',
    submenu: [
      { 
        name: 'Company Registration', 
        href: '#',
        submenu: [
          { name: 'Private Limited Company', href: '#' },
          { name: 'Limited Liability Partnership', href: '#' },
          { name: 'One Person Company', href: '#' },
          { name: 'Sole Proprietorship', href: '#' },
          { name: 'Nidhi Company', href: '#' },
          { name: 'Producer Company', href: '#' },
          { name: 'Partnership Firm', href: '#' },
          { name: 'Startup India Registration', href: '#' },
        ]
      },
      { 
        name: 'Licenses and Registration', 
        href: '#',
        submenu: [
          { name: 'Digital Signature Certificate', href: '#' },
          { name: 'Udyam Registration', href: '#' },
          { name: 'MSME Registration', href: '#' },
          { name: 'ISO Certification', href: '#' },
          { name: 'FSSAI [Food License]', href: '#' },
          { name: 'IEC [Import/Export Code]', href: '#' },
          { name: 'Apeda RCMC', href: '#' },
          { name: 'Spice Board Registration', href: '#' },
          { name: 'FIEO Registration', href: '#' },
          { name: 'Legal Metrology', href: '#' },
          { name: 'Hallmark Registration', href: '#' },
          { name: 'BIS Registration', href: '#' },
          { name: 'Liquor License', href: '#' },
          { name: 'CLRA Registration & Licensing', href: '#' },
          { name: 'AD Code Registration', href: '#' },
          { name: 'IRDAI Registration', href: '#' },
          { name: 'Drug & Cosmetic License', href: '#' },
          { name: 'Customs Clearance', href: '#' },
        ]
      },
      { 
        name: 'Web Development', 
        href: '#web-development',
        submenu: [
          { name: 'Business Website Development', href: '#web-development' },
          { name: 'E-commerce Solutions', href: '#web-development' },
          { name: 'Custom Web Applications', href: '#web-development' },
          { name: 'UI/UX Design', href: '#web-development' },
          { name: 'Payment Gateway Integration', href: '#web-development' },
          { name: 'Web Hosting & Maintenance', href: '#web-development' },
        ]
      }
    ]
  },
  { 
    name: 'Tax & Compliance', 
    href: '#services',
    submenu: [
      { name: 'GST and Other Indirect Tax', href: '#' },
      { name: 'Changes in Pvt Ltd Company', href: '#' },
      { name: 'Changes In Limited Liability Partnership', href: '#' },
      { name: 'Mandatory Annual Filings', href: '#' },
      { name: 'Labour Compliance', href: '#' },
      { name: 'Accounting & Tax', href: '#' },
      { name: 'Convert Your Business', href: '#' }
    ]
  },
  { 
    name: 'Trademark & IP', 
    href: '#trademark',
    submenu: [
      { name: 'Trademark', href: '#trademark' },
      { name: 'Copyright', href: '#trademark' },
      { name: 'Patent', href: '#trademark' },
      { name: 'Infringement', href: '#trademark' },
      { name: 'Design Registration', href: '#trademark' }
    ]
  },
  { 
    name: 'Documentation', 
    href: '#documentation',
    submenu: [
      { name: 'Free Legal Documents', href: '#documentation' },
      { name: 'Business Contracts', href: '#documentation' },
      { name: 'Personal & Family', href: '#documentation' },
      { name: 'Real Estate', href: '#documentation' },
      { name: 'Notices', href: '#documentation' },
      { name: 'HR Policies', href: '#documentation' }
    ]
  },
  { name: 'Earn With Us', href: '/earn-with-us' }
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [openNestedSubmenu, setOpenNestedSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
    setOpenNestedSubmenu(null);
  };

  const toggleNestedSubmenu = (name: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenNestedSubmenu(openNestedSubmenu === name ? null : name);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container-custom flex justify-between items-center py-4">
        <div className="flex items-center">
          <a href="#" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gempearl-navy">
              <span className="text-gempearl-teal">Gem</span>Pearl
            </span>
            <span className="hidden md:inline-block text-sm text-gray-600">Accounting Services</span>
          </a>
        </div>

        <nav className="hidden lg:flex items-center space-x-6">
          {menuItems.map((item) => (
            <div key={item.name} className="relative group">
              <a
                href={item.href}
                className="text-gray-700 hover:text-gempearl-teal font-medium flex items-center transition-colors duration-200"
                onClick={(e) => {
                  if (item.submenu) {
                    e.preventDefault();
                    toggleSubmenu(item.name);
                  }
                }}
              >
                {item.name}
                {item.submenu && <ChevronDown className="ml-1 h-4 w-4" />}
              </a>
              
              {item.submenu && (
                <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-1">
                    {item.submenu.map((subItem) => (
                      <div key={subItem.name} className="relative group/nested">
                        <a
                          href={subItem.href}
                          className="flex justify-between items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gempearl-navy"
                          onClick={(e) => {
                            if (subItem.submenu) {
                              e.preventDefault();
                              toggleNestedSubmenu(subItem.name, e);
                            }
                          }}
                        >
                          {subItem.name}
                          {subItem.submenu && <ChevronDown className="ml-1 h-3 w-3" />}
                        </a>
                        
                        {subItem.submenu && (
                          <div className="absolute left-full top-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-200 z-50">
                            <div className="py-1">
                              {subItem.submenu.map((nestedItem) => (
                                <a
                                  key={nestedItem.name}
                                  href={nestedItem.href}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gempearl-navy"
                                >
                                  {nestedItem.name}
                                </a>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:block">
          <div className="flex items-center space-x-4">
            <LoginModal />
            <SignupModal />
            <Button className="bg-gempearl-teal hover:bg-gempearl-navy text-white">
              Get a Quote
            </Button>
          </div>
        </div>

        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-gempearl-teal focus:outline-none"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <nav className="container-custom py-4">
            {menuItems.map((item) => (
              <div key={item.name} className="py-2">
                <div
                  className="flex justify-between items-center"
                  onClick={() => {
                    if (item.submenu) {
                      toggleSubmenu(item.name);
                    }
                  }}
                >
                  <a
                    href={item.href}
                    className="block text-gray-700 hover:text-gempearl-teal font-medium"
                    onClick={(e) => {
                      if (item.submenu) {
                        e.preventDefault();
                      }
                    }}
                  >
                    {item.name}
                  </a>
                  {item.submenu && (
                    <ChevronDown className={`h-4 w-4 transition-transform ${openSubmenu === item.name ? 'rotate-180' : ''}`} />
                  )}
                </div>

                {item.submenu && openSubmenu === item.name && (
                  <div className="mt-2 pl-4 border-l-2 border-gempearl-teal">
                    {item.submenu.map((subItem) => (
                      <div key={subItem.name} className="py-2">
                        <div 
                          className="flex justify-between items-center"
                          onClick={(e) => {
                            if (subItem.submenu) {
                              e.stopPropagation();
                              setOpenNestedSubmenu(openNestedSubmenu === subItem.name ? null : subItem.name);
                            }
                          }}
                        >
                          <a
                            href={subItem.href}
                            className="block text-sm text-gray-700 hover:text-gempearl-teal"
                            onClick={(e) => {
                              if (subItem.submenu) {
                                e.preventDefault();
                              }
                            }}
                          >
                            {subItem.name}
                          </a>
                          {subItem.submenu && (
                            <ChevronDown className={`h-3 w-3 transition-transform ${openNestedSubmenu === subItem.name ? 'rotate-180' : ''}`} />
                          )}
                        </div>
                        
                        {subItem.submenu && openNestedSubmenu === subItem.name && (
                          <div className="mt-2 pl-4 border-l-2 border-gempearl-teal">
                            {subItem.submenu.map((nestedItem) => (
                              <a
                                key={nestedItem.name}
                                href={nestedItem.href}
                                className="block py-2 text-xs text-gray-700 hover:text-gempearl-teal"
                              >
                                {nestedItem.name}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4 space-y-2">
              <LoginModal />
              <SignupModal />
              <Button className="w-full bg-gempearl-teal hover:bg-gempearl-navy text-white">
                Get a Quote
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
