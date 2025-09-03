import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="px-10 py-10">
      <h1 className="text-[45px] font-semibold mb-6">CONTACT US</h1>

      {/* Contact Info */}
      <div className="flex flex-col gap-6 mb-10">
        <div className="flex items-center gap-3">
          <FaPhoneAlt className="text-xl text-[#273da0]" />
          <div>
            <p className="font-medium">Email Address</p>
            <p>rcortezrealty.official@gmail.com</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <FaLocationDot className="text-xl text-[#273da0]" />
          <div>
            <p className="font-medium">Head Office</p>
            <p>
              Unit G, Zoneth Commercial Building, Purok 9, San Agustin, Trece
              Martires, Cavite 4109
            </p>
          </div>
        </div>
      </div>

      {/* Google Maps */}
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
    </div>
  );
};

export default Contact;
