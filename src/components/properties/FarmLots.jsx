import { NavLink } from "react-router-dom";
import { ArrowLeft } from "lucide-react"; // arrow icon

const FarmLots = () => {
  const categories = [
    { name: "Cavite", path: "/farm-lots/cavite" },
  ];

  return (
    <div className="mt-14 px-6 md:px-16 py-16 bg-gray-50 h-[80vh]">
      {/* Back button */}
      <div className="mb-6">
        <NavLink
          to="/properties"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#273da0] text-white font-medium shadow-md hover:bg-[#1b2973] transition"
        >
          <ArrowLeft size={18} />
          Back to Properties
        </NavLink>
      </div>

      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Farm Lots
        </h1>
        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          Browse our farm lot listings in Cavite, Pampanga, and Olongapo. Perfect for
          residential, agricultural, or investment use.
        </p>
      </div>

      {/* Category cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category, idx) => (
          <NavLink
            key={idx}
            to={category.path}
            className="bg-white shadow-md rounded-lg p-8 text-center hover:shadow-xl transition group"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-3 group-hover:text-orange-500">
              {category.name}
            </h2>
            <p className="text-gray-600 text-sm">
              View listings under {category.name}.
            </p>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default FarmLots;
