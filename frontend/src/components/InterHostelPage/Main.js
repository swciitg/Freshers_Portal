import React from "react";
import Navbar from "../HostelPage/Navbar";
import Event from "./Event";
import Footer from "./Footer";
export const Main = () => {
    const Hosteldata = [
        {
            name: "Kriti",
            description:"12 hostels, 7 days, 1 title! The inter hostel technical and management festival where nous and creativity are one’s only saviors. With a conflux of competitions from Robotics, Product Design, Finance and Management, Marketing Strategy, Quizzes, Astronomy and Gaming, this fest has been successful in uniting people from each year and department, besides inculcating the hostel spirit. The hostel which ranks first after considering the performances in each event is tagged as the 'Kriti Champions'.",
            imageUrl: "/kriti.png",
            wikiUrl: "#",
        },
        {
            name: "Manthan",
            description:"Manthan is the annual inter hostel cultural festival of IITG. Students from 12 hostels compete with full enthusiasm & hostel spirit. There are 30 events across various art forms in Manthan.",
            imageUrl: "/manthan.png",
            wikiUrl: "#",
        },
        {
            name: "Spardha",
            description:"Spardha, the inter hostel sports competition, provides platform for all sportsmen, experienced and amateurs, in the campus. With the pride of your hostel at stake, this time in the sporting arena, Spardha will let you push the boundaries of what you can do for your hostel. It stretches throughout the even semester, and sees by far the largest participation from the students at IIT Guwahati. From aquatics to soccer, you can follow any sport that you love.",
            imageUrl: "/spardha.png",
            wikiUrl: "#",
        }

    ];
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="h-[calc(60vh-96px)] flex items-center justify-center px-4">
        <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-gray-300 text-center">
          Inter-Hostel <br /> Events
        </h1>
      </div>
          
        {/* Automated Hostel Rendering */}  
        <div className="space-y-16 py-16 px-10">
          {Hosteldata.map((event, index) => (
            <Event
              key={index}
              name={event.name}
              description={event.description}
              imageUrl={event.imageUrl}
              wikiUrl={event.wikiUrl}
            />
          ))}
        </div>
        <Footer/>
    </div>
  );
};
