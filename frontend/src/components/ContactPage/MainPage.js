import React from 'react';

const MainPage = () => {
  return (
    <div className="flex-grow flex items-center justify-center bg-white-50 py-20">
      <div className="w-full max-w-7xl mx-auto px-8 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-16">
        {/* Left Section - Title */}
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl  leading-snug">
            How to <br />
            <span className="text-orange-500">contact us?</span>
          </h1>
        </div>

        {/* Right Section - Contact Information */}
        <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-12">
          {/* Academic Affairs Contact */}
          <div className=" pt-4">
            <h2 className=" border-b border-gray-300 text-lg font-semibold text-gray-800">
              Academic Affairs
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Administrative Building, <br />
              IIT Guwahati, <br />
              Guwahati, Assam-781039
            </p>
            <p className="text-sm text-gray-500 mt-1">
              acadoff@iitg.ernet.in
            </p>
          </div>

          {/* Students' Affairs Contact */}
          <div className=" pt-4">
            <h2 className=" border-b border-gray-300 text-lg font-semibold text-gray-800">
              Students' Affairs
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Administrative Building, <br />
              IIT Guwahati, <br />
              Guwahati, Assam-781039
            </p>
            <p className="text-sm text-gray-500 mt-1">
              saoff@iitg.ernet.in
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;



export const ContactForm = () => {
    return (
      <div className="flex-grow flex items-center justify-center py-20">
        <div className="w-full max-w-6xl px-6 sm:px-8 md:px-12 mx-auto flex flex-col md:flex-row gap-16">
          
          {/* Left Section - Title */}
          <div className="relative right-0 md:right-16 w-full md:w-1/3 text-center md:text-left self-start">
            <h1 className="text-3xl sm:text-4xl md:text-5xl leading-snug">
              Drop your <br />
              <span className="text-orange-500">Message</span>
            </h1>
          </div>
  
          {/* Right Section - Form */}
          <div className="w-full md:w-2/3">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Name Input */}
              <div className="col-span-1">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-700 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
  
              {/* Message Input */}
              <div className="col-span-1 sm:row-span-3">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message (max 200 words)"
                  rows="8"
                  className="w-full h-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                ></textarea>
              </div>
  
              {/* Email Input */}
              <div className="col-span-1">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
  
              {/* Phone Input */}
              <div className="col-span-1">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-gray-700 mb-2"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
  