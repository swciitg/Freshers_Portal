import React from 'react';

const EventPage = (props) => {
  return (
    <div className="bg-white min-h-screen px-6 sm:px-8 md:px-12 py-16">
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
    {/* Left Section: Title and Description */}
    <div className="space-y-8">
      {/* Title */}
      <div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-orange-500">
          {props.name}
        </h1>
      </div>

      {/* Description */}
      <div>
        <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
          {props.description}
        </p>
      </div>
    </div>

    {/* Right Section: Image */}
    <div className="w-full aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
      <img
        src={props.imageUrl}
        alt={props.name}
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>

  );
};

export default EventPage;
