
import { Star, MapPin, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Lawyer } from '../data/lawyers';

interface LawyerCardProps {
  lawyer: Lawyer;
}

const LawyerCard: React.FC<LawyerCardProps> = ({ lawyer }) => {
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
        
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{lawyer.location}</span>
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

export default LawyerCard;
