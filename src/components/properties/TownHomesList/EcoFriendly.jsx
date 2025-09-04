const Condominium = () => {
  const condos = [
    {
      name: "Malainen Bago, Naic",
      description:
        "Its 3,345 Amora EcoLove townhomes are equipped with solar panel systems and rainwater storage tanks, which are just a few of the reasons why it was awarded 3 Stars by the Philippine Green Building Council (PHILGBC) under its BERDE (Building for Ecologically Responsive Design Excellence) program.",
      image: "/properties/TownHomes/EcoFriendly/malainenBago.png",
    },
    {
      name: "Palangue, Naic",
      description:
        "Its 2,645 Helena townhomes embodies the Company’s focus on keeping homeowners’ priorities in mind, with value-added features such as column-and-beam superstructure, window grills, steel service doors, double deadbolts, and roofing insulation. ",
      image: "/properties/TownHomes/EcoFriendly/palangueNaic.png",
    },
  ];

  return (
    <div className="px-6 md:px-16 py-16 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-900 mb-10 text-center">
        EcoFriendly TownHomes
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
