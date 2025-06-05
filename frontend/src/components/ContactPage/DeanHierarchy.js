import React from 'react';

const DeanHierarchy = () => {
  // Dummy data for the deans
  const deanData = {
    dean: {
      name: "Prof. Perumal Alagarsamy",
      title: "Dean, Students' Affairs",
      contact: "3612582724",
      email: "dos@iitg.ac.in",
      image: "https://www.iitg.ac.in/stud/gymkhana/media/facultyexective/6300faculty.jpeg" // placeholder image
    },
    associateDeans: [
      {
        name: "Prof. Pankaj Tiwari",
        title: "Associate Dean-1, SA",
        contact: "3612582929",
        email: "adosa_1@iitg.ac.in",
        image: "https://www.iitg.ac.in/chemeng/faculty/d745db61aae61a5d4bb97fee0ebbae69026025a6.jpg"
      },
      {
        name: "Prof. Poonam Kumari",
        title: "Associate Dean-2, SA",
        contact: "3612582928",
        email: "adosa_2@iitg.ac.in",
        image: "https://www.iitg.ac.in/stud/gymkhana/media/facultyexective/WhatsApp_Image_2025-04-07_at_09.58.14.jpeg"
      }
    ]
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-5 font-sans">
      {/* Dean Section - Centered at top */}
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Dean</h1>
      <div className="flex justify-center mb-16">
        <div className="bg-white rounded-3xl p-8 shadow-xl text-center min-w-[300px] relative">
          <div className="mb-5">
            <img 
              src={deanData.dean.image} 
              alt={deanData.dean.name}
              className="w-50 h-50 rounded-full object-cover border-4 border-gray-100 shadow-lg mx-auto"
            />
          </div>
          <div className="text-gray-700">
            <h3 className="text-lg font-bold mb-2 text-gray-800">{deanData.dean.name}</h3>
            <p className="text-sm text-gray-500 mb-3 font-medium">{deanData.dean.title}</p>
            <p className="text-xs text-gray-600 mb-1 leading-relaxed">Contact: {deanData.dean.contact}</p>
            <p className="text-xs text-gray-600 break-all leading-relaxed">Email: {deanData.dean.email}</p>
          </div>
          {/* Connecting line */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gray-300"></div>
        </div>
      </div>

      {/* Associate Deans Section - In line below */}
      <div className="flex justify-center gap-10 flex-wrap">
        {deanData.associateDeans.map((dean, index) => (
          <div className='flex flex-col items-center' key={index}>
            <h1 className="text-2xl font-bold mb-6 text-gray-800">Associate Dean {index + 1}</h1>
          <div key={index} className="bg-white rounded-3xl p-8 shadow-xl text-center min-w-[280px] flex-1 max-w-[350px]">
            
            <div className="mb-5">
              <img 
                src={dean.image} 
                alt={dean.name}
                className="w-50 h-50 rounded-full object-cover border-4 border-gray-100 shadow-lg mx-auto"
              />
            </div>
            <div className="text-gray-700">
              <h3 className="text-lg font-bold mb-2 text-gray-800">{dean.name}</h3>
              <p className="text-sm text-gray-500 mb-3 font-medium">{dean.title}</p>
              <p className="text-xs text-gray-600 mb-1 leading-relaxed">Contact: {dean.contact}</p>
              <p className="text-xs text-gray-600 break-all leading-relaxed">Email: {dean.email}</p>
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeanHierarchy;
