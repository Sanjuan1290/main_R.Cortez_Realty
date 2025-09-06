import { Farmlots_listings } from "../../../../util/listingObject";
import { NavLink } from "react-router-dom";
const CaviteList = () => {

  return (
    <div className="px-6 md:px-16 py-16 bg-gray-50 min-h-screen mt-14">
      <h1 className="text-4xl font-bold text-gray-900 mb-10 text-center">
        Cavite Farm Lots
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Farmlots_listings.map((lot, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition flex flex-col"
          >
            <img
              src={lot.image}
              alt={lot.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow text-center">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                {lot.name}
              </h2>
              <p className="text-gray-600 italic text-sm flex-grow">
                {lot.description}
              </p>
              <NavLink to={`/property/${lot.id}`} className="mt-4 bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-2 px-4 rounded">
                LEARN MORE
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaviteList;
