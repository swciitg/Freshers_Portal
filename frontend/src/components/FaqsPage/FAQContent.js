import sections from "./faqData";

const FAQContent = ({ selectedSection }) => {
  return (
    <div className="hidden md:block flex-1 pb-12 pt-4 md:pt-2 md:pl-36 ">
      <h1 className="text-2xl md:text-4xl font-medium text-orange-400 text-center">
        {sections[selectedSection].title}
      </h1>
      <div className="mt-8 max-w-3xl mx-auto p-4">
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 ">
          {sections[selectedSection].content}
        </p>
      </div>
    </div>
  );
};
export default FAQContent;
