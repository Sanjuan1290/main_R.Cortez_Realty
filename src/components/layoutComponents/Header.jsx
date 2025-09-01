import { NavLink } from "react-router-dom"
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[rgba(76,53,29,0.22)] z-10">
        <nav className="flex justify-between items-center py-2 px-10 text-gray-200">
            <img src="/logo.png" alt="logo" className="w-[75px] h-[60px] cursor-pointer"/>
            
            <ul className="flex  gap-4 ">
                <li><NavLink className={({isActive})=> isActive ? 'relative font-semibold after:content-[""] after:h-[3px] after:absolute after:bg-[#512c11] after:left-0 after:right-0 after:-bottom-1' : ''} to='/'>Home</NavLink></li>
                <li><button className="flex items-center gap-2">Properties <IoIosArrowDown /></button></li>
                <li><NavLink className={({isActive})=> isActive ? 'underline' : ''} to='/realtors'>Realtors</NavLink></li>
                <li><NavLink className={({isActive})=> isActive ? 'underline' : ''} to='/listings'>Listings</NavLink></li>
                <li><NavLink className={({isActive})=> isActive ? 'underline' : ''} to='/about'>About</NavLink></li>
                <li><NavLink className={({isActive})=> isActive ? 'underline' : ''} to='/FAQs'>FAQs</NavLink></li>
                <li><NavLink className={({isActive})=> isActive ? 'underline' : ''} to='/contact'>Contact</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header