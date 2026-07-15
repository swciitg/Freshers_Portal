import React from "react";

const MainPage = (props) => {
  return (
    <div className="bg-white min-h-screen px-6 sm:px-8 md:px-12 py-16 space-y-24">
      {/* Hero Section: Icon and Title */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-center">
        {/* Left Section: Icon, Title */}
        <div className="md:col-span-2 space-y-6">
          {/* Title */}
          <h1 className="text-4xl w-5/6 sm:text-5xl md:text-6xl text-black leading-tight">
            Hostel Affairs Board
          </h1>

          <p className="text-gray-500 text-sm sm:text-base italic">
            Creating a home away from home for every student
          </p>
        </div>

        {/* Right Section*/}
        <div className="flex justify-center">
                    <img
            src="/freshers/hab.png"
            alt="HAB Icon"
            className="w-40 h-40 object-cover rounded-full"
          />
        </div>
      </div>

      {/* Introduction Section */}
      <div className="max-w-7xl mx-auto space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          What is the Hostel Affairs Board?
        </h2>
        <div className="space-y-4">
          <p className="text-gray-600 text-base sm:text-lg md:text-lg leading-relaxed">
            The Hostel Affairs Board (HAB) is the body that takes care of matters related to hostel life at IIT Guwahati. It works to ensure that every student living in a hostel has access to essential services, proper infrastructure, effective grievance redressal, and a safe and comfortable living environment.
          </p>
          <p className="text-gray-600 text-base sm:text-lg md:text-lg leading-relaxed">
            Hostels are an integral part of life at IIT Guwahati. They are not just places to stay, but communities where students learn, collaborate, celebrate, and grow together. As an alumnus once said, "Hostels are home away from home" for the students. When you join, you will be allotted a single occupancy room in one of our hostels, named after the tributaries of the river Brahmaputra.
          </p>
          <p className="text-gray-600 text-base sm:text-lg md:text-lg leading-relaxed">
            Living with hundreds of other boarders, the hostel atmosphere fosters community feeling, healthy competitive spirit, and cohesive cultural growth among residents. The Hostel Affairs Board helps facilitate communication between students, hostel administrations, and institute authorities so that concerns are heard and addressed effectively.
          </p>
        </div>
      </div>

      {/* HAB Structure Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Section: Title and Description */}
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Structure of HAB
            </h2>
            <p className="text-gray-600 text-base sm:text-lg md:text-lg leading-relaxed">
              The Hostel Affairs Board comprises institute authorities and student representatives who work together to ensure the smooth functioning of hostels across the campus.
            </p>
          </div>

          <div className="space-y-3 bg-orange-50 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-800 text-lg">HAB Composition:</h3>
            <ul className="space-y-2 text-gray-700 text-base">
              <li className="flex items-start">
                <span className="mr-3 text-orange-500">•</span>
                <span>Chairman of the Hostel Affairs Board</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-orange-500">•</span>
                <span>Hostel Wardens and Associate Wardens</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-orange-500">•</span>
                <span>General Secretary of the Hostel Affairs Board</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-orange-500">•</span>
                <span>Vice President of the Students' Gymkhana Council</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-orange-500">•</span>
                <span>General Secretaries of all hostels</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section: Title and Description */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Hostel Management Committee
          </h2>

          <p className="text-gray-600 text-base sm:text-lg md:text-lg leading-relaxed">
            Going deeper into the structure, each hostel has its own Hostel Management Committee (HMC). The HMC comprises:
          </p>

          <div className="space-y-3 bg-orange-50 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-800 text-lg">Faculty Members:</h3>
            <ul className="space-y-1 text-gray-700 text-base">
              <li className="flex items-start">
                <span className="mr-3 text-orange-500">•</span>
                <span>1 Warden</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-orange-500">•</span>
                <span>2 Associate Wardens</span>
              </li>
            </ul>

            <h3 className="font-semibold text-gray-800 text-lg mt-4">Student Members:</h3>
            <ul className="space-y-1 text-gray-700 text-base">
              <li className="flex items-start">
                <span className="mr-3 text-orange-500">•</span>
                <span>General Secretary</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-orange-500">•</span>
                <span>Convener for Mess Management Committee</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-orange-500">•</span>
                <span>Technical Secretary</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-orange-500">•</span>
                <span>Sports Secretary</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-orange-500">•</span>
                <span>Welfare Secretary</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-orange-500">•</span>
                <span>Cultural Secretary</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-orange-500">•</span>
                <span>Literary Secretary</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-orange-500">•</span>
                <span>Maintenance Secretary</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* How HAB Works Section */}
      <div className="max-w-7xl mx-auto space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          How the Hostel Affairs Board Works
        </h2>
        <p className="text-gray-600 text-base sm:text-lg md:text-lg leading-relaxed">
          The Hostel Affairs Board serves as the central body for addressing hostel-related concerns at IIT Guwahati. Students can approach their hostel representatives regarding issues related to hostel life, and matters requiring further attention are taken up by HAB. The Board works with wardens, institute offices, and other concerned authorities to resolve issues and improve hostel facilities and services. Through regular interaction with students and feedback mechanisms, HAB ensures that student concerns are represented and that hostel life continues to improve.
        </p>
        <p className="text-gray-600 text-base sm:text-lg md:text-lg leading-relaxed">
          HAB also serves as a bridge between the student community, hostel administrations, and institute authorities, ensuring that concerns related to accommodation, services, infrastructure, and safety are effectively addressed.
        </p>
      </div>

      {/* What HAB Does Section */}
      <div className="max-w-7xl mx-auto space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          What the Hostel Affairs Board Does
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Function 1 */}
          <div className="bg-orange-50 p-6 rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-orange-500 mb-3">
              Hostel Rules & Administration
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              The Hostel Affairs Board helps formulate, review, and implement hostel policies and regulations. It also assists in the smooth administration and functioning of hostels, ensuring that all rules are fair and conducive to student well-being.
            </p>
          </div>

          {/* Function 2 */}
          <div className="bg-blue-50 p-6 rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-blue-500 mb-3">
              Accommodation & Hostel Life
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              HAB works with institute authorities on matters related to hostel accommodation, room allotment, and residential administration to ensure a smooth living experience for all students.
            </p>
          </div>

          {/* Function 3 */}
          <div className="bg-green-50 p-6 rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-green-500 mb-3">
              Food & Hostel Services
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              The Board supports mess facilities, laundry services, and other hostel amenities. It works to improve the quality and efficiency of these services for all students.
            </p>
          </div>

          {/* Function 4 */}
          <div className="bg-orange-50 p-6 rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-orange-600 mb-3">
              Infrastructure & Maintenance
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              HAB follows up on issues related to hostel infrastructure including water supply, electricity, internet connectivity, and common facilities.
            </p>
          </div>

          {/* Function 5 */}
          <div className="bg-blue-50 p-6 rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-blue-500 mb-3">
              Safety & Student Support
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              The Hostel Affairs Board promotes a safe and supportive residential environment and assists students in addressing concerns.
            </p>
          </div>

          {/* Function 6 */}
          <div className="bg-green-50 p-6 rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-green-500 mb-3">
              Communication & Digital Initiatives
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              HAB communicates hostel-related information and promotes digital initiatives that improve transparency and responsiveness.
            </p>
          </div>

          {/* Function 7 */}
          <div className="bg-orange-50 p-6 rounded-lg hover:shadow-lg transition md:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold text-orange-500 mb-3">
              Grievance Redressal
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              HAB provides effective channels for students to lodge grievances related to hostel life with prompt and fair resolution.
            </p>
          </div>
        </div>
      </div>

      {/* Campus Facilities Gallery Section */}
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Campus Life & Facilities
          </h2>
          <p className="text-gray-600 text-lg">
            Explore the beautiful hostels and campus facilities at IIT Guwahati
          </p>
        </div>

        {/* 2x2 Grid Gallery */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Image 1 */}
          <div className="group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition">
            <img
              src="https://swc.iitg.ac.in/freshers/api/hab_img1.png"
              alt="Campus Building 1"
              className="w-full h-72 object-cover group-hover:scale-105 transition duration-300"
            />
          </div>

          {/* Image 2 */}
          <div className="group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition">
            <img
              src="https://swc.iitg.ac.in/freshers/api/hab_img2.png"
              alt="Campus Building 2"
              className="w-full h-72 object-cover group-hover:scale-105 transition duration-300"
            />
          </div>

          {/* Image 3 */}
          <div className="group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition">
            <img
              src="https://swc.iitg.ac.in/freshers/api/hab_img3.png"
              alt="Campus Building 3"
              className="w-full h-72 object-cover group-hover:scale-105 transition duration-300"
            />
          </div>

          {/* Image 4 */}
          <div className="group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition">
            <img
              src="https://swc.iitg.ac.in/freshers/api/hab_img4.png"
              alt="Campus Building 4"
              className="w-full h-72 object-cover group-hover:scale-105 transition duration-300"
            />
          </div>

          {/* Image 5 */}
          <div className="group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition">
            <img
              src="https://swc.iitg.ac.in/freshers/api/gym.png"
              alt="Campus Building 4"
              className="w-full h-72 object-cover group-hover:scale-105 transition duration-300"
            />
          </div>

          {/* Image 6 */}
          <div className="group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition">
            <img
              src="https://swc.iitg.ac.in/freshers/api/library.png"
              alt="Campus Building 4"
              className="w-full h-72 object-cover group-hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      </div>

      {/* Our Goal Section */}
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-orange-50 to-blue-50 p-8 md:p-12 rounded-lg space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our Goal
        </h2>
        <p className="text-gray-700 text-base sm:text-lg md:text-lg leading-relaxed">
          The Hostel Affairs Board is committed to making hostel life comfortable, inclusive, and rewarding for every student. By listening to student concerns, improving services and infrastructure, and working closely with institute authorities, HAB strives to create a residential environment where every student feels supported, valued, and truly at home. We believe that hostels should be more than just accommodation, they should be vibrant communities that foster personal growth, lifelong friendships, and unforgettable memories.
        </p>
      </div>
    </div>
  );
};

export default MainPage;
