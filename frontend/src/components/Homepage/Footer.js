import { FaInstagram, FaLinkedinIn, FaTimes } from 'react-icons/fa';

function Footer() {
  return (
    <div className="w-full bg-black text-white px-8 md:px-12 py-6 flex items-center justify-between">
      {/* Left Section: Logo and Copyright */}
      <div className="flex items-center space-y-2">
        <div className="flex flex-col items-start">
          <p className="text-sm">© 2024 SWC, IITG</p>
          <div className="flex items-center space-x-2 ">
            <svg
              width="35"
              height="25"
              viewBox="0 0 35 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34.257 12.5165L29.1382 0.138672H18.6248L23.9012 12.5568L18.546 24.975H29.1382L34.257 12.5165Z"
                fill="white"
              />
              <path
                d="M0 12.5165L5.11887 0.138672H15.6322L10.3559 12.5568L15.711 24.975H5.11887L0 12.5165Z"
                fill="white"
              />
              <path
                d="M11.7734 15.8522L18.6248 0.138672L22.5522 9.38195L15.711 24.975L11.7734 15.8522Z"
                fill="white"
              />
            </svg>
            <p className="font-bold text-sm">Students' Web Committee</p>
          </div>
        </div>
      </div>

      {/* Center Section: Crafted Message */}
      <p className="text-sm text-center flex-1 md:flex-none md:mr-8">
        Crafted with care by <b>Students' Web Committee, IITG</b>
      </p>

      {/* Right Section: Social Icons */}
      <div className="flex items-center space-x-4">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="h-6 w-6 hover:text-gray-400" />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn className="h-6 w-6 hover:text-gray-400" />
        </a>
        <button className="text-white hover:text-gray-400">
          <FaTimes className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}

export default Footer;