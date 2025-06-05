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

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            {/* <div className="h-[calc(85vh-96px)] flex flex-col items-center justify-center px-4 text-center">

                <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-gray-300">
                    Departments
                </h1>


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
            </div> */}

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
