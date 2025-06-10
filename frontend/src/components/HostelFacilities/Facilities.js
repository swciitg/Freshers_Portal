import React from 'react';

const Facilities = (props) => {
  return (
   <div className="bg-white min-h-screen px-6 sm:px-8 md:px-12 py-16">
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
    {/* Left Section: Title, Button, and Description */}
    <div className="space-y-8">
      {/* Title and Button */}
      <div className="space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-orange-500">
          {props.name}
        </h1>

        {/* Uncomment if needed
        <a
          href={props.wikiUrl}
          className="inline-flex items-center px-6 py-3 text-base font-semibold text-gray-700 bg-white border-2 border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 hover:border-orange-400 transition-all duration-200 group"
        >
          Campus Wiki
          <svg
            className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200"
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
        */}
      </div>

      {/* Description */}
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
          {props.description}
        </p>
      </div>
    </div>

    {/* Right Section: Image */}
    <div className="relative">
      <div className="aspect-[4/3] overflow-hidden rounded-xl shadow-2xl">
        <img
          src={props.imageUrl}
          alt={props.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      {/* Optional decorative element */}
      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-100 rounded-full -z-10 opacity-60"></div>
    </div>
  </div>
</div>

  );
};

export default Facilities;
