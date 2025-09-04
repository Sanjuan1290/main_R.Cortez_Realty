const Naic = () => {
  const listings = [
    {
      title: "Farm Lot in Naic, Cavite",
      description:
        "Flat agricultural land with wide frontage. Suitable for farming, investment, or vacation home projects.",
      image: "https://via.placeholder.com/600x400", // replace with real image
      link: "#",
    },
  ];

  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Naic, Cavite
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {listings.map((item, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <a
                href={item.link}
                className="text-orange-500 font-medium hover:underline"
              >
                Learn More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Naic;
