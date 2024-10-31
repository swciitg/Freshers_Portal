import { ReactComponent as Oneicon } from "../../assets/one.svg"; // Unmute Icon SVG
import { ReactComponent as Secicon } from "../../assets/sec.svg"; // Unmute Icon SVG
import { ReactComponent as Thiicon } from "../../assets/thi.svg"; // Unmute Icon SVG
import { ReactComponent as Fouicon } from "../../assets/fou.svg"; // Unmute Icon SVG
const SaathiPage = () => {
  return (
    <div className="min-h-screen bg-white p-6 sm:p-12 lg:p-24">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
        <div>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-thin text-gray-900">
            SAATHI
          </h1>
          <button className="mt-4 px-4 py-2 border rounded-full text-gray-700 flex items-center">
            About us
            <span className="ml-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="#B3B3B3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>

        <p className="text-sm sm:text-base lg:text-lg lg:w-2/5 text-gray-600">
          IITG Saathi Cell is dedicated to supporting student well-being,
          offering counseling, workshops, and peer guidance to help you manage
          stress, adjust to campus life, and thrive. It’s a friendly,
          confidential space for anyone needing support or guidance.
        </p>
      </div>

      {/* Links Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-10">
        {/* Counsellor's Timings */}
        <div className="flex justify-between items-center border-b border-gray-300 pb-4">
          <div className="flex flex-col items-start space-y-4">
            <div className="w-16 h-16">
              <Oneicon className="w-full h-full" />
            </div>
            <span className="text-lg lg:text-2xl text-gray-800">
              Counsellor’s Timings
            </span>
          </div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 17L17 7M17 7H7M17 7V17"
              stroke="#B3B3B3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Student Mentorship */}
        <div className="flex justify-between items-center border-b border-gray-300 pb-4">
          <div className="flex flex-col items-start space-y-4">
            <div className="w-16 h-16">
              <Secicon className="w-full h-full" />
            </div>
            <span className="text-lg lg:text-2xl text-gray-800">
              Student Mentorship
            </span>
          </div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 17L17 7M17 7H7M17 7V17"
              stroke="#B3B3B3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Team */}
        <div className="flex justify-between items-center border-b border-gray-300 pb-4">
          <div className="flex flex-col items-start space-y-4">
            <div className="w-16 h-16">
              <Thiicon className="w-full h-full" />
            </div>
            <span className="text-lg lg:text-2xl text-gray-800">Team</span>
          </div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 17L17 7M17 7H7M17 7V17"
              stroke="#B3B3B3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Anonymous Emotional Support System */}
        <div className="flex justify-between items-center border-b border-gray-300 pb-4">
          <div className="flex flex-col items-start space-y-4">
            <div className="w-16 h-16">
            <Fouicon/>
            </div>
            <span className="text-lg lg:text-2xl text-gray-800">
              Anonymous Emotional Support System
            </span>
          </div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 17L17 7M17 7H7M17 7V17"
              stroke="#B3B3B3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SaathiPage;