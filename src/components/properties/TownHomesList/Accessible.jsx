const Condominium = () => {
  const condos = [
    {
      name: "Imus, Cavite",
      description:
        "This developed community provides residents with the best balance of nature and urban living abound with wide open spaces, lush green landscapes, and well maintained amenities that afford families' infinite opportunities for fun and leisure.",
      image: "/properties/TownHomes/Accessible/imus_Cavite.png",
    },
    {
      name: "Tanza, Cavite",
      description:
        "A residential community made up of affordable homes designed for young professionals and families.  Within the community, the beauty of nature is blended with the comforts of well-designed houses. ",
      image: "/properties/TownHomes/Accessible/tanza_Cavite.png",
    },
    {
      name: "Silang, Cavite",
      description:
        "This elegant enclave features six phases of exquisitely designed single-detached and duplex homes embraced by nature. Admire soothing views, indulge in exclusive recreation, and enjoy easy access to Tagaytay's cool breeze.",
      image: "/properties/TownHomes/Accessible/silang_Cavite.png",
    },
  ];

  return (
    <div className="px-6 md:px-16 py-16 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-900 mb-10 text-center">
        Accessible TownHomes
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
