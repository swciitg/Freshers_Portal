// Metadata used by scripts/generate-seo.js to build per route static HTML.
// Keep `routes` in sync with the <Route> list in src/App.js.

const site = {
  origin: 'https://swc.iitg.ac.in',
  // Must match "homepage" in package.json and <BrowserRouter basename> in src/App.js.
  basePath: '/freshers',
  name: 'Freshers Portal, IIT Guwahati',
  organization: "Students' Web Committee, IIT Guwahati",
  locale: 'en_IN',
  // Paths are relative to the public/ folder.
  defaultImage: '/Senate.jpg',
  logo: '/iitglogo.png',
};

// `blurb` is rendered into the fallback markup served to clients that do not
// run JavaScript, so it should read as a real sentence about the page.
const routes = [
  {
    path: '/',
    name: 'Home',
    title: 'Freshers Portal | IIT Guwahati',
    description:
      'The official Freshers Portal of IIT Guwahati: everything a new student needs about the campus, academics, hostels, student bodies and life at IIT Guwahati.',
    blurb:
      'Welcome to the Indian Institute of Technology Guwahati. This portal introduces incoming students to the campus, academics, hostels, the Students’ Gymkhana and campus life.',
  },
  {
    path: '/info',
    name: 'Important Information',
    title: 'Important Information | Freshers IIT Guwahati',
    description:
      'Key information for newly admitted IIT Guwahati students: documents and certificates to carry, reporting formalities, ID card issuance and items to bring to campus.',
    blurb:
      'Documents and certificates to bring, reporting formalities with the Student Affairs Section, Permanent ID Card issuance, and a checklist of items to carry to campus.',
  },
  {
    path: '/department',
    name: 'Departments',
    title: 'Departments | Freshers IIT Guwahati',
    description:
      'Overview of the academic departments and disciplines at IIT Guwahati for incoming undergraduate students.',
    blurb:
      'An overview of the academic departments and disciplines offered at IIT Guwahati.',
  },
  {
    path: '/branch-change',
    name: 'Branch Change',
    title: 'Branch Change | Freshers IIT Guwahati',
    description:
      'How the branch change process works at IIT Guwahati, including eligibility and the procedure for first year students.',
    blurb:
      'Eligibility criteria and the procedure for changing your branch of study at IIT Guwahati.',
  },
  {
    path: '/minor',
    name: 'Minor Discipline',
    title: 'Minor Discipline | Freshers IIT Guwahati',
    description:
      'Information on minor disciplines at IIT Guwahati: how minors work, the disciplines on offer and how students can enrol.',
    blurb:
      'How minor disciplines work at IIT Guwahati, which minors are offered, and how to enrol in one.',
  },
  {
    path: '/sgc',
    name: 'Students Gymkhana Council',
    title: 'Students Gymkhana Council | Freshers IIT Guwahati',
    description:
      'The Students’ Gymkhana Council of IIT Guwahati and its constituent boards, which run student activities across the campus.',
    blurb:
      'The Students’ Gymkhana Council and its constituent boards (Cultural, Technical, Sports, Welfare and Hostel Affairs) which together run student activities at IIT Guwahati.',
  },
  {
    path: '/swb',
    name: "Students' Welfare Board",
    title: "Students' Welfare Board | Freshers IIT Guwahati",
    description:
      'The Students’ Welfare Board of IIT Guwahati, which looks after student wellbeing, counselling support and welfare initiatives on campus.',
    blurb:
      'The Students’ Welfare Board looks after student wellbeing, counselling support and welfare initiatives at IIT Guwahati.',
  },
  {
    path: '/cult',
    name: 'Cultural Board',
    title: 'Cultural Board | Freshers IIT Guwahati',
    description:
      'The Cultural Board of IIT Guwahati and the cultural clubs, events and activities it runs for students.',
    blurb:
      'The Cultural Board and the clubs, events and activities it organises for students at IIT Guwahati.',
  },
  {
    path: '/tech',
    name: 'Technical Board',
    title: 'Technical Board | Freshers IIT Guwahati',
    description:
      'The Technical Board of IIT Guwahati and the technical clubs, competitions and activities open to students.',
    blurb:
      'The Technical Board and the technical clubs, competitions and activities open to students at IIT Guwahati.',
  },
  {
    path: '/sports',
    name: 'Sports Board',
    title: 'Sports Board | Freshers IIT Guwahati',
    description:
      'The Sports Board of IIT Guwahati, the sporting facilities on campus and the tournaments and activities it organises.',
    blurb:
      'The Sports Board, the sporting facilities available on campus, and the tournaments it organises.',
  },
  {
    path: '/hab',
    name: 'Hostel Affairs Board',
    title: 'Hostel Affairs Board | Freshers IIT Guwahati',
    description:
      'The Hostel Affairs Board of IIT Guwahati, its office bearers and the mess and hostel administration it oversees.',
    blurb:
      'The Hostel Affairs Board, its office bearers including the Chairman, the Convener for the Mess Management Committee and the General Secretaries of all hostels.',
  },
  {
    path: '/fests',
    name: 'Annual Festivals',
    title: 'Annual Festivals | Freshers IIT Guwahati',
    description:
      'The annual student festivals of IIT Guwahati, including the cultural, technical and sports festivals organised each year.',
    blurb:
      'The annual student festivals of IIT Guwahati, covering the cultural, technical and sports festivals organised on campus each year.',
  },
  {
    path: '/hostel-list',
    name: 'All Hostels',
    title: 'All Hostels | Freshers IIT Guwahati',
    description:
      'The student hostels of IIT Guwahati, with details of each hostel on the campus.',
    blurb: 'The student hostels at IIT Guwahati and details about each one.',
  },
  {
    path: '/hostel-fac',
    name: 'Hostel Facilities',
    title: 'Hostel Facilities | Freshers IIT Guwahati',
    description:
      'Facilities available in the IIT Guwahati hostels, including mess, common rooms and other amenities for residents.',
    blurb:
      'Facilities available inside the IIT Guwahati hostels, including the mess, common rooms and other resident amenities.',
  },
  {
    path: '/hostel-events',
    name: 'Inter Hostel Events',
    title: 'Inter Hostel Events | Freshers IIT Guwahati',
    description:
      'Inter hostel competitions and events at IIT Guwahati, in which hostels compete across cultural, technical and sporting categories.',
    blurb:
      'Inter hostel competitions at IIT Guwahati, where hostels compete across cultural, technical and sporting events.',
  },
  {
    path: '/facilities',
    name: 'Campus Facilities',
    title: 'Campus Facilities | Freshers IIT Guwahati',
    description:
      'Facilities on the IIT Guwahati campus available to students, including the library, gymnasium, medical and other amenities.',
    blurb:
      'Facilities on the IIT Guwahati campus available to students, including the library, gymnasium and other amenities.',
  },
  {
    path: '/faqs',
    name: 'FAQs',
    title: 'FAQs | Freshers IIT Guwahati',
    description:
      'Frequently asked questions from newly admitted IIT Guwahati students, answered by the Students’ Web Committee.',
    blurb:
      'Frequently asked questions from newly admitted students at IIT Guwahati, with answers.',
  },
  {
    path: '/contact',
    name: 'Contact Us',
    title: 'Contact Us | Freshers IIT Guwahati',
    description:
      'Contact details for reaching the student bodies and offices at IIT Guwahati that support newly admitted students.',
    blurb:
      'How to reach the student bodies and offices at IIT Guwahati that support newly admitted students.',
  },
];

module.exports = { site, routes };
