import React from "react";
import { useState } from "react";
import { Search, Phone, MapPin, Users } from "lucide-react";

const BRDirectory = () => {
  // BR data with years incremented by 1
  const brData = [
    { department: "CSE", year: 3, name_and_no: "MANIDEEP RAM 6303865227" },
    { department: "MNC", year: 3, name_and_no: "NAMAN KARWA 9877780309" },
    {
      department: "DSAI",
      year: 3,
      name_and_no: "VAISHNAVI AGARWAL 8953762399",
    },
    {
      department: "ECE",
      year: 3,
      name_and_no: "HARSHIT GOEL 9877355569",
    },
    {
      department: "ECE",
      year: 3,
      name_and_no: "ANUSHKA 7694988744",
    },
    { department: "EEE", year: 3, name_and_no: "KRRISH 8229027032" },
    { department: "EP", year: 3, name_and_no: "JASVINDAR SINGH 7417294042" },
    { department: "CIVIL", year: 3, name_and_no: "DIVYANSH RAJ 9523490713" },
    {
      department: "CHEM",
      year: 3,
      name_and_no: "ANWESHA 8235564333",
    },
    {
      department: "CHEM",
      year: 3,
      name_and_no: "TAHA 7869810898",
    },
    { department: "CST", year: 3, name_and_no: "ARPIT RANJAN 8409285656" },
    {
      department: "MECH",
      year: 3,
      name_and_no: "MITHIL 7207185274",
    },
    {
      department: "MECH",
      year: 3,
      name_and_no: "KHUSHAL 9257282136",
    },
    {
      department: "BSBE",
      year: 3,
      name_and_no: "HARSHITA 7805869315",
    },
    {
      department: "BSBE",
      year: 3,
      name_and_no: "SRAYASH 9244237258",
    },
    {
      department: "BDES",
      year: 3,
      name_and_no: "ARVIND 9025171770",
    },
    {
      department: "BDES",
      year: 3,
      name_and_no: "KETAKI 8308310264",
    },
    { department: "ENERGY", year: 3, name_and_no: "PRANAVSREE 8121572002" },
  ];

  const regionData = [
    {
      region: "Telangana & Andhra Pradesh",
      name_and_no: "MITHIL(B.Tech 3rd Year) 7207185274",
    },
    {
      region: "Telangana & Andhra Pradesh",
      name_and_no: "MANIDEEP(B.Tech 3rd Year) 6303865227",
    },
    {
      region: "Telangana & Andhra Pradesh",
      name_and_no: "DHEEKSHA(B.Tech 3rd Year) 8125355709",
    },
    {
      region: "Telangana & Andhra Pradesh",
      name_and_no: "ESHANTH(B.Tech 3rd Year) 6302406300",
    },
    {
      region: "Telangana & Andhra Pradesh",
      name_and_no: "LIKITH(B.Tech 3rd Year) 7675011374",
    },
    {
      region: "Telangana & Andhra Pradesh",
      name_and_no: "MAHITHA(B.Tech 3rd Year) 8309521983",
    },
    { region: "Tamil Nadu", name_and_no: "SANJAY(B.Tech 3rd Year) 7358487350" },
    {
      region: "Tamil Nadu",
      name_and_no: "AMRITHA(B.Tech 3rd Year) 9345652212",
    },
    { region: "Tamil Nadu", name_and_no: "ARAVIND(B.Des 3rd Year) 9025171770" },
    {
      region: "Tamil Nadu",
      name_and_no: "PRAGADEESH(B.Tech 2nd Year) 9566265920",
    },
    {
      region: "Tamil Nadu",
      name_and_no: "SANJANA(B.Tech 2nd Year) 9897152375",
    },
    { region: "Kerala", name_and_no: "JOFFIN(B.Tech 3rd Year) 7736929440" },
    {
      region: "Kerala",
      name_and_no: "DEVANANDIKA(B.Tech 3rd Year) 9074542344",
    },
    { region: "Kerala", name_and_no: "NIRANJANA(B.Tech 3rd Year) 8113034892" },
    { region: "Kerala", name_and_no: "JADEN(B.Tech 3rd Year) 9510132218" },
    { region: "Karnataka", name_and_no: "VAIBHAV(B.Tech 2nd Year) 7022926590" },
    { region: "Karnataka", name_and_no: "TANMAY(B.Tech 2nd Year) 6003476812" },
    {
      region: "Maharashtra",
      name_and_no: "ASHISH(B.Tech 3rd Year) 8956336360",
    },
    {
      region: "Maharashtra",
      name_and_no: "ATHARV(B.Tech 3rd Year) 8956336360",
    },
    {
      region: "Maharashtra",
      name_and_no: "PARNIKA(B.Tech 3rd Year) 8459281263",
    },
    { region: "Maharashtra", name_and_no: "PARTH(B.Tech 3rd Year) 9527409158" },
    {
      region: "Madhya Pradesh",
      name_and_no: "TAHA(B.Tech 3rd Year) 7869810898",
    },
    {
      region: "Madhya Pradesh",
      name_and_no: "SHREYAS GUPTA(B.Tech 3rd Year) 9009187737",
    },
    {
      region: "Madhya Pradesh",
      name_and_no: "VAGISHA(B.Tech 3rd Year) 7477093970",
    },
    { region: "Odisha", name_and_no: "ADYASA(B.Tech 3rd Year) 9831783405" },
    { region: "Odisha", name_and_no: "SITANSHU(B.Tech 3rd Year) 8260707944" },
    { region: "Gujarat", name_and_no: "SURBHIT(B.Tech 3rd Year) 8200537139" },
    {
      region: "Gujarat",
      name_and_no: "PRANJAL SONI(B.Tech 3rd Year) 9512015500",
    },
    { region: "Gujarat", name_and_no: "NAMAN(B.Tech 3rd Year) 9377780309" },
    { region: "Rajasthan", name_and_no: "DEVAL(B.Tech 3rd Year) 9588886533" },
    { region: "Rajasthan", name_and_no: "SHOURYA(B.Tech 3rd Year) 9950500951" },
    { region: "Rajasthan", name_and_no: "KANIKA(B.Tech 3rd Year) 7878539166" },
    { region: "UP", name_and_no: "VAISHNAVI(B.Tech 3rd Year) 8953762399" },
    { region: "Bihar", name_and_no: "ABHYUDAY(B.Tech 3rd Year) 7903263868" },
    { region: "Bihar", name_and_no: "APOORVA(B.Tech 3rd Year) 9031327189" },
    {
      region: "Jharkhand",
      name_and_no: "SRISTI VATS(B.Tech 3rd Year) 8690327784",
    },
    {
      region: "Jharkhand",
      name_and_no: "AYUSH AGARWAL(B.Tech 3rd Year) 9798408926",
    },
    { region: "Delhi", name_and_no: "MISHIKA(B.Tech 3rd Year) 9967826000" },
    {
      region: "Delhi",
      name_and_no: "ABHISHEK DAS(B.Tech 3rd Year) 7217680436",
    },
    {
      region: "Haryana",
      name_and_no: "SOURABH SAINI(B.Tech 3rd Year) 9588303662",
    },
    { region: "Haryana", name_and_no: "VIBHOR(B.Tech 3rd Year) 9509236500" },
    {
      region: "Punjab",
      name_and_no: "HARSHIT GOEL(B.Tech 3rd Year) 9877355569",
    },
    { region: "Punjab", name_and_no: "DAIVIK(B.Tech 3rd Year) 9592196491" },
    {
      region: "West Bengal",
      name_and_no: "SOURAJJAL(B.Tech 3rd Year) 9330886984",
    },
    {
      region: "West Bengal",
      name_and_no: "SRIJAN(B.Tech 3rd Year) 8653553039",
    },
    { region: "Assam", name_and_no: "HARDIK(B.Tech 3rd Year) 6002949018" },
    { region: "Assam", name_and_no: "VAIBHAV(B.Tech 3rd Year) 7002303858" },
  ];
  // Third year BRs data
  const thirdYearBRs = [
    { department: "CSE", name_and_no: "ARYAN 8602527847" },
    { department: "MNC", name_and_no: "DIYA 8849476475" },
    { department: "DSAI", name_and_no: "SHIVANSH 8447282050" },
    {
      department: "ECE",
      name_and_no: "AKSHAYA 8007461538",
    },
    {
      department: "ECE",
      name_and_no: "DEVARSH 7874195692",
    },
    {
      department: "EEE",
      name_and_no: "CHIRAG 7014962887",
    },
    {
      department: "EEE",
      name_and_no: "JASMINE 7814650875",
    },
    { department: "EP", name_and_no: "SRIVATSAN 9380282071" },
    { department: "CIVIL", name_and_no: "SITESH 9660925875" },
    {
      department: "CHEM",
      name_and_no: "FAHEEM 8299575017",
    },
    {
      department: "CHEM",
      name_and_no: "MONALI 9340255495",
    },
    { department: "CST", name_and_no: "DHRUV 9990041164" },
    { department: "CST", name_and_no: "ISHIKA 7649894094" },
    { department: "MECH", name_and_no: "ADITYA 7390909418" },
    { department: "MECH", name_and_no: "ROHAN 9485987481" },
    {
      department: "BSBE",
      name_and_no: "ABHIKANSH 9855607807",
    },
    {
      department: "BSBE",
      name_and_no: "ELIKA 7903053492",
    },
    { department: "BDES", name_and_no: "ANIRUD 9080424001" },
    { department: "BDES", name_and_no: "NISHA 9871499561" },
    { department: "ENERGY", name_and_no: "ABHINAV 7669189417" },
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const regions = [...new Set(regionData.map((item) => item.region))].sort();

  // Filter data based on search and region
  const filteredData = regionData.filter((item) => {
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
          {brData.map((br, index) => {
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
          {thirdYearBRs.map((br, index) => {
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
