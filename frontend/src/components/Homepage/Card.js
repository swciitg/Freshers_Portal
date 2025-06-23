import React from 'react';

const   AboutInstitute = () => {
  return (
    <div className="lg:p-24 bg-gray-50 w-full mx-auto p-4 sm:p-8 ">
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
      <div className="mt-10 text-center">
        <h2 className="text-5xl font-semibold text-gray-800 mb-4">Welcome Onboard</h2>
        <p className="text-base text-gray-600 mb-8">
          We're excited to have you with us! Please go through the resources below to get started on your journey.
        </p>

        <div className="flex justify-center gap-6">
          <a
            href="https://drive.google.com/file/d/16trZQUclFIA6aXcqpY0yJE1KIgS2Zdcj/view"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
          >
            <div className="flex items-center p-4 bg-gray-100 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer">
              <div className="text-blue-600 mr-2">📘</div>
              <span className="text-sm font-medium text-gray-800">Phase 1</span>
            </div>
          </a>
          <a
            href="/path/to/team_handbook.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
          >
            <div className="flex items-center p-4 bg-gray-100 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer">
              <div className="text-blue-600 mr-2">📘</div>
              <span className="text-sm font-medium text-gray-800">Phase 2</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutInstitute;