import React from 'react';

const MainPage = (props) => {
  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center px-6 md:px-12 lg:px-24 py-8  rounded-lg max-w-full mx-auto space-y-8 lg:space-y-0 lg:space-x-12">
      {/* Left Section - Profile Info */}
      <div className="flex flex-col items-center md:items-start md:w-1/3  space-y-4">
        <div className="w-48 h-48 md:w-64 md:h-64 bg-gray-300 rounded-lg"></div>
        <h2 className="text-lg md:text-xl font-semibold text-gray-800 text-center md:text-left">
          {props.name}
        </h2>
        <p className="text-gray-600 py-2 border-b-2 text-center md:text-left">
          {props.position}
        </p>
        <p className="mt-2 text-gray-500 text-center md:text-left">
          {props.phone}
        </p>
        <a
          href={`mailto:${props.mail}`}
          className="text-blue-600 hover:underline mt-1 text-center md:text-left"
        >
          {props.mail}
        </a>
      </div>

      {/* Right Section - Description */}
      <div className="md:w-2/3 mt-6 lg:mt-0 lg:pl-8">
        <p className="text-gray-700 leading-relaxed text-justify">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default MainPage;
