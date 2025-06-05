import React from 'react';

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
