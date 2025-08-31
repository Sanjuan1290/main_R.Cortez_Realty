import { NavLink } from "react-router-dom"
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  return (
    <header className="bg-[rgba(213,116,13,0.41)]">
        <nav className="flex justify-between items-center py-2 px-10">
            <img src="/logo.png" alt="logo" className="w-[75px] h-[60px] cursor-pointer"/>
            
            <ul className="flex  gap-3 ">
                <li><NavLink to='/home'>Home</NavLink></li>
                <li><button className="flex items-center gap-2">Properties <IoIosArrowDown /></button></li>
                <li><NavLink to='/realtors'>Realtors</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/FAQs'>FAQs</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header