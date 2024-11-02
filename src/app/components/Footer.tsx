import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="py-8" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
      {/* Separator Line */}
      <div className="w-full border-t border-gray-300 mb-6"></div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start">
        {/* Left Section - Logo and Social Media Icons */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>AIInterview Hub</h2>
          <div className="flex space-x-4 text-gray-500">
            <FaFacebookF className="hover:text-gray-700 cursor-pointer" />
            <FaLinkedinIn className="hover:text-gray-700 cursor-pointer" />
            <FaYoutube className="hover:text-gray-700 cursor-pointer" />
            <FaInstagram className="hover:text-gray-700 cursor-pointer" />
            <FaTwitter className="hover:text-gray-700 cursor-pointer" />
          </div>
        </div>

        {/* Right Section - Navigation Links */}
        <div className="flex flex-wrap justify-between md:space-x-12">
          <div className="mb-6 md:mb-0">
            <h3 className="font-semibold mb-2" style={{ color: 'var(--foreground)', fontFamily: 'Inter, sans-serif' }}>Site Navigation</h3>
            <ul className="space-y-1">
              <li className="hover:text-gray-700 cursor-pointer">Pricing</li>
              <li className="hover:text-gray-700 cursor-pointer">Contact</li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0">
            <h3 className="font-semibold mb-2" style={{ color: 'var(--foreground)', fontFamily: 'Inter, sans-serif' }}>Resources</h3>
            <ul className="space-y-1">
              <li className="hover:text-gray-700 cursor-pointer">Documentation</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2" style={{ color: 'var(--foreground)', fontFamily: 'Inter, sans-serif' }}>Legal</h3>
            <ul className="space-y-1">
              <li className="hover:text-gray-700 cursor-pointer">Privacy Policy</li>
              <li className="hover:text-gray-700 cursor-pointer">Terms & Conditions</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
