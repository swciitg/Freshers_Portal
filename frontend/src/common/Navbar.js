import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu
  const [activeDropdown, setActiveDropdown] = useState(null); // State to manage dropdowns
  const location = useLocation();
  const toggleMenu = () => setIsOpen(!isOpen); // Toggle mobile menu

  const handleDropdown = (dropdown) => {
    // Toggle dropdown on click
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const isActive = (path) => location.pathname.startsWith(path);
  return (
    <div className="h-24 p-8">
  <nav className="bg-white shadow-md rounded-full px-8 py-3">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      {/* Left Section - Logo and Text */}
      <a href="/freshers">
        <div className="flex items-center space-x-4">
          <img className="h-12 w-12" src="/freshers/iitglogo.png" alt="IIT Guwahati" />
          <div className="leading-snug">
            <span className="text-lg font-semibold text-gray-800 block">
              Freshers Portal
            </span>
            <span className="text-sm text-gray-500 block">IIT Guwahati</span>
          </div>
        </div>
      </a>

      {/* Divider - Hidden on Mobile */}
      <div className="border-l-2 h-12 mx-8 hidden md:block"></div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition-colors duration-200"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-8">
        <Link 
          to="/info" 
          className={`font-medium transition-colors duration-200 ${
            isActive('/info') ? 'text-orange-500' : 'text-gray-700 hover:text-gray-900'
          }`}
        >
          Important Information
        </Link>

        {/* Academics Dropdown */}
        <div className="relative">
          <button
            className={`font-medium transition-colors duration-200 ${
              isActive('/department') || isActive('/minor') 
                ? 'text-orange-500' 
                : 'text-gray-700 hover:text-gray-900'
            }`}
            onMouseEnter={() => setActiveDropdown('academics')}
            onMouseLeave={() => setActiveDropdown(null)}
            onClick={() => handleDropdown('academics')}
            aria-haspopup="true"
            aria-expanded={activeDropdown === 'academics'}
          >
            Academics
          </button>
          <div
            className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50 transition-all duration-200 ${
              activeDropdown === 'academics' 
                ? 'opacity-100 visible transform translate-y-0' 
                : 'opacity-0 invisible transform -translate-y-2'
            }`}
            onMouseEnter={() => setActiveDropdown('academics')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              to="/department"
              className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 transition-colors duration-150"
            >
              Department
            </Link>
            <Link
              to="/minor"
              className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 transition-colors duration-150"
            >
              Minor Discipline
            </Link>
          </div>
        </div>

        {/* Life on Campus Dropdown */}
        <div className="relative">
          <button
            className={`font-medium transition-colors duration-200 ${
              isActive('/sgc') || isActive('/swb') || isActive('/cult') || 
              isActive('/tech') || isActive('/sports') || isActive('/hab') || isActive('/fests')
                ? 'text-orange-500' 
                : 'text-gray-700 hover:text-gray-900'
            }`}
            onMouseEnter={() => setActiveDropdown('campus')}
            onMouseLeave={() => setActiveDropdown(null)}
            onClick={() => handleDropdown('campus')}
            aria-haspopup="true"
            aria-expanded={activeDropdown === 'campus'}
          >
            Life on Campus
          </button>
          <div
            className={`absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md z-50 transition-all duration-200 ${
              activeDropdown === 'campus' 
                ? 'opacity-100 visible transform translate-y-0' 
                : 'opacity-0 invisible transform -translate-y-2'
            }`}
            onMouseEnter={() => setActiveDropdown('campus')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link to="/sgc" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 transition-colors duration-150">
              Students Gymkhana Council
            </Link>
            <Link to="/swb" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 transition-colors duration-150">
              Students Welfare Board
            </Link>
            <Link to="/cult" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 transition-colors duration-150">
              Cultural Board
            </Link>
            <Link to="/tech" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 transition-colors duration-150">
              Technical Board
            </Link>
            <Link to="/sports" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 transition-colors duration-150">
              Sports Board
            </Link>
            <Link to="/hab" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 transition-colors duration-150">
              Hostel Affairs Board
            </Link>
            <Link to="/fests" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 transition-colors duration-150">
              Annual Festivals
            </Link>
          </div>
        </div>

        {/* Hostels Dropdown */}
        <div className="relative">
          <button
            className={`font-medium transition-colors duration-200 ${
              isActive('/hostel-list') || isActive('/hostel-fac') || isActive('/hostel-events')
                ? 'text-orange-500' 
                : 'text-gray-700 hover:text-gray-900'
            }`}
            onMouseEnter={() => setActiveDropdown('hostel')}
            onMouseLeave={() => setActiveDropdown(null)}
            onClick={() => handleDropdown('hostel')}
            aria-haspopup="true"
            aria-expanded={activeDropdown === 'hostel'}
          >
            Hostels
          </button>
          <div
            className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50 transition-all duration-200 ${
              activeDropdown === 'hostel' 
                ? 'opacity-100 visible transform translate-y-0' 
                : 'opacity-0 invisible transform -translate-y-2'
            }`}
            onMouseEnter={() => setActiveDropdown('hostel')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link to="/hostel-list" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 transition-colors duration-150">
              All Hostels
            </Link>
            <Link to="/hostel-fac" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 transition-colors duration-150">
              Hostel Facilities
            </Link>
            <Link to="/hostel-events" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 transition-colors duration-150">
              Inter-Hostel Events
            </Link>
          </div>
        </div>

        <Link 
          to="/facilities" 
          className={`font-medium transition-colors duration-200 ${
            isActive('/facilities') ? 'text-orange-500' : 'text-gray-700 hover:text-gray-900'
          }`}
        >
          Facilities
        </Link>
        <Link 
          to="/faqs" 
          className={`font-medium transition-colors duration-200 ${
            isActive('/faqs') ? 'text-orange-500' : 'text-gray-700 hover:text-gray-900'
          }`}
        >
          FAQs
        </Link>
        <Link 
          to="/contact" 
          className={`font-medium transition-colors duration-200 ${
            isActive('/contact') ? 'text-orange-500' : 'text-gray-700 hover:text-gray-900'
          }`}
        >
          Contact Us
        </Link>
      </div>
    </div>

    {/* Mobile Menu - Full Screen Overlay */}
    <div
      className={`fixed inset-0 bg-white z-50 md:hidden transition-all duration-300 ease-in-out ${
        isOpen 
          ? 'opacity-100 visible' 
          : 'opacity-0 invisible'
      }`}
    >
      {/* Mobile Menu Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <img className="h-10 w-10" src="/freshers/iitglogo.png" alt="IIT Guwahati" />
          <div>
            <span className="text-base font-semibold text-gray-800 block">Freshers Portal</span>
            <span className="text-xs text-gray-500 block">IIT Guwahati</span>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="text-gray-500 hover:text-gray-900 transition-colors duration-200"
          aria-label="Close menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Content */}
      <div className="flex flex-col h-full overflow-y-auto pb-20">
        <div className="px-4 py-2 space-y-1">
          <Link 
            to="/info" 
            className={`block py-3 px-4 rounded-lg font-medium transition-colors duration-200 ${
              isActive('/info') ? 'text-orange-500 bg-orange-50' : 'text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setIsOpen(false)}
          >
            Important Information
          </Link>

          {/* Mobile Academics Dropdown */}
          <div>
            <button
              className={`w-full flex items-center justify-between py-3 px-4 rounded-lg font-medium transition-colors duration-200 ${
                isActive('/department') || isActive('/minor')
                  ? 'text-orange-500 bg-orange-50' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => handleDropdown('academics')}
              aria-expanded={activeDropdown === 'academics'}
            >
              <span>Academics</span>
              <svg 
                className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === 'academics' ? 'rotate-180' : ''
                }`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                activeDropdown === 'academics' 
                  ? 'max-h-40 opacity-100 mt-1' 
                  : 'max-h-0 opacity-0'
              }`}
            >
              <div className="ml-4 space-y-1">
                <Link
                  to="/department"
                  className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-150"
                  onClick={() => {
                    setIsOpen(false);
                    setActiveDropdown(null);
                  }}
                >
                  Department
                </Link>
                <Link
                  to="/minor"
                  className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-150"
                  onClick={() => {
                    setIsOpen(false);
                    setActiveDropdown(null);
                  }}
                >
                  Minor Discipline
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Life on Campus Dropdown */}
          <div>
            <button
              className={`w-full flex items-center justify-between py-3 px-4 rounded-lg font-medium transition-colors duration-200 ${
                isActive('/sgc') || isActive('/swb') || isActive('/cult') || 
                isActive('/tech') || isActive('/sports') || isActive('/hab') || isActive('/fests')
                  ? 'text-orange-500 bg-orange-50' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => handleDropdown('campus')}
              aria-expanded={activeDropdown === 'campus'}
            >
              <span>Life on Campus</span>
              <svg 
                className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === 'campus' ? 'rotate-180' : ''
                }`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                activeDropdown === 'campus' 
                  ? 'max-h-80 opacity-100 mt-1' 
                  : 'max-h-0 opacity-0'
              }`}
            >
              <div className="ml-4 space-y-1">
                <Link to="/sgc" className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-150" onClick={() => { setIsOpen(false); setActiveDropdown(null); }}>
                  Students Gymkhana Council
                </Link>
                <Link to="/swb" className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-150" onClick={() => { setIsOpen(false); setActiveDropdown(null); }}>
                  Students Welfare Board
                </Link>
                <Link to="/cult" className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-150" onClick={() => { setIsOpen(false); setActiveDropdown(null); }}>
                  Cultural Board
                </Link>
                <Link to="/tech" className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-150" onClick={() => { setIsOpen(false); setActiveDropdown(null); }}>
                  Technical Board
                </Link>
                <Link to="/sports" className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-150" onClick={() => { setIsOpen(false); setActiveDropdown(null); }}>
                  Sports Board
                </Link>
                <Link to="/hab" className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-150" onClick={() => { setIsOpen(false); setActiveDropdown(null); }}>
                  Hostel Affairs Board
                </Link>
                <Link to="/fests" className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-150" onClick={() => { setIsOpen(false); setActiveDropdown(null); }}>
                  Annual Festivals
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Hostels Dropdown */}
          <div>
            <button
              className={`w-full flex items-center justify-between py-3 px-4 rounded-lg font-medium transition-colors duration-200 ${
                isActive('/hostel-list') || isActive('/hostel-fac') || isActive('/hostel-events')
                  ? 'text-orange-500 bg-orange-50' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => handleDropdown('hostel')}
              aria-expanded={activeDropdown === 'hostel'}
            >
              <span>Hostels</span>
              <svg 
                className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === 'hostel' ? 'rotate-180' : ''
                }`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                activeDropdown === 'hostel' 
                  ? 'max-h-40 opacity-100 mt-1' 
                  : 'max-h-0 opacity-0'
              }`}
            >
              <div className="ml-4 space-y-1">
                <Link to="/hostel-list" className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-150" onClick={() => { setIsOpen(false); setActiveDropdown(null); }}>
                  All Hostels
                </Link>
                <Link to="/hostel-fac" className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-150" onClick={() => { setIsOpen(false); setActiveDropdown(null); }}>
                  Hostel Facilities
                </Link>
                <Link to="/hostel-events" className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-150" onClick={() => { setIsOpen(false); setActiveDropdown(null); }}>
                  Inter-Hostel Events
                </Link>
              </div>
            </div>
          </div>

          <Link 
            to="/facilities" 
            className={`block py-3 px-4 rounded-lg font-medium transition-colors duration-200 ${
              isActive('/facilities') ? 'text-orange-500 bg-orange-50' : 'text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setIsOpen(false)}
          >
            Facilities
          </Link>
          <Link 
            to="/faqs" 
            className={`block py-3 px-4 rounded-lg font-medium transition-colors duration-200 ${
              isActive('/faqs') ? 'text-orange-500 bg-orange-50' : 'text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setIsOpen(false)}
          >
            FAQs
          </Link>
          <Link 
            to="/contact" 
            className={`block py-3 px-4 rounded-lg font-medium transition-colors duration-200 ${
              isActive('/contact') ? 'text-orange-500 bg-orange-50' : 'text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  </nav>
</div>

  );
};

export default Navbar;
