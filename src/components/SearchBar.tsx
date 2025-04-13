
import { useState } from 'react';
import { Search, MapPin } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string, location: string, specialization: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const [specialization, setSpecialization] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query, location, specialization);
  };

  const specializations = [
    'All Specializations',
    'Criminal Law',
    'Family Law',
    'Immigration Law',
    'Personal Injury',
    'Intellectual Property',
    'Civil Rights',
    'Corporate Law',
    'Medical Malpractice'
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 -mt-8 relative z-20">
      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="relative">
            <label htmlFor="query" className="block text-sm font-medium text-gray-700 mb-1">
              Search Lawyers
            </label>
            <div className="relative">
              <input
                type="text"
                id="query"
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-law-navy focus:border-law-navy"
                placeholder="Enter keywords..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          
          <div className="relative">
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <div className="relative">
              <input
                type="text"
                id="location"
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-law-navy focus:border-law-navy"
                placeholder="City or state..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          
          <div>
            <label htmlFor="specialization" className="block text-sm font-medium text-gray-700 mb-1">
              Specialization
            </label>
            <select
              id="specialization"
              className="pl-4 pr-10 py-2 w-full border border-gray-300 rounded-md focus:ring-law-navy focus:border-law-navy appearance-none bg-white"
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
            >
              {specializations.map((spec) => (
                <option key={spec} value={spec}>
                  {spec}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="mt-4 text-right">
          <button
            type="submit"
            className="btn-primary"
          >
            Search Lawyers
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
