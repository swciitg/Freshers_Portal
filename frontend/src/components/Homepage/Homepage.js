// src/components/HomePage.js
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Import react-icons
import { FaChevronDown } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

// Image paths for slider
const images = [
  `${process.env.PUBLIC_URL}/img2.png`,
  `${process.env.PUBLIC_URL}/img3.png`,
  `${process.env.PUBLIC_URL}/img4.png`,
  `${process.env.PUBLIC_URL}/img5.png`,
];

export default function HomePage1() {
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
    <div className="font-sans overflow-hidden">
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

        <div className="absolute inset-0 bg-black bg-opacity-40 z-10">
          {/* Navbar */}
          <Header />

          {/* Centered Logo and Text Content */}
          <div className="flex flex-col items-center justify-center text-center h-full px-6">
            <img
              src={`${process.env.PUBLIC_URL}/iitglogo.png`}
              alt="IIT Guwahati Logo"
              className="h-32 mb-6"
            />
            <h1 className="text-white text-3xl font-bold uppercase tracking-wider">
              Welcome to Indian Institute of Technology Guwahati
            </h1>
            <h2 className="text-white text-xl mt-2">Fresher's Portal</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

// Dropdown Menu Component with Smooth Transition on Hover
function DropdownMenu({ title, links }) {
  return (
    <div className="relative group">
      {/* Dropdown Button */}
      <button
        className="hover:text-red-500 focus:outline-none py-2 flex items-center"
        aria-haspopup="true"
      >
        {title} <FaChevronDown className="mt-[3px] ml-2" />
      </button>

      {/* Dropdown Content with Smooth Transition */}
      <div className="absolute left-0 mt-2 w-48 bg-black text-white shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 group-hover:flex transition-all duration-300 ease-in-out hidden flex-col z-20">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="block px-4 py-2 text-sm hover:bg-gray-700"
            rel="noopener noreferrer"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

// Header
function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className="h-[65px] sm:h-[80px] md:h-[90px] mx-3 sm:mx-5 md:mx-10 mt-5 md:mt-10 px-6 md:px-8 md:py-5 rounded-full relative bg-white">
      {/* Main */}
      <div className="w-full h-full flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex h-full items-center gap-2 md:gap-2 leading-5 cursor-pointer text-sm sm:text-base"
        >
          <img
            src="https://event.iitg.ac.in/icann2019/Proceedings_LaTeX/2019/IITG_logo.png"
            alt="IITG Logo"
            className="h-9 sm:h-10 md:h-12"
          />
          <div>
            <p>Students' Affairs</p>
            <p className="text-gray-700">IIT Guwahati</p>
          </div>
          <hr className="bg-gray-300 w-[2px] h-full max-h-[50px] ml-3 xl:ml-10" />
        </a>

        {/* Menus for larger screens */}
        <div className="hidden lg:flex gap-[3vw] items-center">
          <a href="#" className="hover:text-red-500 text-center">
            Important Information
          </a>
          <DropdownMenu
            title="Academics"
            links={[
              { label: "Departments", href: "/departments" },
              { label: "Branch Change", href: "/branch-change" },
              { label: "Minor Discipline", href: "/minor-discipline" },
            ]}
          />
          <DropdownMenu
            title="Life On Campus"
            links={[
              { label: "Student Gymkhana Council", href: "/sgc" },
              { label: "Student Welfare Board", href: "/swb" },
              { label: "Cultural Board", href: "/cultural" },
              { label: "Technical Board", href: "/technical" },
              { label: "Sports Board", href: "/sports" },
              { label: "Hostel Affairs Board", href: "/hab" },
              { label: "Annual Festivals", href: "/fests" },
            ]}
          />
          <DropdownMenu
            title="Hostels"
            links={[
              { label: "Lists of Hostels", href: "/hostel-list" },
              { label: "Hostel Facilities", href: "/hostel-fac" },
              { label: "Inter-Hostel Events", href: "/hostel-events" },
            ]}
          />
          <a href="#" className="hover:text-red-500">
            Facilities
          </a>
          <a href="#" className="hover:text-red-500">
            FAQs
          </a>
          <a href="#" className="hover:text-red-500">
            Contact
          </a>
        </div>
        {/* Menu Icon */}
        <div
          className="flex lg:hidden text-3xl md:text-4xl cursor-pointer"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          {isNavOpen ? <RxCross2 /> : <IoMenu />}
        </div>
      </div>
    </nav>
  );
}
