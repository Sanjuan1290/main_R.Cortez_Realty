import React from "react";

const Realtors = () => {
  const realtors = [
    { name: "Maria Santos", position: "Senior Realtor", image: "/Realtors/maria.png" },
    { name: "Jose Cruz", position: "Property Consultant", image: "/Realtors/jose.png" },
    { name: "Ana Dela Torre", position: "Leasing Specialist", image: "/Realtors/ana.png" },
    { name: "Luis Ramirez", position: "Sales Executive", image: "/Realtors/luis.png" },
    { name: "Catherine Ong", position: "Broker Associate", image: "/Realtors/catherine.png" },
    { name: "Mark Villanueva", position: "Investment Consultant", image: "/Realtors/mark.png" },
    { name: "Sophia Gutierrez", position: "Residential Realtor", image: "/Realtors/sophia.png" },
    { name: "Daniel Reyes", position: "Commercial Realtor", image: "/Realtors/daniel.png" },
    { name: "Patricia Lim", position: "Property Manager", image: "/Realtors/patricia.png" },
    { name: "Carlos Mendoza", position: "Client Relations Officer", image: "/Realtors/carlos.png" },
  ];

  return (
    <div className="mt-10 h-[80vh] py-16 px-6 md:px-10 bg-[#f8f8f8] text-center">
      <h2 className="text-4xl font-bold text-green-900 mb-2">Meet Our Business Executives</h2>
      <div className="bg-orange-950 h-[3px] w-[120px] mx-auto mb-8"></div>
      <p className="max-w-3xl mx-auto text-gray-700 mb-12">
        Our team of professional real estate executives is committed to guiding you through every step of your property needs with honesty and expertise.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {realtors.map((realtor, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition flex flex-col items-center"
          >
            <img
              src={realtor.image}
              alt={realtor.name}
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4 shadow"
            />
            <h3 className="text-lg font-semibold text-gray-800">{realtor.name}</h3>
            <p className="text-sm text-gray-600">{realtor.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Realtors;
