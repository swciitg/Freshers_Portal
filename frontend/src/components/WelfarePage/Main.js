import React, { useEffect, useState } from 'react'
import Navbar from '../../common/Navbar'
import Footer from '../../common/Footer'
import Facilities from './MainPage'
import { MoonLoader } from 'react-spinners';
import useFetchData from '../../hooks/FetchData'
const Main = () => {
  const { data, loading, error } = useFetchData(
    process.env.REACT_APP_BACKEND_BASE_URL + "/swb",
    "GET"
);
const [Facdata, setFacdata] = useState([]);
const [board, setBoard] = useState({
            'name':`Students' Welfare Board`,
            'description':"Students' Welfare Board (SWB) is committed to the total development of the students of our Institute. The SWB's Service forms a part of campus well-being Services and is committed to providing free professional and confidential support to enhance the wellbeing of the campus community. Based on the founding principles of the Institute, SWB implements programs and activities designed to nurture and develop the mind, body, and spirit. Their vision is to provide opportunities for students to develop the skills necessary to successfully transition into the Institute and campus life, their sport or program, and the community. Through educational programming and a host of other additional resources. SWB will empower every student to make positive decisions in order to reach their full potential as students and citizens.",
            'imageUrl':'https://swc.iitg.ac.in/welfare-board/api/swb_hero.jpg',
            'headName':'',
            'iconUrl':'/freshers/welfare_board.png',
            'wikiUrl':'#'});

useEffect(() => {
    if (data) {
        // Handle new API response format {boardInfo, clubs}
        if (data.clubs && Array.isArray(data.clubs)) {
            setFacdata(data.clubs);
            if (data.boardInfo) {
                setBoard(data.boardInfo);
            }
        }
        console.log("Welfare data:", data);
    }
}, [data]);

if (loading)
    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <MoonLoader />
        </div>
    );
    // const Facdata=[
    //     {
    //       name: "Saathi- The Counselling Service",
    //       description:"When one is away from his/her comfort zone, a mentor, a counsellor, a saathi emerges as a shed in storm. Saathi, the counselling service of IIT Guwahati, has experienced counselors who are ready to take the responsibility to guide you towards the path of success. This includes tackling personal, family and peer problems as well as managing academics more responsibly.",
    //       imageUrl: "/saathi.png",
    //       iconUrl: "/swc.png",
    //   },
    //     {
    //       name: "Social Service Club",
    //       description:"The Department of Biosciences and Bioengineering at the Indian Institute of Technology Guwahati (IITG) was established in November 2002 to contribute the fascinating and emerging area of biological sciences. The Department is unique in North-Eastern India, imparting quality education and providing an excellent research environment through its programme. The department has developed extensive research facility and infrastructure to support the ongoing teaching and research initiatives. As a result, in past few years several faculty members and research scholars have been honored by leading organizations specializing in their respective fields.In past department has organized national level conferences in very diverse field like Cell and Molecular Biology, Biological Networks, Plant Genomics, Nanotechnology, Bioinformatics, Drug Discovery etc.The department is having a very active student body called genesis which organizes various activities throughout the academic year like symposium, talks on latest development in industry by the notable professionals etc.",
    //       imageUrl: "/ssc.png",
    //       iconUrl: "/swc.png",
    //   },
    //   {
    //       name: "Youth Empowerment Club",
    //       description:"Started in 2002, currently the department is has 36 faculty members and 13 staff members, supported by 8 laboratories.The Department supports IIChE – SC (Indian Institute of Chemical Engineers –Student Chapter), IIT Guwahati. It provides them with a platform for exchange of information regarding the profession and to encourage discussions and views about the latest technical advancements taking place around the world in the field of Chemical Engineering.REFLUX, is the annual technical festival of Chemical Engineering Department. The aim of the fest is to bring together academicians, students and industrialists associated with Chemical Engineering. Several events are organized that bring to the students some of the most fascinating and mind-boggling phenomena of Chemical Engineering.",
    //       imageUrl: "/yec.png",
    //       iconUrl: "/iitglogo.png",
    //   },
    //   {
    //       name: "Rights and Responsibility Club",
    //       description:"Department of Chemistry, is one of the globally recognized, emerging and leading department in science and technology with a growing list of accolades earned nationally and internationally. The Department started in 1995, covers all the major areas of Chemistry.The UG programme prepares the students for the emerging need of qualified persons with adequate knowledge in both Chemistry and its technology related issues, in both academics and industry. It also provides students practical training in basic science and engineering.During the course, the students will be trained to do frontline research in interdisciplinary areas, which include materials science, environmental science and molecular biology.CheSTA (Chemical Science & Technology Association) is an organization of students of B.Tech Chemical Science and Technology, established to look after various departmental activities of chemistry department and providing a forum of interaction among all the people of the department. Not only the students but the faculty also a form a important part of it to guide the students which is one of the primary cause of CheSTA being an active organization since its establishment. The students also find a common platform to communicate and discuss on common and individual problems encountered in academics etc.",
    //       imageUrl: "/img3.png",
    //       iconUrl: "/swc.png",
    //   },
    //   {
    //       name: "Red Ribbon Club",
    //       description:"Civil Engineering is considered to be the most versatile branch among all the engineering branches. Department of Civil Engineering at IIT Guwahati was established in 1997 and has continually upgraded itself in terms of academic programs and research infrastructure including state-of-the-art laboratories. IIT Guwahati is also actively involved in the outreach and training activities undertaken by different Government and Non-Government organizations (NDMA, MHA, NPEEE, UNDP, etc). Association of Civil Engineers (popularly known as ACE) is a voluntary body of students and faculty of Department of Civil Engineering at IIT Guwahati. ACE is providing practical exposure to its members through its various regular activities like lectures on technical writing, symposium, lecture series by distinguished practitioners of the trade, talks on ongoing research practices and developments around the world in the field of Civil Engineering and many other related topics. The association is also involved in publications with its annual magazine - 'EDIFICE', with an informal newsletter, a technical research letter and a section highlighting the latest civil engineering innovations.",
    //       imageUrl: "/civil.png",
    //       iconUrl: "/swc.png",
    //   },  
    //   ];
  return (
    <div>
        <Navbar />
{/* <div className="h-[calc(95vh-96px)] flex flex-col items-center justify-center px-4 text-center"> */}
  {/* Title */}
  {/* <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-gray-300">
   Student's <br /> Welfare Board
  </h1>
  <p className="mt-16 text-lg md:text-xl text-gray-500 max-w-3xl">
  The Students' Welfare Board ensures the well-being of IITG students through various activities like faculty-student interactions, yoga camps, social service, and counseling. They aim to keep students' minds, bodies, and souls balanced. As you settle in, the Board will welcome you with events during Fresher's Week to help you adjust. Rest assured, there's no ragging here—just a friendly, supportive environment. Feel free to reach out for any help during your stay.
  </p>
  </div> */}
  <div className="space-y-16 py-16 px-10">
  <Facilities
    name={board.name}
    description={board.description}
    imageUrl={board.imageUrl}
    headName={board.headName}
    iconUrl={board.iconUrl}
    wikiUrl={board.wikiUrl}
  />
</div>

{/* Simple Clubs Heading */}
<div className="py-16 px-6 sm:px-8 md:px-12 bg-gray-50">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-orange-500 mb-4">
      Clubs
    </h2>
    <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
  </div>
</div>

<div className="space-y-16 py-16 px-10">
  {Facdata.map((event, index) => (
    <Facilities
      key={index}
      name={event.name}
      description={event.description}
      imageUrl={event.imageUrl}
      headName={event.headName}
      iconUrl={event.iconUrl}
      wikiUrl={event.wikiUrl}
    />
  ))}
</div>

        <Footer/>

    </div>
  )
}

export default Main