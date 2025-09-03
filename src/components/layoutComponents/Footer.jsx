import { NavLink } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="bg-[#3e2712] text-gray-200 px-12 py-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo + Address */}
        <div className="flex flex-col gap-4">
          <img
            src="/logo.png"
            alt="logo"
            className="w-[100px] h-[80px] cursor-pointer"
          />
          <p className="text-sm leading-relaxed">
            Unit G, Zoneth Commercial Building, Purok 9, San Agustin, Trece
            Martires, Cavite 4109
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <NavLink to="/" className="hover:text-orange-400">Home</NavLink>
          <button className="flex items-center gap-2 hover:text-orange-400">
            Properties <IoIosArrowDown />
          </button>
          <NavLink to="/listings" className="hover:text-orange-400">Listings</NavLink>
          <NavLink to="/realtors" className="hover:text-orange-400">Realtors</NavLink>
          <NavLink to="/about" className="hover:text-orange-400">About</NavLink>
          <NavLink to="/FAQs" className="hover:text-orange-400">FAQs</NavLink>
          <NavLink to="/contact" className="hover:text-orange-400">Contact</NavLink>
        </div>

        {/* Social Media */}
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <NavLink to="" className="flex items-center gap-2 hover:text-orange-400">
            <FaFacebook className="w-5 h-5 text-blue-600" /> Facebook
          </NavLink>
          <NavLink to="" className="flex items-center gap-2 hover:text-orange-400">
            <BiLogoInstagramAlt className="w-6 h-6 text-pink-600" /> Instagram
          </NavLink>
        </div>

        {/* Policies */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <NavLink to="/terms" className="hover:text-orange-400">
              Terms of Service
            </NavLink>
            <NavLink to="/privacyPolicy" className="hover:text-orange-400">
              Privacy Policy
            </NavLink>
          </div>
          <p className="text-xs text-gray-400 mt-6">
            © 2025 R.Cortez Realty. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
