
import Accessible from './TownHomesList/Accessible'
import Affordable from './TownHomesList/Affordable'
import EcoFriendly from './TownHomesList/EcoFriendly'

const TownHomes = () => {
  const categories = [
    { name: "Accessible", id: "accessible" },
    { name: "Affordable", id: "affordable" },
    { name: "EcoFriendly", id: "ecoFriendly" },
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="mt-14 px-6 md:px-16 py-16 bg-gray-50 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          High-End Properties
        </h1>
        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          Explore our premium listings designed for luxurious living — from
          modern condominiums to seaside escapes and leisure communities.
        </p>
      </div>

      {/* Category cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              View listings under {category.name}.
            </p>
          </button>
        ))}
      </div>

      {/* Sections with IDs */}
      <div id="accessible" className="pt-20">
        <Accessible />
      </div>
      <div id="affordable" className="pt-20">
        <Affordable />
      </div>
      <div id="ecoFriendly" className="pt-20">
        <EcoFriendly />
      </div>
    </div>
  );
};

export default TownHomes;
