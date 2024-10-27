import React from "react";

const MainPage = (props) => {
  return (
    <div className="bg-white min-h-screen px-6 sm:px-8 md:px-12 py-16">
      {/* Icon and Title Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Section: Icon, Title */}
        <div className="space-y-6">
          {/* Icon */}
          <img
            src="/hab.png"
            alt="Icon"
            className="w-24 h-24 object-cover rounded-full"
          />

          {/* Title */}
          <h1 className="text-4xl w-5/6 sm:text-5xl md:text-6xl text-orange-500 leading-tight">
          Hostel Affairs <span  className="text-black"> Board</span>
          </h1>
        </div>

        {/* Right Section: Description */}
        <div>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
          So now we come to the Hostel Affairs Board. Hostels as quoted by the alumnus are “home away from home” for the students. When you join you will be allotted a single occupancy room in one of the hostels. Hostels at IIT Guwahati are named on the tributaries of river Brahmaputra. Residential environment of the hostel provides a conducive environment for all round development of the students. Living with hundreds of other boarders, hostel atmosphere fosters community feeling, healthy competitive spirit and cohesive cultural growth among the boarders.The body looking after the well-being of these hostels is the Hostel Affairs Board (HAB).The structure of HAB is:Chairman, HAB and Wardens of all hostels, General Secretary, HAB; Joint Secretary, HAB and General Secretaries of all the hostels.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mt-36 mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Section: Icon, Title */}
        <div className="space-y-6">
          {/* Icon */}
          <img
            src="/hab.png"
            alt="Icon"
            className="w-24 h-24 object-cover rounded-full"
          />

          {/* Title */}
          <h1 className="text-4xl w-full sm:text-5xl md:text-6xl text-orange-500 leading-tight">
          Hostel Management <span  className="text-black"> Committee</span>
          </h1>
        </div>

        {/* Right Section: Description */}
        <div>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
          Going deep into the structure, we have Hostel Management Committee (HMCs) for each hostel. HMC comprises of 1 Warden and 2 Associate Wardens as faculty member. Student members in HMC are General Secretary (usually third yearites), Convener for the Mess Management Committee, Technical Secretary, Sports Secretary, Welfare Secretary, Cultural Secretary, Literary Secretary and Maintenance Secretary.
          </p>
        </div>
      </div>

    </div>
  );
};

export default MainPage;
