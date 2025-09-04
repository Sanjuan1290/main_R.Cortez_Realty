const Seaside = () => {
  const seaside = [
    { name: "Coral Bay Villas", location: "Batangas", price: "₱25,000,000", image: "/images/seaside1.jpg" },
    { name: "Ocean Breeze Estate", location: "La Union", price: "₱30,500,000", image: "/images/seaside2.jpg" },
    { name: "Blue Horizon", location: "Boracay", price: "₱40,000,000", image: "/images/seaside3.jpg" },
    { name: "Palm Cove Residences", location: "Cebu", price: "₱28,700,000", image: "/images/seaside4.jpg" },
    { name: "Sunset Shores", location: "Palawan", price: "₱35,000,000", image: "/images/seaside5.jpg" },
  ];

  return (
    <div className="px-6 md:px-16 py-16 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-900 mb-10 text-center">Seaside Properties</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {seaside.map((property, idx) => (
          <div key={idx} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition">
            <img src={property.image} alt={property.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800">{property.name}</h2>
              <p className="text-gray-600 text-sm">{property.location}</p>
              <p className="text-orange-600 font-bold mt-2">{property.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Seaside;
