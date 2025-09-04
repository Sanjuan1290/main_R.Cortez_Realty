import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#4a2f16] to-[#2b1a0d] text-gray-200 px-12 pt-14 pb-6 mt-12 border-t border-orange-900/40">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo + Address */}
        <div className="flex flex-col gap-4">
          <img
            src="/logo.png"
            alt="logo"
            className="w-[100px] h-[80px] cursor-pointer"
          />
          <p className="text-sm leading-relaxed text-gray-300">
            Unit G, Zoneth Commercial Building, <br />
            Purok 9, San Agustin, <br />
            Trece Martires, Cavite 4109
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-orange-400">
            Quick Links
          </h3>
          <NavLink to="/" className="hover:text-orange-300">Home</NavLink>
          <NavLink to="/realtors" className="hover:text-orange-300">Realtors</NavLink>
          <NavLink to="/properties" className="hover:text-orange-300">Properties</NavLink>
          <NavLink to="/about" className="hover:text-orange-300">About</NavLink>
          <NavLink to="/FAQs" className="hover:text-orange-300">FAQs</NavLink>
          <NavLink to="/contact" className="hover:text-orange-300">Contact</NavLink>
        </div>

        {/* Social Media */}
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-orange-400">
            Follow Us
          </h3>
          <NavLink to="" className="flex items-center gap-2 hover:text-orange-300">
            <FaFacebook className="w-5 h-5 text-blue-600" /> Facebook
          </NavLink>
          <NavLink to="" className="flex items-center gap-2 hover:text-orange-300">
            <BiLogoInstagramAlt className="w-6 h-6 text-pink-600" /> Instagram
          </NavLink>
        </div>

        {/* Policies */}
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-orange-400">
            Legal
          </h3>
          <NavLink to="/terms" className="hover:text-orange-300">
            Terms of Service
          </NavLink>
          <NavLink to="/privacyPolicy" className="hover:text-orange-300">
            Privacy Policy
          </NavLink>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-gray-700/40 pt-4 text-center">
        <p className="text-xs text-gray-400">
          © 2025 R.Cortez Realty. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
