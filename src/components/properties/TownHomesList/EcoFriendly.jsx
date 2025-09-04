const EcoFriendly = () => {
  const condos = [
    { name: "Skyline Residences", location: "Makati City", price: "₱12,500,000", image: "/images/condo1.jpg" },
    { name: "The Pearl Towers", location: "Bonifacio Global City", price: "₱15,000,000", image: "/images/condo2.jpg" },
    { name: "Grand Horizon", location: "Ortigas Center", price: "₱10,800,000", image: "/images/condo3.jpg" },
    { name: "Azure Heights", location: "Alabang", price: "₱13,200,000", image: "/images/condo4.jpg" },
    { name: "Elite Residences", location: "Quezon City", price: "₱11,900,000", image: "/images/condo5.jpg" },
  ];

  return (
    <div className="px-6 md:px-16 py-16 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-900 mb-10 text-center">Eco-Friendly TownHomes</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {condos.map((condo, idx) => (
          <div key={idx} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition">
            <img src={condo.image} alt={condo.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800">{condo.name}</h2>
              <p className="text-gray-600 text-sm">{condo.location}</p>
              <p className="text-orange-600 font-bold mt-2">{condo.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EcoFriendly;
