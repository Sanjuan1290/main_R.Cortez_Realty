const Intro = () => {
  return (
    <section className="relative w-full h-[90vh] bg-[#000000e0]">
      {/* Background Image */}
      <img
        src="/AboutUsImage/image1.png"
        alt="About Background"
        className="absolute -z-10 w-full h-[50vh] object-cover opacity-70"
      />

      {/* Title */}
      <h1 className="text-[65px] text-gray-50 font-bold absolute top-[120px] left-1/2 -translate-x-1/2 drop-shadow-lg tracking-widest">
        ABOUT US
      </h1>

      {/* Content Box */}
      <div className="absolute grid grid-cols-2 bottom-[100px] bg-white/95 rounded-xl overflow-hidden shadow-2xl w-[1200px] max-w-[95%] left-1/2 -translate-x-1/2">
        {/* Text Section */}
        <div className="bg-[rgb(3,40,3)] text-gray-50 px-10 py-8 flex flex-col gap-5 justify-center">
          <p className="tracking-wide text-justify leading-relaxed">
            Welcome to <span className="font-semibold text-orange-400">R. Cortez Realty</span>, 
            where your real estate goals become our mission. Whether you’re searching 
            for your dream home, investing in farmland, or exploring premium properties, 
            we’re here to guide you with expertise and integrity.
          </p>
          <p className="tracking-wide text-justify leading-relaxed">
            At R. Cortez Realty, we focus on more than just closing deals—we build 
            relationships and provide solutions that bring lasting value. With deep 
            knowledge of Cavite and nearby markets, our promise is simple: 
            <span className="font-semibold text-orange-400"> we only offer the best 
            options for your needs and investments.</span>
          </p>
        </div>

        {/* Image Section */}
        <div className="overflow-hidden">
          <img
            src="/bg-1.png"
            alt="About Visual"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
