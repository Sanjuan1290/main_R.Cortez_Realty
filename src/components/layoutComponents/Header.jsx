import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const target = document.getElementById("featureSection");

    const handleScroll = () => {
      if (target) {
        const rect = target.getBoundingClientRect();
        setScrolled(rect.top <= 0);
      } else {
        setScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-20 transition-colors duration-300 backdrop-blur-md ${
        location.pathname === "/about"
          ? "bg-[rgba(77,55,31,0.93)]"
          : scrolled
          ? "bg-[rgba(76,53,29,0.78)]"
          : "bg-[rgba(77,55,31,0.25)]"
      }`}
    >
      <nav className="flex justify-between items-center py-3 px-6 md:px-12 text-gray-100">
        {/* Logo */}
        <img
          src="/logo.png"
          alt="logo"
          className="w-[70px] h-[55px] rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform"
        />

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-lg font-medium relative">
          {[
            { to: "/", label: "Home" },
            // { to: "/realtors", label: "Realtors" },
            { to: "/properties", label: "Properties" },
            { to: "/about", label: "About" },
            { to: "/FAQs", label: "FAQs" },
            { to: "/contact", label: "Contact" },
          ].map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `relative transition-colors hover:text-orange-400 ${
                    isActive ? "text-orange-400 font-semibold" : ""
                  } after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-orange-400 after:transition-all hover:after:w-full ${
                    isActive ? "after:w-full" : ""
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-[rgba(77,55,31,0.95)] text-white flex flex-col items-center gap-6 py-6 md:hidden">
            {[
              { to: "/", label: "Home" },
              // { to: "/realtors", label: "Realtors" },
              { to: "/properties", label: "Properties" },
              { to: "/about", label: "About" },
              { to: "/FAQs", label: "FAQs" },
              { to: "/contact", label: "Contact" },
            ].map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="text-lg hover:text-orange-400 transition"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
