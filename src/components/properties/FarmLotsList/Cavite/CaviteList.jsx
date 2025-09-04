
import Alfonso from "./Alfornso";
import Naic from "./Naic";

const CaviteList = () => {
  const categories = [
    { name: "Alfonso, Cavite", id: "alfonso" },
    { name: "Naic, Cavite", id: "naic" },
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="mt-14 px-6 md:px-16 py-16 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Cavite Farm Lots
        </h1>
        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          Find farm lots across Cavite suited for agriculture, leisure, and
          investment opportunities.
        </p>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((category, idx) => (
          <button
            key={idx}
            onClick={() => handleScroll(category.id)}
            className="bg-white shadow-md rounded-lg p-8 text-center hover:shadow-xl transition group"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-3 group-hover:text-orange-500">
              {category.name}
            </h2>
            <p className="text-gray-600 text-sm">
              View listings in {category.name}.
            </p>
          </button>
        ))}
      </div>

      {/* Sections */}
      <div id="alfonso" className="pt-20">
        <Alfonso />
      </div>
      <div id="naic" className="pt-20">
        <Naic />
      </div>
    </div>
  );
};

export default CaviteList;
