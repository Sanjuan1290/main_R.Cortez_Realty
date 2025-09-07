import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <section className="relative h-fit text-gray-50">
      {/* Background Image + Overlay */}
      <img
        src="/bg-about.png"
        alt="About background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      <div className="absolute inset-0 bg-black/60 -z-10"></div>

      {/* Content */}
      <div className="py-20 px-10 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-12 h-full items-center">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          <h2 className="text-5xl font-bold">ABOUT US</h2>

          <p className="leading-relaxed text-justify">
            R. Cortez Realty is a real estate company committed to delivering
            exceptional services in the dynamic and ever-evolving real estate
            market. Established in May 2018, we have built a solid reputation
            for integrity, professionalism, and client satisfaction. Our
            comprehensive approach covers residential, commercial, and
            industrial sectors, providing tailored solutions to meet diverse
            client needs.
          </p>

          <p className="leading-relaxed text-justify">
            Beyond transactions and square footage, we craft narratives of
            homecomings, shape skylines of success, and create investment stories
            that stand the test of time.
          </p>

          <NavLink
            to="/about"
            className="w-fit mt-6 inline-block border border-green-600 px-8 py-3 rounded-full text-[16px] font-semibold tracking-wider transition duration-200 ease-in-out hover:bg-green-500 hover:text-green-950 hover:scale-105"
          >
            Learn More
          </NavLink>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-8">
          <div className="bg-white/90 text-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h2 className="text-3xl font-bold text-[rgb(255,144,40)]">
              VISION
            </h2>
            <p className="mt-3 leading-relaxed text-justify">
              At R. Cortez Realty, we envision a future where real estate
              transcends boundaries, becoming a catalyst for transformative
              experiences and sustainable legacies. Our vision is to lead the
              industry not only in transactions but in elevating lives through
              innovative, client-centric solutions.
            </p>
          </div>

          <div className="bg-white/90 text-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h2 className="text-3xl font-bold text-[rgb(255,144,40)]">
              MISSION
            </h2>
            <p className="mt-3 leading-relaxed text-justify">
              At R. Cortez Realty, our mission is to empower individuals and
              businesses by providing the finest real estate solutions. We are
              committed to professionalism, transparency, and integrity while
              fostering innovation and excellence across all operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
