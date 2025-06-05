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
            Nestled on the scenic northern banks of the majestic Brahmaputra River, IIT Guwahati stands as a beacon of academic excellence and innovation. Spread across 700 acres of serene landscape, the campus lies adjacent to North Guwahati’s Amingaon town, framed by lush hills and expansive greenery — offering a perfect blend of nature and cutting-edge infrastructure.
As one of India’s premier institutes of higher education, IIT Guwahati is renowned for nurturing brilliant minds and shaping future leaders. The institute offers an intellectually stimulating environment enriched by world-class faculty, state-of-the-art laboratories, a comprehensive library, modern hostels, and unmatched resources that empower students to thrive in academics, research, and innovation.
Driven by a spirit of discovery and excellence, the faculty and students at IIT Guwahati consistently contribute to groundbreaking research, prestigious publications, fellowships, and industry collaborations. With a vibrant campus life and a legacy of accomplishments, the institute continues to chart new heights — inspiring generations and making a mark on the global stage.

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