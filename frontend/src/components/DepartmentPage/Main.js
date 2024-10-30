import React, { useState, useEffect } from "react";
import Navbar from "../../common/Navbar";
import Footer from "../../common/Footer";
import Facilities from "./Department";
import useFetchData from "../../hooks/FetchData";
import { MoonLoader } from "react-spinners";

const Main = () => {
    const { data, loading, error } = useFetchData(
        process.env.REACT_APP_BACKEND_BASE_URL + "/department",
        "GET"
    );
    const [Facdata, setFacdata] = useState([]);

    useEffect(() => {
        if (data) setFacdata(data);
        if (data) console.log(data);
    }, [loading]);

    if (loading)
        return (
            <div className="w-screen h-screen flex items-center justify-center">
                <MoonLoader />
            </div>
        );
    // const Facdata=[
    //   {
    //     name: "Electronics & Electrical Engineeringg",
    //     description:"Since its inception in 1995, the department now has over 700 students and 38 faculty members, supported by 17 laboratories. Besides the core courses, the faculties also offer projects, both course and self-interest ones, which not only turn theory into practise, but also turn enthusiasm into achievement.The department has previously hosted successful workshops on: Medical Image and Signal Processing, Optoelectronics and Optical Communication, Xilinx FPGA Architecture, Speaker verification, etc.The department has an active student body called CEPSTRUM (, which, with its yearlong activities keeps the EEE community a close knitted one It plays a pivotal role in enhancing the soft-skills, helping students identify their interests and achieve their goals. This student body is responsible for organizing interactive lectures, talks, workshops on topics which are necessary for surviving the core courses. An annual e-magazine In-Phase aims to achieve the vision of Cepstrum of bringing students in phase with the latest developments in the field of electronics and other related areas.Recently, the Institute of Electrical and Electronics Engineers, Inc. (IEEE) witnessed its onset into IIT Guwahati. It not only stays abreast with the happenings in the IEEE community worldwide, but also organizes yearly lecture series, conferences and workshops on technical issues.",
    //     imageUrl: "/eee.png",
    //     headName: "Prof. Chitralekha Mahanta",
    // },
    //   {
    //     name: "Biosciences & Bioengineering",
    //     description:"The Department of Biosciences and Bioengineering at the Indian Institute of Technology Guwahati (IITG) was established in November 2002 to contribute the fascinating and emerging area of biological sciences. The Department is unique in North-Eastern India, imparting quality education and providing an excellent research environment through its programme. The department has developed extensive research facility and infrastructure to support the ongoing teaching and research initiatives. As a result, in past few years several faculty members and research scholars have been honored by leading organizations specializing in their respective fields.In past department has organized national level conferences in very diverse field like Cell and Molecular Biology, Biological Networks, Plant Genomics, Nanotechnology, Bioinformatics, Drug Discovery etc.The department is having a very active student body called genesis which organizes various activities throughout the academic year like symposium, talks on latest development in industry by the notable professionals etc.",
    //     imageUrl: "/bsbe.png",
    //     headName: "Dr. Sivapriya Kirubakaran",
    // },
    // {
    //     name: "Chemical Engineering",
    //     description:"Started in 2002, currently the department is has 36 faculty members and 13 staff members, supported by 8 laboratories.The Department supports IIChE – SC (Indian Institute of Chemical Engineers –Student Chapter), IIT Guwahati. It provides them with a platform for exchange of information regarding the profession and to encourage discussions and views about the latest technical advancements taking place around the world in the field of Chemical Engineering.REFLUX, is the annual technical festival of Chemical Engineering Department. The aim of the fest is to bring together academicians, students and industrialists associated with Chemical Engineering. Several events are organized that bring to the students some of the most fascinating and mind-boggling phenomena of Chemical Engineering.",
    //     imageUrl: "/clib.jpg",
    //     headName: "Prof. Bishnupada Mandal",
    // },
    // {
    //     name: "Chemical Science & Technology",
    //     description:"Department of Chemistry, is one of the globally recognized, emerging and leading department in science and technology with a growing list of accolades earned nationally and internationally. The Department started in 1995, covers all the major areas of Chemistry.The UG programme prepares the students for the emerging need of qualified persons with adequate knowledge in both Chemistry and its technology related issues, in both academics and industry. It also provides students practical training in basic science and engineering.During the course, the students will be trained to do frontline research in interdisciplinary areas, which include materials science, environmental science and molecular biology.CheSTA (Chemical Science & Technology Association) is an organization of students of B.Tech Chemical Science and Technology, established to look after various departmental activities of chemistry department and providing a forum of interaction among all the people of the department. Not only the students but the faculty also a form a important part of it to guide the students which is one of the primary cause of CheSTA being an active organization since its establishment. The students also find a common platform to communicate and discuss on common and individual problems encountered in academics etc.",
    //     imageUrl: "/img3.png",
    //     headName: "Prof. Bishnupada Mandal",
    // },
    // {
    //     name: "Civil Engineering",
    //     description:"Civil Engineering is considered to be the most versatile branch among all the engineering branches. Department of Civil Engineering at IIT Guwahati was established in 1997 and has continually upgraded itself in terms of academic programs and research infrastructure including state-of-the-art laboratories. IIT Guwahati is also actively involved in the outreach and training activities undertaken by different Government and Non-Government organizations (NDMA, MHA, NPEEE, UNDP, etc). Association of Civil Engineers (popularly known as ACE) is a voluntary body of students and faculty of Department of Civil Engineering at IIT Guwahati. ACE is providing practical exposure to its members through its various regular activities like lectures on technical writing, symposium, lecture series by distinguished practitioners of the trade, talks on ongoing research practices and developments around the world in the field of Civil Engineering and many other related topics. The association is also involved in publications with its annual magazine - 'EDIFICE', with an informal newsletter, a technical research letter and a section highlighting the latest civil engineering innovations.",
    //     imageUrl: "/civil.png",
    //     headName: "Prof. Subashisa Dutta",
    // },
    // {
    //     name: "Computer Science & Engineering",
    //     description:"The Department of Computer Science and Engineering at the Indian Institute of Technology Guwahati was formed in the year 1995 and provides an outstanding research environment complemented by excellence in teaching.Various student organizations like Association for Computing Machinery (ACM) Chapter, ACS Chapter, Computer Science and Engineering Association (CSEA), Google Developer Group (GDG) Linux and Open Solaris Community are active throughout the year.Computer Science and Engineering Association (CSEA) is a very active student body which conducts lectures and workshops on trending topics in Computer Science and Information Technology. It organizes activities like Competitive Programming Contest, lecture series by distinguished practitioners from the industry, etc. The association is also involved in publications with its annual magazine - 'Linked List’ which provides concise information about the upcoming technologies which are likely to have a strong impact on the future of the industry, alumni interviews and the various activities going on in the department.",
    //     imageUrl: "/img3.png",
    //     headName: "Prof. Diganta Goswami",
    // },
    // {
    //     name: "Design",
    //     description:"The Department of Design (DoD), was set up with a vision to enkindle some of the brightest technical minds of the country a passion for innovation in technology driven by a firm understanding, appreciation and celebration of design.The focus of the program is on the study, invention, and creative use of technologies to create effective, usable, enjoyable experiences with technology through interdisciplinary research in engineering, design, behavioral and social sciences, and to understand the impact of technology on individuals, groups, and organizations.Due to the multidisciplinary nature of the program, there are hardly any domains in the Industry to which the students at the Department of Design haven't been exposed to. This is evident from the diverse job profiles held by the Alumni of DoD over the past years covering a whole spectrum of specializations.The department has conducted various workshops and taken other initiatives to address the requirements of industry, notable among them being Rich Interactive Narrative (RIN) workshop by Microsoft Research, Toolbox, Video Workshop, Robotics, Space Design etc.",
    //     imageUrl: "/dod.png",
    //     headName: "Prof. Sougata Karmakar",
    // },
    // {
    //     name: "Humanities & Social Sciences",
    //     description:"The undergraduate programs/courses in HSS are designed to provide an understanding of various perspectives of development issues, through rigorous course works and guided research.At the BTech level, the courses in English are aimed at exposing students to Literature and Culture, Cognition and Social issues. The courses also help students in developing communication and language skills. The HSS Department is multidisciplinary in its orientation and has expertise in eight disciplines: Economics, English, Linguistics, Philosophy, Psychology, Sociology, History & Archeology and Political Science.Besides the annual lecture series, which are graced by eminent professors and researchers from well-known universities, a few successful workshops as well as sponsored courses are conducted by the department. A few successful ones are: an International Conference on ‘Climate Change and Water’ (2011), a Workshop on Tone and Intonation 2012, a workshop on “Children and Women’s Rights and Issues”, etc.",
    //     imageUrl: "/img3.png",
    //     headName: "Mrinal Kanti Dutta",
    // },
    // {
    //     name: "Mathematics",
    //     description:"The 4-year programme, B.Tech. in Mathematics and Computing, is a unique programme and the first of its kind in the country. The curriculum for this program is designed to meet the need of sophisticated mathematics in modern scientific investigations and technological innovations. The programme has three components: mathematics, computing and financial engineering. This helps the students of the department to play a multidimensional role in both academia and industry.The department recently hosted International Conference on Numerical Linear Algebra and its Applications, International Conference on Environmental Fluid Mechanics, International Conference on Geometric Group Theory and numerous other workshops. In addition the Mathematics Seminar Series conducted by the department has attracted speakers from leading national and international organizations.The department has state-of-art computing facilities and a department library housing various higher texts in the field of higher order mathematics. The institute also hosts the regional chapter of Society for Industrial and Applied Mathematics (SIAM) which is an international organization for ensuring cooperation among mathematical and other scientific and technological communities.",
    //     imageUrl: "/image 47.png",
    //     headName: "Prof. Swarup Nandan Bora",
    // },
    // {
    //     name: "Mechanical Engineering",
    //     description:"Have luggage to carry somewhere in campus?, Late for class?, Have to go to food court, CCD, or restaurants in campus? Or just too lazy, or tired to walk? For the ease of students, Campus provides an active E-rickshaw service, just place your call and get a E-rickshaw at your doorstep. E-rickshaws charges a minor fee of Rs. 10. Timing of E-Rikshaw is 8 AM to 8 PM",
    //     imageUrl: "/mech.png",
    //     headName: "Prof. Anoop K. Dass",
    // },
    // {
    //     name: "Physics",
    //     description:"The Department of Physics at the Indian Institute of Technology Guwahati, was formed in 1995. The Department has highly active and vibrant faculty members committed to impart high quality research standards in pure and applied areas of physics and also trains students to become competent and motivated physicists. The research interests of the faculty members cover broad range of physics: Condensed Matter Physics, Lasers and Photonics, High Energy, Theoretical, Mathematical Physics and Astrophysics.The curricula of its Under Graduate programme is a perfect blend of theory and experimentation with research areas focusing on the latest developments in the field of experimental physics. The alumni of the department are working in leading engineering and research organizations specializing in diverse domains of physics like Optics, Photo Electronics, Semiconductor, High-Energy Physics etc. At the same time many graduates of the department have pursued higher studies in leading Universities of the world in Theoretical and Experimental Physics.",
    //     imageUrl: "/img3.png",
    //     headName: "Dr. P Poulose",
    // }

    // ];

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <div className="h-[calc(85vh-96px)] flex flex-col items-center justify-center px-4 text-center">
                {/* Title */}
                <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-gray-300">
                    Departments
                </h1>

                {/* Paragraph */}
                <p className="mt-16 text-lg md:text-xl text-gray-500 max-w-3xl">
                    Studies at IIT go beyond memorizing lecture notes. They
                    emphasize understanding concepts, applying knowledge, and
                    generating new ideas through classes, tutorials, and labs.
                    The campus offers access to labs, libraries, and other
                    facilities beyond regular hours, with opportunities to
                    interact with leading professionals from around the world.
                    Students also benefit from group projects, discussions, and
                    learning from peers. Despite being a newer IIT, IIT Guwahati
                    graduates have made significant impacts across academia and
                    industry.
                </p>
            </div>

            {/* Automated Hostel Rendering */}
            <div className="space-y-16 py-16 px-10">
                {Facdata.map((event, index) => (
                    <Facilities
                        key={index}
                        name={event.name}
                        description={event.description}
                        imageUrl={event.imagePath}
                        headName={event.hod}
                        wikiUrl={event.wikiUrl}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Main;
