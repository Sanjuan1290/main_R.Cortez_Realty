import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  HighEnd_Condo,
  HighEnd_Seaside,
  HighEnd_Leisure,
  TownHomes_EcoFriendly,
  TownHomes_Affordable,
  TownHomes_Accessible,
  Farmlots_listings,
} from "../util/listingObject";

const SingleProperty = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentFloorIndex, setCurrentFloorIndex] = useState(0);

  // Merge all imported property arrays
  const allProperties = [
    ...HighEnd_Condo,
    ...HighEnd_Seaside,
    ...HighEnd_Leisure,
    ...TownHomes_EcoFriendly,
    ...TownHomes_Affordable,
    ...TownHomes_Accessible,
    ...Farmlots_listings,
  ];

  const property = allProperties.find((item) => item.id === id);

  // Auto-slide overview every 6 seconds
  useEffect(() => {
    if (!property?.overViewImageList || property.overViewImageList.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === property.overViewImageList.length - 1 ? 0 : prev + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [property]);

  // Auto-slide floor plan every 6 seconds
  useEffect(() => {
    if (!property?.floorPlanImage || property.floorPlanImage.length === 0) return;

    const interval = setInterval(() => {
      setCurrentFloorIndex((prev) =>
        prev === property.floorPlanImage.length - 1 ? 0 : prev + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [property]);

  if (!property) {
    return (
      <div className="mt-32 text-center text-red-500">
        <h1 className="text-2xl font-semibold">Property not found</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-20 items-center mt-32 px-4 lg:px-12">
      {/* Back Button */}
      <div className="w-full max-w-5xl ">
        <button
          onClick={() => navigate(-1)}
          className="border border-blue-200 px-5 py-2 cursor-pointer hover:bg-blue-600 flex items-center gap-2 text-gray-700 hover:text-gray-100 transition-colors duration-200 ease-in-out font-medium mb-6"
        >
          ← Back
        </button>
      </div>

      {/* Title */}
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl font-bold text-gray-900">{property.name}</h1>
        <p className="mt-4 text-lg text-gray-600">{property.description}</p>
      </div>

      {/* AVP Section */}
      {property.youtubeEmbeded && (
        <section className="w-full bg-white shadow rounded-xl p-6 max-w-5xl">
          <h2 className="text-3xl font-semibold mb-6 text-center">AVP</h2>
          <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg">
            <iframe
              src={property.youtubeEmbeded}
              title="YouTube video"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-xl"
            ></iframe>
          </div>
        </section>
      )}

      {/* Overview Section */}
      {property.overViewImageList?.length > 0 && (
        <section className="w-full bg-white shadow rounded-xl p-6 max-w-5xl">
          <h2 className="text-3xl font-semibold mb-6 text-center">Overview</h2>
          <div className="flex flex-col items-center relative">
            {/* Main Slideshow */}
            <div className="relative w-full h-[500px] overflow-hidden rounded-lg shadow-md">
              {property.overViewImageList.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Overview ${idx}`}
                  className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-700 ease-in-out transform ${
                    idx === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
                  }`}
                />
              ))}

              {/* Left Arrow */}
              <button
                onClick={() =>
                  setCurrentIndex(
                    currentIndex === 0
                      ? property.overViewImageList.length - 1
                      : currentIndex - 1
                  )
                }
                className="absolute top-0 left-0 h-full px-3 flex items-center justify-center bg-gradient-to-r from-black/40 to-transparent text-white text-3xl hover:from-black/60 transition"
              >
                &#10094;
              </button>

              {/* Right Arrow */}
              <button
                onClick={() =>
                  setCurrentIndex(
                    currentIndex === property.overViewImageList.length - 1
                      ? 0
                      : currentIndex + 1
                  )
                }
                className="absolute top-0 right-0 h-full px-3 flex items-center justify-center bg-gradient-to-l from-black/40 to-transparent text-white text-3xl hover:from-black/60 transition"
              >
                &#10095;
              </button>
            </div>

            {/* Dots */}
            <div className="flex gap-2 mt-4">
              {property.overViewImageList.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full ${
                    idx === currentIndex ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3 mt-6 flex-wrap justify-center">
              {property.overViewImageList.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`focus:outline-none transition transform ${
                    currentIndex === idx ? "ring-4 ring-blue-500 scale-110" : "hover:scale-105"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Overview ${idx}`}
                    className="w-20 h-20 object-cover rounded-lg border"
                  />
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Floor Plan Section */}
      {property.floorPlanImage?.length > 0 && (
        <section className="w-full bg-white shadow rounded-xl p-6 max-w-5xl">
          <h2 className="text-3xl font-semibold mb-6 text-center">Floor Plan</h2>
          <div className="flex flex-col items-center relative">
            {/* Main Slideshow */}
            <div className="relative w-full h-[500px] overflow-hidden rounded-lg shadow-md">
              {property.floorPlanImage.map((plan, idx) => (
                <img
                  key={idx}
                  src={plan}
                  alt={`Floor plan ${idx}`}
                  className={`absolute top-0 left-0 w-full h-full object-contain transition-all duration-700 ease-in-out transform ${
                    idx === currentFloorIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
                  }`}
                />
              ))}

              {/* Left Arrow */}
              <button
                onClick={() =>
                  setCurrentFloorIndex(
                    currentFloorIndex === 0
                      ? property.floorPlanImage.length - 1
                      : currentFloorIndex - 1
                  )
                }
                className="absolute top-0 left-0 h-full px-3 flex items-center justify-center bg-gradient-to-r from-black/40 to-transparent text-white text-3xl hover:from-black/60 transition"
              >
                &#10094;
              </button>

              {/* Right Arrow */}
              <button
                onClick={() =>
                  setCurrentFloorIndex(
                    currentFloorIndex === property.floorPlanImage.length - 1
                      ? 0
                      : currentFloorIndex + 1
                  )
                }
                className="absolute top-0 right-0 h-full px-3 flex items-center justify-center bg-gradient-to-l from-black/40 to-transparent text-white text-3xl hover:from-black/60 transition"
              >
                &#10095;
              </button>
            </div>

            {/* Dots */}
            <div className="flex gap-2 mt-4">
              {property.floorPlanImage.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentFloorIndex(idx)}
                  className={`w-3 h-3 rounded-full ${
                    idx === currentFloorIndex ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3 mt-6 flex-wrap justify-center">
              {property.floorPlanImage.map((plan, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentFloorIndex(idx)}
                  className={`focus:outline-none transition transform ${
                    currentFloorIndex === idx ? "ring-4 ring-blue-500 scale-110" : "hover:scale-105"
                  }`}
                >
                  <img
                    src={plan}
                    alt={`Thumbnail ${idx}`}
                    className="w-20 h-20 object-cover rounded-lg border"
                  />
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Google Map Section */}
      {property.googleMapEmbeded && (
        <section className="w-full bg-white shadow rounded-xl p-6 max-w-5xl">
          <h2 className="text-3xl font-semibold mb-6 text-center">Location</h2>
          <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg">
            <iframe
              src={property.googleMapEmbeded}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
              className="rounded-xl"
            ></iframe>
          </div>
        </section>
      )}

      {/* Reference / Legal Info */}
      {property.reference && (
        <footer className="w-full max-w-5xl text-center text-sm text-gray-500 border-t py-6">
          <p>{property.reference}</p>
        </footer>
      )}
    </div>
  );
};

export default SingleProperty;
