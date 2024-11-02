import React, { useState } from "react";
import Navbar from "../../common/Navbar";
import Footer from "../../common/Footer";
import Facilities from "./MainPage";
const sections = [
  { id: 0, title: "Counsellor’s Timings", content: "" },
  { id: 1, title: "Student Mentorship", content: "" },
  { id: 2, title: "Team", content: "" },
];

const Main = () => {
  const [selectedSection, setSelectedSection] = useState(0);

  const handleSectionClick = (id) => {
    setSelectedSection(id);
  };

  const Facdata = [
    {
      name: "Aeromodelling Club",
      description:
        "There are times in our lives when we all feel a moment of “impasse”, that feeling of just getting stuck. In these moments it becomes almost impossible to gain an objective perspective and find your way forward. Counselling can play a crucial role in this regard. It is the development of a therapeutic relationship between a client and a mental health professional that focuses on the client’s concerns and problems. That’s not to say that counselors provide solutions, after all nobody knows your life better than you; but rather, it involves a collaborative effort as the two parties work together to identify and work towards the client’s goals. Through this process, clients can develop a better understanding of themselves, including their patterns of thoughts, feelings, and behaviours, and the ways in which these may have been problematic in their lives. Counseling provides the opportunity to change some of these unhelpful patterns and to examine how to tap into the client’s existing resources - or to develop new ones - to allow for better, more satisfying emotional and social functioning. Because it is an intimate process, it demands a practitioner who is willing to shed stereotyped roles and be a real person in the relationship. Counseling therefore is a therapeutic process embedded within the framework of confidentiality, accurate empathetic understanding and unconditional positive regard.",
      imageUrl: "/aero.png",
      iconUrl: "/swc.png",
      wikiUrl: "#",
      email: "g.avinash@iitg.ac.in",
      position: "Faculty Advisor",
      phone: "03612583501",
    },
    {
      name: "Astronomy Club",
      description:
        "Living a life full of studies and pressure has never given us enough time to just sit and watch the skies with those twinkling diamonds hung up right there. But still we have some time in our hands. Guys, JEE done . Come lets look up there,at the beautiful sky and get transformed to another world with astronomy club. IIT Guwahati.",
      imageUrl: "/astro.png",
      iconUrl: "/swc.png",
      wikiUrl: "#",
      email: "g.avinash@iitg.ac.in",
      position: "Faculty Advisor",
      phone: "03612583501",
    },
    {
      name: "Coding Club",
      description:
        "'You should know how to program a computer ,because it teaches you how to think! 'So, Do u want to learn how to think?Well, if yes,then come right here to the Coding club.IIT Guwahati to control the world with the power of your code.",
      imageUrl: "/fine.png",
      iconUrl: "/iitglogo.png",
      wikiUrl: "#",
      email: "g.avinash@iitg.ac.in",
      position: "Faculty Advisor",
      phone: "03612583501",
    },
    {
      name: "Consulting & Analytics Club",
      description:
        "The Consulting and Analytics Club, IIT Guwahati is a student body aimed at helping students explore the world of management consulting and data analytics. This club serve as a unifying body that connects all students interested in data crunching to acquire necessary statistical and computational skills to draw meaningful conclusions from data. Club provide opportunities for students to pursue their interest in analytics through projects, workshops, lectures by prominent personalities from the industry and weekly sessions and meetings.",
      imageUrl: "/montage.png",
      iconUrl: "/swc.png",
      wikiUrl: "#",
      email: "g.avinash@iitg.ac.in",
      position: "Faculty Advisor",
      phone: "03612583501",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="h-[calc(105vh-96px)] flex flex-col items-center justify-center px-4 text-center">
        {/* Title */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-gray-300">
          Saathi
        </h1>
        <p className="mt-16 text-lg md:text-xl text-gray-500 max-w-6xl">
          In the current climate of ever increasing stress, cut throat
          competition, and increasing consumerism, it is only natural for any of
          us to encounter social, personal, or academic problems. The constant
          pressure and expectation from oneself and significant others often
          leads to emotional or psychological turmoil, thus disturbing the peace
          of mind. When one is away from his/her comfort zone, a mentor, a
          counsellor, a saathi emerges as ‘a shelter in the storm’. Saathi, the
          counselling service of IIT Guwahati, has experienced counsellors and a
          dedicated team who are ready to take the responsibility of guiding and
          supporting the students in their path towards success and
          self-fulfilment. This includes handling personal, family and peer
          problems as well as managing academics more responsibly. The
          counsellors provide a comfortable and confidential environment where
          the students feel at ease to discuss anything that may be bothering
          them, and help find solution to their problems.{" "}
        </p>
      </div>
      <h1 className="p-24 text-4xl sm:text-5xl md:text-6xl leading-tight text-black-500 w-5/6">
        From the <br />
        <span className="text-orange-500"> Counsellor's </span> <br /> Desk
      </h1>
      <div className="space-y-16 py-16 ">
        {Facdata.map((event, index) => (
          <Facilities
            key={index}
            name={event.name}
            description={event.description}
            imageUrl={event.imageUrl}
            headName={event.headName}
            iconUrl={event.iconUrl}
            wikiUrl={event.wikiUrl}
            mail={event.email}
            position={event.position}
            phone={event.phone}
          />
        ))}
      </div>
      <div className="flex flex-col md:flex-row p-4 md:p-16">
        {/* Sidebar */}
        <div className="w-full md:w-1/3 max-w-xs bg-white">
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
          <div className="px-24">
            <h1 className="text-2xl md:text-4xl font-medium text-orange-500">
              {sections[selectedSection].title}
            </h1>
            <p className="mt-2 text-sm md:text-base text-orange-500">
              {sections[selectedSection].content}
            </p>
          </div>

          {/* Conditional Content for "B. Tech" Section */}
          {selectedSection === 0 && (
            <div className="mt-8 max-w-3xl mx-auto p-4">
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                There is a provision for branch change. This is done after the
                first year and depends on CPI after two semesters. Excerpts from
                the B Tech rules and regulations for branch change are noted
                below.
              </p>

              <ol className="list-decimal pl-5 space-y-4 text-gray-600">
                <li>
                  Only those students will be considered eligible for change of
                  branch/programme after the second semester, who have completed
                  all the common credits required in the first two semesters of
                  their studies in their first attempt, without having had to
                  pass any course requirement in the summer term examination.
                </li>
                <li>
                  Students may enlist their choices of branch/programme, in
                  order of preference, to which they wish to change over. It
                  will not be permissible to alter the choices after the
                  application has been submitted.
                </li>
                <li>
                  Change of branch/programme shall be made strictly in order of
                  merit of the applicants. For this purpose, the CPI obtained at
                  the end of the second semester shall be considered. In case of
                  a tie, the JEE rank of the applicants will be considered.
                </li>
                <li>
                  The applicants may be allowed a change in branch/programme,
                  strictly in order of inter se merit, subject to the limitation
                  that the strength of a branch should not fall below the
                  existing strength by more than ten percent and should not go
                  above the sanctioned strength by more than ten percent.
                </li>
                <li>
                  All changes of branch/programme made in accordance with the
                  above rules will be effective from the third semester of the
                  applicants concerned. No change of branch/programme shall be
                  permitted after this.
                </li>
              </ol>
            </div>
          )}

          {/* Conditional Content for "B. Des" Section */}
          {selectedSection === 1 && (
            <div className="mt-8 max-w-3xl mx-auto p-4">
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                Under this program fresher’s of each hostel will be part of a
                group under a Peer Mentor. The Peer Mentors are senior batch
                students from the same hostel who are guided and trained for
                this job by the Student Counsellor. These Mentors will help you
                in covering ground issues which largely remains uncovered due to
                lack of communication. They will encourage you to openly share
                your concerns in a non-threatening and confidential manner and
                help you seek appropriate help. This program is aimed at
                restoring self-confidence and self-esteem in you.
              </p>
            </div>
          )}

          {selectedSection === 2 && (
            <div
              className="mt-8 max-w-3xl mx-auto p-4 hide-scrollbar"
              style={{ maxHeight: "60vh", overflowY: "scroll" }}
            >
              <div className="space-y-16 py-16 ">
                {Facdata.map((event, index) => (
                  <Facilities
                    key={index}
                    name={event.name}
                    imageUrl={event.imageUrl}
                    headName={event.headName}
                    iconUrl={event.iconUrl}
                    wikiUrl={event.wikiUrl}
                    mail={event.email}
                    position={event.position}
                    phone={event.phone}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
