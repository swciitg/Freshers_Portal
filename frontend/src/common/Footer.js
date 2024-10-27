import React from 'react';
import { FaTwitter, FaLinkedin, FaCopyright } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-8 px-6 sm:px-12">
      {/* Top Section with Logo, Contact, and Social Links */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section - Logo and Address */}
        <div className="flex items-center space-x-4">
          <img
            src="/iitglogo.png" // Replace with your logo path
            alt="IITG Logo"
            className="h-14 w-14"
          />
          <div>
            <h2 className="text-lg font-semibold text-orange-500">
              Student Affairs IITG
            </h2>
            <p className="text-gray-500">Admin Building, IITG</p>
          </div>
        </div>

        {/* Middle Section - Empty Placeholder for Large Screens */}
        <div className="hidden lg:block"></div>

        {/* Right Section - Social Links and Contact */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-16">
          {/* Social Links */}
          <div className="flex flex-col items-start space-y-2">
            <h3 className="text-orange-500 font-semibold">Get Connected</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-start space-y-2">
            <h3 className="text-orange-500 font-semibold">Contact</h3>
            <p className="text-gray-500">4553678654</p>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright and Web Committee */}
      <div className="mt-8 flex flex-col sm:flex-row justify-between items-center text-gray-500 space-y-4 sm:space-y-0">
        {/* Left - Web Committee with SVG Icon */}
        <div className="flex items-center space-x-2">
          <svg
            width="32"
            height="23"
            viewBox="0 0 32 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.38767 0.562744H14.1853L7.84516 11.2688L9.68702 14.7239L18.1355 0.562744H24.8156L31.2135 11.4128L24.7421 22.4377H16.9321L23.3913 11.5207L21.4388 8.30564L12.9655 22.4377H6.39584L0 11.2678L6.38767 0.562744Z"
              fill="#4D4D4D"
            />
          </svg>
          <p>@students-web-committee</p>
          <div className="flex items-center space-x-1">
          <FaCopyright size={14} className="inline" />
          <span>2024</span>
        </div>
        </div>

        {/* Right - Copyright Section */}
        
      </div>
    </footer>
  );
};

export default Footer;
