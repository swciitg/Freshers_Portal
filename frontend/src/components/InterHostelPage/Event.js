import React from 'react';

const EventPage = (props) => {
  return (
    <div className="bg-white min-h-screen px-6 sm:px-8 md:px-12 py-16">
      {/* Title, Button, and Description Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Section: Title and Button */}
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-orange-500">
            {props.name}
          </h1>

          <a
            href={props.wikiUrl}
            className="text-base sm:text-lg font-semibold text-gray-500 inline-flex items-center border px-4 py-2 rounded-md shadow-sm hover:bg-gray-50"
          >
            Campus Wiki
            <svg
              className="ml-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>

        {/* Right Section: Description */}
        <div>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
            {props.description}
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="max-w-7xl mx-auto mt-10">
        <img
          src={props.imageUrl}
          alt={props.name}
          className="object-cover w-full h-auto rounded-md shadow-lg"
        />
      </div>
    </div>
  );
};

export default EventPage;
