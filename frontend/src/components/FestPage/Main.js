import React, { useState, useEffect } from "react";
import Navbar from "../../common/Navbar";
import Footer from "../../common/Footer";
import Facilities from "./MainPage";
import useFetchData from "../../hooks/FetchData";
import { MoonLoader } from "react-spinners";

const Main = () => {
    const { data, loading, error } = useFetchData(
        process.env.REACT_APP_BACKEND_BASE_URL + "/fest",
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

    // const Facdata = [
    // {
    //     name: "Alcheringa",
    //     description:
    //         "Alcheringa, popularly known as 'Alcher', is the annual cultural festival of Indian Institute of Technology, Guwahati. Started in 1996, Alcheringa has quickly established itself as one of the biggest college level cultural events in Asia. It’s a 4 day cultural extravaganza and have witnessed a crowd of over 80,000, and was graced by artists like, Mohit Chauhan, Mika Singh, Anoushka Shankar, Sonu Nigam, Shankar-Ehsaan-Loy, Shilpa Rao, KK, Javed Ali, Shaan and international artists such as Orphaned Land, World’s Fastest Quad Guitarist Michael Angelo Batio, Korpikklani, Metastatis, Ne Obliviscaris, Guilliano Modarelli and many more. Alcheringa with over 400 participating colleges organises over 70 events, Houte Coutre, Mr. & Miss Alcher, Rock-o-Phonix: India’s biggest rock band competitions, Raga High, Electric Heels, Halla Bol and many more to provide a platform for talent and make them acknowledged and also have impressive winning prizes.Alcheringa is the a dreamtime, and is long awaited by students of IITG as well as crowd of north-east India.",
    //     imageUrl: "/alcher.png",
    //     iconUrl: "/alcher.png",
    //     wikiUrl: "#",
    // },
    // {
    //     name: "Techniche",
    //     description:
    //         "Techniche is the annual Techno-Management festival of the Indian Institute of Technology Guwahati, India. Started in 1999, through its past seventeen editions, it has been witnessing a new zenith of techno-management events ranging from raging robotics to corporate module to inspiring lecture series to awe striking workshops to jubilant nites. It served as a distinguished platform for entrepreneurs, innovators and technocrats to showcase their abilities as every edition sought to take a leap forward in redefining and revolutionizing the technology.Techniche is generally held in the first weekend of September and lasts for three days and four nights. It comprises numerous diversified competitions, Technothlon: India’s largest student organized examination, lectures, interactive talks, exhibitions, workshops and exuberant nights as well as various social Initiatives.",
    //     imageUrl: "/techniche.png",
    //     iconUrl: "/swc.png",
    //     wikiUrl: "#",
    // },
    // {
    //     name: "Advaya",
    //     description:
    //         "Advaya is an annual PG inter-departmental techno-cultural festival of IIT Guwahati. It is an avenue for students to be comforted from their conventional lives to embrace the fun and frolic embodied with captivating performances of the artists hidden inside them.Commenced in 2010 as a 'PG Fest', Advaya (which stands for non-dualism) earned its official name in the year 2012 and was taken to a new level by the organizers of 2013.Now, it has turned into an ever-growing fiesta currently in its 7th edition. Advaya is all set to spread magical revolution with new additions such as 'Sanidhya - A cultural evening especially for Faculties, Married Scholars and their families', Sports and various informal events.",
    //     imageUrl: "/advaya.png",
    //     iconUrl: "/iitglogo.png",
    //     wikiUrl: "#",
    // },
    // {
    //     name: "Udgam",
    //     description:
    //         "Udgam, the IIT Guwahati Entrepreneurship Summit was conceptualized for a single purpose: to inspire people to know what it is like to pursue your dreams as an Entrepreneur, from people who know this perfectly well, and who want everyone else to do the same. This has been the aim for every edition of Udgam and we hope to continue moving towards this goal as relentlessly as possible. From giving you a chance to meet and interact with people who subscribe to our view of going ahead with what you are passionate about, and helping you shed your apprehensions and giving you a first-hand experience of how you should do so through our workshops, Udgam has something for every aspiring entrepreneur.Having events like Business Quiz, Virtual Stock Market and various online events to inspire and encourage the budding Entrepreneur in participants.",
    //     imageUrl: "/udgam.png",
    //     iconUrl: "/swc.png",
    //     wikiUrl: "#",
    // },
    // ];
    return (
        <div>
            <Navbar />
            {/* <div className="h-[calc(95vh-96px)] flex flex-col items-center justify-center px-4 text-center"> */}
                {/* Title */}
                {/* <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-gray-300">
                    Annual Festivals
                </h1>
                <p className="mt-16 text-lg md:text-xl text-gray-500 max-w-3xl">
                    Every year the students and administration of IIT Guwahati
                    together organise a number of festivals and competitions.
                    Techniche, Alcheringa and IIT Guwahati Entrepreneurship
                    Summit are conducted on a very large scale. Students of IIT
                    Guwahati participate in the annual Inter IIT Sports Meet.
                    IIT Guwahati also hosted the 49th Inter IIT Sports Meet in
                    2013.
                </p>
            </div> */}
            <div className="space-y-16 py-16 px-10">
                
                {Facdata.map((event, index) => (
                    <Facilities
                        key={index}
                        name={event.name}
                        description={event.description}
                        imageUrl={event.imagePath}
                        headName={event.headName}
                        iconUrl={event.iconPath}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Main;
