
import React from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const SearchBar = () => {
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Search functionality can be added here
  };

  return (
    <div className="w-full bg-white border-b border-gray-200">
      <div className="container-custom py-4">
        <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            type="search"
            placeholder="Search for services, documentation, and more..."
            className="w-full pl-10 pr-4 py-2 bg-gray-50 focus:bg-white transition-colors"
          />
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
