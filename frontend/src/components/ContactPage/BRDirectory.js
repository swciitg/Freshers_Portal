import React from 'react';
import { useState } from 'react';
import { Search, Phone, MapPin, Users } from 'lucide-react';

const BRDirectory = () => {
  // BR data with years incremented by 1
  const brData = [
    { department: "CSE", year: 3, name_and_no: "MANIDEEP RAM 6303865227" },
    { department: "MNC", year: 3, name_and_no: "NAMAN KARWA 9877780309" },
    { department: "DSAI", year: 3, name_and_no: "VAISHNAVI AGARWAL 8953762399" },
    { department: "ECE", year: 3, name_and_no: "HARSHIT GOEL 9877355569 & ANUSHKA 7694988744" },
    { department: "EEE", year: 3, name_and_no: "KRRISH 8229027032" },
    { department: "EP", year: 3, name_and_no: "JASVINDAR SINGH 7417294042" },
    { department: "CIVIL", year: 3, name_and_no: "DIVYANSH RAJ 9523490713" },
    { department: "CHEM", year: 3, name_and_no: "ANWESHA 8235564333 & TAHA 7869810898" },
    { department: "CST", year: 3, name_and_no: "ARPIT RANJAN 8409285656" },
    { department: "MECH", year: 3, name_and_no: "MITHIL 7207185274 & KHUSHAL 9257282136" },
    { department: "BSBE", year: 3, name_and_no: "HARSHITA 7805869315 & SRAYASH 9244237258" },
    { department: "BDES", year: 3, name_and_no: "ARVIND 9025171770 & KETAKI 8308310264" },
    { department: "ENERGY", year: 3, name_and_no: "PRANAVSREE 8121572002" }
  ];


  const regionData = [
  { region: "Telangana & Andhra Pradesh", name_and_no: "MITHIL 7207185274" },
  { region: "Telangana & Andhra Pradesh", name_and_no: "MANIDEEP 6303865227" },
  { region: "Telangana & Andhra Pradesh", name_and_no: "DHEEKSHA 8125355709" },
  { region: "Telangana & Andhra Pradesh", name_and_no: "ESHANTH 6302406300" },
  { region: "Telangana & Andhra Pradesh", name_and_no: "LIKITH 7675011374" },
  { region: "Telangana & Andhra Pradesh", name_and_no: "MAHITHA 8309521983" },
  { region: "Tamil Nadu", name_and_no: "SANJAY 7358487350" },
  { region: "Tamil Nadu", name_and_no: "AMRITHA 9345652212" },
  { region: "Tamil Nadu", name_and_no: "ARAVIND 9025171770" },
  { region: "Tamil Nadu", name_and_no: "PRAGADEESH 9566265920" },
  { region: "Tamil Nadu", name_and_no: "SANJANA 9897152375" },
  { region: "Kerala", name_and_no: "JOFFIN 7736929440" },
  { region: "Kerala", name_and_no: "DEVANANDIKA 9074542344" },
  { region: "Kerala", name_and_no: "NIRANJANA 8113034892" },
  { region: "Kerala", name_and_no: "JADEN 9510132218" },
  { region: "Karnataka", name_and_no: "VAIBHAV 7022926590" },
  { region: "Karnataka", name_and_no: "TANMAY 6003476812" },
  { region: "Maharashtra", name_and_no: "ASHISH 8956336360" },
  { region: "Maharashtra", name_and_no: "ATHARV 8956336360" },
  { region: "Maharashtra", name_and_no: "PARNIKA 8459281263" },
  { region: "Maharashtra", name_and_no: "PARTH 9527409158" },
  { region: "Madhya Pradesh", name_and_no: "TAHA 7869810898" },
  { region: "Madhya Pradesh", name_and_no: "SHREYAS GUPTA 9009187737" },
  { region: "Madhya Pradesh", name_and_no: "SHRUT JAIN 9407137656" },
  { region: "Madhya Pradesh", name_and_no: "VAGISHA 7477093970" },
  { region: "Odisha", name_and_no: "ADYASA 9831783405" },
  { region: "Odisha", name_and_no: "SITANSHU 8260707944" },
  { region: "Gujarat", name_and_no: "SURBHIT 8200537139" },
  { region: "Gujarat", name_and_no: "PRANJAL SONI 9512015500" },
  { region: "Gujarat", name_and_no: "NAMAN 9377780309" },
  { region: "Rajasthan", name_and_no: "DEVAL 9588886533" },
  { region: "Rajasthan", name_and_no: "SHOURYA 9950500951" },
  { region: "Rajasthan", name_and_no: "KANIKA 7878539166" },
  { region: "UP", name_and_no: "VAISHNAVI 8953762399" },
  { region: "Bihar", name_and_no: "ABHYUDAY 7903263868" },
  { region: "Bihar", name_and_no: "SARVAGYA 8291314066" },
  { region: "Bihar", name_and_no: "APOORVA 9031327189" },
  { region: "Jharkhand", name_and_no: "SRISTI VATS 8690327784" },
  { region: "Jharkhand", name_and_no: "AYUSH AGARWAL 9798408926" },
  { region: "Delhi", name_and_no: "MISHIKA 9967826000" },
  { region: "Delhi", name_and_no: "ABHISHEK DAS 7217680436" },
  { region: "Haryana", name_and_no: "SOURABH SAINI 9588303662" },
  { region: "Haryana", name_and_no: "VIBHOR 9509236500" },
  { region: "Punjab", name_and_no: "HARSHIT GOEL 9877355569" },
  { region: "Punjab", name_and_no: "DAIVIK 9592196491" },
  { region: "West Bengal", name_and_no: "SOURAJJAL 9330886984" },
  { region: "West Bengal", name_and_no: "SRIJAN 8653553039" },
  { region: "Assam", name_and_no: "HARDIK 6002949018" },
  { region: "Assam", name_and_no: "VAIBHAV 7002303858" }
];
  // Third year BRs data
  const thirdYearBRs = [
    { department: "CSE", name_and_no: "ARYAN 8602527847" },
    { department: "MNC", name_and_no: "DIYA 8849476475" },
    { department: "DSAI", name_and_no: "SHIVANSH 8447282050" },
    { department: "ECE", name_and_no: "AKSHAYA 8007461538 & DEVARSH 7874195692" },
    { department: "EEE", name_and_no: "CHIRAG 7014962887 & JASMINE 7814650875" },
    { department: "EP", name_and_no: "SRIVATSAN 9380282071" },
    { department: "CIVIL", name_and_no: "SITESH 9660925875" },
    { department: "CHEM", name_and_no: "FAHEEM 8299575017 & MONALI 9340255495" },
    { department: "CST", name_and_no: "DHRUV 9990041164 & ISHIKA 7649894094" },
    { department: "MECH", name_and_no: "ADITYA 7390909418 & ROHAN 9485987481" },
    { department: "BSBE", name_and_no: "ABHIKANSH 9855607807 & ELIKA 7903053492" },
    { department: "BDES", name_and_no: "ANIRUD 9080424001 & NISHA 9871499561" },
    { department: "ENERGY", name_and_no: "ABHINAV 7669189417" }
  ];
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const regions = [...new Set(regionData.map(item => item.region))].sort();

  // Filter data based on search and region
  const filteredData = regionData.filter(item => {
    const matchesSearch = item.name_and_no.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.region.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = selectedRegion === '' || item.region === selectedRegion;
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
    const parts = nameAndNo.split(' ');
    const number = parts[parts.length - 1];
    const name = parts.slice(0, -1).join(' ');
    return { name, number };
  };

  const handleCall = (number) => {
    window.open(`tel:+91${number}`, '_self');
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

      {/* 3rd Year BRs Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          3rd Year Branch Representatives
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {brData.map((br, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center min-w-[250px] hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-lg">
                    {br.department.substring(0, 2)}
                  </span>
                </div>
              </div>
              <div className="text-gray-700">
                <h3 className="text-lg font-bold mb-1 text-gray-800">
                  {br.department}
                </h3>
                <p className="text-sm text-blue-600 mb-3 font-medium">
                  {br.year}rd Year
                </p>
                <p className="text-xs text-gray-600 leading-relaxed break-words">
                  {br.name_and_no}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Regional Mentors Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Region Wise Mentors
        </h2>
          {Object.entries(groupedData).map(([region, mentors]) => (
            <div key={region} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4">
                <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  {region}
                  <span className="bg-white bg-opacity-20 px-2 py-1 rounded-full text-sm ml-auto">
                    {mentors.length} mentor{mentors.length !== 1 ? 's' : ''}
                  </span>
                </h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {mentors.map((mentor, index) => {
                    const { name, number } = formatPhoneNumber(mentor.name_and_no);
                    return (
                      <div key={index} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-800 text-lg">{name}</h3>
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

      {/* 4th Year BRs Section */}
      <div>
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          4th Year Branch Representatives
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {thirdYearBRs.map((br, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center min-w-[250px] hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-lg">
                    {br.department.substring(0, 2)}
                  </span>
                </div>
              </div>
              <div className="text-gray-700">
                <h3 className="text-lg font-bold mb-1 text-gray-800">
                  {br.department}
                </h3>
                <p className="text-sm text-green-600 mb-3 font-medium">
                  4th Year
                </p>
                <p className="text-xs text-gray-600 leading-relaxed break-words">
                  {br.name_and_no}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BRDirectory;
