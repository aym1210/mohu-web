import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and tagline */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">
              MoHu <span className="text-blue-600">PRESTIGE</span>
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Detailing services with a professional touch
            </p>
          </div>

          {/* Copyright */}
          <div className="flex items-center space-x-1 text-gray-400 text-sm">
            <span>© 2024 MoHu Prestige Detailing. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>in Tarneit</span>
          </div>

          {/* Privacy Policy */}
          <div className="mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;