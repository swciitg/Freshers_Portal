// src/components/HomePage.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Image paths for slider
const images = [
  `${process.env.PUBLIC_URL}/img2.png`,
  `${process.env.PUBLIC_URL}/img3.png`,
  `${process.env.PUBLIC_URL}/img4.png`,
  `${process.env.PUBLIC_URL}/img5.png`,
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
          <nav className="flex justify-center items-center flex-wrap gap-4 py-3 px-4 md:gap-8 md:py-6 text-white text-sm md:text-lg">
            <a href="#" className="hover:text-blue-300">Home</a>
            <a href="#" className="hover:text-blue-300">Important Information</a>
            <DropdownMenu
              title="Academics"
              links={[
                { label: 'Departments', href: '/departments' },
                { label: 'Branch Change', href: '/branch-change' },
                { label: 'Minor Discipline', href: '/minor-discipline' },
              ]}
            />
            <DropdownMenu
              title="Life On Campus"
              links={[
                { label: 'Student Gymkhana Council', href: '/sgc' },
                { label: 'Student Welfare Board', href: '/swb' },
                { label: 'Cultural Board', href: '/cultural' },
                { label: 'Technical Board', href: '/technical' },
                { label: 'Sports Board', href: '/sports' },
                { label: 'Hostel Affairs Board', href: '/hab' },
                { label: 'Annual Festivals', href: '/fests' },

              ]}
            />
            <DropdownMenu
              title="Hostels"
              links={[
                { label: 'Lists of Hostels', href: '/hostel-list' },
                { label: 'Hostel Facilities', href: '/hostel-fac' },
                { label: 'Inter-Hostel Events', href: '/hostel-events' },
              ]}
            />
            <a href="#" className="hover:text-blue-300">Facilities</a>
            <a href="#" className="hover:text-blue-300">FAQs</a>
            <a href="#" className="hover:text-blue-300">Contact</a>
          </nav>

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
        className="hover:text-blue-300 focus:outline-none px-4 py-2 flex items-center"
        aria-haspopup="true"
      >
        {title} <span className="ml-1">▼</span>
      </button>

      {/* Dropdown Content with Smooth Transition */}
      <div
        className="absolute left-0 mt-2 w-48 bg-black text-white shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 group-hover:flex transition-all duration-300 ease-in-out hidden flex-col z-20"
      >
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