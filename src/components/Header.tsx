
import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SubMenuItem {
  name: string;
  href: string;
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
      { name: 'Licenses and Registration', href: '#' },
      { name: 'Web Development', href: '#' }
    ]
  },
  { 
    name: 'Accounting Services', 
    href: '#services',
    submenu: [
      { name: 'Bookkeeping', href: '#' },
      { name: 'Tax Filing', href: '#' },
      { name: 'Payroll Management', href: '#' },
      { name: 'Financial Reporting', href: '#' }
    ]
  },
  { 
    name: 'Tax & Compliance', 
    href: '#',
    submenu: [
      { name: 'Income Tax Filing', href: '#' },
      { name: 'GST Filing', href: '#' },
      { name: 'TDS Returns', href: '#' },
      { name: 'Annual Compliance', href: '#' }
    ]
  },
  { name: 'About Us', href: '#about' },
  { name: 'Contact', href: '#contact' }
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
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

        {/* Desktop Navigation */}
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
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gempearl-navy"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button className="bg-gempearl-teal hover:bg-gempearl-navy text-white">
            Get a Quote
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-gempearl-teal focus:outline-none"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
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
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="block py-2 text-sm text-gray-700 hover:text-gempearl-teal"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4">
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
