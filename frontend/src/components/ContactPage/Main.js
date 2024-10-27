import React from 'react'
import Navbar from '../../common/Navbar'
import Footer from '../../common/Footer'
import MainPage, { ContactForm } from './MainPage'

const profiles = [
    {
      name: "Prof. Venkata Dasu",
      title: "Dean, Students' Affairs",
      phone: "0361-2582083 (O)",
      email: "dos@iitg.ernet.in",
    },
    {
      name: "Prof. Mallikarjuna C.",
      title: "Associate Dean-I, SA",
      phone: "0361-2582929 (O)",
      email: "adosa_1@iitg.ernet.in",
    },
    {
      name: "Prof. Anamika Barua",
      title: "Associate Dean-2, SA",
      phone: "0361-2582928 (O)",
      email: "adosa_2@iitg.ernet.in",
    },
  ];
  

const Main = () => {
  return (
    <div>
        <Navbar/>
        <div className="h-[calc(55vh-96px)] flex flex-col items-center justify-center px-4 text-center">
  {/* Title */}
  <h1 className=" z-0 text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-gray-300">
   Contact Us
  </h1>
 
  </div>

  <div className="max-w-7xl mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md"
          >
            {/* Placeholder for Profile Image */}
            <div className="w-32 h-32 bg-gray-300 rounded-md mb-4"></div>

            {/* Name and Title */}
            <h2 className="text-lg font-semibold text-gray-800">{profile.name}</h2>
            <p className="text-sm text-gray-600 mb-4">{profile.title}</p>

            {/* Contact Information */}
            <p className="text-sm text-gray-500">{profile.phone}</p>
            <p className="text-sm text-gray-500">{profile.email}</p>
          </div>
        ))}
      </div>
    </div> 
    <hr className="w-4/5 mx-auto my-16 border-t border-gray-300" />
        <MainPage/>
        <hr className="w-4/5 mx-auto my-8 border-t border-gray-300" />
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default Main


