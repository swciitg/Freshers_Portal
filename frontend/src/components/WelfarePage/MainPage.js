import React, { useEffect } from "react";

const MainPage = (props) => {
  useEffect(() => {
    // This effect runs once when the component mounts
    // You can add any initialization logic here if needed
    console.log("MainPage component mounted with props:", props);
  }, []);
  return (
      <div className="bg-white min-h-screen px-6 sm:px-8 md:px-12 py-16">
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-end">
    {/* Left Section: Icon, Title, and Description */}
    <div className="space-y-8">
      {/* Icon and Title */}
      <div className="space-y-6">
        {/* Icon */}
        <img
          src={props.iconUrl}
          alt="Icon"
          className="w-24 h-24 object-cover rounded-full shadow-md"
        />

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          {props.name.endsWith("Club") ? (
            <>
              <span className="text-orange-500">
                {props.name.replace(" Club", "")}{" "}
              </span>
              <span className="text-black">Club</span>
            </>
          ) : (
            <span className="text-orange-500">{props.name}</span>
          )}
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
        style={{ objectPosition: 'bottom' }}
      />
    </div>
  </div>
</div>
  );
};

export default MainPage;
