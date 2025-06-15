import React, { useState, useEffect, useRef } from 'react';
import { 
  Clock, 
  Bus, 
  Phone, 
  Search, 
  Users, 
  Trophy, 
  Car, 
  Smartphone,
  Calendar,
  BookOpen,
  MapPin,
  AlertCircle,
  Shield
} from 'lucide-react';

const OneStopHighlight = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollRef = useRef(null);

  // Ensure scroll starts from top on component mount
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, []);

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "GateLog",
      description: "Secure and hassle-free campus access system. Gatelog ensures smooth entry and exit through campus gates while maintaining top-notch security — all with a student-first approach.",
      color: "bg-emerald-50 text-emerald-600",
      highlighted: true
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Personalized Timetable",
      description: "Stay organized with a personalized timetable that aligns with your academic schedule, ensuring you never miss a class or important event.",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: <Bus className="w-6 h-6" />,
      title: "Transport Facilities Info",
      description: "Get all the information you need about convenient transport facilities like ferry, bus timings and locations, making your daily campus commute a breeze.",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Important Contacts",
      description: "Rest assured knowing that OneStop is there for you in times of emergencies, providing quick access to important contacts.",
      color: "bg-red-50 text-red-600"
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Lost and Found",
      description: "Lost an important item or found one? Post it in the lost and found section and help it reach its rightful owner.",
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Unified Problem Solving Portal",
      description: "Reach out to the student gymkhana council no matter what the problem by filling out the UPSP form.",
      color: "bg-orange-50 text-orange-600"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "GC Scoreboard",
      description: "Always stay updated with the progress of your hostel in the annual general championship (Inter hostel competition) of IIT Guwahati.",
      color: "bg-yellow-50 text-yellow-600"
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: "Cab Sharing",
      description: "Want to travel to/from the airport/railway station but cabs proving out to be too costly? Share your cab with fellow IITG mates.",
      color: "bg-indigo-50 text-indigo-600"
    }
  ];

  const quickAccess = [
    { name: "Academic SSO", icon: <BookOpen className="w-5 h-5" /> , link:"https://academic.iitg.ac.in/sso/"},
    { name: "Placement Stats", icon: <Trophy className="w-5 h-5" />, link:"https://swc.iitg.ac.in/placement-stats/"},
    { name: "SWC Website", icon: <Users className="w-5 h-5" />, link:"https://swc.iitg.ac.in/swc" },
    { name: "Academic Calendar", icon: <Calendar className="w-5 h-5" />, link:"https://academic.iitg.ac.in/acad/calanders/Acad_Calendar_2025.pdf" }
  ];

  const handleScroll = (e) => {
    setScrollPosition(e.target.scrollTop);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl shadow-xl mb-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <Smartphone className="w-12 h-12 text-blue-600 mr-3" />
          <h1 className="text-4xl font-bold text-gray-800">OneStop</h1>
        </div>
        <p className="text-xl text-blue-600 font-medium mb-4">One App. Endless Possibilities.</p>
        <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
          OneStop is the go-to app for every student stepping foot on our campus. Designed & Developed by 
          Student's Web Committee (SWC) to simplify a student's life by catering daily needs & queries.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
              feature.highlighted ? 'ring-2 ring-emerald-400 shadow-emerald-100 transform scale-105' : ''
            }`}
          >
            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${feature.color} mb-4 ${
              feature.highlighted ? 'ring-2 ring-emerald-300' : ''
            }`}>
              {feature.icon}
            </div>
            <h3 className={`text-lg font-semibold mb-3 ${
              feature.highlighted ? 'text-emerald-800' : 'text-gray-800'
            }`}>
              {feature.title}
              {feature.highlighted && <span className="ml-2 text-xs bg-emerald-100 text-emerald-600 px-2 py-1 rounded-full">Featured</span>}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Quick Access Section */}
      <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <AlertCircle className="w-6 h-6 text-blue-600 mr-2" />
          Quick Links
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickAccess.map((item, index) => (
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="no-underline" key={index}>
            <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
              <div className="text-blue-600 mr-3">{item.icon}</div>
              <span className="text-sm font-medium text-gray-700">{item.name}</span>
            </div>
            </a>
          ))}
        </div>
      </div>

      {/* App Preview Section with Scrollable Phone */}
      <div className="bg-white rounded-xl p-8 shadow-lg">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Everything You Need at Your Fingertips
            </h2>
            <p className="text-gray-600 mb-6">
              OneStop provides essential information that aids in effectively managing your academic life, 
              staying updated with campus events, and effortlessly accessing important resources.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-lg">
                <Smartphone className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-blue-600">Available on iOS & Android</span>
              </div>
            </div>
          </div>
          
          {/* Phone Mockup with Scrollable Content */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-72 h-[600px] bg-black rounded-[3rem] p-2 shadow-2xl">
                {/* Screen */}
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Status Bar */}

                  
                  {/* Scrollable Content */}
                  <div 
                    ref={scrollRef}
                    className="h-full pt-0 pb-20 overflow-y-auto"
                    onScroll={handleScroll}
                    style={{
                      scrollbarWidth: 'none',
                      msOverflowStyle: 'none',
                    }}
                  >
                    {/* App Screenshot - starts from top */}
                    <img 
                      src="/freshers/Homescreen.png" 
                      alt="OneStop App Homescreen" 
                      className="w-full h-auto object-cover object-top"
                      style={{ display: 'block' }}
                    />
                  </div>
                  
                  {/* Bottom Navigation */}
                </div>
              </div>
              
              {/* Scroll Indicator */}
              <div className="absolute right-0 top-16 bottom-24 w-1 bg-gray-200 rounded-full mr-1">
                <div 
                  className="w-full bg-blue-400 rounded-full transition-all duration-150"
                  style={{
                    height: '20%',
                    transform: `translateY(${Math.min((scrollPosition / 100) * 80, 80)}%)`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-8">
        <p className="text-gray-600 mb-4">Ready to simplify your campus life?</p>
        <a href='https://play.google.com/store/apps/details?id=com.swciitg.onestop2'><button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 shadow-lg">
          Download OneStop Now
        </button></a>
      </div>
    </div>
  );
};

export default OneStopHighlight;
