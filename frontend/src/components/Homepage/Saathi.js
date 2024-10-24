import React from 'react';
import { FaInfoCircle, FaCalendarAlt, FaHandsHelping, FaEnvelope } from 'react-icons/fa';

const features = [
  { title: 'About Us', icon: <FaInfoCircle size={30} />, link: '#' },
  { title: "Counsellor's Timings", icon: <FaCalendarAlt size={30} />, link: '#' },
  { title: 'Student Mentorship', icon: <FaHandsHelping size={30} />, link: '#' },
  { title: 'Anonymous Emotional Support', icon: <FaEnvelope size={30} />, link: '#' },
];

export default function Saathi() {
  return (
    <div
      className="min-h-screen w-full py-16 px-4 sm:px-12 md:px-24 flex flex-col items-center"
      style={{
        background: 'linear-gradient(135deg, #f3f4f6 0%, #ffffff 100%)',
      }}
    >
      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-2">SAATHI</h1>
        <p className="text-lg text-gray-600">
          Counselling Service by IIT Guwahati
        </p>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl">
        {features.map((feature, index) => (
          <a
            key={index}
            href={feature.link}
            className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow flex flex-col items-center text-center hover:bg-gray-50"
            style={{
              boxShadow: '4px 4px 12px rgba(0, 0, 0, 0.05), -4px -4px 12px rgba(255, 255, 255, 0.9)',
            }}
          >
            {/* Icon */}
            <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mb-4">
              {feature.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
          </a>
        ))}
      </div>
    </div>
  );
}
