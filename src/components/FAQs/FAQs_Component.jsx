import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What services does R. Cortez Realty offer?",
      a: "We handle property sales, rentals, marketing, investment consulting, and property management for residential and commercial properties."
    },
    {
      q: "Where is your office located?",
      a: (
        <div>
          <p className="mb-3">
            Our office is at Unit G, Zoneth Commercial Building, Purok 9, San Agustin, Trece Martires, Cavite 4109.
          </p>
          <div className="w-full h-[300px] rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d320.63323547874!2d120.86468378314719!3d14.283630516791389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd81002ba51f7d%3A0xb163e3217ba30f45!2sR.Cortez%20Realty!5e1!3m2!1sen!2sph!4v1756867612670!5m2!1sen!2sph"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      )
    },
    {
      q: "Do you handle property appraisals?",
      a: "Yes, we assist clients with professional property appraisals to help determine accurate property values."
    },
    {
      q: "How can I contact your team?",
      a: (
        <div>
          <p>You can reach us in several ways:</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Email: rcortezrealty.official@gmail.com</li>
            <li>Phone: +63 9278965570</li>
            <li>Or use the contact form on our website.</li>
          </ul>
        </div>
      )
    },
    {
      q: "Do you offer property management services?",
      a: "Yes, we provide property management for residential and commercial properties, including tenant handling and maintenance coordination."
    },
    {
      q: "Can I list my property with your company?",
      a: "Absolutely. Our team will guide you through the listing process and help market your property to potential buyers or tenants."
    },
    {
      q: "Do you work with first-time buyers?",
      a: "Yes, we assist first-time buyers with every step of the process, from property selection to securing documentation."
    },
    {
      q: "What areas do you cover?",
      a: "We primarily serve Cavite and nearby provinces, but we also handle inquiries from other regions depending on the project."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16 px-6 md:px-10 bg-white text-center mt-14">
      <h2 className="text-4xl font-bold text-green-900 mb-2">
        Frequently Asked Questions
      </h2>
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
                className={`transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
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
