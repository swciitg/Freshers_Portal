import React from 'react';

const boardsData = [
  {
    logo: '/swc.png',
    title: "Students' Web Committee",
    description: 'A community at IITG of developers, designers, and managers dedicated to building impactful, value-driven products for campus life since 2016.',
  },
  {
    logo: '/welfare_board.png',
    title: 'Welfare Board',
    description: 'It broadly addresses the overall well-being of the students of the institute.',
  },
  {
    logo: '/hab.png',
    title: 'Hostel Affairs Board',
    description: 'It acts as the central coordinating authority for all hostels.',
  },
  {
    logo: '/sports_board.jpg',
    title: 'Sports Board',
    description: 'It organizes and promotes all extra-curricular activities in the field of Sports.',
  },
  {
    logo: '/cult_board.jpg',
    title: 'Cultural Board',
    description: 'It organizes and promotes all extra-curricular cultural activities on the campus.',
  },
  {
    logo: '/tech-board.png',
    title: 'Technical Board',
    description: 'It organizes and promotes all extracurricular technical and scientific activities.',
  },
  {
    logo: '/sab_logo.png',
    title: 'Students’ Academic Board',
    description: 'It addresses all the academic issues of the student community to the admin.',
  },
  {
    logo: '/small_sail.jpg',
    title: 'SAIL',
    description: 'SAIL keeps you in touch with the IITG community even after you pass out.',
  },
];

// BoardItem Component: Renders individual board item
const BoardItem = ({ logo, title, description }) => (
  <div className="flex flex-col md:flex-row items-center justify-between py-6 border-b border-gray-300">
    {/* Logo Section */}
    <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 flex-shrink-0">
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
            Apolitical student body that promotes the objectives of fostering
            extra-curricular and co-curricular activities, welfare of students,
            and their stay on the campus.
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
