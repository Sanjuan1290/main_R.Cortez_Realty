import React from "react";

const Directors = () => {
  const directors = [
    {
      name: "Rowena Cortez REA, REB, MBA",
      position: "Founder / Chief Executive Officer",
      image: "/AboutUsImage/rowena.png",
      bio: "With years of expertise in real estate and business leadership, Rowena established R. Cortez Realty to deliver trusted and professional property services in Cavite and beyond.",
    },
    {
      name: "Edrion Macatangay",
      position: "Digital Marketing Manager",
      image: "/AboutUsImage/edrion.png",
      bio: "Edrion leads the company’s digital marketing efforts, helping clients connect with properties through innovative campaigns and a strong online presence.",
    },
    {
      name: "Peter San Juan",
      position: "Quality Assurance Manager",
      image: "/AboutUsImage/peter.png",
      bio: "Peter ensures that every transaction and service meets the company’s high standards, maintaining trust and reliability with every client served.",
    },
  ];

  return (
    <div className="py-16 px-6 md:px-10 bg-[#f8f8f8]">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-green-900 mb-2">
          Our Directors
        </h2>
        <div className="bg-orange-950 h-[3px] w-[100px] mx-auto mb-6"></div>
        <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
          Meet the leaders behind R. Cortez Realty. With expertise in real
          estate, marketing, and quality assurance, they guide the company’s
          mission to provide reliable property solutions for every client.
        </p>
      </div>

      {/* Directors Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {directors.map((director, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-8 flex flex-col items-center text-center"
          >
            <div className="relative mb-5">
              <img
                src={director.image}
                alt={director.name}
                className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-green-900"
              />
            </div>
            <h3 className="text-xl font-semibold text-green-900">
              {director.name}
            </h3>
            <p className="text-sm text-orange-950 font-medium mb-4">
              {director.position}
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              {director.bio}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Directors;
