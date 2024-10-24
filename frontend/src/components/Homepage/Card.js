// src/components/AchievementsGrid.js
import React from 'react';

// Array of achievements data (8 cards total)
const achievements = [
  {
    title: "Student's Web Committee",
    description:
      'Manages and maintains the online presence of student affairs through digital platforms.',
    image: 'swc.png',
  },
  {
    title: 'Sports Board',
    description:
      'Organizes and promotes sports events and competitions to foster physical fitness and teamwork.',
    image: 'sports_board.jpg',
  },
  {
    title: 'Cultural Board',
    description:
      'Promotes cultural events and festivals to encourage creativity and cultural diversity.',
    image: 'cult_board.jpg',
  },
  {
    title: 'Technical Board',
    description:
      'Facilitates technical events, workshops, and competitions to encourage scientific thinking.',
    image: 'tech-board.png',
  },
  {
    title: 'Hostel Affairs Board',
    description: 'Coordinates and manages all hostel activities for a smooth living experience on campus.',
    image: 'hab.png',
  },
  {
    title: "Student Academic Board",
    description: 'Acts as the bridge between students and administration to address academic concerns.',
    image: 'sab_logo.png',
  },
  {
    title: "Student's Welfare Board",
    description: 'Ensures the overall well-being of students, addressing mental, emotional, and social needs.',
    image: 'welfare_board.png',
  },
  {
    title: "Student's Alumni Interaction Linkage",
    description: 'Connects current students with alumni to build relationships and provide career guidance.',
    image: 'small_sail.jpg',
  },
];

export default function AchievementsGrid() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="object-contain bg-white rounded-lg shadow-md p-4 flex flex-col"
          >
            <img
              src={achievement.image}
              alt={achievement.title}
              className="w-full h-40 object-contain"
            />
            <h2 className="text-xl font-semibold mb-2">{achievement.title}</h2>
            <p className="text-gray-600 flex-grow">{achievement.description}</p>
            <a
              href="#"
              className="mt-4 text-blue-600 font-medium flex items-center"
            >
              Read more <span className="ml-2">➔</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
