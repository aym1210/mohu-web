import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="src/components/Gallery/mohu-logo.png.png" 
              alt="MoHu Prestige Logo" 
              className="h-10 w-auto mr-3"
            />
            <h1 className="text-2xl font-bold text-gray-900">
              MoHu <span className="text-blue-600">PRESTIGE</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`transition-colors ${location.pathname === '/' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`transition-colors ${location.pathname === '/about' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`transition-colors ${location.pathname === '/services' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Services
            </Link>
            <Link
              to="/gallery"
              className={`transition-colors ${location.pathname === '/gallery' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Gallery
            </Link>
            <Link
              to="/sponsor"
              className={`transition-colors ${location.pathname === '/sponsor' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Sponsor
            </Link>
            <Link
              to="/contact"
              className={`transition-colors ${location.pathname === '/contact' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
            >
              Contact
            </Link>
          </nav>
          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <span>+61 436 621 845</span>
            </div>
            <Link
              to="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1ApvcefZDRDsUmhc4cDheXVG6-Hw1RVPHwcoyG146fEKgzjyLslJu7lls-78SpD-EPA4u-T2vT"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`text-left transition-colors ${location.pathname === '/' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className={`text-left transition-colors ${location.pathname === '/about' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
              >
                About
              </Link>
              <Link
                to="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1ApvcefZDRDsUmhc4cDheXVG6-Hw1RVPHwcoyG146fEKgzjyLslJu7lls-78SpD-EPA4u-T2vT"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className={`text-left transition-colors ${location.pathname === '/services' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Services
              </Link>
              <Link
                to="/gallery"
                onClick={() => setIsMenuOpen(false)}
                className={`text-left transition-colors ${location.pathname === '/gallery' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Gallery
              </Link>
              <Link
                to="/sponsor"
                onClick={() => setIsMenuOpen(false)}
                className={`text-left transition-colors ${location.pathname === '/sponsor' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Sponsor
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`text-left transition-colors ${location.pathname === '/contact' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
              >
                Contact
              </Link>
              <div className="pt-4 border-t">
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
                  <Phone className="w-4 h-4" />
                  <span>+61 436 621 845</span>
                </div>
                <Link
                  to="/services"
                  className="block w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center"
                >
                  Book Now
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;