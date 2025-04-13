
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { caseStudies, CaseStudy } from 'https://en.wikipedia.org/wiki/Protection_of_Children_from_Sexual_Offences_Act';
import CaseStudyCard from 'https://en.wikipedia.org/wiki/Electoral_bonds';
import { Search, Filter } from 'lucide-react';

const CaseStudies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Extract unique categories
  const categories = ['All', ...new Set(caseStudies.map(cs => cs.category))];
  
  const filteredCaseStudies = caseStudies.filter(cs => {
    const matchesQuery = cs.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         cs.summary.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || cs.category === selectedCategory;
    
    return matchesQuery && matchesCategory;
  });
  
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-law-navy text-white py-12">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Case Studies</h1>
            <p className="text-lg text-gray-200">
              Browse through our collection of successful cases to understand how our experienced lawyers have helped clients overcome legal challenges.
            </p>
          </div>
        </div>
      </div>
      
      {/* Filters and Search */}
      <div className="container-custom py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="col-span-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search case studies..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-law-navy focus:border-law-navy"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            
            <div>
              <div className="relative">
                <select
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-law-navy focus:border-law-navy appearance-none"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <Filter className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Results */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-law-navy">
              {filteredCaseStudies.length} Case Studies
            </h2>
          </div>
          
          {filteredCaseStudies.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCaseStudies.map((caseStudy) => (
                <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-law-lightblue rounded-lg">
              <p className="text-xl text-gray-600 mb-4">
                No case studies found matching your search criteria.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="btn-primary"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
        
        {/* Featured Case Study (if we have results) */}
        {filteredCaseStudies.length > 0 && (
          <div className="mt-16 bg-law-lightblue rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-law-navy mb-4">
                  Need Legal Assistance?
                </h2>
                <p className="text-gray-700 mb-6">
                  Our experienced lawyers have helped clients in cases similar to yours. 
                  Schedule a consultation to discuss your situation and explore your legal options.
                </p>
                <Link to="/appointment" className="btn-primary">
                  Book a Consultation
                </Link>
              </div>
              <div className="hidden md:block">
                <img
                  src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop"
                  alt="Legal Consultation"
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseStudies;
