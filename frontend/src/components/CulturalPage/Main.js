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
    const [board, setBoard] = useState({
                'name':'Cultural Board',
                'description':"Whether you were a hyperactive beast in school, effortlessly mastering every task, or a seemingly non-existent being, underestimated by the world, whether you're an expert your field or a humble beginner, this Land of opportunities welcomes you all. It's a place to showcase your greatness and embrace learning from others' greatness. At Cult Board, we're here to transform your interests into fulfilling hobbies. Come and join us on this exciting journey of exploration and growth, where your passions can flourish and your potential can be realized.",
                'imageUrl':'https://swc.iitg.ac.in/welfare-board/api/cult_pic.jpg',
                'headName':'',
                'iconUrl':'https://swc.iitg.ac.in/welfare-board/api/about_cult.png',
                'wikiUrl':'#'});

    useEffect(() => {
        if (data) setFacdata(data);
        if (data) console.log("yoyo",data);
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
            {/* <div className="h-[calc(95vh-96px)] flex flex-col items-center justify-center px-4 text-center"> */}
                {/* Title */}
                {/* <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-gray-300">
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

            <Footer />
        </div>
    );
};

export default Main;
