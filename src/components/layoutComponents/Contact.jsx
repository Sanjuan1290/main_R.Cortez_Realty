import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="px-6 md:px-16 py-16 bg-gray-50">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Contact Us</h1>
        <p className="mt-3 text-gray-600 text-lg">
          Get in touch with our team for inquiries, property details, or appointments.
        </p>
      </div>

      {/* Grid: Contact Info + Form + Map */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Info + Form */}
        <div className="flex flex-col gap-8">
          {/* Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <MdEmail className="text-2xl text-[#273da0]" />
              <div>
                <p className="font-medium">Email</p>
                <p>rcortezrealty.official@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaPhoneAlt className="text-xl text-[#273da0]" />
              <div>
                <p className="font-medium">Phone</p>
                <p className="tracking-wide">+63 9178142818</p>
                <p className="tracking-wide">+63 9171009355</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaLocationDot className="text-2xl text-[#273da0]" />
              <div>
                <p className="font-medium">Head Office</p>
                <p>
                  Unit G, Zoneth Commercial Building, Purok 9, San Agustin, Trece
                  Martires, Cavite 4109
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form className="bg-white shadow-md rounded-lg p-6 space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#273da0] outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#273da0] outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#273da0] outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#273da0] text-white py-2 rounded-md font-semibold hover:bg-[#112f04] transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Google Map */}
        <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-md">
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
    </div>
  );
};

export default Contact;
