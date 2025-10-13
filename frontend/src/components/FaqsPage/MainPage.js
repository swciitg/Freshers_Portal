import React, { useState } from "react";
import FAQAccordion from "./FAQAccordion";
import FAQSidebar from "./FAQSidebar";
import FAQContent from "./FAQContent";

const MainPage = () => {
  const [selectedSection, setSelectedSection] = useState(0);

  const handleSectionClick = (id) => {
    setSelectedSection(id);
  };

  return (
    <div className="flex flex-col md:flex-row p-4 md:p-16">
      <div className="md:hidden">
        <FAQAccordion />
      </div>

      <div className="hidden md:flex  w-full">
        <FAQSidebar
          selectedSection={selectedSection}
          onSelection={handleSectionClick}
        />
        <FAQContent selectedSection={selectedSection} />
      </div>
    </div>
  );
};

export default MainPage;
