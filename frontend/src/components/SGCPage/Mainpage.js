import React from "react";

const Mainpage = () => {
  return (
   <div className="bg-white min-h-screen">
  {/* Hero Image Section */}
  <div className="mt-10 relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden">
    <img 
      src="/freshers/Senate.jpg" 
      alt="Student Council Hero" 
      className="w-full h-full object-cover object-center"
    />
    {/* Optional overlay for better text readability if you want to add text over image */}
    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
  </div>

  {/* Main Content */}
  <div className="px-6 sm:px-8 md:px-12 py-16">
    {/* Icon and Title Section */}
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
      {/* Left Section: Icon, Title */}
      <div className="space-y-6">
        {/* Icon */}
        
        {/* Title */}
        <h1 className="text-4xl w-5/6 sm:text-5xl md:text-6xl text-orange-500 leading-tight">
        About The  <br /><span  className="text-black"> Council</span>
        </h1>
      </div>
      {/* Right Section: Description */}
      <div>
        <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
        The gymkhana is a democratic student body, which consists of elected student representatives working for the overall personality development and smooth living of the students. It promotes the objectives of fostering extra-curricular and co-curricular activities, welfare of students and their stay on the campus.
It also organizes various workshops, events and seminars round the year, that enable to supplement and complement the curricular or main syllabi activities.
It comprises of five Boards viz. Students' Welfare Board, Cultural Board, Sports Board, Technical Board and Hostels' Affairs Board. Over the subsequent pages, we will introduce you to the current student gymkhana council and familiarize you with the activities of each of the individual boards under the council.
        </p>
      </div>
    </div>

    <div className="max-w-7xl mt-36 mx-auto grid md:grid-cols-2 gap-12 items-start">
      {/* Left Section: Title */}
      <div className="space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl text-black leading-tight">
          Students' <br /> 
          <span className="text-orange-500">Senate</span>
        </h1>
      </div>

      {/* Right Section: Content */}
      <div className="space-y-8">
        <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
        At IIT Guwahati, this structure of Students' Senate was implemented for the first time in 2014-15. The whole idea behind the implementation of this system is to have a student body which would look into the issues within campus and all those pertaining directly to the student community. In other words, students' senate represent each student in the campus.
        </p>

        <h2 className="text-2xl font-semibold text-black">What is the structure of the Students' Senate?</h2>
        <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
          Students' Senate consists of 25 elected representatives divided into:
        </p>

        <h3 className="text-xl font-semibold text-gray-800">Executive Panel</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Vice President, Students' Gymkhana</li>
          <li>General Secretary, Students' Welfare Board</li>
          <li>General Secretary, Sports Board</li>
          <li>General Secretary, Cultural Board</li>
          <li>General Secretary, Technical Board</li>
          <li>General Secretary, Hostel Affairs Board</li>
          <li>General Secretary, Students' Web Committee</li>
          <li>General Secretary, Student Alumni Interaction Linkage</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800">Legislative Panel</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>7 UG (Undergraduate) Senators</li>
          <li>7 PPG (Postgraduate) Senators</li>
          <li>3 Girl Senators</li>
        </ul>

        <h2 className="text-2xl font-semibold text-black">How does Students' Senate function?</h2>
        <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
        Students' Senate acts as a bridge between the student community and the administration. Senate meets once every month where discussion are done and decisions are made upon the proposal drafted by the senators on the issues put forward by the student community through the form circulated online before the meeting.
        Depending upon the type of the proposal, they are drafted and submitted to the concerned department or are put forward in SAC(Students Affairs Council) by the Vice President, who is the chairman of students' senate and joint secretary at the SAC meeting.
        </p>

        <h2 className="text-2xl font-semibold text-black">How easy it is to put forward your point in the agenda for the meeting?</h2>
        <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
        You can put agenda in the google form that is circulated each month. To give a detailed information of your proposal, you can call up a senator, sit with him so that he can put forward your point in the meeting which goes into action on approval by the Studnets' Senate. Senators will be happy to help you always. Just give them a call in case of help.
        </p>
      </div>
    </div>
  </div>
</div>

  );
};

export default Mainpage;
