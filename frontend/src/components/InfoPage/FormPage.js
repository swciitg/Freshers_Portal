// src/components/FormPage.js
import React, { useState } from 'react';

const sections = [
  { 
    id: 0, 
    title: 'Registration Guide & Form Section', 
    content: 'All Forms and Registration Guide',
    details: (
      <div className="space-y-6">
      {/* Academic Form Section */}
      <div >
        <div className="flex items-start space-x-3 mb-4">
          <div className="bg-gray-400 rounded-lg p-2 flex-shrink-0">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2">All Academic Forms</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Access all academic forms and documentation through our centralized portal
            </p>
          </div>
        </div>
        
        <a 
          href='https://iitg.ac.in/acad/forms.php/#ug'
          className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-400 hover:bg-gray-700 text-white font-medium rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <span>Access Forms Portal</span>
          <svg width="16" height="16" viewBox="0 0 25 24" fill="none">
            <path d="M7.5 17L17.5 7M17.5 7H7.5M17.5 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    
      {/* Essential Documents Section */}
      <div className="bg-gradient-to-br from-white-50 to-gray-50 rounded-xl p-6 border border-amber-100 shadow-sm">
        <div className="flex items-start space-x-3 mb-6">
          <div className="bg-amber-500 rounded-lg p-2 flex-shrink-0">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Essential Documents Checklist</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Make sure to bring all required documents from home for a smooth admission process
            </p>
          </div>
        </div>
    
        <div className="grid gap-4 md:gap-3">
          {/* Academic Documents */}
          <div className="bg-white rounded-lg p-4 border-l-4 border-green-400 hover:bg-green-50 transition-colors duration-200">
            <div className="flex items-start space-x-3">
              <div className="bg-green-100 rounded-full p-1 mt-0.5">
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-gray-900 text-sm">Academic Certificates</h4>
                <p className="text-gray-600 text-xs mt-1">All certificates and mark sheets/grade cards of 10th and 12th Class (including Pass Certificate, if available)</p>
              </div>
            </div>
          </div>
    
          {/* Admission Documents */}
          <div className="bg-white rounded-lg p-4 border-l-4 border-blue-400 hover:bg-blue-50 transition-colors duration-200">
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 rounded-full p-1 mt-0.5">
                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-gray-900 text-sm">Admission Documents</h4>
                <div className="text-gray-600 text-xs mt-1 space-y-1">
                  <p>• Admit Card</p>
                  <p>• Provisional Seat Allotment Letter</p>
                  <p>• Proof of payment of Seat Acceptance Fee</p>
                </div>
              </div>
            </div>
          </div>
    
          {/* Category Certificates */}
          <div className="bg-white rounded-lg p-4 border-l-4 border-purple-400 hover:bg-purple-50 transition-colors duration-200">
            <div className="flex items-start space-x-3">
              <div className="bg-purple-100 rounded-full p-1 mt-0.5">
                <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-gray-900 text-sm">Category Certificates <span className="text-xs font-normal text-gray-500">(if applicable)</span></h4>
                <div className="text-gray-600 text-xs mt-1 space-y-1">
                  <p>• <strong>OBC(NCL):</strong> OBC-Non Creamy Layer Certificate (issued on or after 01.04.2024)</p>
                  <p>• <strong>SC/ST:</strong> Caste Certificate in prescribed format</p>
                  <p>• <strong>PwD:</strong> Physical Disability Certificate in prescribed format</p>
                </div>
              </div>
            </div>
          </div>
    
          {/* Fee Waiver Documents */}
          <div className="bg-white rounded-lg p-4 border-l-4 border-indigo-400 hover:bg-indigo-50 transition-colors duration-200">
            <div className="flex items-start space-x-3">
              <div className="bg-indigo-100 rounded-full p-1 mt-0.5">
                <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-gray-900 text-sm">Fee Waiver Documents <span className="text-xs font-normal text-gray-500">(if claiming)</span></h4>
                <div className="text-gray-600 text-xs mt-1 space-y-1">
                  <p>• Family Annual Income Certificate (April 1, 2024 to March 31, 2025)</p>
                  <p>• Income Affidavit on Rs. 100/- stamp paper</p>
                </div>
              </div>
            </div>
          </div>
    
          {/* Personal Documents */}
          <div className="bg-white rounded-lg p-4 border-l-4 border-teal-400 hover:bg-teal-50 transition-colors duration-200">
            <div className="flex items-start space-x-3">
              <div className="bg-teal-100 rounded-full p-1 mt-0.5">
                <svg className="w-4 h-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-gray-900 text-sm">Personal Documents</h4>
                <div className="text-gray-600 text-xs mt-1 space-y-1">
                  <p>• Passport (for foreign nationals) + OCI/PIO card if applicable</p>
                  <p>• Two sets of colour passport-size and stamp-size photographs (white background)</p>
                  <p>• Aadhaar Card</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    
        {/* Pro Tip */}
        <div className="mt-6 bg-gradient-to-r from-yellow-100 to-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-start space-x-2">
            <svg className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <div>
              <h4 className="font-semibold text-yellow-800 text-sm">Pro Tip</h4>
              <p className="text-yellow-700 text-xs mt-1">Keep multiple photocopies of all documents and organize them in separate folders for easy access during admission.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    )
  },
  // Insert at index 1
{
  id: 1,
  title: "Campus Essentials at Manas Community Hall",
  content: "Find all your campus essentials and more at the Manas Community Hall.",
  details: (
    <div className="mt-8 max-w-3xl mx-auto p-4 space-y-6">
      <div className="flex items-start space-x-3">
        <div className="bg-orange-500 rounded-lg p-2 flex-shrink-0">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c1.38 0 2.5 1.12 2.5 2.5S13.38 13 12 13s-2.5-1.12-2.5-2.5S10.62 8 12 8zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Welcome to the Manas Community Hall!</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Kickstart your campus life with everything you need, all in one place! The Manas Community Hall (near Manas Hostel) hosts a vibrant marketplace for new students.
          </p>
        </div>
      </div>
      {/* Stalls Grid */}
      <div className="grid md:grid-cols-3 gap-4">
        {/* Cycles */}
        <div className="bg-white rounded-lg p-4 border-l-4 border-cyan-400 hover:bg-cyan-50 transition-colors duration-200">
          <div className="flex items-center space-x-2">
            <span className="bg-cyan-100 rounded-full p-1">
              <svg className="w-4 h-4 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 16a3 3 0 100-6 3 3 0 000 6zm10 0a3 3 0 100-6 3 3 0 000 6zM7 13h6l-2-5H9l-2 5z" />
              </svg>
            </span>
            <h4 className="font-semibold text-gray-900 text-sm">Cycles & Accessories</h4>
          </div>
          <p className="text-gray-600 text-xs mt-2">Buy cycles for easy campus commute, plus locks, helmets, and more.</p>
        </div>
        {/* Basic Amenities */}
        <div className="bg-white rounded-lg p-4 border-l-4 border-green-400 hover:bg-green-50 transition-colors duration-200">
          <div className="flex items-center space-x-2">
            <span className="bg-green-100 rounded-full p-1">
              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a2 2 0 012 2v1h2a2 2 0 012 2v9a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h2V4a2 2 0 012-2zm0 2H8v1h4V4h-2z" />
              </svg>
            </span>
            <h4 className="font-semibold text-gray-900 text-sm">Basic Amenities</h4>
          </div>
          <ul className="text-gray-600 text-xs mt-2 list-disc pl-4 space-y-1">
            <li>Buckets, mattresses, mosquito nets</li>
            <li>Cushions, towels, toiletries</li>
            <li>And much more!</li>
          </ul>
        </div>
        {/* Education Loans */}
        <div className="bg-white rounded-lg p-4 border-l-4 border-indigo-400 hover:bg-indigo-50 transition-colors duration-200">
          <div className="flex items-center space-x-2">
            <span className="bg-indigo-100 rounded-full p-1">
              <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6zm2 2h4v2H8V6zm0 4h4v2H8v-2z" />
              </svg>
            </span>
            <h4 className="font-semibold text-gray-900 text-sm">Education Loan Stalls</h4>
          </div>
          <p className="text-gray-600 text-xs mt-2">Meet representatives from various banks and explore student loan options.</p>
        </div>
      </div>
      {/* Note */}
      <div className="mt-6 bg-gradient-to-r from-orange-100 to-yellow-50 border border-orange-200 rounded-lg p-4">
        <div className="flex items-start space-x-2">
          <svg className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <div>
            <h4 className="font-semibold text-orange-800 text-sm">Pro Tip</h4>
            <p className="text-orange-700 text-xs mt-1">
              Don’t worry if you forgot something at home! Most essentials are available at the Manas Community Hall. Visit early for the best selection.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
},

  { 
    id: 2, 
    title: 'Provisional ID', 
    content: 'Get your provisional ID card details and download process.',
    details: (
      <div className="space-y-4">
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
         <a href='https://online.iitg.ac.in/admission/'> <button className="mt-2 px-6 py-2 border-2 rounded-full bg-gray-100 text-black hover:bg-gray-200 flex items-center space-x-2">
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
          </button></a>
        </div>
      </li>

      <li>
      Students should visit the admission portal
      </li>
      <li>
      Fill in the required details in the portal during the admission process.
      </li>
      <li>
      After the physical verification and onboarding of the students, the provisional ID card will be issued.
      </li>
      <li>
      The date for issuing the provisional ID card will be intimated by the Student Affairs Section.
      </li>
    </ol>

  </div>
      </div>
    )
  },
  { 
    id: 3, 
    title: 'Anti-ragging Affidavit', 
    content: 'Submit your anti-ragging affidavit as required by UGC guidelines.',
    details: (
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
        {/* <div className="flex space-x-4 mt-2">
         <a href='https://www.antiragging.in'> <button className="px-6 py-2 border-2 rounded-full bg-gray-100 text-black hover:bg-gray-200 flex items-center space-x-2">
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
          </button></a>
  
         <a href='https://amanmovement.org'> <button className="px-6 py-2 border-2 rounded-full bg-gray-100 text-black hover:bg-gray-200 flex items-center space-x-2">
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
          </button></a>
        </div> */}
  
        <li>
        Click on “Student Registration” and fill in the required details including:
        <ul>
          <li>Personal information</li>
          <li>Parent/Guardian details</li>
          <li>Institute details (IIT Guwahati is listed under the University section)</li>
          <li>Course and admission details</li>
        </ul>
        </li>
  
        <li>
        After submitting the form, you will receive an email confirmation with a reference number and a PDF of your affidavit.
        </li>
  
        <li>
        Download and sign the affidavit (both student and parent/guardian signatures required).
        </li>
  
        <li>
        Upload the scanned copy of the signed affidavit during the online admission process.
        </li>
  
        <li>
        Submit the physical copy of the signed affidavit after arriving on campus during the physical verification process.
        </li>
      </ol>
    </div>
    )
  },
  { 
    id: 4, 
    title: 'Hostel Undertaking', 
    content: 'Complete hostel undertaking form for accommodation.',
    details: (
      <div className="mt-8 max-w-3xl mx-auto p-4">

      {/* Instructions Heading */}
      <h3 className="text-xl font-semibold text-gray-800 mt-4">
      The instructions for Hostel Undertakings for hostel residents are as follows:
      </h3>
  
      {/* Step-by-Step Instructions */}
      <ol className="mt-4 space-y-4 text-gray-600 list-decimal pl-5">
        <li>Download Hostel Undertakings.</li>
  
        {/* Download Button */}
        <div className="mt-2">
          <a href='https://iitg.ac.in/freshers/res/downloads/UNDERTAKING_HOSTEL_RESIDENTS_2020.pdf'><button className="px-6 py-2 border-2 rounded-full bg-gray-100 text-black hover:bg-gray-200 flex items-center space-x-2">
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
          </button></a>
        </div>
  
        <li>
        Take a printout of the Undertakings.
        </li>
  
        <li>
        The students and their parents must sign the documents.
        </li>
        <li>
        Upload the scanned copy of the signed Undertakings in the online admission portal during the admission process.
        </li>
        <li>
        Submit the hard copy of the signed Undertakings in the Students’ Affairs Office after reaching the campus.
        </li>
      </ol>
    </div>
    )
  },
  { 
    id: 5, 
    title: 'Code of Conduct', 
    content: 'Read and acknowledge the institute code of conduct.',
    details: (
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
        <a href='https://iitg.ac.in/freshers/res/downloads/CODE_OF_CONDUCT_PLEDGE_2020.pdf'><button className="px-6 py-2 border-2 rounded-full bg-gray-100 text-black hover:bg-gray-200 flex items-center space-x-2">
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
        </button></a>
      </div>

      <li>
      Take a printout of the form.
      </li>

      <li>The students and their parents must sign the form.</li>
      <li>Upload the scanned copy of the signed form in the online admission portal during the admission process.</li>
      <li>Submit the hard copy of the signed form in the Students’ Affairs Office after reaching the campus.</li>
    </ol>
  </div>
    )
  },
  { 
    id: 6, 
    title: 'Guidelines for Photo and Sign', 
    content: 'Photo and signature specifications for official documents.',
    details: (
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
    )
  },
  { 
    id: 7, 
    title: 'Portal for Personal Information', 
    content: 'Update your personal information in the student portal.',
    details: (
      <div className="mt-8 max-w-3xl mx-auto p-4">

    {/* Subheading */}
    <h3 className="text-xl font-semibold text-gray-800 mt-6">Steps</h3>

    {/* Steps List */}
    <ol className="mt-4 space-y-4 text-gray-600 list-decimal pl-5">
      <li>Go to the sprofile portal.</li>

      {/* Portal Button */}
      <div className="mt-2">
       <a href='https://online.iitg.ac.in/sso/index.jsp'><button className="px-6 py-2 border-2 rounded-full bg-gray-100 text-black hover:bg-gray-200 flex items-center space-x-2">
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
        </button></a> 
      </div>

      <li>Click on <strong>“Students Profile”</strong>.</li>
      <li>
        Fill up the necessary details (complete address, parents/guardian
        details, educational details, photo, signature etc.).
      </li>
      <li>Then click on <strong>"Save"</strong>.</li>
    </ol>
  </div>
    )
  },
  { 
    id: 8, 
    title: 'Permanent ID Card', 
    content: 'Information about permanent ID card collection.',
    details: (
      <div className="mt-8 max-w-3xl mx-auto p-4">


    {/* Subheading */}
    <h3 className="text-xl font-semibold text-gray-800 mt-6">
    Instructions for Permanent ID Card:
    </h3>

    {/* Steps List */}
    <ol className="mt-4 space-y-4 text-gray-600 list-decimal pl-5">
      <li>Go to the sprofile portal</li>

      {/* Portal Button */}
      <div className="mt-2">
       <a href='https://online.iitg.ac.in/sso/index.jsp'> <button className="px-6 py-2 border-2 rounded-full bg-gray-100 text-black hover:bg-gray-200 flex items-center space-x-2">
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
        </button></a>
      </div>

      <li>After reaching the campus, students will be intimated by the Student Affairs Section regarding the application for the Permanent ID Card.</li>
      <li>Once intimated, students will get an option to apply for the ID card through the Student Affairs Portal.</li>
      <li>Students are advised to follow the instructions and complete the application within the given timeline.</li>
      <li>Apply in the <strong>“Fresh”</strong> category.</li>
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
    )
  },
  { 
    id: 9, 
    title: 'Bonafide Certificate', 
    content: 'Apply for bonafide certificate for official purposes.',
    details: (
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
        <a href='https://online.iitg.ac.in/sso/index.jsp'><button className="px-6 py-2 border-2 rounded-full bg-gray-100 text-black hover:bg-gray-200 flex items-center space-x-2">
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
        </button></a>
      </div>

      <li>Click on <strong>“Students Profile”</strong>.</li>
      <li>Then go to <strong>“Various Certificates”</strong> and apply accordingly.</li>
    </ol>
  </div>
    )
  },
  { 
    id: 10, 
    title: "IITG Girl's Collective", 
    content: "Connect with IITG Girl's Collective community.",
    details: (
      <div className="mt-8 max-w-3xl mx-auto p-4">


    {/* Description */}
    <p className="mt-2 text-gray-600">
      The portal (given below) is specifically for receiving complaints from
      female students on cases related to sexual harassment by faculty,
      students, staff, security personals, etc.
    </p>

    {/* Portal Button */}
    <div className="mt-4">
      <a href='https://www.iitg.ac.in/iitgicc/'><button className="px-6 py-2 border-2 rounded-full bg-gray-100 text-black hover:bg-gray-200 flex items-center space-x-2">
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
      </button></a>
    </div>
  </div>
    )
  },
  { 
    id: 11, 
    title: 'How to reach campus', 
    content: 'Travel instructions and directions to reach IIT Guwahati.',
    details: (
      <div className="space-y-6">
  {/* Travel from Airport Section */}
  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
    <div className="flex items-start space-x-3 mb-6">
      <div className="bg-gray-700 rounded-lg p-2 flex-shrink-0">
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Travel from Guwahati Airport to IIT Guwahati</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Choose the best option based on your comfort level and budget preferences
        </p>
      </div>
    </div>

    <div className="space-y-4">
      {/* Option 1: By Cab */}
      <div className="bg-gray-50 rounded-lg p-5 border border-gray-100 hover:bg-gray-100 transition-colors duration-200">
        <div className="flex items-start space-x-3">
          <div className="bg-green-500 rounded-full p-1 mt-1 flex-shrink-0">
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <h4 className="font-semibold text-gray-900 text-base">Option 1: By Cab</h4>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">Recommended</span>
            </div>
            <div className="text-gray-700 text-sm space-y-2">
              <p>• Book a pre-paid taxi from the counter inside the airport or hire a cab from outside the terminal</p>
              <p>• <strong>Approximate fare:</strong> <span className="bg-gray-200 px-2 py-1 rounded text-gray-800 font-medium">Rs. 700–800</span></p>
              <p>• Inform the driver to drop you at your respective hostel inside the campus, rather than at the main gate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Option 2: Budget Option */}
      <div className="bg-gray-50 rounded-lg p-5 border border-gray-100 hover:bg-gray-100 transition-colors duration-200">
        <div className="flex items-start space-x-3">
          <div className="bg-blue-500 rounded-full p-1 mt-1 flex-shrink-0">
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <h4 className="font-semibold text-gray-900 text-base">Option 2: Budget Option</h4>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">For Confident Travellers</span>
            </div>
            <div className="text-gray-700 text-sm space-y-2">
              <div className="flex items-center space-x-2">
                <span className="bg-gray-300 text-gray-800 text-xs px-2 py-1 rounded-full font-medium">Step 1</span>
                <p>Walk ~300m from airport to VIP Chowk</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="bg-gray-300 text-gray-800 text-xs px-2 py-1 rounded-full font-medium">Step 2</span>
                <p>Take trekker to Jalukbari Bus Stand – <span className="bg-gray-200 px-1 py-0.5 rounded text-gray-800 font-medium">Rs. 30</span></p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="bg-gray-300 text-gray-800 text-xs px-2 py-1 rounded-full font-medium">Step 3</span>
                <p>Shared autorickshaw to IIT KV Gate – <span className="bg-gray-200 px-1 py-0.5 rounded text-gray-800 font-medium">Rs. 20</span></p>
              </div>
            </div>
            <div className="mt-3 bg-yellow-50 border border-yellow-200 rounded-lg p-3">
              <div className="flex items-start space-x-2">
                <svg className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <p className="text-yellow-800 text-xs">Recommended only if comfortable with multiple transfers and not carrying heavy luggage</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Travel from Railway Stations Section */}
  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
    <div className="flex items-start space-x-3 mb-6">
      <div className="bg-gray-700 rounded-lg p-2 flex-shrink-0">
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Travel from Railway Stations to IIT Guwahati</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Direct cab service available from both major railway stations in Guwahati
        </p>
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-4">
      {/* Guwahati Railway Station */}
      <div className="bg-gray-50 rounded-lg p-5 border border-gray-100 hover:bg-gray-100 transition-colors duration-200">
        <div className="flex items-start space-x-3">
          <div className="bg-gray-600 rounded-full p-1 mt-1 flex-shrink-0">
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-gray-900 text-base mb-2">Guwahati Railway Station (GHY)</h4>
            <div className="text-gray-700 text-sm space-y-2">
              <div className="flex justify-between items-center">
                <span>Distance:</span>
                <span className="bg-gray-200 px-2 py-1 rounded text-gray-800 font-medium">22 km</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Cab fare:</span>
                <span className="bg-gray-200 px-2 py-1 rounded text-gray-800 font-medium">Rs. 250–300</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Kamakhya Railway Station */}
      <div className="bg-gray-50 rounded-lg p-5 border border-gray-100 hover:bg-gray-100 transition-colors duration-200">
        <div className="flex items-start space-x-3">
          <div className="bg-gray-600 rounded-full p-1 mt-1 flex-shrink-0">
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-gray-900 text-base mb-2">Kamakhya Railway Station (KYQ)</h4>
            <div className="text-gray-700 text-sm space-y-2">
              <div className="flex justify-between items-center">
                <span>Distance:</span>
                <span className="bg-gray-200 px-2 py-1 rounded text-gray-800 font-medium">14.3 km</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Cab fare:</span>
                <span className="bg-gray-200 px-2 py-1 rounded text-gray-800 font-medium">Rs. 250–300</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Important Note */}
    <div className="mt-6 bg-gray-100 border border-gray-200 rounded-lg p-4">
      <div className="flex items-start space-x-2">
        <svg className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
        <div>
          <h4 className="font-semibold text-gray-800 text-sm"> Important Tip</h4>
          <p className="text-gray-700 text-xs mt-1">Request the driver to drop you directly at your allotted hostel within IIT Guwahati campus for convenience and to avoid carrying luggage over long distances.</p>
        </div>
      </div>
    </div>
  </div>
</div>

    )
  },
  // Add at the end of the array
{
  id: 12,
  title: "Campus Map",
  content: "Navigate IIT Guwahati campus with the interactive map.",
  details: (
    <div className="mt-8 max-w-4xl mx-auto p-4 space-y-8">
      {/* Header */}
      <div className="flex items-start space-x-3">
        <div className="bg-blue-600 rounded-lg p-2 flex-shrink-0">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-1">Explore the Campus</h3>
          <p className="text-gray-600 text-sm">
            Find your way around IIT Guwahati! Click below to open the official interactive campus map.
          </p>
        </div>
      </div>
      {/* Map Card */}
      <div className="flex justify-center">
        <div className="w-full max-w-md bg-gray-100 rounded-2xl shadow-md border border-blue-100 flex items-center justify-center p-4">
          <img 
            src="/freshers/Campus_map.jpg" 
            alt="IIT Guwahati Campus Map" 
            className="rounded-lg object-contain w-full h-80 md:h-96"
            style={{ background: "#fff" }}
          />
        </div>
      </div>
      {/* Button */}
      <div className="flex justify-center">
        <a
          href="https://www.iitg.ac.in/campusmap/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-800 text-white font-semibold rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg"
        >
          <span>Open Campus Map</span>
          <svg width="16" height="16" viewBox="0 0 25 24" fill="none">
            <path d="M7.5 17L17.5 7M17.5 7H7.5M17.5 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  )
},


];

const FormPage = () => {
  const [selectedSection, setSelectedSection] = useState(0);
  const [expandedSections, setExpandedSections] = useState(new Set([0])); // First section expanded by default

  const handleSectionClick = (id) => {
    setSelectedSection(id);
  };

  const toggleMobileSection = (id) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedSections(newExpanded);
  };

  return (
    <div className="flex flex-col md:flex-row p-4 md:p-16">
      {/* Mobile Accordion View - Only visible on mobile */}
      <div className="md:hidden space-y-2">
        <div className="mb-6">
          <div className="flex items-center space-x-3 mb-4">
          </div>
        </div>

        {sections.map((section) => (
          <div key={section.id} className="bg-white rounded-lg shadow-sm border">
            <button
              className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              onClick={() => toggleMobileSection(section.id)}
            >
              <div className="flex items-center space-x-3">
                <span className={`text-sm font-medium w-8 h-8 rounded-full flex items-center justify-center ${
                  expandedSections.has(section.id) ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {String(section.id + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-medium text-gray-900">{section.title}</h3>
                  <p className="text-sm text-gray-500">{section.content}</p>
                </div>
              </div>
              <svg 
                className={`w-5 h-5 text-gray-400 transition-transform ${
                  expandedSections.has(section.id) ? 'rotate-180' : ''
                }`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {expandedSections.has(section.id) && (
              <div className="px-4 pb-4 border-t bg-gray-50">
                <div className="pt-4">
                  {section.details}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Desktop Sidebar - Hidden on mobile, unchanged for desktop */}
      <div className="hidden md:block w-1/3 max-w-xs bg-white">
        <ul>
          {sections.map((section) => (
            <li
              key={section.id}
              className={`p-4 text-lg cursor-pointer flex items-center space-x-2 ${
                selectedSection === section.id
                  ? 'font-bold text-black border-b-2 border-black'
                  : 'text-gray-600 border-b border-gray-200'
              }`}
              onClick={() => handleSectionClick(section.id)}
            >
              <span className="mr-4">{String(section.id + 1).padStart(2, '0')}</span>
              <span>{section.title}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop Main Content - Hidden on mobile, unchanged for desktop */}
      <div className="hidden md:block flex-1 pb-12 pt-4 md:pt-2 md:pl-36 px-4 md:px-0">
        <h1 className="text-2xl md:text-4xl font-medium text-orange-500">{sections[selectedSection].title}</h1>
        <p className="mt-2 text-sm text-orange-500">{sections[selectedSection].content}</p>

        {/* Desktop content display */}
        <div className="mt-8">
          {sections[selectedSection].details}
        </div>
      </div>
    </div>
  );
};

export default FormPage;
