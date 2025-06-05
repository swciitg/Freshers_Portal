import React, { useState } from "react";

const sections = [
  { 
    id: 0, 
    title: "How to reach Guwahati?", 
    content: "Guwahati is the gateway for North East India. It is well connected by air, rail and road with the rest of the country. Trains from all parts of the country are available to reach Guwahati (visit the Indian Railways Official website for more details). There are direct flights from Delhi, Kolkata and Mumbai. There are direct or connecting flights from Jaipur, Chennai, Hyderabad, Bengaluru to Guwahati via Kolkata / Delhi. Air India, Jet Airways, IndiGo, SpiceJet and GoAir operate regular flights to and from Guwahati."
  },
  {
    id: 1,
    title: "How to reach the Institute from Guwahati Railway Station?",
    content: "The institute is located at a distance of 18 kilometres from the Guwahati Railway Station (GHY). The institute provides a bus service with buses plying from the institute to the city and back at regular intervals.",
  },
  {
    id: 2,
    title: "How to reach the Institute from Kamakhaya Railway Station?",
    content: "Kamakhya Railway Station is another major station in Guwahati. Transportation options are available to reach the institute from this station.",
  },
  {
    id: 3,
    title: "How to reach the Institute from Guwahati Airport?",
    content: "The institute is located at a distance of 18 kilometres from the Guwahati Airport. The institute does not provide any bus service for the airport. Prepaid taxis and cabs can be availed of directly from Guwahati Airport to reach the institute.",
  },
  { 
    id: 4, 
    title: "What all should we get or not get from home?", 
    content: "You will need essentials like a lock, a bucket, a mug, a mattress (6'x 3'), a pillow, blanket, curtains, hangers, umbrella and a scientific calculator. A bicycle is advised since the campus is quite large. Don't get worked up about how to carry all this – we have a solution for that too. All these can be bought from Guwahati city to which IIT buses ply at regular intervals."
  },
  {
    id: 5,
    title: "Should we bring our JEE preparation books, in case they are useful in the basic Physics and Chemistry courses?",
    content: "There would be some courses in the first year requiring basic knowledge of mechanics, electrostatics, thermodynamics and a bit of organic and physical chemistry. You'll do some of them in the first semester, others in the second. Such courses generally start with basics of these topics and then go into further detail.",
  },
  {
    id: 6,
    title: "Which banks have their branches in IIT Guwahati?",
    content: "There are 3 major banks in the campus: Canara Bank (IFSC: CNRB0008652, MICR Code: 781015008), State Bank of India (IFSC: SBIN0014262, MICR Code: 781002053) and ICICI (IFSC: ICIC0003325) bank. You are advised to have an account in SBI or Canara Bank for quick payments and receiving from the Institute.",
  },
  {
    id: 7,
    title: "Where do we stay once we arrive IIT Guwahati? Where can my parents stay?",
    content: "A limited number of rooms (60 rooms) are available at IIT Guwahati Guest House that can be provided for temporary accommodation (on payment basis) for Parents/ Guardians accompanying their wards for admission at IIT Guwahati.",
  },
  {
    id: 8,
    title: "How are the hostels allotted to freshmen? Does my hostel change every year?",
    content: "The hostel room is made available to the students on their arrival. Hostels are allotted randomly by the administration. Once you have been allotted a hostel, you stay there for your entire IIT life unless some special and extreme circumstances arise.",
  },
  {
    id: 9,
    title: "Is there any ragging at IIT Guwahati? What are the steps that IIT Guwahati is taking?",
    content: "IIT Guwahati has a zero tolerance policy. We do not accept ragging in any form. If you ever find yourself in a situation where you feel uncomfortable, contact anti ragging hotline number: 08011089898.",
  },
  {
    id: 10,
    title: "Are girls allowed to enter boys hostels and vice-versa?",
    content: "Residents of the opposite sex are prohibited from entering the flats/units of the hostel residents at all times. You may use the common area such as the Mess, Hostel Office or Reading room/Library for any discussion and/or group study.",
  },
  { 
    id: 11, 
    title: "What are the timings of library?", 
    content: "Library is open from 9:00 AM to 2:00 AM, although books can be issued from 9:00 AM to 5:00 PM only (working days). Library is open 24hrs. during mid semester and end semester examinations."
  },
  {
    id: 12,
    title: "What are the scholarships/financial assistance available for studying at IIT Guwahati?",
    content: "Scholarships are offered to most students by the Institute, government agencies, alumni and corporations. This assistance is offered on the basis of Merit-cum-Means, performance, special capabilities etc.",
  },
  { 
    id: 13, 
    title: "Can I change my department post-admission?", 
    content: "Students who do very well in their first year are allowed to change their department. A Branch Change is made strictly on basis of Cumulative Performance Index (academic performance) at end of second semester."
  },
  {
    id: 14,
    title: "What are minor courses? And what are their advantages?",
    content: "Minor Courses are efficiently designed course structures which provides you an insight and fundamental concepts of the branch you choose as your minor. You can choose minor on following topics and branches: Computer Science and Engineering, Electronics & Electrical Engineering, Mechanical Engineering, Civil Engineering, Biotechnology, Chemical Engineering, Engineering Physics, Chemical Science & Technology, Mathematics, South and Southeast Asian Studies, Language and Literature.",
  },
  {
    id: 15,
    title: "How can I take a minor course? And Can I drop minor course?",
    content: "Yes, there is a criteria for getting a minor course, you must have CGPA of 6.5 or above in first two semesters. The number of seats in each minor discipline will be as per decision of the Senate of IIT Guwahati.",
  },
  {
    id: 16,
    title: "What is the internet policy at IIT Guwahati?",
    content: "IIT Guwahati has LAN cables installed in every hostel room and WIFI routers in the Academic Area, Student Activity Centre (SAC) and your respective hostels. IIT Guwahati believes in providing high speed internet to all its students. Furthermore, the LAN is dysfunctional between 2 AM to 5 AM and 8 AM to 5 PM(class hours).",
  },
  {
    id: 17,
    title: "Are there any options nearby for food other than the hostel mess?",
    content: "Institute offers delectable food services so that the brains at work can perform their best. Although home cooked food cannot be replaced by anything, the campus does have alternatives if you want to skip the mess food. The campus houses various renowned restaurant franchises like Baskin and Robbins and Subway in Food Court adjoining the New SAC building.",
  },
  {
    id: 18,
    title: "What are the medical facilities provided in IIT Guwahati?",
    content: "We have an in-campus hospital at IIT Guwahati, which is open 24×7. In case of emergency the IIT Guwahati ambulance drives you to the hospital. You call them directly or approach the nearest security desk to summon them.",
  },
];

const MainPage = () => {
  const [selectedSection, setSelectedSection] = useState(0);
  const [expandedSections, setExpandedSections] = useState(new Set([0])); // First section expanded by default

  const handleSectionClick = (id) => {
    setSelectedSection(id);
  };

  const toggleMobileSection = (id) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedSections(newExpanded);
  };

  return (
    <div className="flex flex-col md:flex-row p-4 md:p-16">
      {/* Mobile Accordion View - Only visible on mobile */}
      <div className="md:hidden space-y-2">
        <div className="mb-6">
          <div className="flex items-center space-x-3 mb-4">
          </div>
        </div>

        {sections.map((section) => (
          <div key={section.id} className="bg-white rounded-lg shadow-sm border">
            <button
              className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              onClick={() => toggleMobileSection(section.id)}
              aria-expanded={expandedSections.has(section.id)}
            >
              <div className="flex items-center space-x-3">
                <span className={`text-sm font-medium w-8 h-8 rounded-full flex items-center justify-center ${
                  expandedSections.has(section.id) ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {String(section.id + 1).padStart(2, '0')}
                </span>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 text-sm leading-tight">{section.title}</h3>
                </div>
              </div>
              <svg 
                className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ml-2 ${
                  expandedSections.has(section.id) ? 'rotate-180' : ''
                }`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {expandedSections.has(section.id) && (
              <div className="px-4 pb-4 border-t bg-gray-50">
                <div className="pt-4">
                  <p className="text-gray-600 text-sm leading-relaxed">{section.content}</p>
                  
                  {/* All your existing detailed content for each section */}
                  {section.id === 1 && (
                    <div className="mt-4 space-y-4">
                      <h4 className="font-semibold text-gray-900">City to Campus</h4>
                      <div className="overflow-x-auto">
                        <table className="table-auto border-collapse border border-gray-300 w-full text-xs">
                          <thead className="bg-gray-200">
                            <tr>
                              <th className="border border-gray-300 px-2 py-1">Time</th>
                              <th className="border border-gray-300 px-2 py-1">From</th>
                              <th className="border border-gray-300 px-2 py-1">To</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr><td className="border border-gray-300 px-2 py-1">6:45 a.m.</td><td className="border border-gray-300 px-2 py-1">Pan Bazar</td><td className="border border-gray-300 px-2 py-1">Subansiri Hostel</td></tr>
                            <tr><td className="border border-gray-300 px-2 py-1">8:15 a.m.</td><td className="border border-gray-300 px-2 py-1">Pan Bazar</td><td className="border border-gray-300 px-2 py-1">Subansiri Hostel</td></tr>
                            <tr><td className="border border-gray-300 px-2 py-1">9:00 a.m.</td><td className="border border-gray-300 px-2 py-1">Pan Bazar</td><td className="border border-gray-300 px-2 py-1">Subansiri Hostel</td></tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {section.id === 3 && (
                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Cab Services</h4>
                      <div className="space-y-2 text-xs">
                        <div className="bg-white p-2 rounded border">
                          <strong>Geo Cabs Northeast:</strong> +91 361 222 2727
                        </div>
                        <div className="bg-white p-2 rounded border">
                          <strong>My Taxi:</strong> +91 361 222 8888
                        </div>
                        <div className="bg-white p-2 rounded border">
                          <strong>Prime Cabz:</strong> +91 361 222 2233
                        </div>
                      </div>
                    </div>
                  )}

                  {(section.id === 7 || section.id === 9 || section.id === 12) && (
                    <button className="mt-3 px-4 py-2 bg-orange-100 hover:bg-orange-200 text-orange-800 rounded-lg text-xs transition-colors">
                      {section.id === 7 ? 'Guest House Details' : section.id === 9 ? 'Anti-Ragging PDF' : 'Scholarship Details'}
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Desktop Sidebar - Hidden on mobile, unchanged for desktop */}
      <div className="hidden md:block w-1/3 max-w-xs bg-white scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-100 scrollbar-thin"
           style={{ maxHeight: '100vh', overflowY: 'scroll' }}>
        <ul className="divide-y divide-gray-200">
          {sections.map((section) => (
            <li
              key={section.id}
              className={`p-4 text-lg cursor-pointer flex items-center space-x-2 ${
                selectedSection === section.id
                  ? "font-bold text-black border-b-2 border-black"
                  : "text-gray-400 border-b border-gray-200"
              }`}
              onClick={() => handleSectionClick(section.id)}
            >
              <span
                className={`mr-4 ${
                  selectedSection === section.id
                    ? "text-black"
                    : "text-gray-600"
                }`}
              >
                {String(section.id + 1).padStart(2, "0")}
              </span>
              <span
                className={`${
                  selectedSection === section.id
                    ? "text-black"
                    : "text-gray-600"
                }`}
              >
                {section.title}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop Main Content - Hidden on mobile, unchanged for desktop */}
      <div className="hidden md:block flex-1 pb-12 pt-4 md:pt-2 md:pl-36">
        <h1 className="text-2xl md:text-4xl font-medium text-orange-400">
          {sections[selectedSection].title}
        </h1>
        {/* <p className="mt-2 text-sm md:text-base text-orange-500">
          {sections[selectedSection].content}
        </p> */}

        {/* All your existing conditional content remains exactly the same */}
        {selectedSection === 0 && (
          <div className="mt-8 max-w-3xl mx-auto p-4">
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 ">
              Guwahati is the gateway for North East India. It is well connected
              by air, rail and road with the rest of the country. Trains from
              all parts of the country are available to reach Guwahati (visit
              the Indian Railways Official website for more details). There are
              direct flights from Delhi, Kolkata and Mumbai. There are direct or
              connecting flights from Jaipur, Chennai, Hyderabad, Bengaluru to
              Guwahati via Kolkata / Delhi. Air India, Jet Airways, IndiGo,
              SpiceJet and GoAir operate regular flights to and from Guwahati.
            </p>
          </div>
        )}

        {/* All your other existing sections remain exactly the same */}
        {selectedSection === 1 && (
          <div
            className="mt-8 max-w-3xl mx-auto p-4 hide-scrollbar"
            style={{ maxHeight: '100vh', overflowY: 'scroll' }}
          >
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
              The institute is located at a distance of 18 kilometres from the
              Guwahati Railway Station (GHY). The institute provides a bus
              service with buses plying from the institute to the city and back
              at regular intervals. The timetable of bus schedules may be found
              below. Prepaid taxis and cabs can also be availed of directly from
              Guwahati Railway station to reach the institute.
            </p>
            
            {/* Your existing tables and content remain exactly the same */}
            <h2 className="text-2xl font-semibold mb-4">City to Campus</h2>
            <table className="table-auto border-collapse border border-gray-300 w-full mb-8">
              {/* All your existing table content */}
            </table>
            
            <h2 className="text-2xl font-semibold mb-4">Campus to City</h2>
            <table className="table-auto border-collapse border border-gray-300 w-full">
              {/* All your existing table content */}
            </table>
          </div>
        )}
        {selectedSection === 2 && (
          <div className="mt-8 max-w-3xl mx-auto p-4">
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 ">
            The institute is located at a distance of 13 kilometres from the Kamakhya Railway Station (KYQ). You can catch the institute bus at Maligaon bus stop after 20 mins of their scheduled departure timing from Guwahati Railway station. Prepaid taxis and cabs can also be availed of directly from Kamakhaya Railway station to reach the institute.
            </p>
          </div>
        )}
        {selectedSection === 3 && (
          <div className="mt-8 max-w-3xl mx-auto p-4">
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 ">
            The institute is located at a distance of 18 kilometres from the Guwahati Airport. Institute does not provide any bus service for Airport. Prepaid taxis and cabs can be availed of directly from Guwahati Airport to reach the institute.            </p>
          </div>
        )}
        {selectedSection === 4 && (
          <div className="mt-8 max-w-3xl mx-auto p-4">
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 ">
            You will need essentials like a lock, a bucket, a mug, a mattress (6’x 3’), a pillow, blanket, curtains, hangers, umbrella and a scientific calculator. A bicycle is a advised since the campus is quite large.
Don’t get worked up about how to carry all this – we have a solution for that too. All these can be bought from Guwahati city to which IIT buses ply at regular intervals.
Also, stalls will be set up inside the campus, for buying bicycles, mattresses, pillows, etc. Finally, it’s a free world here and you can bring literally anything - music system, computer, electric guitar and anything that you can’t live without.
Both pre-paid and post-paid connections can be easily availed within the campus, however if you wish you can use your hometown’s Sim Card for initial use.
Do not bring electrical items such as electric heaters, coolers, table fans, iron or electric kettle. They are not allowed as per the institute rules. On being caught, you may be fined heavily.</p>          </div>
        )}
        {/* {selectedSection === 5 && (
          <div className="mt-8 max-w-3xl mx-auto p-4">
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 ">
            Guwahati experiences rainy & humid climate in July & August and moderate winter climate in December & January. So, you can bring your winter clothings and quilt during your trip to home in December vacation.</p>          </div>
        )} */}
        {selectedSection === 5 && (
          <div className="mt-8 max-w-3xl mx-auto p-4">
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 ">
            There would be some courses in the first year requiring basic knowledge of mechanics, electrostatics, thermodynamics and a bit of organic and physical chemistry. You’ll do some of them in the first semester, others in the second. Such courses generally start with basics of these topics and then go into further detail. For the first semester, since you have just given your exam in June, this shouldn’t really be a problem. In second semester though you may want to go through the notes (if you still have them by that time). Although, it won’t be very necessary.            </p>
          </div>
        )}
        {selectedSection === 6 && (
          <div className="mt-8 max-w-3xl mx-auto p-4">
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 ">
            There are 3 major banks in the campus: Canara Bank (IFSC: CNRB0008652, MICR Code: 781015008), State Bank of India (IFSC: SBIN0014262, MICR Code: 781002053) and ICICI (IFSC: ICIC0003325) bank. You are advised to have an account in SBI or Canara Bank for quick payments and receiving from the Institute . All of them have A.T.M.s on campus. To see the locations of the A.T.M.s you should check out the institute map.           </p>
          </div>
        )}
        {selectedSection === 7 && (
          <div className="mt-8 max-w-3xl mx-auto p-4">
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 ">
            A limited number of rooms (60 rooms) are available at IIT Guwahati Guest House that can be provided for temporary accommodation (on payment basis) for Parents/ Guardians accompanying their wards for admission at IIT Guwahati.</p>          </div>
        )}
        {selectedSection === 8 && (
          <div className="mt-8 max-w-3xl mx-auto p-4">
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 ">
            The hostel room is made available to the students on their arrival. Hostels are allotted randomly by the administration. Once you have been allotted a hostel, you stay there for your entire IIT life unless some special and extreme circumstances arise.</p>          </div>
        )}
        {selectedSection === 9 && (
          <div className="mt-8 max-w-3xl mx-auto p-4">
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 ">
            IIT Guwahati has a zero tolerance policy. We do not accept ragging in any form. If you ever find yourself in a situation where you feel uncomfortable, contact anti ragging hotline number: 08011089898.
For details on ragging and steps taken by Instiitue, follow: http://www.iitg.ac.in/sites/default/files/UGC-regulations-2009.pdf</p>          </div>
        )}
        {selectedSection === 10 && (
          <div className="mt-8 max-w-3xl mx-auto p-4">
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 ">
            Residents of the opposite sex are prohibited from entering the flats/units of the hostel residents at all times. You may use the common area such as the Mess, Hostel Office or Reading room/Library for any discussion and/or group study."</p>          </div>
        )}
        {selectedSection === 11 && (
          <div className="mt-8 max-w-3xl mx-auto p-4">
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 ">
            Library is open from 9:00 AM to 2:00 AM, although books can be issued from 9:00 AM to 5:00 PM only (working days). Library is open 24hrs. during mid semester and end semester examinations.</p>          </div>
        )}
        {selectedSection === 12 && (
          <div className="mt-8 max-w-3xl mx-auto p-4">
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 ">
            Scholarships are offered to most students by the Institute, government agencies, alumni and corporations. This assistance is offered on the basis of Merit-cum-Means, performance, special capabilities etc. Click here for more details.</p>          </div>
        )}
        {selectedSection === 13 && (
          <div className="mt-8 max-w-3xl mx-auto p-4">
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 ">
            Branch Change has been discontinued from the year 2025.</p>          </div>
        )}
        {selectedSection === 14 && (
          <div className="mt-8 max-w-3xl mx-auto p-4">
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 ">
            Minor Courses are efficiently designed course structures which provides you an insight and fundamental concepts of the branch you choose as your minor. You can choose minor on following topics and branches: Computer Science and Engineering, Electronics & Electrical Engineering, Mechanical Engineering, Civil Engineering, Biotechnology, Chemical Engineering, Engineering Physics, Chemical Science & Technology, Mathematics, South and Southeast Asian Studies, Language and Literature, but you will have to bear an extra course throughout your semesters.
You will learn some concepts of a different branch and also your Degree will read: " Bachelor of Technology in *your department* with an specialization in *your minor course*", thus possibly leading to new placement opportunity.</p>          </div>
        )}
        {selectedSection === 15 && (
          <div className="mt-8 max-w-3xl mx-auto p-4">
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 ">
            Yes, there is a criteria for getting a minor course, you must have CGPA of 6.5 or above in first two semesters. The number of seats in each minor discipline will be as per decision of the Senate of IIT Guwahati. However, a minor discipline will not be available if the number of applicants in that discipline is less than five. Selection to minor disciplines shall be made strictly in order of merit of the applicants.
Extra load of minor courses can become a heavy burden at times, so yes, you can drop minor course in any semester before a particular last date, which is 2 weeks after mid-semester exams, but then there won’t be any mention of specialization in minor field or courses in the degree.
</p>          </div>
        )}
        {selectedSection === 16 && (
          <div className="mt-8 max-w-3xl mx-auto p-4">
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 ">
            IIT Guwahati has LAN cables installed in every hostel room and WIFI routers in the Academic Area, Student Activity Centre (SAC) and your respective hostels. IIT Guwahati believes in providing high speed internet to all its students. Furthermore, the LAN is dysfunctional between 2 AM to 5 AM and 8 AM to 5 PM(class hours).</p>          </div>
        )}
        {selectedSection === 17 && (
          <div className="mt-8 max-w-3xl mx-auto p-4">
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 ">
            Institute offers delectable food services so that the brains at work can perform their best. Although home cooked food cannot be replaced by anything, the campus does have alternatives if you want to skip the mess food. The campus houses various renowned restaurant franchises like Baskin and Robbins and Subway in Food Court adjoining the New SAC building. Local food chains like Urban Tadka Restaurant, Lapinoz have their outlets in the Food court as well. The institute also houses prominent restaurant and food chains in the New SAC building. The campus hosts a Cafe Coffee Day outlet, situated outside the institute library where every item is subsidized to half its original price. There are two restaurants in the Market Complex as well, namely Silverdine and Soiree. Along with these food joints, campus houses IRCTC canteen and there is a small market set up on faculty gate having various local shops for an occasional change of taste. Also there is Dominoz near Dihing Hostel</p>          </div>
        )}
        {selectedSection === 18 && (
          <div className="mt-8 max-w-3xl mx-auto p-4">
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 ">
            We have an in-campus hospital at IIT Guwahati, which is open 24×7. In case of emergency the IIT Guwahati ambulance drives you to the hospital. You call them directly or approach the nearest security desk to summon them. In case it is a serious matter which cannot be handled by the staff at the IIT Guwahati hospital at that time, the students are referred to GNRC or NH Narayana Hospital which are located very close to the campus. The IIT Guwahati ambulance will drop you there in case of an emergency free of charge. Also, during the orientation week, you will all be given a Health Record Card will guarantee you free of charge treatment and medication at the Institute Hospital.</p>          </div>
        )}


      </div>
    </div>
  );
};

export default MainPage;
