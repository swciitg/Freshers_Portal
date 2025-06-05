import React, { useEffect, useState } from 'react'
import Navbar from '../../common/Navbar'
import Footer from '../../common/Footer'
import Facilities from './MainPage'
import { MoonLoader } from 'react-spinners'
import useFetchData from '../../hooks/FetchData'
const Main = () => {
  const { data, loading, error } = useFetchData(
    process.env.REACT_APP_BACKEND_BASE_URL + "/tech",
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
    //     {
    //       name: "Aeromodelling Club",
    //       description:"If swimming in the clouds and flying in the sky has always been your passion , you are at a right place. Aeromodelling club,IIT Guwahati will provide you with all that you need.Design whatever flying machine you want and fly in the skies.",
    //       imageUrl: "/aero.png",
    //       iconUrl: "/swc.png",
    //       wikiUrl:"#"
    //   },
    //     {
    //       name: "Astronomy Club",
    //       description:"Living a life full of studies and pressure has never given us enough time to just sit and watch the skies with those twinkling diamonds hung up right there. But still we have some time in our hands. Guys, JEE done . Come lets look up there,at the beautiful sky and get transformed to another world with astronomy club. IIT Guwahati.",
    //       imageUrl: "/astro.png",
    //       iconUrl: "/swc.png",
    //       wikiUrl:"#"
    //   },
    //   {
    //       name: "Coding Club",
    //       description:"'You should know how to program a computer ,because it teaches you how to think! 'So, Do u want to learn how to think?Well, if yes,then come right here to the Coding club.IIT Guwahati to control the world with the power of your code.",
    //       imageUrl: "/fine.png",
    //       iconUrl: "/iitglogo.png",
    //       wikiUrl:"#"
    //   },
    //   {
    //       name: "Consulting & Analytics Club",
    //       description:"The Consulting and Analytics Club, IIT Guwahati is a student body aimed at helping students explore the world of management consulting and data analytics. This club serve as a unifying body that connects all students interested in data crunching to acquire necessary statistical and computational skills to draw meaningful conclusions from data. Club provide opportunities for students to pursue their interest in analytics through projects, workshops, lectures by prominent personalities from the industry and weekly sessions and meetings.",
    //       imageUrl: "/montage.png",
    //       iconUrl: "/swc.png",
    //       wikiUrl:"#"
    //   },
    //   {
    //       name: "Electronics Club",
    //       description:"The Electronics Club is a group of electronics hobbyists and enthusiasts within IIT Guwahati. We conduct various events and sessions throughout the year to teach and help people understand the seemingly incomprehensible electronic gadgets in the world today, and also assists people in developing their own devices. To this end, various lectures, workshops, projects as well as competitions throughout the year concerning both analog as well as digital electronics keep the calendar busy and the participants learning.",
    //       imageUrl: "/civil.png",
    //       iconUrl: "/iitglogo.png",
    //       wikiUrl:"#"
    //   }, 
    //   {
    //     name: "Prakriti Club",
    //     description:"If you care about the Mother Nature, if you wish to save its gifts to us,or even if you wish to take environmental conservation as a career,come join us to learn and act. We,the prakriti club.IIT Guwahati will make you believe you that a small committed , thoughtful citizens can also change the world. Indeed , it’s the only thing that ever has.",
    //     imageUrl: "/octaves.png",
    //     iconUrl: "/swc.png",
    //     wikiUrl:"#"
    // }, 
    // {
    //     name: "Finance & Economics  Club",
    //     description:"Well.. Who’s not fantasized by robots? I am sure most of us are. So, If you are one of them,here is a platform for all of you to come and showcase your love for the robots. Robotics club , IIT Guwahati has been working unceasingly round the clock since many years with an aim to provide a perfect platform for robotics enthusiasts to nurture their talent. Come guys! let’s shape our dreams into realities and take them forward!",
    //     imageUrl: "/drama.png",
    //     iconUrl: "/iitglogo.png",
    //     wikiUrl:"#"
    // }, 
    // {
    //     name: "Robotics Club",
    //     description:"IITG awaits the poet and the writer in you! Unleash it with the litsoc on the campus. Join the all kind of the club- from hobbyists, to virtuoso, to those plainly interested in indulging themselves, and taste the literature from an altogether different plate!",
    //     imageUrl: "/civil.png",
    //     iconUrl: "/swc.png",
    //     wikiUrl:"#"
    // }, 
    // {
    //     name: "Science and Quiz Club ",
    //     description:"Here awaits an interesting world of Quizzing for all enthusiasts. Science and Quiz Club,IIT Guwahati invites you all to to simulate your grey cells and show off your knowledge of science and learn something new!",
    //     imageUrl: "/civil.png",
    //     iconUrl: "/iitglogo.png",
    //     wikiUrl:"#"
    // },
    // {
    //     name: "TechEvince",
    //     description:"Every Year Many passionate students work on their dream projects. They all have one aim-To create something new and innovative! The Technical Board presents – TechEvince, the annual research exhibition! This segment is one of those rare avenues where you can see and experience a wide spectrum of modern technology with a very unique collection of exhibits from the students of IITG! The cardinal aim of this event is to bring to light the technological advancements our institute has witnessed till date, to acknowledge the projects which have been successfully completed by the budding tech-savvy student fraternity and to give recognition to the people who have contributed to it.",
    //     imageUrl: "/civil.png",
    //     iconUrl: "/iitglogo.png",
    //     wikiUrl:"#"
    // },   {
    //     name: "Entrepreneurial Development Cell",
    //     description:"At EDC, we understand and believe that this fast changing and evolving era is the perfect time to live in and step-up to shape our future by looking at the world as our playground! So, aiming to promote the spirit of entrepreneurship amongst the IITG community as well as the youth of the North-East India, we host various workshops, lectures, innovative games, brainstorming sessions, competitions which provide a complete learning experience to the attendees and fill them with the zeal to change their monotonous lives!",
    //     imageUrl: "/civil.png",
    //     iconUrl: "/iitglogo.png",
    //     wikiUrl:"#"
    // },   {
    //     name: "Green Automobile Club",
    //     description:"Have you ever looked at a car and marveled at its intricacies and complexity? Does hearing the roar of a V12 engine make your heart beat faster? If your answer was yes to the above questions, then this club is the perfect place for you. The Green Automobile Club (GAC) has taken part in several national level competitions such as the SAENIS Efficycle and stood a remarkable 13th place throughout India. The club has most recently designed and built an F1 car for the SUPRA SAE competition. So don’t miss out on the opportunity to get down and dirty with one of man’s greatest creations – the automobile.",
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
  Technical Board
  </h1>
  <p className="mt-16 text-lg md:text-xl text-gray-500 max-w-3xl">
  The Technical Board has grown in both size and scope, fostering innovation and out-of-the-box thinking. It adapts to technological advancements to meet students' needs, providing them with motivation, tools, and a platform to showcase their skills. By nurturing curiosity and promoting a culture of innovation, the board directly contributes to the growth and development of the institute.
  </p>
  </div> */}
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