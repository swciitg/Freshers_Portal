import React from 'react';

const Hostels = (props) => {
  console.log(props.imageUrl);
  return (
    <div className="bg-white min-h-screen px-6 sm:px-8 md:px-10 py-16">
  <div className="grid lg:grid-cols-2 gap-12 items-start">
    {/* Left Side - Title and Description */}
    <div className="flex flex-col justify-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
        <span className="text-orange-500">{props.name}</span> <br /> Hostel
      </h1>
      <p className="mt-6 text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
        {props.description}
      </p>
    </div>

    {/* Right Side - Info Grid and Image */}
    <div className="space-y-8">
      {/* Info Grid */}
      <div className="grid grid-cols-2 gap-6 sm:gap-8">
        <div>
          <h2 className="text-sm sm:text-base font-semibold text-gray-500 uppercase tracking-wide">
            Inaugurated in
          </h2>
          <p className="text-xl sm:text-2xl font-medium mt-2">{props.year}</p>
        </div>
        <div>
          <h2 className="text-sm sm:text-base font-semibold text-gray-500 uppercase tracking-wide">
            Resident's Gender
          </h2>
          <p className="text-xl sm:text-2xl font-medium mt-2">{props.gender}</p>
        </div>
        <div>
          <h2 className="text-sm sm:text-base font-semibold text-gray-500 uppercase tracking-wide">
            Student Capacity
          </h2>
          <p className="text-xl sm:text-2xl font-medium mt-2">{props.capacity}</p>
        </div>
        <div>
          {/* Empty div for grid alignment - you can add more info here if needed */}
        </div>
      </div>

      {/* Image with Fixed Aspect Ratio */}
      <div className="w-full aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
        <img
          src={props.imageUrl}
          alt={`${props.name} Hostel`}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</div>

  );
};

export default Hostels;
