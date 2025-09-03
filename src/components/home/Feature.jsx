import { NavLink } from "react-router-dom";

const Feature = () => {
  return (
    <section
      className="py-16 flex flex-col items-center bg-gradient-to-b from-white to-gray-50"
      id="featureSection"
    >
      {/* Title */}
      <h1 className="text-4xl font-bold text-green-900 text-center">
        Featured <span className="text-green-700">Properties</span>
      </h1>
      <div className="bg-orange-800 h-[3px] w-20 mt-3 rounded-full"></div>
      <p className="mt-3 text-gray-600 text-lg text-center max-w-xl">
        Explore some of our top properties handpicked for quality, location, and value.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 w-full max-w-6xl px-6">
        {/* Card 1 */}
        <div className="flex flex-col items-center bg-white rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 p-4">
          <img
            src="/featureImage/image1.png"
            alt="Taguig City Property"
            className="rounded-lg w-full h-[250px] object-cover"
          />
          <p className="mt-4 text-lg font-medium text-gray-800">Taguig City</p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center bg-white rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 p-4">
          <img
            src="/featureImage/image2.png"
            alt="Naic Property"
            className="rounded-lg w-full h-[250px] object-cover"
          />
          <p className="mt-4 text-lg font-medium text-gray-800">Malainen Bago, Naic</p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center bg-white rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 p-4">
          <img
            src="/featureImage/image3.png"
            alt="Dasmariñas City Property"
            className="rounded-lg w-full h-[250px] object-cover"
          />
          <p className="mt-4 text-lg font-medium text-gray-800">Dasmariñas City</p>
        </div>
      </div>

      {/* Button */}
      <NavLink
        to="/properties"
        className="mt-12 bg-green-700 text-white px-10 py-3 rounded-full font-semibold tracking-wider shadow-md transition transform hover:bg-green-800 hover:scale-105"
      >
        View All Properties
      </NavLink>
    </section>
  );
};

export default Feature;
