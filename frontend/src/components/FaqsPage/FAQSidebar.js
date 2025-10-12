import sections from "./faqData";

const FAQSidebar = ({ selectedSection, onSelection }) => {
  return (
    <div
      className="hidden md:block w-1/3 max-w-xs bg-white scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-100 scrollbar-thin"
      style={{ maxHeight: "100vh", overflowY: "scroll" }}
    >
      <ul className="divide-y divide-gray-200">
        {sections.map((section) => (
          <li
            key={section.id}
            className={`p-4 text-lg cursor-pointer flex items-center space-x-2 ${
              selectedSection === section.id
                ? "font-bold text-black border-b-2 border-black"
                : "text-gray-400 border-b border-gray-200"
            }`}
            onClick={() => {
              onSelection(section.id);
            }}
          >
            <span
              className={`mr-4 ${
                selectedSection === section.id ? "text-black" : "text-gray-600"
              }`}
            >
              {String(section.id + 1).padStart(2, "0")}
            </span>
            <span
              className={`${
                selectedSection === section.id ? "text-black" : "text-gray-600"
              }`}
            >
              {section.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQSidebar;
