const Condominium = () => {
  const condos = [
    {
      name: "Taguig City",
      description:
        "Your island escape comes to life at a resort-inspired community nestled at the heart of Taguig City. Taking resort living a notch higher, it features an authentic vacation ambience to give urbanities a welcome respite from the daily hustle and bustle of the city.",
      image: "/properties/HighEnd/Condominiums/taguigCity.png",
    },
    {
      name: "Parañaque City",
      description:
        "A Zen-inspired, mid-rise condo community that offers all the modern features of contemporary urban living, set amidst an inspired landscape of peace, harmony and tranquility.",
      image: "/properties/HighEnd/Condominiums/paranaqueCity.png",
    },
    {
      name: "Muntinlupa City",
      description:
        "A resort-inspired, mid-rise, residential community characterized by lush greens and open spaces, generous amenities, dynamic architecture, and cleverly-designed living spaces that create the coveted lifestyle typifying daily holidays.",
      image: "/properties/HighEnd/Condominiums/muntinlupaCity.png",
    },
    {
      name: "Bacoor City",
      description:
        "With its nature-inspired design, it embraces sustainability and vibrant lifestyle, bringing you the beauty and strength of nature into your home.",
      image: "/properties/HighEnd/Condominiums/bacoorCity.png",
    },
    {
      name: "Tagaytay City",
      description:
        "Enjoy intimate getaways as you unwind surrounded by sprawling garden. Relish moments to recharge: a heart picnic, a peaceful stroll, a refreshing jog or a restful moment under a tree.",
      image: "/properties/HighEnd/Condominiums/tagaytayCity.png",
    },
    {
      name: "Dasmariñas City",
      description:
        "Discover a premier residential and mixed-use development that offers seamless connectivity to major business centers, educational institutions, and leisure spots, making it perfect for young professionals, families, and retirees.",
      image: "/properties/HighEnd/Condominiums/dasmarinasCity.png",
    },
    {
      name: "Imus City",
      description:
        "It combines the convenience of the metro combined with the tranquility of the suburbs, allowing its future residents to live a comfortable life where everyone can find a balance between work and play.",
      image: "/properties/HighEnd/Condominiums/imusCity.png",
    },
  ];

  return (
    <div className="px-6 md:px-16 py-16 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-900 mb-10 text-center">
        Luxury Condominiums
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
