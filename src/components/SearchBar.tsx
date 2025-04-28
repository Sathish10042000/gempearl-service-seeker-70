import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
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
    name: "GST Cancellation",
    keywords: ["gst", "tax", "cancellation"]
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
    name: "Sole Proprietorship",
    keywords: ["proprietorship", "business", "registration"]
  },
  {
    name: "Nidhi Company",
    keywords: ["nidhi", "company", "registration"]
  },
  {
    name: "Producer Company",
    keywords: ["producer", "company", "registration"]
  },
  {
    name: "Partnership Firm",
    keywords: ["partnership", "firm", "registration"]
  },
  {
    name: "Startup India Registration",
    keywords: ["startup", "registration", "business"]
  },
  {
    name: "Digital Signature Certificate",
    keywords: ["dsc", "digital", "signature", "certificate"]
  },
  {
    name: "Udyam Registration",
    keywords: ["udyam", "msme", "registration"]
  },
  {
    name: "MSME Registration",
    keywords: ["msme", "registration", "business"]
  },
  {
    name: "ISO Certification",
    keywords: ["iso", "certification"]
  },
  {
    name: "FSSAI [Food License]",
    keywords: ["fssai", "food", "license"]
  },
  {
    name: "IEC [Import/Export Code]",
    keywords: ["iec", "import", "export", "code"]
  },
  {
    name: "Apeda RCMC",
    keywords: ["apeda", "rcmc", "export"]
  },
  {
    name: "Spice Board Registration",
    keywords: ["spice", "board", "registration"]
  },
  {
    name: "FIEO Registration",
    keywords: ["fieo", "registration", "export"]
  },
  {
    name: "Legal Metrology",
    keywords: ["legal", "metrology"]
  },
  {
    name: "Hallmark Registration",
    keywords: ["hallmark", "registration"]
  },
  {
    name: "BIS Registration",
    keywords: ["bis", "registration"]
  },
  {
    name: "Liquor License",
    keywords: ["liquor", "license"]
  },
  {
    name: "CLRA Registration & Licensing",
    keywords: ["clra", "registration", "licensing", "labor"]
  },
  {
    name: "AD Code Registration",
    keywords: ["ad", "code", "registration"]
  },
  {
    name: "IRDAI Registration",
    keywords: ["irdai", "insurance", "registration"]
  },
  {
    name: "Drug & Cosmetic License",
    keywords: ["drug", "cosmetic", "license"]
  },
  {
    name: "Customs Clearance",
    keywords: ["customs", "clearance", "import", "export"]
  }
];

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const filteredServices = services.filter(service =>
    service.name.toLowerCase().includes(searchValue.toLowerCase()) ||
    service.keywords.some(keyword => 
      keyword.toLowerCase().includes(searchValue.toLowerCase())
    )
  );

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Search functionality can be added here
  };

  return (
    <div className="w-full bg-white border-b border-gray-200">
      <div className="container-custom py-4">
        <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
              <div>
                <Input
                  type="search"
                  placeholder="Search for services, documentation, and more..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 focus:bg-white transition-colors"
                  value={searchValue}
                  onChange={(e) => {
                    setSearchValue(e.target.value);
                    setIsOpen(true);
                  }}
                />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              className="w-[calc(100vw-2rem)] max-w-2xl mt-2 max-h-[60vh] overflow-y-auto"
              align="start"
            >
              {filteredServices.map((service) => (
                <DropdownMenuItem
                  key={service.name}
                  onSelect={() => {
                    setSearchValue(service.name);
                    setIsOpen(false);
                  }}
                >
                  {service.name}
                </DropdownMenuItem>
              ))}
              {filteredServices.length === 0 && (
                <DropdownMenuItem disabled>
                  No services found
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
