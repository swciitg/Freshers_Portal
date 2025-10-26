import React, { useEffect, useState } from 'react'
import Navbar from '../../common/Navbar'
import Footer from '../../common/Footer'
import Facilities from './MainPage'
import { MoonLoader } from 'react-spinners'
import useFetchData from '../../hooks/FetchData'
const Main = () => {
  const { data, loading, error } = useFetchData(
    process.env.REACT_APP_BACKEND_BASE_URL + "/sports",
    "GET"
);
const [Facdata, setFacdata] = useState([]);

const [board, setBoard] = useState({
            'name':'Sports Board',
            'description':"Calling all sports enthusiasts! The Sports Board at IIT Guwahati is your go-to for all things athletic We're committed to fosteringa vibrant and healthy campus community. starting with keeping you active! Unleash your inner athlete with our year-round facilities and exciting events like Spirit, our annual Sports Fest, and Spardha, the Inter-Hostel competition. Compete, make friends, and ignite your passion for sports Freshers, we have special orientation programs and tournaments to help you discover your talents. guided by our dedicated coaches. Whether you're a seasoned athlete or a beginner. there's a place for you. Strive for the iconic Inter-IIT tracksuit - a symbol of campus pride! Want to represent IIT Guwahati nationally? Impress our scouts at the freshers' tournaments and attend training sessions regularly Your dedication could earn you the coveted tracksuit Welcome to IIT Guwahati! Join us in contributing to our legacy of excellence at the Inter-IIT Meets Let's hear you roar-Go Guwahatil",
            'imageUrl':'https://swc.iitg.ac.in/welfare-board/api/sports_room.png',
            'headName':'',
            'iconUrl':'https://swc.iitg.ac.in/welfare-board/api/sports_board_logo.jpg',
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
        console.log("Sports data:", data);
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
    //       name: "Athletics Club",
    //       description:"The track events are held on a 400 m grass track. Additionally two long jump pits, a pole vault arena, and a full-fledged area for throw events constitute the athletic framework.",
    //       imageUrl: "/athletics.png",
    //       iconUrl: "/swc.png",
    //       wikiUrl:"#"
    //   },
    //     {
    //       name: "Aquatics Club",
    //       description:"Students can avail the facilities of the standard Olympic sized swimming pool that has produced many excellent swimmers over the years under the guidance of international coaches, available throughout the year.",
    //       imageUrl: "/aquatics.png",
    //       iconUrl: "/swc.png",
    //       wikiUrl:"#"
    //   },
    //   {
    //       name: "Basketball",
    //       description:"'There are three basketball courts in the campus which have been renovated recently, two of them with floodlights. Enthusiasts sweating it out over a game after sunset is a common sight.",
    //       imageUrl: "/basket.png",
    //       iconUrl: "/iitglogo.png",
    //       wikiUrl:"#"
    //   },
    //   {
    //       name: "Badminton",
    //       description:"IIT Guwahati campus has ten well-kept badminton courts, the highest among all the IITs. Five of which are synthetic, while five are wooden courts. The wooden court stadium was inaugurated by the magnificent Mary Kom.",
    //       imageUrl: "/badmin.png",
    //       iconUrl: "/swc.png",
    //       wikiUrl:"#"
    //   },
    //   {
    //       name: "Cricket  Club",
    //       description:"Two tough pitched cricket grounds, with floodlights and a practice arena with five nets are part of the cricketing scenario of the campus. Needless to say, you have a great opportunity to witness the feeling of a professional.",
    //       imageUrl: "/cricket.png",
    //       iconUrl: "/iitglogo.png",
    //       wikiUrl:"#"
    //   }, 
    //   {
    //     name: "Football Club",
    //     description:"The well maintained International standard football ground is witness to many spirited sessions of the beautiful game. The FIFA 2017 under-19 world cup games are scheduled to be held in IIT Guwahati football ground itself.",
    //     imageUrl: "/foot.png",
    //     iconUrl: "/swc.png",
    //     wikiUrl:"#"
    // }, 
    // {
    //     name: "Hockey Club",
    //     description:"The national game of our country is loved and highly encouraged among the IITG junta. Two magnificent Hockey grounds are present in the campus, with a series of competitions and events held throughout the year to keep on maintaining the Hockey culture in the campus.",
    //     imageUrl: "/hock.png",
    //     iconUrl: "/iitglogo.png",
    //     wikiUrl:"#"
    // }, 
    // {
    //     name: "Lawn Tennis Club",
    //     description:"The campus houses four hard courts, which are complemented with a huge practice wall.",
    //     imageUrl: "/lawn.png",
    //     iconUrl: "/swc.png",
    //     wikiUrl:"#"
    // }, 
    // {
    //     name: "Squash Club",
    //     description:"Here awaits an interesting world of Quizzing for all enthusiasts. Science and Quiz Club,IIT Guwahati invites you all to to simulate your grey cells and show off your knowledge of science and learn something new!",
    //     imageUrl: "/civil.png",
    //     iconUrl: "/iitglogo.png",
    //     wikiUrl:"#"
    // },
    // {
    //     name: "Table Tennis Club",
    //     description:"Every Year Many passionate students work on their dream projects. They all have one aim-To create something new and innovative! The Technical Board presents – TechEvince, the annual research exhibition! This segment is one of those rare avenues where you can see and experience a wide spectrum of modern technology with a very unique collection of exhibits from the students of IITG! The cardinal aim of this event is to bring to light the technological advancements our institute has witnessed till date, to acknowledge the projects which have been successfully completed by the budding tech-savvy student fraternity and to give recognition to the people who have contributed to it.",
    //     imageUrl: "/civil.png",
    //     iconUrl: "/iitglogo.png",
    //     wikiUrl:"#"
    // },   {
    //     name: "Weightlifting Club",
    //     description:"Have you ever looked at a car and marveled at its intricacies and complexity? Does hearing the roar of a V12 engine make your heart beat faster? If your answer was yes to the above questions, then this club is the perfect place for you. The Green Automobile Club (GAC) has taken part in several national level competitions such as the SAENIS Efficycle and stood a remarkable 13th place throughout India. The club has most recently designed and built an F1 car for the SUPRA SAE competition. So don’t miss out on the opportunity to get down and dirty with one of man’s greatest creations – the automobile.",
    //     imageUrl: "/civil.png",
    //     iconUrl: "/iitglogo.png",
    //     wikiUrl:"#"
    // },   {
    //     name: "Volleyball Club",
    //     description:"At EDC, we understand and believe that this fast changing and evolving era is the perfect time to live in and step-up to shape our future by looking at the world as our playground! So, aiming to promote the spirit of entrepreneurship amongst the IITG community as well as the youth of the North-East India, we host various workshops, lectures, innovative games, brainstorming sessions, competitions which provide a complete learning experience to the attendees and fill them with the zeal to change their monotonous lives!",
    //     imageUrl: "/civil.png",
    //     iconUrl: "/iitglogo.png",
    //     wikiUrl:"#"
    // },  
    //   ];
  return (
    <div>
        <Navbar />
{/* <div className="h-[calc(75vh-96px)] flex flex-col items-center justify-center px-4 text-center"> */}
  {/* Title */}
  {/* <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-gray-300">
  Sports Board
  </h1>
  <p className="mt-16 text-lg md:text-xl text-gray-500 max-w-3xl">
  IITG offers excellent facilities for both indoor and outdoor sports to ensure your overall development. Outdoor activities include cricket, football, basketball, athletics, swimming, and more, while indoor options like table tennis, chess, and squash are available year-round. The Sports Board, with 11 clubs, organizes these activities, and recent additions include Kho-Kho, Kabaddi, Chess, and Carrom. The SAC grounds are open until 9 P.M., and equipment can be borrowed with your I-Card. Don’t worry if you’re new to sports—a dedicated team of coaches is here to help. Make time for fitness to stay sharp and balanced!
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