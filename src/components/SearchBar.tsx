
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from '@/hooks/use-toast';

interface ServiceItem {
  name: string;
  keywords: string[];
  href: string;
  category: string;
}

// Comprehensive list of all services from all categories
const services: ServiceItem[] = [
  // Business Formation & Registration
  {
    name: "Company Registration",
    keywords: ["company", "registration", "business", "formation", "incorporate"],
    href: "#services",
    category: "Business Formation"
  },
  {
    name: "Private Limited Company",
    keywords: ["private", "limited", "company", "pvt ltd", "business"],
    href: "#services",
    category: "Business Formation"
  },
  {
    name: "LLP Registration",
    keywords: ["llp", "limited liability partnership", "partnership", "business"],
    href: "#services",
    category: "Business Formation"
  },
  {
    name: "One Person Company",
    keywords: ["opc", "one person", "company", "solo", "individual"],
    href: "#services",
    category: "Business Formation"
  },
  {
    name: "GST Registration",
    keywords: ["gst", "goods and services tax", "tax", "registration"],
    href: "#services",
    category: "Business Formation"
  },
  {
    name: "Trademark Registration",
    keywords: ["trademark", "brand", "logo", "intellectual property"],
    href: "#trademark",
    category: "Trademark & IP"
  },
  {
    name: "VPOB Registration",
    keywords: ["vpob", "virtual place of business", "address"],
    href: "#services",
    category: "Business Formation"
  },
  {
    name: "APOB Registration",
    keywords: ["apob", "additional place of business", "branch"],
    href: "#services",
    category: "Business Formation"
  },
  {
    name: "Digital Signature Certificate",
    keywords: ["dsc", "digital signature", "certificate", "electronic"],
    href: "#services",
    category: "Business Formation"
  },
  
  // Tax & Compliance Services
  {
    name: "GST and Other Indirect Tax",
    keywords: ["gst", "indirect tax", "tax filing", "compliance"],
    href: "#services",
    category: "Tax & Compliance"
  },
  {
    name: "Changes in Pvt Ltd Company",
    keywords: ["changes", "private limited", "amendment", "update"],
    href: "#services",
    category: "Tax & Compliance"
  },
  {
    name: "Changes In Limited Liability Partnership",
    keywords: ["changes", "llp", "amendment", "update", "partnership"],
    href: "#services",
    category: "Tax & Compliance"
  },
  {
    name: "Mandatory Annual Filings",
    keywords: ["annual filing", "compliance", "yearly", "returns"],
    href: "#services",
    category: "Tax & Compliance"
  },
  {
    name: "Labour Compliance",
    keywords: ["labour", "employee", "workforce", "compliance", "hr"],
    href: "#services",
    category: "Tax & Compliance"
  },
  {
    name: "Accounting & Tax",
    keywords: ["accounting", "bookkeeping", "tax", "finance"],
    href: "#services",
    category: "Tax & Compliance"
  },
  {
    name: "Convert Your Business",
    keywords: ["convert", "transformation", "change", "business type"],
    href: "#services",
    category: "Tax & Compliance"
  },
  
  // Trademark & IP Services
  {
    name: "Trademark",
    keywords: ["trademark", "brand protection", "logo", "name"],
    href: "#trademark",
    category: "Trademark & IP"
  },
  {
    name: "Copyright",
    keywords: ["copyright", "author rights", "creative work", "protection"],
    href: "#trademark",
    category: "Trademark & IP"
  },
  {
    name: "Patent",
    keywords: ["patent", "invention", "innovation", "protection"],
    href: "#trademark",
    category: "Trademark & IP"
  },
  {
    name: "Infringement",
    keywords: ["infringement", "violation", "ip protection", "legal"],
    href: "#trademark",
    category: "Trademark & IP"
  },
  {
    name: "Design Registration",
    keywords: ["design", "industrial design", "product design", "protection"],
    href: "#trademark",
    category: "Trademark & IP"
  },
  
  // Documentation Services
  {
    name: "Free Legal Documents",
    keywords: ["free", "legal", "documents", "templates"],
    href: "#documentation",
    category: "Documentation"
  },
  {
    name: "Business Contracts",
    keywords: ["business", "contracts", "agreements", "legal"],
    href: "#documentation",
    category: "Documentation"
  },
  {
    name: "Personal & Family",
    keywords: ["personal", "family", "legal", "documents", "will"],
    href: "#documentation",
    category: "Documentation"
  },
  {
    name: "Real Estate",
    keywords: ["real estate", "property", "lease", "rent", "agreements"],
    href: "#documentation",
    category: "Documentation"
  },
  {
    name: "Notices",
    keywords: ["notices", "legal notices", "formal communication"],
    href: "#documentation",
    category: "Documentation"
  },
  {
    name: "HR Policies",
    keywords: ["hr", "human resources", "policies", "workplace"],
    href: "#documentation",
    category: "Documentation"
  },
  
  // Web Development
  {
    name: "Business Website Development",
    keywords: ["website", "web development", "business website", "online presence"],
    href: "#web-development",
    category: "Web Development"
  },
  {
    name: "E-commerce Solutions",
    keywords: ["ecommerce", "online store", "shop", "selling online"],
    href: "#web-development",
    category: "Web Development"
  },
  {
    name: "Custom Web Application",
    keywords: ["web app", "custom application", "software", "development"],
    href: "#web-development",
    category: "Web Development"
  },
  {
    name: "UI/UX Design",
    keywords: ["ui", "ux", "design", "user interface", "user experience"],
    href: "#web-development",
    category: "Web Development"
  },
  {
    name: "Payment Gateway Integration",
    keywords: ["payment", "gateway", "online payment", "e-commerce"],
    href: "#web-development",
    category: "Web Development"
  },
  {
    name: "Web Hosting & Maintenance",
    keywords: ["hosting", "maintenance", "website care", "support"],
    href: "#web-development",
    category: "Web Development"
  },
  
  // Additional Services and Pages
  {
    name: "Refer and Earn",
    keywords: ["refer", "earn", "referral", "commission", "partnership"],
    href: "/refer-and-earn",
    category: "Other Services"
  },
  {
    name: "Earn with Us",
    keywords: ["earn", "partnership", "affiliate", "collaboration"],
    href: "/earn-with-us",
    category: "Other Services"
  },
  {
    name: "Calculator Tools",
    keywords: ["calculator", "tools", "financial", "calculate", "estimator"],
    href: "/calculators",
    category: "Tools"
  }
];

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const filteredServices = services.filter(service => {
    if (!searchValue.trim()) return false;
    
    const searchLower = searchValue.toLowerCase();
    return (
      service.name.toLowerCase().includes(searchLower) ||
      service.keywords.some(keyword => keyword.toLowerCase().includes(searchLower)) ||
      service.category.toLowerCase().includes(searchLower)
    );
  });

  // Group results by category
  const groupedResults = filteredServices.reduce((acc: Record<string, ServiceItem[]>, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {});

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (filteredServices.length > 0) {
      // Navigate to the first result
      const firstResult = filteredServices[0];
      handleSelectService(firstResult);
    } else {
      toast({
        title: "No results found",
        description: `No services matching "${searchValue}" were found.`,
        variant: "destructive",
      });
    }
  };

  const handleSelectService = (service: ServiceItem) => {
    setSearchValue(service.name);
    setIsOpen(false);
    
    // Handle navigation based on href
    if (service.href.startsWith('#')) {
      // For hash links on the current page
      const element = document.querySelector(service.href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // For other pages
      navigate(service.href);
    }
    
    toast({
      title: "Service selected",
      description: `You selected: ${service.name}`,
    });
  };

  return (
    <div className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="container-custom py-4">
        <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
              <div>
                <Input
                  type="search"
                  placeholder="Search for services, documentation, calculators and more..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 focus:bg-white transition-colors"
                  value={searchValue}
                  onChange={(e) => {
                    setSearchValue(e.target.value);
                    setIsOpen(e.target.value.length > 0);
                  }}
                  autoComplete="off"
                />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              className="w-[calc(100vw-2rem)] max-w-2xl mt-2 max-h-[60vh] overflow-y-auto bg-white"
              align="start"
            >
              {Object.keys(groupedResults).length > 0 ? (
                Object.entries(groupedResults).map(([category, categoryServices]) => (
                  <div key={category} className="mb-2">
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 bg-gray-50">
                      {category}
                    </div>
                    {categoryServices.map((service) => (
                      <DropdownMenuItem
                        key={`${category}-${service.name}`}
                        className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100"
                        onSelect={() => handleSelectService(service)}
                      >
                        {service.name}
                      </DropdownMenuItem>
                    ))}
                  </div>
                ))
              ) : (
                searchValue.length > 0 && (
                  <div className="px-4 py-3 text-sm text-gray-500">
                    No services found
                  </div>
                )
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
