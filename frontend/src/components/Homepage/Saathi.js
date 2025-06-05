import React from 'react';

const boardsData = [
  {
    logo: '/freshers/swc.png',
    title: "Students' Web Committee",
    description: 'A community at IITG of developers, designers, and managers dedicated to building impactful, value-driven products for campus life since 2016.',
  },
  {
    logo: '/freshers/welfare_board.png',
    title: "Students' Welfare Board",
    description: "The Students' Welfare Board at IIT Guwahati fosters holistic student development through initiatives in mental health, academic support, and social outreach. It operates seven student-led clubs that promote well-being, inclusivity, and empowerment.",
  },
  {
    logo: '/freshers/HAB_logo.jpg',
    title: 'Hostel Affairs Board',
    description: "The Hostel Affairs Board is the backbone of campus residential life, ensuring smooth functioning across all hostels.From infrastructure upgrades to food served in hostels and improving daily amenities, we shape your second home at IIT Guwahati.",
  },
  {
    logo: '/freshers/sports_board.jpg',
    title: 'Sports Board',
    description: "Welcome to the IIT Guwahati Sports Board — where champions are shaped beyond the classroom. Here, you’ll find the perfect chance to reconnect with sports, compete with spirit, and grow as a team player.",
  },
  {
    logo: '/freshers/cult_board.jpg',
    title: 'Cultural Board',
    description: "Hop aboard IITG’s Cultural Board train—where drumbeats, doodles, and debates collide into a campus carnival! Groove, paint, perform monologues, cook feasts, and capture candid clicks while chasing applause, allies, and a nonstop thrill ride. Let loose!",
  },
  {
    logo: '/freshers/tech-board.png',
    title: 'Technical Board',
    description: "Where innovation meets ambition, the Technical board is the apex body overseeing the technical clubs cultivating engineering excellence and leadership through strategic research, collaboration, and mentorship—developing professionals who drive global technological advancement",
  },
  {
    logo: '/freshers/sab_logo.png',
    title: 'Students’ Academic Board',
    description: "Students' Academic Board (SAB), IIT Guwahati, is a student body for all academic-related issues of IIT Guwahati students. The SAB is intended as a student forum that will strive to redress the academic problems and concerns of the entire student community of IIT Guwahati.",
  },
  {
    logo: '/freshers/small_sail.jpg',
    title: 'SAIL',
    description: "We are the bridge between IITG’s present and its legacy.We empower students through alumni-driven mentorship, opportunities, and networks that extend far beyond the campus.",
  },
];

// BoardItem Component: Renders individual board item
const BoardItem = ({ logo, title, description }) => (
  <div className="flex flex-col md:flex-row items-center justify-between py-6 border-b border-gray-300">
    {/* Logo Section */}
    <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 flex-shrink-0">
      <img src={logo} alt={title} className="w-full h-full object-contain" />
    </div>

    {/* Text Section */}
    <div className="flex flex-col md:flex-row md:w-2/3 mt-4 md:mt-0">
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h3 className="text-2xl md:text-3xl font-thin text-gray-800">{title}</h3>
      </div>
      <div className="mt-2 md:mt-0 md:ml-6 w-full md:w-1/2">
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  </div>
);

// BoardsList Component: Maps over board data and renders each item
const BoardsList = ({ boards }) => (
  <div className="w-full mx-auto p-4 sm:p-6 bg-white rounded-lg">
    {boards.map((board, index) => (
      <BoardItem
        key={index}
        logo={board.logo}
        title={board.title}
        description={board.description}
      />
    ))}
  </div>
);

const AboutInstitute = () => {
  return (
    <div className="p-4 sm:p-8 lg:p-12 bg-white-50">
      {/* Wrapper for Two-Column Layout */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-8">
        {/* Left Section: Title */}
        <div className="w-full md:w-1/3">
          <h2 className="text-4xl sm:text-5xl font-light text-gray-800 mb-4 sm:mb-6">
            Students' <br /> <span className="text-orange-500">Organization</span>
          </h2>
        </div>

        {/* Right Section: Paragraph */}
        <div className="w-full md:w-2/3">
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            The Student Organisation is an apolitical body dedicated to enhancing campus life by promoting a vibrant culture of extra-curricular and co-curricular activities. It works actively to ensure student welfare and enrich their overall experience during their stay at the institute.
          </p>
        </div>
      </div>

      {/* Boards List Section */}
      <div className="mt-8">
        <BoardsList boards={boardsData} />
      </div>
    </div>
  );
};

export default AboutInstitute;