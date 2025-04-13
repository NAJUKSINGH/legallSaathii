
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { lawyers } from '../data/lawyers';
import BookingForm from '../components/BookingForm';
import LawyerCard from '../components/LawyerCard';

const Appointment = () => {
  const location = useLocation();
  const [selectedLawyerId, setSelectedLawyerId] = useState<string | null>(null);
  
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const lawyerId = params.get('lawyerId');
    if (lawyerId) {
      setSelectedLawyerId(lawyerId);
    }
  }, [location]);
  
  const featuredLawyers = lawyers.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-law-navy text-white py-12">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Book an Appointment</h1>
            <p className="text-lg text-gray-200">
              Schedule a consultation with our experienced lawyers to discuss your legal matters and get professional advice.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container-custom py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <BookingForm />
          </div>
          
          <div>
            <div className="bg-law-lightblue rounded-lg p-6 mb-8">
              <h2 className="text-xl font-bold text-law-navy mb-4">Need Help?</h2>
              <p className="text-gray-700 mb-4">
                If you need assistance with booking an appointment or have any questions, our team is here to help.
              </p>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-600 text-sm">Call Us</p>
                  <a href="tel:+12125551234" className="text-law-navy font-medium hover:text-law-gold">
                    (212) 555-1234
                  </a>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Email Us</p>
                  <a href="mailto:appointments@justiceconnect.com" className="text-law-navy font-medium hover:text-law-gold">
                    appointments@justiceconnect.com
                  </a>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Hours</p>
                  <p className="text-law-navy font-medium">
                    Monday - Friday: 9am - 5pm<br />
                    Saturday: 10am - 2pm
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-law-navy mb-4">What to Expect</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-law-gold text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 shrink-0 mt-0.5">1</span>
                  <p className="text-gray-700">Submit your appointment request using the form.</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-law-gold text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 shrink-0 mt-0.5">2</span>
                  <p className="text-gray-700">Receive confirmation via email within 24 hours.</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-law-gold text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 shrink-0 mt-0.5">3</span>
                  <p className="text-gray-700">Our team may call you to gather additional information.</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-law-gold text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 shrink-0 mt-0.5">4</span>
                  <p className="text-gray-700">Meet with your lawyer at the scheduled time.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Recommended Lawyers */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-law-navy mb-6">Recommended Lawyers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredLawyers.map((lawyer) => (
              <LawyerCard key={lawyer.id} lawyer={lawyer} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
