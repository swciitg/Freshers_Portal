// src/components/FormPage.js
import React, { useState } from 'react';

const sections = [
  { id: 0, title: 'Form Section', content: 'This is the Form Section content.' },
  { id: 1, title: 'Provisional ID', content: 'Details about Provisional ID.' },
  { id: 2, title: 'Anti-ragging Affidavit', content: 'Information about Anti-ragging Affidavit.' },
  { id: 3, title: 'Hostel Undertaking', content: 'Hostel Undertaking details go here.' },
  { id: 4, title: 'Code of Conduct', content: 'Information on the Code of Conduct.' },
  { id: 5, title: 'Guidelines for Photo and Sign', content: 'Details about Photo and Sign guidelines.' },
  { id: 6, title: 'Portal for Personal Information', content: 'Use this portal for personal information.' },
  { id: 7, title: 'Permanent ID Card', content: 'Information about the Permanent ID Card.' },
  { id: 8, title: 'Bonafide Certificate', content: 'Bonafide Certificate details.' },
  { id: 9, title: "IITG Girl's Collective", content: "Details about IITG Girl's Collective." },
  { id: 10, title: 'How to reach campus', content: 'Instructions on how to reach campus.' },
];

const FormPage = () => {
  const [selectedSection, setSelectedSection] = useState(0); // Track the selected section

  const handleSectionClick = (id) => {
    setSelectedSection(id); // Update the selected section
  };

  return (
    <div className="flex flex-col md:flex-row p-4 md:p-16">
      {/* Sidebar */}
      <div className="w-1/3 max-w-xs bg-white ">
  <ul>
    {sections.map((section) => (
      <li
        key={section.id}
        className={`p-4 text-lg cursor-pointer flex items-center space-x-2 ${
          selectedSection === section.id
            ? 'font-bold text-black border-b-2 border-black'
            : 'text-gray-400 border-b border-gray-200'
        }`}
        onClick={() => handleSectionClick(section.id)}
      >
        <span className="mr-4">{String(section.id + 1).padStart(2, '0')}</span>
        <span>{section.title}</span>
      </li>
    ))}
  </ul>
</div>


      {/* Main Content */}
      <div className="flex-1 pb-12 pt-4 md:pt-2 md:pl-36">
        <div className='mt-8 max-w-3xl mx-auto p-4'>
        <h1 className="text-4xl font-medium text-orange-500 ">{sections[selectedSection].title}</h1>
        <p className="mt-2 text-sm text-orange-500">{sections[selectedSection].content}</p>
        </div>
        {/* Conditional Content for "Form Section" */}
        {selectedSection === 0 && (
          <div className=" mt-8 max-w-3xl mx-auto p-4">
            <h2 className="text-2xl font-semibold">Travel Detail Form</h2>
            <p className="mt-2 text-gray-600">
              Fill your travel details here so that we can arrange the facilities accordingly.
            </p>
            <button className="mt-4 px-6 hover:bg-gray-200 py-2 bg-gray-100 text-black border-2 rounded-full flex items-center space-x-2">
              <span>Fill the form</span>
              <span><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.5 17L17.5 7M17.5 7H7.5M17.5 7V17" stroke="#B3B3B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
            </button>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold">COVID Details Form</h2>
              <p className="mt-2 text-gray-600">
                Submit your COVID Test details here.
                <br />
                <span className="text-sm text-red-500">
                  Note: Fill this form when you receive your COVID Test Report.
                </span>
              </p>
              <button className="border-2 hover:bg-gray-200 mt-4 px-6 py-2 bg-gray-100 text-black rounded-full flex items-center space-x-2">
                <span>Fill the form</span>
                <span><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.5 17L17.5 7M17.5 7H7.5M17.5 7V17" stroke="#B3B3B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
              </button>
            </div>
          </div>
        )}
        {selectedSection === 1 && (
  <div className="mt-8 max-w-3xl mx-auto p-4">

    {/* Steps Heading */}
    <h3 className="text-xl font-semibold text-gray-800 mt-4">
      Steps to get a provisional ID
    </h3>

    {/* Step-by-Step Instructions */}
    <ol className="mt-4 space-y-4 text-gray-600 list-decimal pl-5">
      <li>
        Go to Admission Portal.
        <div className="mt-2">
          <button className="mt-2 px-6 py-2 border-2 rounded-full bg-gray-100 text-black hover:bg-gray-200 flex items-center space-x-2">
            <span>Go to the Portal</span>
            <span>
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 17L17.5 7M17.5 7H7.5M17.5 7V17"
                  stroke="#B3B3B3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
      </li>

      <li>
        Fill up the required information and <strong>submit it</strong>.
      </li>
      <li>
        After submission of the required additional information, download the
        provisional ID card.
      </li>
      <li>
        Take the <strong>print out</strong> of the provisional ID card in a photo paper.
      </li>
      <li>
        The students have to submit the <strong>provisional ID card</strong> while collecting
        the Permanent ID card.
      </li>
    </ol>

  </div>
)}
{selectedSection === 2 && (
  <div className="mt-8 max-w-3xl mx-auto p-4">

    {/* Instructions Heading */}
    <h3 className="text-xl font-semibold text-gray-800 mt-4">
      Instructions for filling up form
    </h3>

    {/* Step-by-Step Instructions */}
    <ol className="mt-4 space-y-4 text-gray-600 list-decimal pl-5">
      <li>
        Log on to{" "}
        <a
          href="http://www.antiragging.in"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          www.antiragging.in
        </a>{" "}
        or{" "}
        <a
          href="http://www.amanmovement.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          www.amanmovement.org
        </a>
      </li>

      {/* Buttons for Sites */}
      <div className="flex space-x-4 mt-2">
        <button className="px-6 py-2 border-2 rounded-full bg-gray-100 text-black hover:bg-gray-200 flex items-center space-x-2">
          <span>Go to site 1</span>
          <span>
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 17L17.5 7M17.5 7H7.5M17.5 7V17"
                stroke="#B3B3B3"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>

        <button className="px-6 py-2 border-2 rounded-full bg-gray-100 text-black hover:bg-gray-200 flex items-center space-x-2">
          <span>Go to site 2</span>
          <span>
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 17L17.5 7M17.5 7H7.5M17.5 7V17"
                stroke="#B3B3B3"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>

      <li>
        Click the option{" "}
        <strong>“Click here to download your Anti-Ragging Undertaking”.</strong>
      </li>

      <li>
        Fill in the information as desired and submit the form.
      </li>

      <li>
        After filling the form successfully, students will receive the{" "}
        <strong>Students’ Anti-Ragging Undertaking</strong> and the{" "}
        <strong>Parents Anti-Ragging Undertaking</strong> through their
        registered mail.
      </li>

      <li>
        Take the <strong>print out</strong> of both the Undertakings. The students
        and their parents will sign on them and submit the{" "}
        <strong>scanned copy</strong> of the same through mail at{" "}
        <a
          href="mailto:saoff@iitg.ac.in"
          className="text-blue-600 underline"
        >
          saoff@iitg.ac.in
        </a>
        .
      </li>

      <li>
        The hard copy of both the Undertakings are to be submitted in the{" "}
        <strong>Students' Affairs Office</strong> once the students reach the
        campus.
      </li>
    </ol>
  </div>
)}
{selectedSection === 3 && (
  <div className="mt-8 max-w-3xl mx-auto p-4">

    {/* Instructions Heading */}
    <h3 className="text-xl font-semibold text-gray-800 mt-4">
      Instructions for filling the form
    </h3>

    {/* Step-by-Step Instructions */}
    <ol className="mt-4 space-y-4 text-gray-600 list-decimal pl-5">
      <li>Download Hostel Undertakings.</li>

      {/* Download Button */}
      <div className="mt-2">
        <button className="px-6 py-2 border-2 rounded-full bg-gray-100 text-black hover:bg-gray-200 flex items-center space-x-2">
          <span>Download form</span>
          <span>
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 17L17.5 7M17.5 7H7.5M17.5 7V17"
                stroke="#B3B3B3"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>

      <li>
        Take the <strong>print out</strong> of the Undertakings. The students and
        their parents will sign on them and <strong>submit</strong> the{" "}
        <strong>scanned copy</strong> of the same through mail at{" "}
        <a
          href="mailto:saoff@iitg.ac.in"
          className="text-blue-600 underline"
        >
          saoff@iitg.ac.in
        </a>
        .
      </li>

      <li>
        The <strong>hard copy</strong> of the Undertakings are to be submitted in
        the <strong>Students' Affairs Office</strong> once the students reach the
        campus.
      </li>
    </ol>
  </div>
)}
{selectedSection === 4 && (
  <div className="mt-8 max-w-3xl mx-auto p-4">
    {/* Section Header */}

    {/* Instructions Heading */}
    <h3 className="text-xl font-semibold text-gray-800 mt-4">
      Instructions for the Pledge
    </h3>

    {/* Step-by-Step Instructions */}
    <ol className="mt-4 space-y-4 text-gray-600 list-decimal pl-5">
      <li>Download Code of Conduct form.</li>

      {/* Download Button */}
      <div className="mt-2">
        <button className="px-6 py-2 border-2 rounded-full bg-gray-100 text-black hover:bg-gray-200 flex items-center space-x-2">
          <span>Download form</span>
          <span>
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 17L17.5 7M17.5 7H7.5M17.5 7V17"
                stroke="#B3B3B3"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>

      <li>
        Take the <strong>print out</strong> of the form. The students and their
        parents will sign on them and <strong>submit</strong> the{" "}
        <strong>scanned copy</strong> of the same through mail at{" "}
        <a
          href="mailto:saoff@iitg.ac.in"
          className="text-blue-600 underline"
        >
          saoff@iitg.ac.in
        </a>
        .
      </li>

      <li>
        The <strong>hard copy</strong> of the form are to be submitted in the{" "}
        <strong>Students' Affairs Office</strong> once the students reach the
        campus.
      </li>
    </ol>
  </div>
)}
{selectedSection === 5 && (
  <div className="mt-8 max-w-3xl mx-auto p-4">

    {/* Photograph Specifications */}
    <h3 className="text-xl font-semibold text-gray-800 mt-6">
      Photograph Specifications
    </h3>
    <ul className="mt-2 space-y-4 text-gray-600 list-disc pl-5">
      <li>
        The photograph must be in color taken in a clear{" "}
        <strong>White Background</strong>.
      </li>
      <li>
        Photographs taken using a Mobile phone and other self-composed portraits
        are <strong>NOT</strong> acceptable.
      </li>
      <li>
        Face should occupy about <strong>50%</strong> of the area in the
        photograph with a full face view looking directly to the camera.
      </li>
      <li>
        The main features of the face must <strong>NOT</strong> be covered by
        hair, any cloth, or any shadow.
      </li>
      <li>Provide the image in <strong>JPG</strong> format only in square size.</li>
      <li>
        The dimension of the image should be{" "}
        <strong>200 x 200 pixels</strong> with a file size of{" "}
        <strong>15 KB - 80 KB</strong>.
      </li>
    </ul>

    {/* Signature Specifications */}
    <h3 className="text-xl font-semibold text-gray-800 mt-8">
      Signature Specifications
    </h3>
    <ul className="mt-2 space-y-4 text-gray-600 list-disc pl-5">
      <li>
        Please put your signature with a <strong>black ink</strong> on a{" "}
        <strong>white paper</strong>.
      </li>
      <li>Only <strong>JPG</strong> format will be accepted.</li>
      <li>
        The dimension of the image should be{" "}
        <strong>140 x 60 pixels</strong> with a file size of{" "}
        <strong>10 KB - 30 KB</strong>.
      </li>
    </ul>
  </div>
)}
{selectedSection === 6 && (
  <div className="mt-8 max-w-3xl mx-auto p-4">

    {/* Subheading */}
    <h3 className="text-xl font-semibold text-gray-800 mt-6">Steps</h3>

    {/* Steps List */}
    <ol className="mt-4 space-y-4 text-gray-600 list-decimal pl-5">
      <li>Go to the sprofile portal.</li>

      {/* Portal Button */}
      <div className="mt-2">
        <button className="px-6 py-2 border-2 rounded-full bg-gray-100 text-black hover:bg-gray-200 flex items-center space-x-2">
          <span>Portal</span>
          <span>
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 17L17.5 7M17.5 7H7.5M17.5 7V17"
                stroke="#B3B3B3"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>

      <li>Click on <strong>“Students Profile”</strong>.</li>
      <li>
        Fill up the necessary details (complete address, parents/guardian
        details, educational details, photo, signature etc.).
      </li>
      <li>Then click on <strong>"Save"</strong>.</li>
    </ol>
  </div>
)}
{selectedSection === 7 && (
  <div className="mt-8 max-w-3xl mx-auto p-4">


    {/* Subheading */}
    <h3 className="text-xl font-semibold text-gray-800 mt-6">
      Steps to apply for RFID enabled Identity Cards
    </h3>

    {/* Steps List */}
    <ol className="mt-4 space-y-4 text-gray-600 list-decimal pl-5">
      <li>Go to the sprofile portal</li>

      {/* Portal Button */}
      <div className="mt-2">
        <button className="px-6 py-2 border-2 rounded-full bg-gray-100 text-black hover:bg-gray-200 flex items-center space-x-2">
          <span>Portal</span>
          <span>
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 17L17.5 7M17.5 7H7.5M17.5 7V17"
                stroke="#B3B3B3"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>

      <li>Login by <strong>Webmail id/Roll No.</strong> and <strong>password</strong>.</li>
      <li>Click on <strong>“Students Profile”</strong>.</li>
      <li>Click on <strong>“ID Card”</strong>.</li>
      <li>Apply in the <strong>“Fresh”</strong> category.</li>
      <li>
        The students who cannot apply in the <strong>“Fresh”</strong> category need to apply in
        the <strong>“Late”</strong> category, with a fine of Rs. 300/-.
      </li>
    </ol>

    {/* Note Section */}
    <p className="mt-6 text-sm text-red-500">
      <strong>Note:</strong> The students have to submit the following documents while
      collecting the Permanent Identity Cards from the Students’ Affairs Section:-
    </p>
    <ul className="mt-2 text-gray-600 list-disc pl-8 space-y-2">
      <li>Provisional ID card</li>
      <li>Anti-Ragging Undertakings</li>
      <li>Hostel Undertaking</li>
      <li>Code of Conduct Pledge</li>
    </ul>
  </div>
)}
{selectedSection === 8 && (
  <div className="mt-8 max-w-3xl mx-auto p-4">

    {/* Subheading */}
    <h3 className="text-xl font-semibold text-gray-800 mt-6">
      For multipurpose bonafide certificate
    </h3>

    {/* Steps List */}
    <ol className="mt-4 space-y-4 text-gray-600 list-decimal pl-5">
      <li>Go to sprofile portal.</li>

      {/* Portal Button */}
      <div className="mt-2">
        <button className="px-6 py-2 border-2 rounded-full bg-gray-100 text-black hover:bg-gray-200 flex items-center space-x-2">
          <span>Portal</span>
          <span>
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 17L17.5 7M17.5 7H7.5M17.5 7V17"
                stroke="#B3B3B3"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>

      <li>Click on <strong>“Students Profile”</strong>.</li>
      <li>Then go to <strong>“Various Certificates”</strong> and apply accordingly.</li>
    </ol>
  </div>
)}
{selectedSection === 9 && (
  <div className="mt-8 max-w-3xl mx-auto p-4">


    {/* Description */}
    <p className="mt-2 text-gray-600">
      The portal (given below) is specifically for receiving complaints from
      female students on cases related to sexual harassment by faculty,
      students, staff, security personals, etc.
    </p>

    {/* Portal Button */}
    <div className="mt-4">
      <button className="px-6 py-2 border-2 rounded-full bg-gray-100 text-black hover:bg-gray-200 flex items-center space-x-2">
        <span>Portal</span>
        <span>
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 17L17.5 7M17.5 7H7.5M17.5 7V17"
              stroke="#B3B3B3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
    </div>
  </div>
)}
{selectedSection === 10 && (
  <div className="mt-8 max-w-3xl mx-auto p-4">

    <p className="text-gray-600 mt-4">
      Download instructions to reach campus from Airport, railway station.
    </p>
    <div className="mt-6">
      <button className="px-6 py-2 border-2 rounded-full bg-gray-100 text-black hover:bg-gray-200 flex items-center space-x-2">
        <span>Download</span>
      </button>
    </div>
  </div>
)}

      </div>
    </div>
  );
};

export default FormPage;
