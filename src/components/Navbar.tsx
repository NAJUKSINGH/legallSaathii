
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-law-navy shadow-md">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-law-gold text-2xl font-bold">Justice</span>
            <span className="text-white text-2xl font-bold">Connect</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:text-law-gold transition-colors">
              Home
            </Link>
            <Link to="/case-studies" className="text-white hover:text-law-gold transition-colors">
              Case Studies
            </Link>
            <Link to="/appointment" className="text-white hover:text-law-gold transition-colors">
              Book Appointment
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-law-gold focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-3 space-y-3">
            <Link
              to="/"
              className="block text-white hover:text-law-gold transition-colors py-2"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/case-studies"
              className="block text-white hover:text-law-gold transition-colors py-2"
              onClick={toggleMenu}
            >
              Case Studies
            </Link>
            <Link
              to="/appointment"
              className="block text-white hover:text-law-gold transition-colors py-2"
              onClick={toggleMenu}
            >
              Book Appointment
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
