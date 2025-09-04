const Condominium = () => {
  const condos = [
    {
      name: "Trece Martires, Cavite",
      description:
        "With homes depicting simplicity and comfort, you and your family will surely feel that homey atmosphere, perfect in nurturing your family’s well being. Now, that’s a new take in simple living. ",
      image: "/properties/TownHomes/Affordable/treceMartires_Cavite.png",
    },
    {
      name: "Naic, Cavite",
      description:
        "How life turns out for you depends on how you would look at it. You can start that new outlook with homes that are easy on the budget and are good quality, you can plan your life ahead with less worries.",
      image: "/properties/TownHomes/Affordable/naic_Cavite.png",
    },
    {
      name: "Tanza, Cavite",
      description:
        "Looking for that new property which looks amazing but affordable at the same time? Get a unit and enjoy the start of a new beginning with your loved ones.",
      image: "/properties/TownHomes/Affordable/tanza_Cavite.png",
    },
  ];

  return (
    <div className="px-6 md:px-16 py-16 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-900 mb-10 text-center">
        Affordable TownHomes
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {condos.map((condo, idx) => (
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
              <button className="mt-4 bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-2 px-4 rounded">
                LEARN MORE
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Condominium;
