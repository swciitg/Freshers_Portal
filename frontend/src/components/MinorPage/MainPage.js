import React, { useState } from 'react';

const sections = [
  { id: 0, title: 'B. Tech', content: '' },
  { id: 1, title: 'B. Des', content: '' },
];

const MainPage = () => {
  const [selectedSection, setSelectedSection] = useState(0);

  const handleSectionClick = (id) => {
    setSelectedSection(id);
  };

  return (
    <div className="flex flex-col md:flex-row p-4 md:p-16">
      {/* Sidebar */}
      <div className="w-full md:w-1/3 max-w-xs bg-white divide-y divide-gray-200">
        <ul>
          {sections.map((section) => (
            <li
              key={section.id}
              className={`p-4 text-lg cursor-pointer flex items-center space-x-2 ${
                selectedSection === section.id
                  ? 'font-bold text-black border-b-2 border-black'
                  : 'text-gray-400 border-b border-gray-200'
              }`}
              onClick={() => handleSectionClick(section.id)}
            >
              <span className="mr-4">
                {String(section.id + 1).padStart(2, '0')}
              </span>
              <span>{section.title}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 md:p-12 pb-12 pt-4 md:pt-2 md:pl-36">
        <h1 className="text-2xl md:text-4xl font-medium text-orange-500">
          {sections[selectedSection].title}
        </h1>
        <p className="mt-2 text-sm md:text-base text-orange-500">
          {sections[selectedSection].content}
        </p>

        {/* Conditional Content for B. Tech Section */}
        {selectedSection === 0 && (
          <div className="mt-8 max-w-3xl mx-auto p-4">
            <ol className="list-decimal pl-5 space-y-4 text-gray-600">
              <li>
                Students may opt for a Minor in a discipline other than the
                discipline he/she is registered in. Students completing a minor
                will have the minor mentioned in the degree certificate and in
                the final grade card.
              </li>
              <li>
                The credit requirements for a minor discipline will be in the
                range of 30 - 36 credits. The minor courses will spread over the
                third to seventh semesters of a BTech programme with one course
                per semester.
              </li>
              <li>
                Only those students who have completed all the credits required
                in the first two semesters of their studies with a CPI of 6.5 or
                above, will be eligible for a minor discipline after the end of
                second semester.
              </li>
              <li>
                The number of seats in each minor discipline will be as per
                decision of the Senate of IIT Guwahati. However, a minor
                discipline will not be available if the number of applicants in
                that discipline is less than five.
              </li>
              <li>
                Selection to minor disciplines shall be made strictly in order
                of merit of the applicants.
              </li>
              <li>
                Joining the minor disciplines carried out in accordance with the
                above rules will be effective from the third semester of the
                applicants concerned. No change of minor discipline shall be
                permitted after this.
              </li>
              <li>
                A student with only minor courses remaining as backlogs at the
                beginning of a semester (other than a Summer semester) will be
                deemed to have completed the B. Tech. programme and he/she will
                be awarded a B.Tech degree without a minor.
              </li>
            </ol>
          </div>
        )}

        {/* Conditional Content for B. Des Section */}
        {selectedSection === 1 && (
          <div className="mt-8 max-w-3xl mx-auto p-4">
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
              With current pre-requisite of common courses in first year,
              students from Design department will not be able to apply for
              Minor in any department. Design department wants to appeal other
              departments to open their minor for Design students. Design
              students may bring different perspective to your class.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainPage;
