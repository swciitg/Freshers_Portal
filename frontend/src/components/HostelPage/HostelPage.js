import React from 'react';

const Hostels = (props) => {
  console.log(props.imageUrl);
  return (
    <div className="bg-white min-h-screen px-6 sm:px-8 md:px-10 py-16">
      {/* Title, Description, and Info Grid */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        {/* Title and Description */}
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-orange-500">{props.name}</span> <br /> Hostel
          </h1>
          <p className="mt-4 text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-lg">
            {props.description}
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-10">
          <div>
            <h2 className="text-base sm:text-lg font-semibold text-gray-500">Inaugurated in</h2>
            <p className="text-xl sm:text-2xl font-medium mt-2">{props.year}</p>
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-semibold text-gray-500">Resident's Gender</h2>
            <p className="text-xl sm:text-2xl font-medium mt-2">{props.gender}</p>
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-semibold text-gray-500">Student Capacity</h2>
            <p className="text-xl sm:text-2xl font-medium mt-2">{props.capacity}</p>
          </div>
          <div>
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
        </div>
      </div>

      {/* Image Section with Consistent Aspect Ratio */}
      <div className="w-full max-w-4xl mx-auto aspect-w-16 aspect-h-9">
        <img
          src={props.imageUrl}
          alt={`${props.name} Hostel`}
          className="object-cover w-full h-full rounded-md shadow-lg"
        />
      </div>
    </div>
  );
};

export default Hostels;
