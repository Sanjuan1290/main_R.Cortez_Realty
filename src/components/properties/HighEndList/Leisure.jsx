const Leisure = () => {
  const leisure = [
    { name: "Green Valley Estates", location: "Tagaytay", price: "₱18,000,000", image: "/images/leisure1.jpg" },
    { name: "Vista Hills", location: "Laguna", price: "₱20,500,000", image: "/images/leisure2.jpg" },
    { name: "Summit Peak", location: "Baguio", price: "₱22,000,000", image: "/images/leisure3.jpg" },
    { name: "Highland Grove", location: "Bukidnon", price: "₱19,800,000", image: "/images/leisure4.jpg" },
    { name: "Sierra Retreat", location: "Rizal", price: "₱21,000,000", image: "/images/leisure5.jpg" },
  ];

  return (
    <div className="px-6 md:px-16 py-16 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-900 mb-10 text-center">Leisure Properties</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {leisure.map((property, idx) => (
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

export default Leisure;
