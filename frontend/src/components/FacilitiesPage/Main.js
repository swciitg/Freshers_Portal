import React, { useEffect, useState } from "react";
import Navbar from "../../common/Navbar";
import Footer from "../../common/Footer";
import Facilities from "./Facilities";
import useFetchData from "../../hooks/FetchData";
import { MoonLoader } from "react-spinners";

const Main = () => {
    const { data, loading, error } = useFetchData(
        process.env.REACT_APP_BACKEND_BASE_URL + "/facilities",
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
            <div className="h-[calc(60vh-96px)] flex items-center justify-center px-4">
                <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-gray-300 text-center">
                    Facilities
                </h1>
            </div>

            {/* Automated Hostel Rendering */}
            <div className="space-y-16 py-16 px-10">
                {Facdata.map((event, index) => (
                    <Facilities
                        key={index}
                        name={event.name}
                        description={event.description}
                        imageUrl={event.imagePath}
                        wikiUrl={event.wikiUrl}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Main;
