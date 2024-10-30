import React, { useState, useEffect } from "react";
import Navbar from "../../common/Navbar";
import Footer from "../../common/Footer";

import Facilities from "./MainPage";
import useFetchData from "../../hooks/FetchData";
import { MoonLoader } from "react-spinners";

const Main = () => {
    const { data, loading, error } = useFetchData(
        process.env.REACT_APP_BACKEND_BASE_URL + "/cultural",
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
    //     {
    //         name: "Cadence Club",
    //         description:
    //             "Do you think you are a born dancer and if you were not bounded by the JEE preparations,you would have probably ended up touring the world with dance troupes.? Or are you a case of two left feet and too shy to perform or even dance in parties? Well, fear not. We have Cadence-the dance club of IITG. They make the music visible. so dance your way through your college years!",
    //         imageUrl: "/cadence.png",
    //         iconUrl: "/swc.png",
    //     },
      //     {
    //         name: "Anchoring Club",
    //         description:
    //             "Do you think you own the stage or does the mere mention of stage gives you sleepless nights and frights.? Whatever be the case, you will find your chance to hone your skills and overcome your fears! The Anchorenza club is here for you! The place which will we provide you all sorts of stage to learn, improve and finally emerge as an 'anchor'.",
    //         imageUrl: "/ssc.png",
    //         iconUrl: "/swc.png",
    //     },
    //     {
    //         name: "Fine Arts Club",
    //         description:
    //             "'Art washes away from the soul the dust of everyday life.' - Pablo PicassoExpress yourself and discover more to yourself with the fine arts club. You will be amazed at your own self. The club will be there with you as you embark on a colorful journey of art, hopes and dreams.",
    //         imageUrl: "/fine.png",
    //         iconUrl: "/iitglogo.png",
    //     },
    //     {
    //         name: "Photography Club",
    //         description:
    //             "Photography is the only language that can be understood anywhere in the world. You dont take a photograph, you make it. Make many photographs here at IIT guwahati with the Montage- the photography club of IIT guwahati.",
    //         imageUrl: "/montage.png",
    //         iconUrl: "/swc.png",
    //     },
    //     {
    //         name: "Movie Club",
    //         description:
    //             "We know JEE preparation were rather cruel to you and you could neither develop or explore your love for movies and movie making. The movie club is ready to groom the next Steven Speilsberg. The movie club is waiting for you!",
    //         imageUrl: "/civil.png",
    //         iconUrl: "/iitglogo.png",
    //     },
    //     {
    //         name: "Music Club",
    //         description:
    //             "Music gives a soul to the universe, wigs to the mind, flight to the imagination and life to everything else. Live this music. Dare yourself to set yourself free through this medium. Escape the reality and be in sync with your dreams. The music club is here to take you on this journey of a lifetime!",
    //         imageUrl: "/octaves.png",
    //         iconUrl: "/swc.png",
    //     },
    //     {
    //         name: "Drama Club",
    //         description:
    //             "The drama club performed street plays, held workshops and a full three acts stage play. And you can be a part of it too. Express yourself with the Expressions-The drama club of IITG.",
    //         imageUrl: "/drama.png",
    //         iconUrl: "/iitglogo.png",
    //     },
    //     {
    //         name: "Literary Club",
    //         description:
    //             "IITG awaits the poet and the writer in you! Unleash it with the litsoc on the campus. Join the all kind of the club- from hobbyists, to virtuoso, to those plainly interested in indulging themselves, and taste the literature from an altogether different plate!",
    //         imageUrl: "/civil.png",
    //         iconUrl: "/swc.png",
    //     },
    //     {
    //         name: "Radio G ",
    //         description:
    //             "Do your friends always tell you that you a 'Chatterbox'? Well, why waste your talent on them? Lets grab up a mic and show them the power of speaking good. All you need is enthusiasm because 'Communication is a skill that you can learn.It's like riding a bicycle or typing.If you are willing to work at it,you can rapidly improve the quality of every part of your life'!",
    //         imageUrl: "/civil.png",
    //         iconUrl: "/iitglogo.png",
    //     },
    // ];
    return (
        <div>
            <Navbar />
            <div className="h-[calc(95vh-96px)] flex flex-col items-center justify-center px-4 text-center">
                {/* Title */}
                <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-gray-300">
                    Cultural Board
                </h1>
                <p className="mt-16 text-lg md:text-xl text-gray-500 max-w-3xl">
                    Thought IIT was all about studies? Think again. At IITG,
                    you’ll find activities ranging from dance, music, and drama
                    to debates, quizzes, and movies. After working hard to get
                    in, it's time to explore extracurriculars that develop your
                    personality and skills. The Cultural Board oversees nine
                    clubs, including Anchoring, Choreography, Fine Arts,
                    Literary, Performing Arts, Photography, Music, and the Movie
                    Club. IITG even has its own student-run radio station, and
                    regular cultural nights where students gather for live
                    performances and dances.
                </p>
            </div>
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
