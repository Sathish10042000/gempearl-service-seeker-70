
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ServiceItem {
  name: string;
  keywords: string[];
}

const services: ServiceItem[] = [
  {
    name: "GST Registration",
    keywords: ["gst", "tax", "registration"]
  },
  {
    name: "GST Return Filing",
    keywords: ["gst", "tax", "return", "filing"]
  },
  {
    name: "Private Limited Company",
    keywords: ["company", "registration", "private limited", "business"]
  },
  {
    name: "Limited Liability Partnership",
    keywords: ["llp", "partnership", "business", "registration"]
  },
  {
    name: "One Person Company",
    keywords: ["opc", "company", "registration", "business"]
  },
  {
    name: "Trademark Registration",
    keywords: ["trademark", "registration", "intellectual property"]
  },
  {
    name: "Copyright Registration",
    keywords: ["copyright", "registration", "intellectual property"]
  },
  {
    name: "Patent Registration",
    keywords: ["patent", "registration", "intellectual property", "innovation"]
  },
  {
    name: "Import Export Code",
    keywords: ["iec", "import", "export", "code"]
  },
  {
    name: "Accounting & Bookkeeping",
    keywords: ["accounting", "bookkeeping", "finance", "business"]
  },
  {
    name: "Business Incorporation",
    keywords: ["incorporation", "business", "company", "setup"]
  },
  {
    name: "Tax Filing",
    keywords: ["tax", "filing", "returns", "income"]
  },
];

const categories = [
  { name: "GST Registration", href: "#" },
  { name: "Company Registration", href: "#" },
  { name: "Accounting & Business Compliance", href: "#" },
  { name: "Trademark", href: "#trademark" },
];

const SearchHero = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const filteredServices = services.filter(service => {
    const searchLower = searchValue.toLowerCase();
    return (
      service.name.toLowerCase().includes(searchLower) ||
      service.keywords.some(keyword => keyword.toLowerCase().includes(searchLower))
    );
  });

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Searching for:', searchValue);
    // Search functionality can be implemented here
  };

  return (
    <section className="bg-gradient-to-b from-gempearl-navy to-gempearl-dark text-white py-16 md:py-24">
      <div className="container-custom">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center mb-5">
            <div className="flex items-center">
              <img src="/lovable-uploads/47a44359-42c1-48ed-9d8f-6fc5706d9372.png" 
                   alt="Google Reviews" 
                   className="h-10" />
              <div className="flex text-yellow-400 ml-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i === 4 ? "text-yellow-300" : ""}>★</span>
                ))}
              </div>
              <span className="ml-2 font-medium">4.5/5 <span className="opacity-80">(18k+ Reviews)</span></span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            India's <span className="text-yellow-400">Top Rated</span> Professional Services Platform
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Connecting you with experts to simplify your legal, tax & compliance.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSearch} className="relative">
            <div className="relative">
              <Input
                type="search"
                placeholder="Try 'Incorporate in USA'"
                className="bg-white text-gray-800 pl-12 pr-4 py-6 rounded-full text-lg w-full"
                value={searchValue}
                onChange={(e) => {
                  setSearchValue(e.target.value);
                  setIsOpen(e.target.value.length > 0);
                }}
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <Search className="text-gray-500 h-6 w-6" />
              </div>
              <DropdownMenu open={isOpen && searchValue.length > 0} onOpenChange={setIsOpen}>
                <DropdownMenuTrigger className="hidden" />
                <DropdownMenuContent
                  align="start"
                  className="w-[calc(100%-2rem)] max-w-3xl mt-2 max-h-[60vh] overflow-y-auto"
                  style={{ width: 'calc(100% - 1rem)' }}
                >
                  {filteredServices.map((service) => (
                    <DropdownMenuItem
                      key={service.name}
                      className="py-2"
                      onSelect={() => {
                        setSearchValue(service.name);
                        setIsOpen(false);
                      }}
                    >
                      {service.name}
                    </DropdownMenuItem>
                  ))}
                  {filteredServices.length === 0 && (
                    <DropdownMenuItem disabled className="py-2">
                      No services found
                    </DropdownMenuItem>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <a key={category.name} href={category.href}>
                  <Button variant="outline" className="bg-transparent border border-white/20 text-white hover:bg-white/10">
                    {category.name}
                  </Button>
                </a>
              ))}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SearchHero;
