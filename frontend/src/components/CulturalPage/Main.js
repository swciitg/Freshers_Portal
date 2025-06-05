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
