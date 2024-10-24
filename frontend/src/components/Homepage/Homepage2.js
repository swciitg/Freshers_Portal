import React from 'react';
import AchievementsGrid from './Card'; // Import the AchievementsGrid component

export default function Homepage2() {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 py-12">
      {/* Section with Text and Video */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
            About IIT Guwahati
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-4 sm:mb-6 leading-relaxed">
            The campus of IIT Guwahati is on the northern banks of the Brahmaputra
            and abuts the North Guwahati town of Amingaon. The campus spans 
            700 acres (2.8 km²) around 20 km from the heart of the city, with 
            the Brahmaputra on one side and hills and open spaces on the other.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-4 sm:mb-6 leading-relaxed">
            IIT Guwahati is a prestigious institute of higher learning, producing 
            meritorious students with excellent career prospects and universal 
            recognition. Students benefit from advanced courses, expert faculty, 
            and facilities like well-equipped labs, libraries, and hostels.
          </p>
        </div>

        {/* Video Section */}
        <div className="flex flex-col items-center">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center">
            Amazing Drone Video of IIT Guwahati
          </h2>
          <div className="w-full max-w-md md:max-w-full md:w-5/6 lg:w-3/4">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/92C1QU4jr30"
              title="IIT Guwahati - Drone Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>

      {/* New Section Heading */}
      <div className="mt-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mt-4">
          Student Organizations
        </h2>

        {/* Achievements Grid Component */}
        <AchievementsGrid />
      </div>
    </div>
  );
}
