import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  const images = ["/bg-2.png", "/bg-1.png", "/bg-about.png"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 10000); // change every 5s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      {/* Background slideshow */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`background-${index}`}
          className={`absolute top-0 left-0 w-full h-full object-fill transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Content */}
      <div className="absolute top-[150px] left-1/2 -translate-x-1/2 text-center">
        <h1 className="text-[100px] font-bold text-[rgb(255,144,40)] text-nowrap text-shadow text-outline">
          R.Cortez Realty
        </h1>
        <p className="-mt-3 text-2xl font-medium text-[#f7ff9a] drop-shadow-md text-nowrap mb-[160px] text-outline">
          Trusted properties in Cavite — from high-end homes to farm lots
        </p>

        <NavLink
          to="/properties"
          className="bg-[#273da0] shadow-lg shadow-blue-500 text-white font-semibold rounded-full px-10 py-3 mt-10 hover:bg-[#112f04] transition hover:scale-110"
        >
          Go to Properties
        </NavLink>
      </div>
    </div>
  );
};

export default HeroSection;
