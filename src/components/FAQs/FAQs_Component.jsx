import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { q: "What services does R. Cortez Realty offer?", a: "We provide property sales, rentals, marketing, and investment consulting." },
    { q: "Where is your office located?", a: "Our office is in Trece Martires, Cavite." },
    { q: "Do you handle property appraisals?", a: "Yes, we assist with professional property appraisals." },
    { q: "How can I contact your team?", a: "You can reach us via our Contact page, email, or social media channels." },
    { q: "Do you offer property management services?", a: "Yes, we help manage residential and commercial properties." },
    { q: "Can I list my property with your company?", a: "Absolutely, our team will guide you through the listing process." },
    { q: "Do you work with first-time buyers?", a: "Yes, we provide full support for first-time property buyers." },
    { q: "What areas do you cover?", a: "We focus on Cavite and nearby provinces." },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16 h-[80vh] px-6 md:px-10 bg-white text-center mt-14">
      <h2 className="text-4xl font-bold text-green-900 mb-2">Frequently Asked Questions</h2>
      <div className="bg-orange-950 h-[3px] w-[150px] mx-auto mb-8"></div>

      <div className="max-w-3xl mx-auto space-y-4 text-left">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg overflow-hidden"
          >
            <button
              className="w-full flex justify-between items-center px-4 py-3 text-left text-gray-800 font-medium hover:bg-gray-100"
              onClick={() => toggleFAQ(index)}
            >
              {faq.q}
              <IoIosArrowDown
                className={`transition-transform ${openIndex === index ? "rotate-180" : ""}`}
              />
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-gray-600 text-sm">{faq.a}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
