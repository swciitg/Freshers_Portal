import React from 'react';

const AboutInstitute = () => {
  return (
    <div className="p-24 bg-gray-50">
      {/* Wrapper for Two-Column Layout */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-8">
        {/* Left Section: Title */}
        <div className="md:w-1/2">
          <h2 className="text-5xl  text-gray-800 mb-6">
            About the <br /> <span className="text-orange-500">institute</span>
          </h2>
        </div>

        {/* Right Section: Paragraph */}
        <div className="md:w-1/2">
          <p className="text-gray-600 text-lg leading-relaxed">
            Students who do very well in their first year are allowed to change their department. 
            A Branch Change is made strictly on the basis of Cumulative Performance Index 
            (academic performance) at the end of the second semester. Branch changes will be made 
            such that the number of students in the third semester does not exceed 110 percent 
            of the sanctioned yearly intake for a branch.
          </p>
        </div>
      </div>

      {/* List Section: Four Key Points */}
      <ul className="mt-10 space-y-6">
        <li className="flex items-center border-b border-gray-300 pb-2">
          <span className="text-orange-500 font-semibold text-xl mr-4">01</span>
          <span className="text-lg text-gray-700">
            Brahmaputra riverfront location
          </span>
        </li>
        <li className="flex items-center border-b border-gray-300 pb-2">
          <span className="text-orange-500 font-semibold text-xl mr-4">02</span>
          <span className="text-lg text-gray-700">
            Scenic hills and open spaces
          </span>
        </li>
        <li className="flex items-center border-b border-gray-300 pb-2">
          <span className="text-orange-500 font-semibold text-xl mr-4">03</span>
          <span className="text-lg text-gray-700">
            State-of-the-art research facilities
          </span>
        </li>
        <li className="flex items-center border-b border-gray-300 pb-2">
          <span className="text-orange-500 font-semibold text-xl mr-4">04</span>
          <span className="text-lg text-gray-700">
            Emphasis on industry exposure
          </span>
        </li>
      </ul>
    </div>
  );
};

export default AboutInstitute;