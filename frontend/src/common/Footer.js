import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Logo and Contact Section */}
          <div className="flex flex-col items-start">
            <div className="bg-white p-3 rounded-full mb-6">
              <img
                src="/freshers/iitglogo.png"
                alt="IITG Logo"
                className="h-20 w-20"
              />
            </div>
            <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-2 text-sm">
              <p>Phone: <a href="tel:+913612584000" className="hover:text-orange-400 transition-colors">+91 361 258 4000</a></p>
              <p>Email: <a href="https://www.iitg.ac.in" className="hover:text-orange-400 transition-colors">iitg.ac.in</a></p>
              <p>Address: Guwahati-781039</p>
            </div>
          </div>

          {/* Useful Links Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Useful Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://www.iitg.ac.in" className="hover:text-orange-400 transition-colors">IIT Guwahati</a></li>
              <li><a href="https://www.iitg.ac.in/aer/" className="hover:text-orange-400 transition-colors">Alumni and External Relations</a></li>
              <li><a href="https://www.iitg.ac.in/aer/ar.php" className="hover:text-orange-400 transition-colors">IITG Alumni Association</a></li>
            </ul>
          </div>

          {/* HAB Links Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">HAB</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://www.iitg.ac.in/iitg_admstr?ct=iitg-administration" className="hover:text-orange-400 transition-colors">Administration</a></li>
              <li><a href="https://iitg.ac.in/hab/" className="hover:text-orange-400 transition-colors">Telephone Directory</a></li>
              <li><a href="https://www.iitg.ac.in/stud/gymkhana/#" className="hover:text-orange-400 transition-colors">Intranet</a></li>
            </ul>
          </div>

          {/* Additional Links Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">More</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://swc.iitg.ac.in/placement-stats/" className="hover:text-orange-400 transition-colors">Placement Statistics</a></li>
              <li><a href="https://www.iitg.ac.in/iitg_section?section=student-s-affairs" className="hover:text-orange-400 transition-colors">Student Affairs</a></li>
              <li><a href="https://www.iitg.ac.in/acad/" className="hover:text-orange-400 transition-colors">Academic Affairs</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* SWC Logo and Text */}
            <div className="flex items-center space-x-3">
              <svg
                width="24"
                height="18"
                viewBox="0 0 32 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.38767 0.562744H14.1853L7.84516 11.2688L9.68702 14.7239L18.1355 0.562744H24.8156L31.2135 11.4128L24.7421 22.4377H16.9321L23.3913 11.5207L21.4388 8.30564L12.9655 22.4377H6.39584L0 11.2678L6.38767 0.562744Z"
                  fill="white"
                />
              </svg>
              <a href="https://swc.iitg.ac.in" className="hover:text-orange-400 transition-colors">
                <span className="text-sm">SWC | @2025 @students-web-commitee</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
