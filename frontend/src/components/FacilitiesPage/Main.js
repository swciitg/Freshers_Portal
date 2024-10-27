import React from 'react'
import Navbar from '../../common/Navbar'
import Footer from '../../common/Footer'
import Facilities from './Facilities'

const Main = () => {
    const Facdata=[{
        name: "Institute's Guesthouse",
        description:"Guest House of IIT Guwahati is a piece of art and is used to accommodate invitees, important personalities and guardians of students of the institute. Beauty of the architecture has given every rooms a view of scenic beauty of campus. It contains 60 rooms, and with new guesthouse on the verge of completion to increase the number of rooms available for guests to over 217. Guest House offers rooms with modern facilities, mesmerizing landscape, Internet access and excellent dining that will turn anyone starving.",
        imageUrl: "/img3.png",
    },
    {
        name: "Central Library",
        description:"Named after much renowned literary figure Sahityarathi Lakshminath Bezbaroa, the lakshinath Bezbaroa central library provides a glimpse to the present, past and the future world. Consisting of four floors,7500 sq. meter each, our library is a home to 1,54,564 printed volumes and 2291 subscribed current journals. Being a major central service point, it provides necessary supports for teaching, learning, research activities of the Institute by creating state-of-the-art facilities and offering innovative services to the academic community.Several e-books and online fulltext and abstract database, across all domain of academic pursuit through the campus network. Being a member of INDEST-AICTE Consortium and DBT eLibrary Consortium (DeLCON), the Library provides access to 12835 e-journals. The database for the entire collection is available through web-based On-Line Public Access Catalogue (WebOPAC).",
        imageUrl: "/clib.jpg",
    },
    {
        name: "Institute's Hospital",
        description:"A cold and cough? Or a bruise? Or maybe something more which cannot be cured with home remedies?! The campus has a hospital with three medical officers. It has three Visiting Consultants for ENT, Psychiatric and Paediatric consultation. Besides it has three Medical Consultants in OPD. IITG hospital has an Emergency Room, Minor OT room, ECG Room, 10 numbers of Patient Cabin, 02 numbers ofIsolation Cabin and 02 numbers of General Ward. Hospital has 24 hrs Doctor, Nursing and Pharmacy service for its patients provided by outsourced hospital service provider. It has a Reception Counter for Patients registration, Diagnostics Laboratory with specimen collection facility for its patients from 8.00 PM to 1.00 PM provided by outsourced hospital service provider. The Hospital also has two ambulances for patient care.",
        imageUrl: "/hospi.jpg",
    },
    {
        name: "Computer Centre",
        description:"The CC is the high speed backbone of all the LAN connections across the campus. Also built in 7500 sq.meter of area,The Computer & Communication Centre is solely responsible for keeping the Electronic Communication & Computation related facilities available to each and every member of IIT Guwahati. These facilities are available for 17 hours a day i.e. from 8 a.m to 12 a.m. Special care is taken to upgrade the facilities to meet the rising standards of IT.Also , it provides maintenance to the PCs of faculty and staff members.",
        imageUrl: "/img3.png",
    },
    {
        name: "Shopping Complexes",
        description:"Market Complex on main gate houses grocery stores, medical store, general store, restaurant, hair salon, beauty parlour, Computer repair shop. Pretty much everything to cater the basic needs of campus residents. Campus also has a marketplace on Faculty Gate, having restaurant and shops serving delicious local food and also housing various services such as cycle repair, Courier, Hair Salon etc.",
        imageUrl: "/img3.png",
    },
    {
        name: "On Campus Eateries",
        description:"Institute offers delectable food services so that the brains at work can perform their best. Although 'Ma-ke-Haath' ka khana cannot be replaced by anything, the campus does have alternatives if you want to skip the mess food. The campus houses various renowned restaurant franchises like Baskin and Robbins and Subway in Food Court adjoining the New SAC building. Local food chains like Florentine Restaurant,Manikanta and Ambrosia Bakery have their outlets in the Food court as well. The campus hosts a Cafe Coffee Day outlet, situated outside the institute library where every item is subsidized to half its original price. There are two restaurants in the Market Complex as well, namely Silverdine and Soiree. Along with these food joints, campus houses Vinaigrette canteen and there is a small market set up on faculty gate having various local shops for an occasional change of taste.",
        imageUrl: "/img3.png",
    },
    {
        name: "Banks And ATMs",
        description:"Need money for those books? or sports equipment? or just to give a treat? Banks and ATMs are not far away. The Institute houses three major banks. Canara Bank (IFSC: CNRB0008652, MICR Code: 781015008) and SBI Bank (IFSC: SBIN0014262, MICR Code: 781002053) along with their ATMs, located near academic complex. ICICI Bank (IFSC: ICIC0003325) and it’s ATM is located in market complex. Student Activity Centre for ease of students also houses an ATM, as it is close to student residential area.",
        imageUrl: "/img3.png",
    },
    {
        name: "Bus Facility",
        description:"If you have to reach the beautiful picturesque campus on the other side of the mighty Brahmaputra or want to visit a major riverine port city with immensive culture, The City of temples: Guwahati, you just have to take a bus from around the corner. There is bus facility to and from the campus and city every hour. So just hop on a bus and switch worlds at your convenience.Campus also operates an active bus facility within campus, picking up students from hostels. Timing are systematically adjusted so that you can attend class of any slot and come back again after classes are over. And the best thing is, Bus facility is free of cost for students.",
        imageUrl: "/img3.png",
    },
    {
        name: "E-Rickshaw Service",
        description:"Have luggage to carry somewhere in campus?, Late for class?, Have to go to food court, CCD, or restaurants in campus? Or just too lazy, or tired to walk? For the ease of students, Campus provides an active E-rickshaw service, just place your call and get a E-rickshaw at your doorstep. E-rickshaws charges a minor fee of Rs. 10. Timing of E-Rikshaw is 8 AM to 8 PM",
        imageUrl: "/image 47.png",
    },
    {
        name: "Railway Reservation Counter and Post Office",
        description:"Have luggage to carry somewhere in campus?, Late for class?, Have to go to food court, CCD, or restaurants in campus? Or just too lazy, or tired to walk? For the ease of students, Campus provides an active E-rickshaw service, just place your call and get a E-rickshaw at your doorstep. E-rickshaws charges a minor fee of Rs. 10. Timing of E-Rikshaw is 8 AM to 8 PM",
        imageUrl: "/img3.png",
    }
        
    ];
  return (
    <div className="min-h-screen bg-white">
    <Navbar />
    <div className="h-[calc(60vh-96px)] flex items-center justify-center px-4">
      <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-gray-300 text-center">
       Facilities
      </h1>
    </div>
        
      {/* Automated Hostel Rendering */}  
      <div className="space-y-16 py-16 px-10">
        {Facdata.map((event, index) => (
          <Facilities
            key={index}
            name={event.name}
            description={event.description}
            imageUrl={event.imageUrl}
            wikiUrl={event.wikiUrl}
          />
        ))}
      </div>
      <Footer/>
  </div>
  )
}

export default Main