import { NavLink } from "react-router-dom"
import { IoIosArrowDown } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="grid grid-cols-[1fr_minmax(100px,200px)_minmax(100px,200px)_1fr] gap-10 px-10 py-4 bg-[#574223] text-gray-50">

      <div className="flex flex-col">
        <img src="/logo.png" alt="logo" className="w-[100px] h-[80px] cursor-pointer"/>
        <p>Unit G, Zoneth Commercial Building, Purok 9, San Agustin, Trece Martires, Cavite 4109</p>
      </div>

      <div className="flex flex-col gap-4">
        <NavLink to="/">HOME</NavLink>
        <button className="flex items-center gap-2">PROPERTIES <IoIosArrowDown /></button>
        <NavLink to="/realtors">REALTORS</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
        <NavLink to="/FAQs">FAQs</NavLink>
        <NavLink to="/contact">CONTACT</NavLink>
      </div>

      <div className="flex flex-col gap-2">
        <h3>FOLLOW US</h3>
        <NavLink to="" className={'flex items-center gap-2'}><FaFacebook className="w-5 h-5 text-blue-700"/> Facebook</NavLink>
        <NavLink to="" className={'flex items-center gap-2 -ml-[2px]'}><BiLogoInstagramAlt className="w-6 h-6 text-pink-600"/> Instagram</NavLink>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3>TERMS OF SERVICE</h3>
          <NavLink to="/privacyPolicy">PRIVACY POLICY</NavLink>
        </div>

        <h3>R.Cortez Realty ©️ 2025. All Rights Reserved</h3>
      </div>
      
    </footer>
  )
}

export default Footer