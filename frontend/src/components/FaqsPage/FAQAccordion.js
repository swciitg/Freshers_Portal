import React, { useState } from "react";
import sections from "./faqData";

const FAQAccordion = () => {
  const [expandedSections, setExpandedSections] = useState(new Set([0])); // First section expanded by default

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
          <div className="flex items-center space-x-3 mb-4"></div>
        </div>

        {sections.map((section) => (
          <div
            key={section.id}
            className="bg-white rounded-lg shadow-sm border"
          >
            <button
              className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              onClick={() => toggleMobileSection(section.id)}
              aria-expanded={expandedSections.has(section.id)}
            >
              <div className="flex items-center space-x-3">
                <span
                  className={`transition-all duration-[0.25s] ease-in-out overflow-hidden text-sm font-medium w-8 h-8 rounded-full flex items-center justify-center ${
                    expandedSections.has(section.id)
                      ? "bg-orange-500 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {String(section.id + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 text-sm leading-tight">
                    {section.title}
                  </h3>
                </div>
              </div>
              <svg
                className={`transition-all duration-[0.25s] ease-in-out overflow-hidden w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ml-2 ${
                  expandedSections.has(section.id) ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div
              className={`transition-[max-height] duration-[0.25s] ease-in-out overflow-hidden px-4  border-t bg-gray-50 ${
                expandedSections.has(section.id) ? "max-h-screen" : "max-h-0"
              } `}
            >
              <div className="pt-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {section.content}
                </p>

                {/* All your existing detailed content for each section */}
                {section.id === 1 && (
                  <div className="mt-4 space-y-4">
                    <h4 className="font-semibold text-gray-900">
                      City to Campus
                    </h4>
                    <div className="overflow-x-auto">
                      <table className="table-auto border-collapse border border-gray-300 w-full text-xs">
                        <thead className="bg-gray-200">
                          <tr>
                            <th className="border border-gray-300 px-2 py-1">
                              Time
                            </th>
                            <th className="border border-gray-300 px-2 py-1">
                              From
                            </th>
                            <th className="border border-gray-300 px-2 py-1">
                              To
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-2 py-1">
                              6:45 a.m.
                            </td>
                            <td className="border border-gray-300 px-2 py-1">
                              Pan Bazar
                            </td>
                            <td className="border border-gray-300 px-2 py-1">
                              Subansiri Hostel
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-2 py-1">
                              8:15 a.m.
                            </td>
                            <td className="border border-gray-300 px-2 py-1">
                              Pan Bazar
                            </td>
                            <td className="border border-gray-300 px-2 py-1">
                              Subansiri Hostel
                            </td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-2 py-1">
                              9:00 a.m.
                            </td>
                            <td className="border border-gray-300 px-2 py-1">
                              Pan Bazar
                            </td>
                            <td className="border border-gray-300 px-2 py-1">
                              Subansiri Hostel
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {section.id === 3 && (
                  <div className="mt-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Cab Services
                    </h4>
                    <div className="space-y-2 text-xs">
                      <div className="bg-white p-2 rounded border">
                        <strong>Geo Cabs Northeast:</strong> +91 361 222 2727
                      </div>
                      <div className="bg-white p-2 rounded border">
                        <strong>My Taxi:</strong> +91 361 222 8888
                      </div>
                      <div className="bg-white p-2 rounded border">
                        <strong>Prime Cabz:</strong> +91 361 222 2233
                      </div>
                    </div>
                  </div>
                )}

                {(section.id === 7 ||
                  section.id === 9 ||
                  section.id === 12) && (
                  <button className="mt-3 px-4 py-2 bg-orange-100 hover:bg-orange-200 text-orange-800 rounded-lg text-xs transition-colors">
                    {section.id === 7
                      ? "Guest House Details"
                      : section.id === 9
                      ? "Anti-Ragging PDF"
                      : "Scholarship Details"}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FAQAccordion;
