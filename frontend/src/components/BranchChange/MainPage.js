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
      <div className="w-full md:w-1/3 max-w-xs bg-white">
        <ul className="divide-y divide-gray-200">
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
              <span
                className={`mr-4 ${
                  selectedSection === section.id ? 'text-black' : 'text-gray-300'
                }`}
              >
                {String(section.id + 1).padStart(2, '0')}
              </span>
              <span
                className={`${
                  selectedSection === section.id ? 'text-black' : 'text-gray-300'
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
      <div className='mt-8 max-w-3xl mx-auto p-4'>
        <h1 className="text-4xl font-medium text-orange-500 ">{sections[selectedSection].title}</h1>
        <p className="mt-2 text-sm text-orange-500">{sections[selectedSection].content}</p>
        </div>

        {/* Conditional Content for "B. Tech" Section */}
        {selectedSection === 0 && (
          <div className="mt-8 max-w-3xl mx-auto p-4">
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
              There is a provision for branch change. This is done after the first year
              and depends on CPI after two semesters. Excerpts from the B Tech rules and
              regulations for branch change are noted below.
            </p>

            <ol className="list-decimal pl-5 space-y-4 text-gray-600">
              <li>
                Only those students will be considered eligible for change of branch/programme
                after the second semester, who have completed all the common credits required
                in the first two semesters of their studies in their first attempt, without
                having had to pass any course requirement in the summer term examination.
              </li>
              <li>
                Students may enlist their choices of branch/programme, in order of preference,
                to which they wish to change over. It will not be permissible to alter the
                choices after the application has been submitted.
              </li>
              <li>
                Change of branch/programme shall be made strictly in order of merit of the
                applicants. For this purpose, the CPI obtained at the end of the second
                semester shall be considered. In case of a tie, the JEE rank of the applicants
                will be considered.
              </li>
              <li>
                The applicants may be allowed a change in branch/programme, strictly in order of
                inter se merit, subject to the limitation that the strength of a branch should
                not fall below the existing strength by more than ten percent and should not go
                above the sanctioned strength by more than ten percent.
              </li>
              <li>
                All changes of branch/programme made in accordance with the above rules will be
                effective from the third semester of the applicants concerned. No change of
                branch/programme shall be permitted after this.
              </li>
            </ol>
          </div>
        )}

        {/* Conditional Content for "B. Des" Section */}
        {selectedSection === 1 && (
          <div className="mt-8 max-w-3xl mx-auto p-4">
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
              Branch change after one year from Design to any other department is not
              permitted. Also, branch change to Design from any other discipline is not
              permitted.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainPage;
