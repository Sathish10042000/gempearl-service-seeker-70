
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const services = [
  "Private Limited Company",
  "Limited Liability Partnership",
  "One Person Company",
  "Sole Proprietorship",
  "Nidhi Company",
  "Producer Company",
  "Partnership Firm",
  "Startup India Registration",
  "Digital Signature Certificate",
  "Udyam Registration",
  "MSME Registration",
  "ISO Certification",
  "FSSAI [Food License]",
  "IEC [Import/Export Code]",
  "Apeda RCMC",
  "Spice Board Registration",
  "FIEO Registration",
  "Legal Metrology",
  "Hallmark Registration",
  "BIS Registration",
  "Liquor License",
  "CLRA Registration & Licensing",
  "AD Code Registration",
  "IRDAI Registration",
  "Drug & Cosmetic License",
  "Customs Clearance"
];

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const filteredServices = services.filter(service =>
    service.toLowerCase().includes(searchValue.toLowerCase())
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
                  key={service}
                  onSelect={() => {
                    setSearchValue(service);
                    setIsOpen(false);
                  }}
                >
                  {service}
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
