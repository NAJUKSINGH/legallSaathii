
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { lawyers, Lawyer } from '../data/lawyers';
import { caseStudies } from '../data/caseStudies';
import CaseStudyCard from '../components/CaseStudyCard';
import BookingForm from '../components/BookingForm';
import { Star, MapPin, Award, Book, Briefcase, MessageSquare } from 'lucide-react';

const LawyerProfile = () => {
  const { id } = useParams<{ id: string }>();
  const [lawyer, setLawyer] = useState<Lawyer | null>(null);
  const [lawyerCases, setLawyerCases] = useState([]);
  const [activeTab, setActiveTab] = useState('about');
  
  useEffect(() => {
    if (id) {
      const foundLawyer = lawyers.find(l => l.id.toString() === id);
      if (foundLawyer) {
        setLawyer(foundLawyer);
        
        const relatedCases = caseStudies.filter(cs => cs.lawyerId.toString() === id);
        setLawyerCases(relatedCases);
      }
    }
  }, [id]);
  
  if (!lawyer) {
    return (
      <div className="container-custom py-16 text-center">
        <h2 className="text-2xl font-bold">Lawyer not found</h2>
        <p className="mt-4">The lawyer you're looking for doesn't exist or has been removed.</p>
        <Link to="/" className="btn-primary mt-6 inline-block">
          Return to Homepage
        </Link>
      </div>
    );
  }
  
  const winRate = Math.round((lawyer.casesWon / lawyer.totalCases) * 100);
  
  return (
    <div className="container-custom py-12">
      {/* Breadcrumbs */}
      <div className="mb-6">
        <nav className="text-sm text-gray-500">
          <Link to="/" className="hover:text-law-navy">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-law-navy font-medium">{lawyer.name}</span>
        </nav>
      </div>
      
      {/* Lawyer Profile Header */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
        <div className="md:flex">
          <div className="md:w-1/3">
            <div className="h-full">
              <img 
                src={lawyer.image} 
                alt={lawyer.name} 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          
          <div className="md:w-2/3 p-6 md:p-8">
            <div className="flex flex-col md:flex-row justify-between">
              <div>
                <h1 className="text-3xl font-bold text-law-navy mb-2">{lawyer.name}</h1>
                <div className="flex items-center mb-4">
                  <MapPin className="h-5 w-5 text-gray-400 mr-1" />
                  <span className="text-gray-600">{lawyer.location}</span>
                </div>
              </div>
              
              <div className="flex items-center mt-4 md:mt-0">
                <div className="flex items-center bg-law-lightblue text-law-navy px-3 py-1 rounded-full">
                  <Star className="fill-law-gold stroke-law-gold h-5 w-5 mr-1" />
                  <span className="font-bold">{lawyer.rating}</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-2 mb-6">
              {lawyer.specialization.map((spec, index) => (
                <span 
                  key={index} 
                  className="bg-law-navy/10 text-law-navy px-3 py-1 rounded-full text-sm"
                >
                  {spec}
                </span>
              ))}
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6">
              <div className="text-center p-4 bg-law-lightblue rounded-lg">
                <p className="text-2xl font-bold text-law-navy">{lawyer.experience}</p>
                <p className="text-gray-600 text-sm">Years Experience</p>
              </div>
              
              <div className="text-center p-4 bg-law-lightblue rounded-lg">
                <p className="text-2xl font-bold text-law-navy">{winRate}%</p>
                <p className="text-gray-600 text-sm">Success Rate</p>
              </div>
              
              <div className="text-center p-4 bg-law-lightblue rounded-lg">
                <p className="text-2xl font-bold text-law-navy">{lawyer.casesWon}</p>
                <p className="text-gray-600 text-sm">Cases Won</p>
              </div>
            </div>
            
            <div className="mt-6">
              <Link
                to={`/appointment?lawyerId=${lawyer.id}`}
                className="btn-primary mr-4"
              >
                Book a Consultation
              </Link>
              <a 
                href={`tel:${lawyer.contactInfo.phone}`}
                className="bg-white border border-law-navy text-law-navy hover:bg-law-navy hover:text-white font-semibold py-2 px-4 rounded transition-all"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tabs Navigation */}
      <div className="border-b border-gray-200 mb-8">
        <div className="flex overflow-x-auto">
          <button
            onClick={() => setActiveTab('about')}
            className={`py-4 px-6 font-medium text-sm whitespace-nowrap ${
              activeTab === 'about'
                ? 'border-b-2 border-law-gold text-law-navy'
                : 'text-gray-500 hover:text-law-navy'
            }`}
          >
            <Book className="inline-block h-4 w-4 mr-2" />
            About
          </button>
          
          <button
            onClick={() => setActiveTab('case-studies')}
            className={`py-4 px-6 font-medium text-sm whitespace-nowrap ${
              activeTab === 'case-studies'
                ? 'border-b-2 border-law-gold text-law-navy'
                : 'text-gray-500 hover:text-law-navy'
            }`}
          >
            <Briefcase className="inline-block h-4 w-4 mr-2" />
            Case Studies
          </button>
          
          <button
            onClick={() => setActiveTab('contact')}
            className={`py-4 px-6 font-medium text-sm whitespace-nowrap ${
              activeTab === 'contact'
                ? 'border-b-2 border-law-gold text-law-navy'
                : 'text-gray-500 hover:text-law-navy'
            }`}
          >
            <MessageSquare className="inline-block h-4 w-4 mr-2" />
            Contact & Booking
          </button>
        </div>
      </div>
      
      {/* Tab Content */}
      <div className="mb-12">
        {activeTab === 'about' && (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-law-navy mb-4">About {lawyer.name}</h2>
              <p className="text-gray-700 mb-6">{lawyer.about}</p>
              
              <h3 className="text-xl font-bold text-law-navy mb-3">Education</h3>
              <ul className="list-disc pl-5 mb-6">
                {lawyer.education.map((edu, index) => (
                  <li key={index} className="text-gray-700 mb-2">{edu}</li>
                ))}
              </ul>
              
              <h3 className="text-xl font-bold text-law-navy mb-3">Availability</h3>
              <div className="flex flex-wrap gap-2">
                {lawyer.availability.map((day, index) => (
                  <span key={index} className="bg-law-lightblue text-law-navy px-3 py-1 rounded-full text-sm">
                    {day}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-law-lightblue p-6 rounded-lg h-fit">
              <h3 className="text-xl font-bold text-law-navy mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-gray-600 text-sm">Phone</p>
                  <a href={`tel:${lawyer.contactInfo.phone}`} className="text-law-navy font-medium hover:text-law-gold">
                    {lawyer.contactInfo.phone}
                  </a>
                </div>
                
                <div>
                  <p className="text-gray-600 text-sm">Email</p>
                  <a href={`mailto:${lawyer.contactInfo.email}`} className="text-law-navy font-medium hover:text-law-gold break-all">
                    {lawyer.contactInfo.email}
                  </a>
                </div>
                
                <div>
                  <p className="text-gray-600 text-sm">Office Address</p>
                  <p className="text-law-navy font-medium">
                    {lawyer.contactInfo.address}
                  </p>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-300">
                <Link to={`/appointment?lawyerId=${lawyer.id}`} className="btn-primary w-full text-center">
                  Schedule a Consultation
                </Link>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'case-studies' && (
          <div>
            <h2 className="text-2xl font-bold text-law-navy mb-6">Recent Case Studies</h2>
            
            {lawyerCases.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {lawyerCases.map((caseStudy) => (
                  <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-law-lightblue rounded-lg">
                <p className="text-gray-600 text-lg">
                  No case studies available for this lawyer yet.
                </p>
              </div>
            )}
          </div>
        )}
        
        {activeTab === 'contact' && (
          <div>
            <h2 className="text-2xl font-bold text-law-navy mb-6">Book a Consultation with {lawyer.name}</h2>
            <BookingForm />
          </div>
        )}
      </div>
      
      {/* Similar Lawyers */}
      <div>
        <h2 className="text-2xl font-bold text-law-navy mb-6">Similar Lawyers</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lawyers
            .filter(l => l.id !== lawyer.id && l.specialization.some(s => lawyer.specialization.includes(s)))
            .slice(0, 3)
            .map(similarLawyer => (
              <LawyerCard key={similarLawyer.id} lawyer={similarLawyer} />
            ))}
        </div>
      </div>
    </div>
  );
};

const LawyerCard = ({ lawyer }) => {
  const winRate = Math.round((lawyer.casesWon / lawyer.totalCases) * 100);
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-xl">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={lawyer.image}
          alt={lawyer.name}
          className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{lawyer.name}</h3>
          <div className="flex items-center text-law-gold">
            <Star className="fill-law-gold stroke-law-gold h-4 w-4" />
            <span className="ml-1 text-sm font-medium">{lawyer.rating}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {lawyer.specialization.map((spec, index) => (
            <span 
              key={index} 
              className="bg-law-lightblue text-law-navy px-2 py-1 rounded-full text-xs"
            >
              {spec}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-sm text-gray-600">{lawyer.experience} years experience</p>
          </div>
          <div className="flex items-center">
            <Award className="h-4 w-4 mr-1 text-law-gold" />
            <span className="text-sm font-medium">{winRate}% win rate</span>
          </div>
        </div>
        
        <Link 
          to={`/lawyer/${lawyer.id}`}
          className="btn-primary block text-center w-full"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default LawyerProfile;
