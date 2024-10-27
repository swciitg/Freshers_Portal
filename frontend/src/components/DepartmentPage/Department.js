import React from 'react';

const Department = (props) => {
  return (
    <div className="bg-white min-h-screen px-6 sm:px-8 md:px-12 py-16">
      {/* Title, Head of Department, and Description Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Section: Title and Head of Department */}
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl leading-tight text-orange-500">
            {props.name}
          </h1>
          <div>
            <p className="text-gray-500 text-lg">Head of Department</p>
            <p className="text-black text-xl font-semibold">{props.headName}</p>
          </div>
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
          className="object-cover w-full h-auto rounded-md shadow-lg"
        />
      </div>
    </div>
  );
};

export default Department;
