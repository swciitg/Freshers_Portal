import React, { useEffect, useState } from "react";
import Navbar from "../../common/Navbar";
import Hostels from "./HostelPage";
import { MoonLoader } from 'react-spinners'
import Footer from "../../common/Footer";
import useFetchData from '../../hooks/FetchData'
const Main = () => {
  const { data, loading, error } = useFetchData(
    process.env.REACT_APP_BACKEND_BASE_URL + "/hostel-list",
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
  // const Hosteldata = [
  //   {
  //     name: "Kameng",
  //     year: "2005",
  //     gender: "Male",
  //     capacity: "800",
  //     description:
  //       "Kameng Hostel is named after the tributary Kameng of the mighty river Bramhaputra. Kameng has 504 rooms distributed over five blocks(B1,B2,B3,B4 and C1).The B blocks have 30 rooms on each floor while the C1 block has eight rooms on each floor. Kameng has excellent canteens so you never run out of food,snacks,cold drinks,ice-creams and of course tea and coffee(the Key components in an IITians diet)which incidentally is open till 3AM.The dining here is said to be the best on the entire campus. Kameng also has a juice center in the mess which serves friut juice,milk shakes and fruit salads.There is also a stationary shop inside the hostel where you can get all your daily needs. Our common room doubles up as a T.V room where it gets hot during Indian and English Premier Leagues. Kameng has a sports room where the Kamengites can avail all the sport facilites like issuing sporting goods,playing table tennis,carrom,chess and other board games.",
  //     imageUrl: "/kameng.png",
  //     wikiUrl: "#",
  //   },
  //   {
  //     name: "Barak",
  //     year: "2004",
  //     gender: "Male",
  //     capacity: "1,200",
  //     description:
  //       "Barak is the 7th hostel in the IITG fraternity and derives its name from the River Barak, which is a major river in north-eastern India and a part of the Surma-Meghna River System. It was previously only for MTech and PhD students, but from 2011 onwards the hostel also has boarders of BTech.",
  //     imageUrl: "/barak.png",
  //     wikiUrl: "#",
  //   },
  //   {
  //     name: "Brahmaputra",
  //     year: "1995",
  //     gender: "Male",
  //     capacity: "1,200",
  //     description:
  //       "Housing nearly thousand students, the hostel to its might is named aptly as Brahmaputra. The hostel began to function from academic year 2011-2012. It is boys hostel and boarders in the hostel are from various streams mainly pursuing their Ph.D, M.Tech, M.Sc, B.Tech. It is a three floored building with spacious rooms and all other facilities incorporated. The hostel is a centre for various activities. Hostel Brahmaputra is the highest accommodating hostel in the history of IIT Guwahati. Constructed in peaceful and playful environment, it imparts enthusiasm and endeavour in the students. The hostel is always filled with enormously talented students who are always eager for innovation. The boarders in the hostel cultivate the feeling of oneness standing united and as fierce as The Brahmaputra River.",
  //     imageUrl: "/brahamputra.png",
  //     wikiUrl: "#",
  //   },
  //   {
  //     name: "Dhansiri",
  //     year: "1995",
  //     gender: "Female",
  //     capacity: "1,200",
  //     description:
  //       "Inaugurated in 2014, Dhansiri is the second girls' hostel in the campus.In the picturesque view of IIT-G campus, Dhansiri Hostel stands out, a white beauty confident and elegant reflecting the spirit of the boarders in herself. The hostel is the new addition to the IIT-G family and houses a total 230 research scholars, UGs and PGs. The hostel stands out in its twin sharing facility which defines it as more of 'home away from home. Like every other hostel of IIT Guwahati, it has all the necessary requirements in place for its boarders. Canteen, juice centre, TV room, library and a fully equipped sports room and cultural room.",
  //     imageUrl: "/dhansiri.png",
  //     wikiUrl: "#",
  //   },
  //   {
  //     name: "Dihing",
  //     year: "1995",
  //     gender: "Male",
  //     capacity: "1,200",
  //     description:
  //       "Named after a tributary of the Brahmaputra, Dihing Hostel is situated just beside the newly built Brhahmaputra Hostel. This 300 seater boys' hostel was established during 2000. Since then, it is not just a home away from home, but a social melting pot for young energetic minds. Complete with facilities like reading room, music room and sports utilities, Dihing provides the boarders an environment to relax and unwind. With its own version of Football Premier League and social events like D-Man Hunt, Dihing makes sure that every student develops strong ties with other members of the hostel and enjoys every moment of stay.",
  //     imageUrl: "/dihing.png",
  //     wikiUrl: "#",
  //   },
  //   {
  //     name: "Disang",
  //     year: "1995",
  //     gender: "Female",
  //     capacity: "1,200",
  //     description:
  //       "This is a newly constructed Boys' Hostel (14th Hostel of the institute) Named after a tributary of the Disang, Disang Hostel is situated just behind the Dihang Hostel. It Started functioning in the month of July 2019.",
  //     imageUrl: "/disang.png",
  //     wikiUrl: "#",
  //   },
  //   {
  //     name: "Kapili",
  //     year: "1995",
  //     gender: "Male",
  //     capacity: "1,200",
  //     description:
  //       "Mostly undergraduate students reside in this 300 capacity hostel. The hostel has a reading room, table tennis room, television room and music room to ensure a pleasant stay to all the boarders. In addition, the hostel has a juice centre, canteen and stationery shop to cater the need of the students. Further, the hostel has basic items for various sports namely cricket, football, volleyball, basketball etc.",
  //     imageUrl: "/kapili.png",
  //     wikiUrl: "#",
  //   },
  //   {
  //     name: "Siang",
  //     year: "1995",
  //     gender: "Male",
  //     capacity: "1,200",
  //     description:
  //       "Siang hostel came into being on July 2003 as the fourth boys' hostel of IIT Guwahati. The name Siang follows the same revered tradition of naming hostels of IIT Guwahati after benevolent rivers of north-east India. All the residents of hostel are undergraduates. A splendid green hill and a lake with playing birds adds elegance to the natural beauty of this hostel, especially in summer sunsets. Hostel is equipped with table tennis, pool table, and also provide sport facilities like issuing sporting goods, playing table tennis, carrom,chess and other board games.",
  //     imageUrl: "/siang.png",
  //     wikiUrl: "#",
  //   },
  //   {
  //     name: "Umiam",
  //     year: "1995",
  //     gender: "Male",
  //     capacity: "1,200",
  //     description:
  //       "Inaugurated in 2008, Umiam hostel was the 8th hostel in IITG. The origin of the name came from the river Umiam originating from Meghalaya. Umiam, having the unique distinction of having a composite culture accommodating UG, PG and Research Scholars all under one roof, boasts of high quality infrastructure and services. At present Umiam consists of around 430 students eager to make their presence felt in the eventful life at IITG.",
  //     imageUrl: "/umiam.png",
  //     wikiUrl: "#",
  //   },
  //   {
  //     name: "Subansiri",
  //     year: "1995",
  //     gender: "Female",
  //     capacity: "1,200",
  //     description:
  //       "Inaugurated in 2003, Subansiri is the first girls' hostel. Named after the largest tributary of the Brahmaputra, this hostel houses research scholars, UGs and PGs. Over the last couple of years, it has grown to accommodate 503 students. Like every other hostel of IIT Guwahati, Subansiri has all the necessary requirements in place for its boarders. Canteen, juice centre, TV room, library, and well, after a hard day's in the academic complex, badminton court and TT tables to get you rejuvenated. With hostel day, freshers' party, farewell and the world cups, life in hostel just can't get better.",
  //     imageUrl: "/subansiri.jpg",
  //     wikiUrl: "#",
  //   },
  //   {
  //     name: "Lohit",
  //     year: "1995",
  //     gender: "Male",
  //     capacity: "1,200",
  //     description:
  //       "Inaugurated in 2014, lohit is the 10th boys� hostel in the campus. This hostel houses UGs and PGs. The hostel has a reading room, table tennis room, television room and music room to ensure a pleasant stay to all the boarders. In addition, the hostel has a juice centre, canteen and stationery shop to cater the need of the students.",
  //     imageUrl: "/lohit.png",
  //     wikiUrl: "#",
  //   },
  // ];

  return (
    <div>
      <div className="min-h-screen bg-white">
        <Navbar />
        {/* <div className="h-[calc(50vh-96px)] flex items-center justify-center px-4">
          <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-gray-300">
            Hostels
          </h1>
        </div> */}

        {/* Automated Hostel Rendering */}
        <div className="space-y-16 py-16 px-10">
          {Facdata.map((hostel, index) => (
            <Hostels
              key={index}
              name={hostel.name}
              year={hostel.year}
              gender={hostel.gender}
              capacity={hostel.capacity}
              description={hostel.description}
              imageUrl={hostel.imageUrl}
              wikiUrl={hostel.wikiUrl}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
