// src/components/properties/Properties.jsx
import { NavLink } from "react-router-dom";

const Properties = () => {
  const categories = [
    {
      name: "High-End Properties",
      description: "Luxury homes and premium estates with top-class features.",
      link: "/high-end",
      image: "/properties/highend.png",
    },
    {
      name: "Townhomes",
      description: "Comfortable and modern townhomes for families and professionals.",
      link: "/townhomes",
      image: "/properties/townhomes.png",
    },
    {
      name: "Farm Lots",
      description: "Spacious agricultural and leisure farm lots across Cavite.",
      link: "/farm-lots",
      image: "/properties/farmlots.png",
    },
  ];

  return (
    <div className="px-6 md:px-16 py-16 bg-gray-50 mt-20 h-fit">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">
        Explore Our Properties
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-72 object-cover"
            />
            <div className="p-6 text-center">
              <h2 className="text-xl font-semibold text-gray-800">{cat.name}</h2>
              <p className="text-gray-600 text-sm mt-2">{cat.description}</p>
              <NavLink
                to={cat.link}
                className="inline-block mt-4 bg-[#273da0] text-white px-6 py-2 rounded-full font-medium hover:bg-[#112f04] transition"
              >
                View {cat.name}
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Properties;
