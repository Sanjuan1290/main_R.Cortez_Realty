import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  const images = ["/bg-2.png", "/bg-about.png"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 8000); // every 8s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background slideshow */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`background-${index}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 scale-105" : "opacity-0 scale-100"
          }`}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-orange-400 drop-shadow-lg">
          R. Cortez Realty
        </h1>
        <p className="mt-4 text-lg md:text-2xl font-medium text-[#f7ff9a] drop-shadow-md max-w-2xl">
          Trusted properties in Cavite — from high-end homes to farm lots
        </p>

        <NavLink
          to="/properties"
          className="mt-10 bg-[#273da0] shadow-lg shadow-blue-500 text-white font-semibold rounded-full px-8 py-3 text-lg transition-transform duration-200 hover:bg-[#112f04] hover:scale-110"
        >
          Go to Properties
        </NavLink>
      </div>
    </div>
  );
};

export default HeroSection;
