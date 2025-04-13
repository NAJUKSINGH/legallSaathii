
import { useState } from 'react';
import { lawyers } from '../data/lawyers';
import { useToast } from '../hooks/use-toast';

const BookingForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    lawyerId: '',
    date: '',
    time: '',
    caseDetails: ''
  });
  
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Appointment Requested",
        description: "We've received your request and will contact you shortly to confirm.",
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        lawyerId: '',
        date: '',
        time: '',
        caseDetails: ''
      });
      
      setLoading(false);
    }, 1500);
  };

  const availableTimes = [
    '09:00 AM', '10:00 AM', '11:00 AM', 
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
  ];

  // Get tomorrow's date as the minimum date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <h2 className="text-2xl font-bold mb-6 text-law-navy">Book a Consultation</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-law-navy focus:border-law-navy"
              placeholder="John Doe"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-law-navy focus:border-law-navy"
              placeholder="john@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-law-navy focus:border-law-navy"
              placeholder="(123) 456-7890"
            />
          </div>
          
          <div>
            <label htmlFor="lawyerId" className="block text-sm font-medium text-gray-700 mb-1">
              Select Lawyer
            </label>
            <select
              id="lawyerId"
              name="lawyerId"
              required
              value={formData.lawyerId}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-law-navy focus:border-law-navy"
            >
              <option value="">Select a lawyer</option>
              {lawyers.map((lawyer) => (
                <option key={lawyer.id} value={lawyer.id}>
                  {lawyer.name} - {lawyer.specialization.join(', ')}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
              Preferred Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              required
              min={minDate}
              value={formData.date}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-law-navy focus:border-law-navy"
            />
          </div>
          
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
              Preferred Time
            </label>
            <select
              id="time"
              name="time"
              required
              value={formData.time}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-law-navy focus:border-law-navy"
            >
              <option value="">Select a time</option>
              {availableTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
          
          <div className="md:col-span-2">
            <label htmlFor="caseDetails" className="block text-sm font-medium text-gray-700 mb-1">
              Brief Description of Your Case
            </label>
            <textarea
              id="caseDetails"
              name="caseDetails"
              rows={4}
              required
              value={formData.caseDetails}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-law-navy focus:border-law-navy"
              placeholder="Please provide a brief overview of your legal issue"
            />
          </div>
        </div>
        
        <div className="mt-6">
          <button
            type="submit"
            disabled={loading}
            className={`btn-primary w-full ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {loading ? 'Submitting...' : 'Request Appointment'}
          </button>
        </div>
        
        <p className="text-sm text-gray-500 mt-4">
          By submitting this form, you agree to our privacy policy and terms of service.
          We will contact you shortly to confirm your appointment.
        </p>
      </form>
    </div>
  );
};

export default BookingForm;
