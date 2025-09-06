import { HighEnd_Seaside } from "../../../util/listingObject";
import { NavLink } from "react-router-dom";
const Condominium = () => {


  return (
    <div className="px-6 md:px-16 py-16 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-900 mb-10 text-center">
        Sea Side Properties
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {HighEnd_Seaside.map((condo, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition flex flex-col"
          >
            <img
              src={condo.image}
              alt={condo.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {condo.name}
              </h2>
              <p className="text-gray-600 text-sm flex-grow">
                {condo.description}
              </p>
              <NavLink to={`/property/${condo.id}`} className="mt-4 bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-2 px-4 rounded">
                LEARN MORE
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Condominium;
