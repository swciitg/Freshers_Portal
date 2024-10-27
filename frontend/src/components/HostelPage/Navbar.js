import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu
  const [activeDropdown, setActiveDropdown] = useState(null); // State to manage dropdowns

  const toggleMenu = () => setIsOpen(!isOpen); // Toggle mobile menu

  const handleDropdown = (dropdown) => {
    // Toggle dropdown on click
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

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
            <a href="/info" className="text-gray-700 hover:text-gray-900 font-medium">
              Important Information
            </a>

            {/* Academics Dropdown */}
            <div className="relative group">
              <button
                className="text-gray-700 hover:text-gray-900 font-medium"
                onClick={() => handleDropdown('academics')}
              >
                Academics
              </button>
              <div
                className={`absolute hidden group-hover:flex flex-col bg-white shadow-lg rounded-md mt-1 z-50 ${
                  activeDropdown === 'academics' ? 'flex' : 'hidden'
                }`}
              >
                <a
                  href="/department"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >
                  Department
                </a>
                <a
                  href="/branch-change"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >
                  Branch Change
                </a>
                <a
                  href="/minor"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >
                  Minor Discipline
                </a>
              </div>
            </div>

            {/* Life on Campus Dropdown */}
            <div className="relative group">
              <button
                className="text-gray-700 hover:text-gray-900 font-medium"
                onClick={() => handleDropdown('campus')}
              >
                Life on Campus
              </button>
              <div
                className={`absolute hidden group-hover:flex flex-col bg-white shadow-lg rounded-md mt-1 z-50 ${
                  activeDropdown === 'campus' ? 'flex' : 'hidden'
                }`}
              >
                <a
                  href="/sgc"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >
                 Students Gymkhana Council
                </a>
                <a
                  href="/swb"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >
                  Students Welfare Board
                </a>
                <a
                  href="/cult"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >
                  Cultural Board
                </a>
                <a
                  href="/tech"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >Technical Board
                </a>
                <a
                  href="/sports"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >
                  Sports Board
                </a>
                <a
                  href="/hab"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >
                  Hostel Affairs Board
                </a>
                <a
                  href="/fests"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >
                  Annual Festivals
                </a>
              </div>
            </div>
            {/* Life on Campus Dropdown */}
            <div className="relative group">
              <button
                className=" hover:text-orange-900 text-orange-500 font-medium"
                onClick={() => handleDropdown('hostel')}
              >
                Hostel
              </button>
              <div
                className={`absolute hidden group-hover:flex flex-col bg-white shadow-lg rounded-md mt-1 z-50 ${
                  activeDropdown === 'campus' ? 'flex' : 'hidden'
                }`}
              >
                <a
                  href="/hostel-list"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >
                  All Hostels
                </a>
                <a
                  href="/hostel-fac"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >
                  Hostel Facilities
                </a>
                <a
                  href="/hostel-events"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >
                  Inter-Hostel Events
                </a>
              </div>
            </div>
            <a href="/facilities" className="text-gray-700 hover:text-gray-900 font-medium">
              Facilities
            </a>
            <a href="/faqs" className="text-gray-700 hover:text-gray-900 font-medium">
              FAQs
            </a>
            <a href="/contact" className="text-gray-700 hover:text-gray-900 font-medium">
              Contact Us
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:hidden mt-4 space-y-2 text-center`}
        >
          <a href="/info" className="block text-gray-700 hover:text-gray-900 font-medium">
            Important Information
          </a>

          {/* Academics Dropdown (Mobile) */}
          <div>
            <button
              className="text-gray-700 hover:text-gray-900 font-medium"
              onClick={() => handleDropdown('academics')}
            >
              Academics
            </button>
            {activeDropdown === 'academics' && (
              <div className="flex flex-col bg-white shadow-lg rounded-md mt-1">
                <a
                  href="department"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >
                  Departments
                </a>
                <a
                  href="/branch-change"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >
                  Branch Change
                </a>
                <a
                  href="/minor"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >
                  Minor Discipline
                </a>
              </div>
            )}
          </div>

          {/* Life on Campus Dropdown (Mobile) */}
          <div>
            <button
              className="text-gray-700 hover:text-gray-900 font-medium"
              onClick={() => handleDropdown('campus')}
            >
              Life on Campus
            </button>
            {activeDropdown === 'campus' && (
              <div className="flex flex-col bg-white shadow-lg rounded-md mt-1">
                <a
                  href="/sgc"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >
                 Students Gymkhana Council
                </a>
                <a
                  href="/swb"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >
                  Students Welfare Board
                </a>
                <a
                  href="/cult"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >
                  Cultural Board
                </a>
                <a
                  href="/tech"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >Technical Board
                </a>
                <a
                  href="/sports"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >
                  Sports Board
                </a>
                <a
                  href="/hab"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >
                  Hostel Affairs Board
                </a>
                <a
                  href="/fests"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >
                  Annual Festivals
                </a>
              </div>
            )}
          </div>
          {/* Hostel Dropdown (Mobile) */}
          <div>
            <button
              className="text-orange-700 hover:text-orange-900 font-medium"
              onClick={() => handleDropdown('hostel')}
            >
                Hostels
            </button>
            {activeDropdown === 'hostel' && (
              <div className="flex flex-col bg-white shadow-lg rounded-md mt-1">
                <a
                  href="/hostel-list"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >
                  All Hostels
                </a>
                <a
                  href="/hostel-fac"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >
                  Hostel Facilites
                </a>
                <a
                  href="/hostel-events"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                >
                  Inter-Hostel Events
                </a>
              </div>
            )}
          </div>
          <a href="/facilities" className="block text-gray-700 hover:text-gray-900 font-medium">
            Facilities
          </a>
          <a href="/faqs" className="block text-gray-700 hover:text-gray-900 font-medium">
            FAQs
          </a>
          <a href="/contact" className="block text-gray-700 hover:text-gray-900 font-medium">
            Contact Us
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
