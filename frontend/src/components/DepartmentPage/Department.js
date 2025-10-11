import React from 'react';

const Department = (props) => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen px-6 sm:px-8 md:px-12 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Container with soft background and rounded edges */}
        <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-12 lg:p-16 border border-gray-100">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left Section: Title, Head of Department, and Description (55% width) */}
            <div className="space-y-6 md:space-y-8 lg:pr-8 order-2 lg:order-1">
              {/* Title and Head of Department */}
              <div className="space-y-6">
                {/* Department Name with accent line */}
                <div className="relative">
                  <div className="absolute -left-2 sm:-left-4 top-0 w-1 h-full bg-orange-500 rounded-full"></div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-orange-500 pl-4 sm:pl-6">
                    {props.name}
                  </h1>
                </div>
                
                {/* Head of Department with better typography */}
                <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 border-l-4 border-orange-500">
                  <p className="text-gray-500 text-xs sm:text-sm font-medium uppercase tracking-wide mb-2">
                    Head of Department
                  </p>
                  <p className="text-gray-800 text-lg sm:text-xl md:text-2xl font-semibold">
                    {props.headName}
                  </p>
                </div>
              </div>

              {/* Description with improved typography */}
              <div className="space-y-3 sm:space-y-4">
                <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full"></div>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-light">
                  {props.description}
                </p>
              </div>
            </div>

            {/* Right Section: Image (45% width) */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative group">
                <div className="w-full max-w-sm sm:max-w-md aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-3xl">
                  <img
                    src={props.imageUrl}
                    alt={props.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-orange-300 rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Department;
