import React, { useState } from "react";

const sections = [
  { id: 0, title: "How to reach Guwahati?", content: "" },
  {
    id: 1,
    title: "How to reach the Institute from Guwahati Railway Station?",
    content: "",
  },
  {
    id: 2,
    title: "How to reach the Institute from Kamakhaya Railway Station?",
    content: "",
  },
  {
    id: 3,
    title: "How to reach the Institute from Guwahati Airport?",
    content: "",
  },
  { id: 4, title: "What all should we get or not get from home?", content: "" },
  {
    id: 5,
    title:
      "Should we bring our JEE preparation books, in case they are useful in the basic Physics and Chemistry courses?",
    content: "",
  },
  {
    id: 6,
    title: "Which banks have their branches in IIT Guwahati?",
    content: "",
  },
  {
    id: 7,
    title:
      "Where do we stay once we arrive IIT Guwahati? Where can my parents stay?",
    content: "",
  },
  {
    id: 8,
    title:
      "How are the hostels allotted to freshmen? Does my hostel change every year?",
    content: "",
  },
  {
    id: 9,
    title:
      "Is there any ragging at IIT Guwahati? What are the steps that IIT Guwahati is taking?",
    content: "",
  },
  {
    id: 10,
    title: "Are girls allowed to enter boys hostels and vice-versa?",
    content: "",
  },
  { id: 11, title: "What are the timings of library?", content: "" },
  {
    id: 12,
    title:
      "What are the scholarships/financial assistance available for studying at IIT Guwahati?",
    content: "",
  },
  { id: 13, title: "Can I change my department post-admission?", content: "" },
  {
    id: 14,
    title: "What are minor courses? And what are their advantages?",
    content: "",
  },
  {
    id: 15,
    title: "How can I take a minor course? And Can I drop minor course?",
    content: "",
  },
  {
    id: 16,
    title: "What is the internet policy at IIT Guwahati?",
    content: "",
  },
  {
    id: 17,
    title: "Are there any options nearby for food other than the hostel mess?",
    content: "",
  },
  {
    id: 18,
    title: "What are the medical facilities provided in IIT Guwahati?",
    content: "",
  },
];

const MainPage = () => {
  const [selectedSection, setSelectedSection] = useState(0);

  const handleSectionClick = (id) => {
    setSelectedSection(id);
  };

  return (
    <div className="flex flex-col md:flex-row p-4 md:p-16  "
    
    >
      {/* Sidebar */}
      <div className="w-full md:w-1/3 max-w-xs bg-white scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-100 scrollbar-thin "
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
                    : "text-gray-300"
                }`}
              >
                {String(section.id + 1).padStart(2, "0")}
              </span>
              <span
                className={`${
                  selectedSection === section.id
                    ? "text-black"
                    : "text-gray-300"
                }`}
              >
                {section.title}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 pb-12 pt-4 md:pt-2 md:pl-36">
        <h1 className="text-2xl md:text-4xl font-medium text-orange-400">
          {sections[selectedSection].title}
        </h1>
        <p className="mt-2 text-sm md:text-base text-orange-500">
          {sections[selectedSection].content}
        </p>

        {/* Conditional Content for "B. Tech" Section */}
        {selectedSection === 0 && (
          <div className="mt-8 max-w-3xl mx-auto p-4">
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
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

        {/* Conditional Content for "B. Des" Section */}
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

            <h2 className="text-2xl font-semibold mb-4">City to Campus</h2>
            <table className="table-auto border-collapse border border-gray-300 w-full mb-8">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border border-gray-300 px-4 py-2">
                    Bus Departure Time
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    Starting Point
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    Ending Point
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    6:45 a.m.
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pan Bazar
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Subansiri Hostel / Institute's Guest House
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    8:15 a.m.
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pan Bazar
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Subansiri Hostel / Institute's Guest House
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    9:00 a.m.*
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pan Bazar
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Subansiri Hostel / Institute's Guest House
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    9:00 a.m.*
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pan Bazar
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Subansiri Hostel / Institute's Guest House
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    9:00 a.m.*
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pan Bazar
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Subansiri Hostel / Institute's Guest House
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    9:00 a.m.*
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pan Bazar
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Subansiri Hostel / Institute's Guest House
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    9:00 a.m.*
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pan Bazar
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Subansiri Hostel / Institute's Guest House
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    9:00 a.m.
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pan Bazar
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Subansiri Hostel / Institute's Guest House
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    10:00 a.m.
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pan Bazar
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Subansiri Hostel / Institute's Guest House
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    12:00 p.m.
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pan Bazar
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Subansiri Hostel / Institute's Guest House
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    1:00 p.m.
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pan Bazar
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Subansiri Hostel / Institute's Guest House
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    2:00 p.m.
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pan Bazar
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Subansiri Hostel / Institute's Guest House
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    2:30 p.m.
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pan Bazar
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Subansiri Hostel / Institute's Guest House
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    3:00 p.m.
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pan Bazar
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Subansiri Hostel / Institute's Guest House
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    4:00 p.m.
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pan Bazar
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Subansiri Hostel / Institute's Guest House
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    5:15 p.m.
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pan Bazar
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Subansiri Hostel / Institute's Guest House
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    6:45 p.m.
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pan Bazar
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Subansiri Hostel / Institute's Guest House
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    7:30 p.m.
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pan Bazar
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Subansiri Hostel / Institute's Guest House
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    8:00 p.m.
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pan Bazar
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Subansiri Hostel / Institute's Guest House
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    8:30 p.m.
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pan Bazar
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Subansiri Hostel / Institute's Guest House
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    8:45 p.m.
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pan Bazar
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Subansiri Hostel / Institute's Guest House
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    9:30 p.m.
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pan Bazar
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Subansiri Hostel / Institute's Guest House
                  </td>
                </tr>
              </tbody>
            </table>

            <p className="text-sm text-orange-500 mt-4">
              *Buses available on Friday
            </p>
            <h2 className="text-2xl font-semibold mb-4">Campus to City</h2>
            <table className="table-auto border-collapse border border-gray-300 w-full">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border border-gray-300 px-4 py-2">
                    Bus Departure Time
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    Starting Point
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    Ending Point
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    8:00 a.m.
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Subansiri Hostel / Institute's Guest House
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pan Bazar
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    9:00 a.m.
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Subansiri Hostel / Institute's Guest House
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pan Bazar
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    11:00 a.m.*
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Subansiri Hostel / Institute's Guest House
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pan Bazar
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    8:00 a.m.
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Subansiri Hostel / Institute's Guest House
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pan Bazar
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    9:00 a.m.
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Subansiri Hostel / Institute's Guest House
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pan Bazar
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    11:00 a.m.*
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Subansiri Hostel / Institute's Guest House
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pan Bazar
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    8:00 a.m.
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Subansiri Hostel / Institute's Guest House
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pan Bazar
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    9:00 a.m.
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Subansiri Hostel / Institute's Guest House
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pan Bazar
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    11:00 a.m.*
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Subansiri Hostel / Institute's Guest House
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pan Bazar
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    8:00 a.m.
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Subansiri Hostel / Institute's Guest House
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pan Bazar
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    9:00 a.m.
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Subansiri Hostel / Institute's Guest House
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pan Bazar
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    11:00 a.m.*
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Subansiri Hostel / Institute's Guest House
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pan Bazar
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    8:00 a.m.
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Subansiri Hostel / Institute's Guest House
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pan Bazar
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    9:00 a.m.
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Subansiri Hostel / Institute's Guest House
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pan Bazar
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    11:00 a.m.*
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Subansiri Hostel / Institute's Guest House
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pan Bazar
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    8:00 a.m.
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Subansiri Hostel / Institute's Guest House
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pan Bazar
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    9:00 a.m.
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Subansiri Hostel / Institute's Guest House
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pan Bazar
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    11:00 a.m.*
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Subansiri Hostel / Institute's Guest House
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pan Bazar
                  </td>
                </tr>
              </tbody>
            </table>

            <p className="text-sm text-orange-500 mt-4">
              *Buses available on Friday
            </p>
          </div>
        )}

        {selectedSection === 3 && (
          <div className="mt-8 max-w-3xl mx-auto p-4">
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
              The institute is located at a distance of 18 kilometres from the
              Guwahati Airport. The institute does not provide any bus service
              for the airport. Prepaid taxis and cabs can be availed of directly
              from Guwahati Airport to reach the institute.
            </p>

            <table className="table-auto border-collapse border border-gray-300 w-full mb-8">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left text-sm sm:text-base">
                    Cab Service Name
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left text-sm sm:text-base">
                    Contact No.
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Geo Cabs Northeast
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    +91 361 222 2727, +91 9957574026
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">My Taxi</td>
                  <td className="border border-gray-300 px-4 py-2">
                    +91 361 222 8888, +91 8011014013
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Prime Cabz
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    +91 361 222 2233
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Kamakshi Toursz
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    +91 361 245 7866, +91 9864047996
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Cherry Cabs
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    +91 8876222288, +91 9864124697
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Green Cabs
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    +91 361 7151515
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="mt-6 mb-12">
              <img
                src="/map.png"
                alt="Guwahati to IIT Map"
                className="w-full max-w-xl mx-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        )}

        {selectedSection === 4 && (
          <div className="mt-8 max-w-3xl mx-auto p-4">
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
              You will need essentials like a lock, a bucket, a mug, a mattress
              (6’x 3’), a pillow, blanket, curtains, hangers, umbrella and a
              scientific calculator. A bicycle is a advised since the campus is
              quite large.Don’t get worked up about how to carry all this – we
              have a solution for that too. All these can be bought from
              Guwahati city to which IIT buses ply at regular intervals.Also,
              stalls will be set up inside the campus, for buying bicycles,
              mattresses, pillows, etc. Finally, it’s a free world here and you
              can bring literally anything - music system, computer, electric
              guitar and anything that you can’t live without.Both pre-paid and
              post-paid connections can be easily availed within the campus,
              however if you wish you can use your hometown’s Sim Card for
              initial use.Do not bring electrical items such as electric
              heaters, coolers, table fans, iron or electric kettle. They are
              not allowed as per the institute rules. On being caught, you may
              be fined heavily.
            </p>
          </div>
        )}

        {selectedSection === 5 && (
          <div className="mt-8 max-w-3xl mx-auto p-4">
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
              There would be some courses in the first year requiring basic
              knowledge of mechanics, electrostatics, thermodynamics and a bit
              of organic and physical chemistry. You’ll do some of them in the
              first semester, others in the second. Such courses generally start
              with basics of these topics and then go into further detail. For
              the first semester, since you have just given your exam in June,
              this shouldn’t really be a problem. In second semester though you
              may want to go through the notes (if you still have them by that
              time). Although, it won’t be very necessary.
            </p>
          </div>
        )}
        {selectedSection === 6 && (
          <div className="mt-8 max-w-3xl mx-auto p-4">
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
              There are 3 major banks in the campus: Canara Bank (IFSC:
              CNRB0008652, MICR Code: 781015008), State Bank of India (IFSC:
              SBIN0014262, MICR Code: 781002053) and ICICI (IFSC: ICIC0003325)
              bank. You are advised to have an account in SBI or Canara Bank for
              quick payments and receiving from the Institute . All of them have
              A.T.M.s on campus. To see the locations of the A.T.M.s you should
              check out the institute map.
            </p>
          </div>
        )}

        {selectedSection === 7 && (
          <div className="mt-8 max-w-3xl mx-auto p-4">
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
              A limited number of rooms (60 rooms) are available at IIT Guwahati
              Guest House that can be provided for temporary accommodation (on
              payment basis) for Parents/ Guardians accompanying their wards for
              admission at IIT Guwahati. To avail this facility, the new
              students (or their parents) need to fill up below mentioned online
              link during 10:00 hours of July 3, 2017 to 17:00 hours of July 7,
              2017.
            </p>

            <p className="text-sm text-gray-500 mt-4">For more details</p>
            <button className="mt-4 px-6 hover:bg-gray-200 py-2 bg-gray-100 text-black border-2 rounded-full flex items-center space-x-2">
              <span>Click Here</span>
              <span><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.5 17L17.5 7M17.5 7H7.5M17.5 7V17" stroke="#B3B3B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
            </button>

            <p className="text-sm text-gray-500 mt-4">
            Those who are not getting accommodation in the Institute Guest House can explore the possibility of staying in hotels in the Guwahati City.
            </p>
            <h2 className="text-2xl font-semibold mt-4 mb-4">List of Hotels</h2>
            <table className="table-auto border-collapse border border-gray-300 w-full">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border border-gray-300 px-4 py-2">
                    Hotel Name
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    Address
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    Contact No.
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    8:00 a.m.
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Subansiri Hostel / Institute's Guest House
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pan Bazar
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    9:00 a.m.
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Subansiri Hostel / Institute's Guest House
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pan Bazar
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    11:00 a.m.*
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Subansiri Hostel / Institute's Guest House
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pan Bazar
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    8:00 a.m.
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Subansiri Hostel / Institute's Guest House
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pan Bazar
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    9:00 a.m.
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Subansiri Hostel / Institute's Guest House
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pan Bazar
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    11:00 a.m.*
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Subansiri Hostel / Institute's Guest House
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pan Bazar
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    8:00 a.m.
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Subansiri Hostel / Institute's Guest House
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pan Bazar
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    9:00 a.m.
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Subansiri Hostel / Institute's Guest House
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pan Bazar
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    11:00 a.m.*
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Subansiri Hostel / Institute's Guest House
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pan Bazar
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    8:00 a.m.
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Subansiri Hostel / Institute's Guest House
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pan Bazar
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    9:00 a.m.
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Subansiri Hostel / Institute's Guest House
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pan Bazar
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    11:00 a.m.*
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Subansiri Hostel / Institute's Guest House
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pan Bazar
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    8:00 a.m.
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Subansiri Hostel / Institute's Guest House
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pan Bazar
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    9:00 a.m.
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Subansiri Hostel / Institute's Guest House
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pan Bazar
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    11:00 a.m.*
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Subansiri Hostel / Institute's Guest House
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pan Bazar
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    8:00 a.m.
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Subansiri Hostel / Institute's Guest House
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pan Bazar
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    9:00 a.m.
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Subansiri Hostel / Institute's Guest House
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pan Bazar
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    11:00 a.m.*
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Subansiri Hostel / Institute's Guest House
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pan Bazar
                  </td>
                </tr>
              </tbody>
              
            </table>
            <h2 className="text-2xl font-semibold mt-16 mb-4">List of Hotels</h2>
            <table className="table-auto border-collapse border border-gray-300 w-full mb-8">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left text-sm sm:text-base">
                    Cab Service Name
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left text-sm sm:text-base">
                    Contact No.
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Geo Cabs Northeast
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    +91 361 222 2727, +91 9957574026
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">My Taxi</td>
                  <td className="border border-gray-300 px-4 py-2">
                    +91 361 222 8888, +91 8011014013
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Prime Cabz
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    +91 361 222 2233
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Kamakshi Toursz
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    +91 361 245 7866, +91 9864047996
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Cherry Cabs
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    +91 8876222288, +91 9864124697
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    Green Cabs
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    +91 361 7151515
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}


{selectedSection === 8 && (
          <div className="mt-8 max-w-3xl mx-auto p-4">
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
            The hostel room is made available to the students on their arrival. Hostels are allotted randomly by the administration. Once you have been allotted a hostel, you stay there for your entire IIT life unless some special and extreme circumstances arise.
            </p>
          </div>
        )}
        {selectedSection === 9 && (
          <div className="mt-8 max-w-3xl mx-auto p-4">
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
            IIT Guwahati has a zero tolerance policy. We do not accept ragging in any form. If you ever find yourself in a situation where you feel uncomfortable, contact anti ragging hotline number: 08011089898.For details on ragging and steps taken by Instiitue, follow the pdf given below:
            </p>
            <button className="mt-4 px-6 hover:bg-gray-200 py-2 bg-gray-100 text-black border-2 rounded-full flex items-center space-x-2">
              <span>Open PDF</span>
              <span><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.5 17L17.5 7M17.5 7H7.5M17.5 7V17" stroke="#B3B3B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
            </button>
          </div>
        )}

{selectedSection === 10 && (
          <div className="mt-8 max-w-3xl mx-auto p-4">
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
            Residents of the opposite sex are prohibited from entering the flats/units of the hostel residents at all times. You may use the common area such as the Mess, Hostel Office or Reading room/Library for any discussion and/or group study."
            </p>
            
          </div>
        )}
        {selectedSection === 11 && (
          <div className="mt-8 max-w-3xl mx-auto p-4">
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
            Library is open from 9:00 AM to 2:00 AM, although books can be issued from 9:00 AM to 5:00 PM only (working days). Library is open 24hrs. during mid semester and end semester examinations.
            </p>
            
          </div>
        )}


{selectedSection === 12 && (
          <div className="mt-8 max-w-3xl mx-auto p-4">
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
            Scholarships are offered to most students by the Institute, government agencies, alumni and corporations. This assistance is offered on the basis of Merit-cum-Means, performance, special capabilities etc. Click below for more details.</p>
            <button className="mt-4 px-6 hover:bg-gray-200 py-2 bg-gray-100 text-black border-2 rounded-full flex items-center space-x-2">
              <span>Click Here</span>
              <span><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.5 17L17.5 7M17.5 7H7.5M17.5 7V17" stroke="#B3B3B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
            </button>
          </div>
        )}

{selectedSection === 13 && (
          <div className="mt-8 max-w-3xl mx-auto p-4">
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
            Students who do very well in their first year are allowed to change their department. A Branch Change is made strictly on basis of Cumulative Performance Index (academic performance) at end of second semester. Branch changes will be made such that number of students in third semester does not exceed 110 percent of the sanctioned yearly intake for a branch. </p>
            
          </div>
        )}

{selectedSection === 14 && (
          <div className="mt-8 max-w-3xl mx-auto p-4">
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
            Minor Courses are efficiently designed course structures which provides you an insight and fundamental concepts of the branch you choose as your minor. You can choose minor on following topics and branches: Computer Science and Engineering, Electronics & Electrical Engineering, Mechanical Engineering, Civil Engineering, Biotechnology, Chemical Engineering, Engineering Physics, Chemical Science & Technology, Mathematics, South and Southeast Asian Studies, Language and Literature, but you will have to bear an extra course throughout your semesters.
You will learn some concepts of a different branch and also your Degree will read: " Bachelor of Technology in your department with an specialization in your minor course", thus possibly leading to new placement opportunity. </p>
            
          </div>
        )}

{selectedSection === 15 && (
          <div className="mt-8 max-w-3xl mx-auto p-4">
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
            Yes, there is a criteria for getting a minor course, you must have CGPA of 6.5 or above in first two semesters. The number of seats in each minor discipline will be as per decision of the Senate of IIT Guwahati. However, a minor discipline will not be available if the number of applicants in that discipline is less than five. Selection to minor disciplines shall be made strictly in order of merit of the applicants. Extra load of minor courses can become a heavy burden at times, so yes, you can drop minor course in any semester before a particular last date, which is 2 weeks after mid-semester exams, but then there won’t be any mention of specialization in minor field or courses in the degree. </p>
            
          </div>
        )}

{selectedSection === 16 && (
          <div className="mt-8 max-w-3xl mx-auto p-4">
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
            IIT Guwahati has LAN cables installed in every hostel room and WIFI routers in the Academic Area, Student Activity Centre (SAC) and your respective hostels. IIT Guwahati believes in providing high speed internet to all its students. Furthermore, the LAN is dysfunctional between 2 AM to 5 AM and 8 AM to 5 PM(class hours). </p>
            
          </div>
        )}

{selectedSection === 17 && (
          <div className="mt-8 max-w-3xl mx-auto p-4">
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
            Institute offers delectable food services so that the brains at work can perform their best. Although home cooked food cannot be replaced by anything, the campus does have alternatives if you want to skip the mess food. The campus houses various renowned restaurant franchises like Baskin and Robbins and Subway in Food Court adjoining the New SAC building. Local food chains like Florentine Restaurant,Manikanta and Ambrosia Bakery have their outlets in the Food court as well. The institute also houses prominent restaurant and food chains in the New SAC building. The campus hosts a Cafe Coffee Day outlet, situated outside the institute library where every item is subsidized to half its original price. There are two restaurants in the Market Complex as well, namely Silverdine and Soiree. Along with these food joints, campus houses IRCTC canteen and there is a small market set up on faculty gate having various local shops for an occasional change of taste. </p>
            
          </div>
        )}

{selectedSection === 18 && (
          <div className="mt-8 max-w-3xl mx-auto p-4">
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
            We have an in-campus hospital at IIT Guwahati, which is open 24×7. In case of emergency the IIT Guwahati ambulance drives you to the hospital. You call them directly or approach the nearest security desk to summon them. In case it is a serious matter which cannot be handled by the staff at the IIT Guwahati hospital at that time, the students are referred to GNRC or NH Narayana Hospital which are located very close to the campus. The IIT Guwahati ambulance will drop you there in case of an emergency free of charge. Also, during the orientation week, you will all be given a Health Record Card will guarantee you free of charge treatment and medication at the Institute Hospital. </p>
            
          </div>
        )}
      </div>
    </div>
  );
};

export default MainPage;
