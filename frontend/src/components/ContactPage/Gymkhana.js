import React from "react";
import { Mail, Phone } from "lucide-react";

const gymkhanaMembers = [
  {
    name: "Sourabh Saini",
    position: "Vice President, Students' Gymkhana Council",
    email: "vp@iitg.ac.in",
    phone: "9588303662",
    photo: "/freshers/gymkhana/SOURABH_SAINI.jpg",
  },
  {
    name: "Vaishnavi Agarwal",
    position: "General Secretary, Cultural Board",
    email: "cultsec@iitg.ac.in",
    phone: "9002233445",
    photo: "/freshers/gymkhana/Cultural_Secretary.jpg",
  },
  {
    name: "Surbhitkumar Gang",
    position: "General Secretary, Welfare Board",
    email: "gensec_welfare@iitg.ac.in",
    phone: "8200537139",
    photo: "/freshers/gymkhana/SURBHITKUMAR_GANG.jpg",
  },
  {
    name: "Ashish More",
    position: "General Secretary, Students' Web Committee(SWC)",
    email: "swc@iitg.ac.in",
    phone: "8956336360",
    photo: "/freshers/gymkhana/Ashish_GS_SWC_MORE_ASHISH_ANANDA.jpeg",
  },
  {
    name: "Rahul Deka",
    position: "General Secretary, Hostel Affairs Board",
    email: "gensec_hostel@iitg.ac.in",
    phone: "8638182286",
    photo: "/freshers/gymkhana/Rahul_Deka.jpeg",
  },
  {
    name: "Sourajjal Mondal",
    position: "General Secretary, Technical Board",
    email: "techsec@iitg.ac.in",
    phone: "9330886984",
    photo: "/freshers/gymkhana/Sourajjal_Mondal.jpeg",
  },
  {
    name: "Aditya Dhaniyaal",
    position: "General Secretary, SAIL",
    email: "sail@iitg.ac.in",
    phone: "7302325346",
    photo: "/freshers/gymkhana/ADITYA_DHANIYAAL.jpg",
  },
  {
    name: "Surachita Das",
    position: "General Secretary, Students' Academic Board(SAB)",
    email: "gs_sab@iitg.ac.in",
    phone: "9734747192",
    photo: "/freshers/gymkhana/Surachita_Das.png",
  },
  {
    name: "Jaden Joseph Moncy",
    position: "General Secretary, Sports Board",
    email: "sportsec@iitg.ac.in",
    phone: "8056031481",
    photo: "/freshers/gymkhana/JADEN_JOSEPH_MONCY.jpeg",
  },
];

const Gymkhana = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Gymkhana
        </h1>
        <p className="text-lg text-gray-600">
          Meet the student leaders supporting campus life and activities.
        </p>
      </div>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {gymkhanaMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200"
          >
            <div className="h-64 overflow-hidden">
              <img
                src={member.photo}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500 mb-4">{member.position}</p>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-gray-500" />
                  <span>+91 {member.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm break-all">
                  <Mail className="w-4 h-4 text-gray-500" />
                  <span>{member.email}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gymkhana;
