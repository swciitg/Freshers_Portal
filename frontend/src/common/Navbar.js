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
          <a href="/"><div className="flex items-center space-x-4">
            <img className="h-12 w-12" src="/iitglogo.png" alt="IIT Guwahati" />
            <div className="leading-snug">
              <span className="text-lg font-semibold text-gray-800 block">
                Freshers Portal
              </span>
              <span className="text-sm text-gray-500 block">IIT Guwahati</span>
            </div>
          </div>
          </a>

          {/* Divider */}
          <div className="border-l-2 h-12 mx-8"></div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-500 focus:outline-none focus:text-gray-900"
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            <Link to="/info" className={`font-medium ${isActive('/info') ? 'text-orange-500' : 'text-gray-700 hover:text-gray-900'}`}>
              Important Information
            </Link>

            {/* Academics Dropdown */}
            <div className="relative group">
              <button
                className={`font-medium ${isActive('/department') || isActive('/branch-change') || isActive('/minor') ? 'text-orange-500' : 'text-gray-700 hover:text-gray-900'}`}
                onClick={() => handleDropdown('academics')}
                
              >
                Academics
              </button>
              <div
                className={`absolute hidden transition-all duration-5000 ease-out group-hover:flex flex-col bg-white shadow-lg rounded-md mt-1 z-50 ${
                  activeDropdown === 'academics' ? 'flex' : 'hidden'
                }`}
              >
                <Link
                  to="/department"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >
                  Department
                </Link>
                <Link
                  to="/branch-change"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >
                  Branch Change
                </Link>
                <Link
                  to="/minor"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >
                  Minor Discipline
                </Link>
              </div>
            </div>

            {/* Life on Campus Dropdown */}
            <div className="relative group">
              <button
                className={`font-medium ${isActive('/sgc') || isActive('/swb') || isActive('/cult') || isActive('/tech') || isActive('/sports')|| isActive('/hab')|| isActive('/fests')? 'text-orange-500' : 'text-gray-700 hover:text-gray-900'}`}
                onClick={() => handleDropdown('campus')}
              >
                Life on Campus
              </button>
              <div
                className={`absolute hidden group-hover:flex transition-all duration-1000 ease-in-out flex-col bg-white shadow-lg rounded-md mt-1 z-50 ${
                  activeDropdown === 'campus' ? 'flex' : 'hidden'
                }`}
              >
                <Link
                  to="/sgc"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >
                 Students Gymkhana Council
                </Link>
                <Link
                  to="/swb"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >
                  Students Welfare Board
                </Link>
                <Link
                  to="/cult"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >
                  Cultural Board
                </Link>
                <Link
                  to="/tech"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >Technical Board
                </Link>
                <Link
                  to="/sports"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >
                  Sports Board
                </Link>
                <Link
                  to="/hab"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >
                  Hostel Affairs Board
                </Link>
                <Link
                  to="/fests"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >
                  Annual Festivals
                </Link>
              </div>
            </div>
            {/* Life on Campus Dropdown */}
            <div className="relative group">
              <button
                className={`font-medium ${isActive('/hostel-list') || isActive('/hostel-fac') || isActive('/hostel-events') ? 'text-orange-500' : 'text-gray-700 hover:text-gray-900'}`}
                onClick={() => handleDropdown('hostel')}
              >
                Hostel
              </button>
              <div
                className={`absolute hidden group-hover:flex flex-col transition-all duration-1000 ease-in-out  bg-white shadow-lg rounded-md mt-1 z-50 ${
                  activeDropdown === 'campus' ? 'flex' : 'hidden'
                }`}
              >
                <Link
                  to="/hostel-list"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >
                  All Hostels
                </Link>
                <Link
                  to="/hostel-fac"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >
                  Hostel Facilities
                </Link>
                <Link
                  to="/hostel-events"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >
                  Inter-Hostel Events
                </Link>
              </div>
            </div>
            <Link to="/facilities" className={`font-medium ${isActive('/facilities') ? 'text-orange-500' : 'text-gray-700 hover:text-gray-900'}`}>
              Facilities
            </Link>
            <Link to="/faqs" className={`font-medium ${isActive('/faqs') ? 'text-orange-500' : 'text-gray-700 hover:text-gray-900'}`}>
              FAQs
            </Link>
            <Link to="/contact" className={`font-medium ${isActive('/contact') ? 'text-orange-500' : 'text-gray-700 hover:text-gray-900'}`}>
              Contact Us
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:hidden mt-4 space-y-2 text-center`}
        >
          <Link to="/info" className={`font-medium ${isActive('/info') ? 'text-orange-500' : 'text-gray-700 hover:text-gray-900'}`}>
            Important Information
          </Link>

          {/* Academics Dropdown (Mobile) */}
          <div>
            <button
              className={`font-medium ${isActive('/department') || isActive('/branch-change') || isActive('/minor') ? 'text-orange-500' : 'text-gray-700 hover:text-gray-900'}`}
              onClick={() => handleDropdown('academics')}
            >
              Academics
            </button>
            {activeDropdown === 'academics' && (
              <div className="flex flex-col bg-white shadow-lg rounded-md mt-1">
                <Link
                  to="/department"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >
                  Departments
                </Link>
                <Link
                  to="/branch-change"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >
                  Branch Change
                </Link>
                <Link
                  to="/minor"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >
                  Minor Discipline
                </Link>
              </div>
            )}
          </div>

          {/* Life on Campus Dropdown (Mobile) */}
          <div>
            <button
              className={`font-medium ${isActive('/sgc') || isActive('/swb') || isActive('/cult') || isActive('/tech') || isActive('/sports')|| isActive('/hab')|| isActive('/fests')? 'text-orange-500' : 'text-gray-700 hover:text-gray-900'}`}
              onClick={() => handleDropdown('campus')}
            >
              Life on Campus
            </button>
            {activeDropdown === 'campus' && (
              <div className="flex flex-col bg-white shadow-lg rounded-md mt-1">
                <Link
                  to="/sgc"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >
                 Students Gymkhana Council
                </Link>
                <Link
                  to="/swb"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >
                  Students Welfare Board
                </Link>
                <Link
                  to="/cult"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >
                  Cultural Board
                </Link>
                <Link
                  to="/tech"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >Technical Board
                </Link>
                <Link
                  to="/sports"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >
                  Sports Board
                </Link>
                <Link
                  to="/hab"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >
                  Hostel Affairs Board
                </Link>
                <Link
                  to="/fests"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >
                  Annual Festivals
                </Link>
              </div>
            )}
          </div>
          {/* Hostel Dropdown (Mobile) */}
          <div>
            <button
              className={`font-medium ${isActive('/hostel-list') || isActive('/hostel-fac') || isActive('/hostel-events') ? 'text-orange-500' : 'text-gray-700 hover:text-gray-900'}`}
              onClick={() => handleDropdown('hostel')}
            >
                Hostels
            </button>
            {activeDropdown === 'hostel' && (
              <div className="flex flex-col bg-white shadow-lg rounded-md mt-1">
                <Link
                  to="/hostel-list"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >
                  All Hostels
                </Link>
                <Link
                  to="/hostel-fac"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >
                  Hostel Facilites
                </Link>
                <Link
                  to="/hostel-events"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >
                  Inter-Hostel Events
                </Link>
              </div>
            )}
          </div>
          <Link to="/facilities" className={`block font-medium ${isActive('/facilities') ? 'text-orange-500' : 'text-gray-700 hover:text-gray-900'}`}>
            Facilities
          </Link>
          <Link to="/faqs" className={`block font-medium ${isActive('/faqs') ? 'text-orange-500' : 'text-gray-700 hover:text-gray-900'}`}>
            FAQs
          </Link>
          <Link to="/contact" className={`block font-medium ${isActive('/contact') ? 'text-orange-500' : 'text-gray-700 hover:text-gray-900'}`}>
            Contact Us
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
