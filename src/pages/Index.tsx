
import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import LawyerCard from '../components/LawyerCard';
import CaseStudyCard from '../components/CaseStudyCard';
import { lawyers, Lawyer } from '../data/lawyers';
import { caseStudies } from '../data/caseStudies';
import { Link } from 'react-router-dom';
import { Star, Award, ThumbsUp } from 'lucide-react';

const Index = () => {
  const [filteredLawyers, setFilteredLawyers] = useState<Lawyer[]>([]);
  
  useEffect(() => {
    // Initially show top-rated lawyers (sort by rating)
    const sortedLawyers = [...lawyers].sort((a, b) => b.rating - a.rating).slice(0, 3);
    setFilteredLawyers(sortedLawyers);
  }, []);

  const handleSearch = (query: string, location: string, specialization: string) => {
    let results = [...lawyers];
    
    // Filter by query (search in name and about)
    if (query) {
      const lowerQuery = query.toLowerCase();
      results = results.filter(
        (lawyer) =>
          lawyer.name.toLowerCase().includes(lowerQuery) ||
          lawyer.about.toLowerCase().includes(lowerQuery)
      );
    }
    
    // Filter by location
    if (location) {
      const lowerLocation = location.toLowerCase();
      results = results.filter(
        (lawyer) => lawyer.location.toLowerCase().includes(lowerLocation)
      );
    }
    
    // Filter by specialization
    if (specialization && specialization !== 'All Specializations') {
      results = results.filter(
        (lawyer) => lawyer.specialization.includes(specialization)
      );
    }
    
    setFilteredLawyers(results);
  };

  const featuredCaseStudies = caseStudies.slice(0, 3);

  return (
    <div>
      <Hero />
      
      <div className="container-custom">
        {/* Search Section */}
        <SearchBar onSearch={handleSearch} />
        
        {/* Top Lawyers Section */}
        <section className="section">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-law-navy">
                Find Experienced Lawyers
              </h2>
              <p className="text-gray-600 mt-2">
                Connect with top-rated legal professionals in various practice areas
              </p>
            </div>
            <Link to="/appointment" className="text-law-gold hover:underline mt-4 md:mt-0">
              View all lawyers →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredLawyers.length > 0 ? (
              filteredLawyers.map((lawyer) => (
                <LawyerCard key={lawyer.id} lawyer={lawyer} />
              ))
            ) : (
              <div className="col-span-3 text-center py-12">
                <p className="text-gray-500 text-lg">
                  No lawyers found matching your search criteria. Please try different filters.
                </p>
              </div>
            )}
          </div>
        </section>
        
        {/* Why Choose Us Section */}
        <section className="section bg-law-lightblue rounded-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-law-navy text-center mb-12">
            Why Choose JusticeConnect
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="mx-auto w-16 h-16 bg-law-gold/20 rounded-full flex items-center justify-center mb-4">
                <Star className="h-8 w-8 text-law-gold" />
              </div>
              <h3 className="text-xl font-bold text-law-navy mb-3">Experienced Attorneys</h3>
              <p className="text-gray-600">
                Our network includes only attorneys with proven track records of success and years of experience in their areas of practice.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="mx-auto w-16 h-16 bg-law-gold/20 rounded-full flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-law-gold" />
              </div>
              <h3 className="text-xl font-bold text-law-navy mb-3">Case Success Stories</h3>
              <p className="text-gray-600">
                Browse through our extensive collection of case studies showcasing successful legal outcomes across various practice areas.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="mx-auto w-16 h-16 bg-law-gold/20 rounded-full flex items-center justify-center mb-4">
                <ThumbsUp className="h-8 w-8 text-law-gold" />
              </div>
              <h3 className="text-xl font-bold text-law-navy mb-3">Easy Consultation Booking</h3>
              <p className="text-gray-600">
                Schedule consultations with top lawyers quickly and easily through our streamlined booking system.
              </p>
            </div>
          </div>
        </section>
        
        {/* Featured Case Studies Section */}
        <section className="section">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-law-navy">
                Featured Case Studies
              </h2>
              <p className="text-gray-600 mt-2">
                Learn from real legal success stories and outcomes
              </p>
            </div>
            <Link to="/case-studies" className="text-law-gold hover:underline mt-4 md:mt-0">
              View all case studies →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCaseStudies.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
            ))}
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="section bg-law-navy text-white rounded-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Ready to Get Legal Help?</h2>
              <p className="text-gray-300 mb-6">
                Don't face legal challenges alone. Our network of experienced attorneys is ready to help you navigate the complexities of the legal system and achieve the best possible outcome for your case.
              </p>
              <Link to="/appointment" className="btn-secondary">
                Book a Consultation Now
              </Link>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1589578527966-fdac0f44566c?q=80&w=1974&auto=format&fit=crop"
                alt="Legal Consultation"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
