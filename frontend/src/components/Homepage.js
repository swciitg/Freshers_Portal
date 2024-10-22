// src/components/HomePage.js
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Define the image paths from the public folder
const images = [
  `${process.env.PUBLIC_URL}/img2.png`,
  `${process.env.PUBLIC_URL}/img3.png`,
  `${process.env.PUBLIC_URL}/img4.png`,
  `${process.env.PUBLIC_URL}/img5.png`,
  `${process.env.PUBLIC_URL}/img3.png`,
];

export default function HomePage() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="font-sans">
      {/* Hero Section with Image Slider (including navbar) */}
      <div className="relative h-[100vh]">
        <Slider {...sliderSettings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-[100vh] object-cover"
              />
            </div>
          ))}
        </Slider>

        {/* Overlay Navbar and Content */}
        <div className="absolute inset-0 bg-black bg-opacity-40">
          {/* Navbar */}
          <nav className="flex justify-center space-x-8 py-6 text-white text-lg">
          <a href="#" className="hover:text-blue-300">Home</a>
          <a href="#" className="hover:text-blue-300">Important Information</a>
            <DropdownMenu title="Academics" links={[
      { label: "Departments", href: "/departments" },
      { label: "Branch Change", href: "/branch-change" },
      { label: "Minor Discipline", href: "/minor-discipline" },
    ]} />
            <DropdownMenu title="Life On Campus" links={[
      { label: "Clubs", href: "/clubs" },
      { label: "Events", href: "/events" },
      { label: "Festivals", href: "/festivals" },
    ]} />
            <DropdownMenu title="Hostels" links={[
      { label: "Hostel 1", href: "/hostel1" },
      { label: "Hostel 2", href: "/hostel2" },
      { label: "Hostel 3", href: "/hostel3" },
    ]} />
            <a href="#" className="hover:text-blue-300">Facilities</a>
            <a href="#" className="hover:text-blue-300">FAQs</a>
            <a href="#" className="hover:text-blue-300">Contact</a>
          </nav>

          {/* Centered Logo and Text Content */}
          <div className="flex flex-col items-center justify-center text-center h-full">
            <img
              src={`${process.env.PUBLIC_URL}/iitglogo.png`}
              alt="IIT Guwahati Logo"
              className="h-32 mb-6"
            />
            <h1 className="text-white text-3xl font-bold uppercase tracking-wider">
              Indian Institute of Technology Guwahati
            </h1>
            <h2 className="text-white text-xl mt-2">Students' Affairs</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

// DropdownMenu Component
function DropdownMenu({ title, links }) {
    return (
      <div className="relative group">
        {/* Dropdown Button */}
        <button
          className="hover:text-blue-300 focus:outline-none px-4 py-2"
          aria-haspopup="true"
        >
          {title} <span className="ml-1">▼</span>
        </button>
  
        {/* Dropdown Menu */}
        <div className="absolute left-0 mt-1 w-40 bg-black text-white shadow-lg hidden group-hover:flex group-focus-within:flex flex-col">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="block px-4 py-2 text-sm hover:bg-gray-700"
              rel="noopener noreferrer"  // For security reasons
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    );
  }
  