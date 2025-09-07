import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import emailjs from "emailjs-com";
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_mei2sff", // your Service ID
        "template_d0fvh2n", // your Template ID
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "gJflIZ_Q7NBFA8o83" // your Public Key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        () => {
          alert("Failed to send message. Try again.");
        }
      );
  };

  return (
    <section className="bg-white">
      {/* Hero Section */}
      <div className="bg-[#273da0] text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-14">
          Contact R. Cortez Realty
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-200">
          We’re here to answer your questions, schedule appointments, and guide you
          through your real estate needs.
        </p>
      </div>

      {/* Contact Info + Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 md:px-16 py-16">
        {/* Contact Information */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Office</h2>
          <p className="text-gray-600">
            Visit us, call, or send us an email. Our team is ready to assist you
            with any real estate inquiries.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <FaLocationDot className="text-2xl text-[#273da0]" />
              <div>
                <p className="font-semibold">Head Office</p>
                <p className="text-gray-600">
                  Unit G, Zoneth Commercial Building, Purok 9, San Agustin, Trece
                  Martires, Cavite 4109
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-2xl text-[#273da0]" />
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-gray-600">+63 9278965570</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MdEmail className="text-2xl text-[#273da0]" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-gray-600">rcortezrealty.official@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
          <form onSubmit={sendEmail} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#273da0] outline-none"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#273da0] outline-none"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#273da0] outline-none"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#273da0] outline-none"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#273da0] outline-none"
            />
            <button
              type="submit"
              className="w-full bg-[#273da0] text-white py-3 rounded-md font-semibold hover:bg-[#112f04] transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Google Map */}
      <div className="w-full h-[450px]">
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
    </section>
  );
};

export default ContactPage;
