
import { Link } from 'react-router-dom';
import { CaseStudy } from '../data/caseStudies';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-xl h-full flex flex-col">
      <div className="aspect-video overflow-hidden">
        <img
          src={caseStudy.image}
          alt={caseStudy.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5 flex-grow flex flex-col">
        <div className="mb-3">
          <span className="bg-law-lightblue text-law-navy px-3 py-1 rounded-full text-xs">
            {caseStudy.category}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-2">{caseStudy.title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{caseStudy.summary}</p>
        <Link
          to={`/case-studies/${caseStudy.id}`}
          className="bg-transparent border border-law-navy text-law-navy hover:bg-law-navy hover:text-white font-semibold py-2 px-4 rounded transition-all text-center"
        >
          Read Full Case Study
        </Link>
      </div>
    </div>
  );
};

export default CaseStudyCard;
