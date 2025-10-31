import React, { useState, useEffect } from "react";
import { Search, Phone, MapPin, Users } from "lucide-react";
// import * as adminFallback from "../../admin"; // fallback when backend unavailable

const BRDirectory = () => {
  // State for data; try to fetch from backend, fallback to local admin.js
  const [brs, setBrs] = useState([]);
  const [mentors, setMentors] = useState([]);
  const [thirdYear, setThirdYear] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  useEffect(() => {
    const base = process.env.REACT_APP_BACKEND_BASE_URL || "http://localhost:5000";
    const url = `${base.replace(/\/$/, "")}/api/admin-data`;
    let mounted = true;
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        if (!mounted) return;
        if (data.brData) setBrs(data.brData);
        if (data.regionData) setMentors(data.regionData);
        if (data.thirdYearBRs) setThirdYear(data.thirdYearBRs);
      })
      .catch((err) => {
        // fallback already set from admin.js; just log for debugging
        // console.warn('Failed to fetch admin data, using local fallback', err);
      });
    return () => {
      mounted = false;
    };
  }, []);

  const regions = [...new Set(mentors.map((item) => item.region))].sort();

  // Filter data based on search and region
  const filteredData = mentors.filter((item) => {
    const matchesSearch =
      item.name_and_no.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.region.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion =
      selectedRegion === "" || item.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  // Group data by region
  const groupedData = filteredData.reduce((acc, item) => {
    if (!acc[item.region]) {
      acc[item.region] = [];
    }
    acc[item.region].push(item);
    return acc;
  }, {});

  const formatPhoneNumber = (nameAndNo) => {
    const parts = nameAndNo.split(" ");
    const number = parts[parts.length - 1];
    const name = parts.slice(0, -1).join(" ");
    return { name, number };
  };

  function brname_no(name_and_no) {
    const pairs = name_and_no.split("&");

    const results = pairs.map((pair) => {
      const trimm = pair.trim();

      const last_space = trimm.lastIndexOf(" ");

      const name = trimm.substring(0, last_space);
      const number = trimm.substring(last_space + 1);

      return {
        name: name,
        number: number,
      };
    });
    return results;
  }

  const handleCall = (number) => {
    window.open(`tel:+91${number}`, "_self");
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Branch Representatives Directory
        </h1>
        <p className="text-lg text-gray-600">
          Connect with your department representatives
        </p>
      </div>
      
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          3rd Year Branch Representatives
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {brs.map((br, index) => {
            const resarr = brname_no(br.name_and_no);
            const colors = [
              "from-teal-400 to-teal-600",
              "from-green-400 to-green-600",
              "from-blue-400 to-blue-600",
            ];
            const bgColor = colors[index % colors.length];
            return (
              <div key={index} className="relative w-full h-full">
                {/* Layered background effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${bgColor} rounded-3xl transform rotate-6 opacity-80`}
                ></div>
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${bgColor} rounded-3xl transform -rotate-3 opacity-60`}
                ></div>

                {/* Main card */}
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                      <span className="text-gray-600 font-bold text-xl">
                        {br.department.substring(0, 2)}
                      </span>
                    </div>
                  </div>
                  <div className="text-gray-700">
                    <div className="contact-details space-y-4">
                      {resarr.map((item, index) => {
                        return (
                          <div key={index} className="text-center">
                            <h3 className="font-bold text-gray-900 text-lg mb-1">
                              {item.name}
                            </h3>
                            <p className="text-xs text-gray-500 italic mb-2">
                              {br.year}rd Year,{br.department}
                            </p>
                            <p className="text-sm text-gray-600">
                              +91 {item.number}
                            </p>
                            <button
                              onClick={() => handleCall(item.number)}
                              className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full transition-colors"
                              title="Call mentor"
                            >
                              <Phone className="w-4 h-4" />
                            </button>
                            {index < resarr.length - 1 && (
                              <div className="mt-4 border-b border-gray-200"></div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4th Year BRs Section */}
      <div className="mb-14">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          4th Year Branch Representatives
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {thirdYear.map((br, index) => {
            const resarr2 = brname_no(br.name_and_no);
            const colors = [
              "from-purple-400 to-purple-600",
              "from-pink-400 to-pink-600",
              "from-indigo-400 to-indigo-600",
            ];
            const bgColor = colors[index % colors.length];
            return (
              <div key={index} className="relative w-full h-full">
                {/* Layered background effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${bgColor} rounded-3xl transform rotate-6 opacity-80`}
                ></div>
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${bgColor} rounded-3xl transform -rotate-3 opacity-60`}
                ></div>

                {/* Main card */}
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                      <span className="text-gray-600 font-bold text-xl">
                        {br.department.substring(0, 2)}
                      </span>
                    </div>
                  </div>
                  <div className="text-gray-700">
                    <div className="contact-details space-y-4">
                      {resarr2.map((item, index) => {
                        return (
                          <div key={index} className="text-center">
                            <h3 className="font-bold text-gray-900 text-lg mb-1">
                              {item.name}
                            </h3>
                            <p className="text-xs text-gray-500 italic mb-2">
                              4th Year,{br.department}
                            </p>
                            <p className="text-sm text-gray-600">
                              +91 {item.number}
                            </p>
                            <button
                              onClick={() => handleCall(item.number)}
                              className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full transition-colors"
                              title="Call mentor"
                            >
                              <Phone className="w-4 h-4" />
                            </button>
                            {index < resarr2.length - 1 && (
                              <div className="mt-4 border-b border-gray-200"></div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Regional Mentors Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Region Wise Mentors
        </h2>
        {Object.entries(groupedData).map(([region, mentors]) => (
          <div
            key={region}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4">
              <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                {region}
                <span className="bg-white bg-opacity-20 px-2 py-1 rounded-full text-sm ml-auto">
                  {mentors.length} mentor{mentors.length !== 1 ? "s" : ""}
                </span>
              </h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {mentors.map((mentor, index) => {
                  const { name, number } = formatPhoneNumber(
                    mentor.name_and_no
                  );
                  return (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-800 text-lg">
                            {name}
                          </h3>
                          <p className="text-gray-600 flex items-center gap-1 mt-1">
                            <Phone className="w-4 h-4" />
                            +91 {number}
                          </p>
                        </div>
                        <button
                          onClick={() => handleCall(number)}
                          className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full transition-colors"
                          title="Call mentor"
                        >
                          <Phone className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BRDirectory;
