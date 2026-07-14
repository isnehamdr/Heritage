import React, { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import PageBanner from "../Components/Shared/PageBanner";
import useReveal from "../hooks/useReveal";
import { FiWifi, FiCoffee, FiSun, FiUsers } from "react-icons/fi";
import { PiBedFill } from "react-icons/pi";
import rooms from "../data/rooms";

const amenities = [
  { icon: FiWifi, label: "Free WiFi" },
  { icon: FiCoffee, label: "Breakfast Included" },
  { icon: FiSun, label: "Courtyard or City View" },
  { icon: PiBedFill, label: "Handcrafted Furnishings" },
];

const RoomDetail = () => {
  const { id } = useParams();
  const room = rooms.find((r) => String(r.id) === id);

  const introRef = useReveal({ y: 30 });
  const galleryRef = useReveal({ stagger: 0.12, y: 30, start: "top 90%" });
  const amenityRef = useReveal({ stagger: 0.1, y: 24, start: "top 92%" });

  const [activeImage, setActiveImage] = useState(room ? room.image : "");

  if (!room) {
    return <Navigate to="/rooms" replace />;
  }

  const otherRooms = rooms.filter((r) => r.id !== room.id).slice(0, 3);

  return (
    <>
      <PageBanner
        crumb={room.title}
        kicker={`From ${room.price} / Night`}
        title={room.title}
        description={room.description}
        image={room.image}
      />

      {/* Gallery + details */}
      <section className="bg-[#F6F1E8] px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Gallery */}
          <div ref={galleryRef} className="lg:col-span-3">
            <div className="rounded-xl overflow-hidden h-[320px] sm:h-[440px] mb-4">
              <img
                src={activeImage}
                alt={room.title}
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {room.gallery.map((src) => (
                <button
                  key={src}
                  onClick={() => setActiveImage(src)}
                  className={`rounded-lg overflow-hidden h-20 sm:h-28 border-2 transition-colors duration-300 ${
                    activeImage === src
                      ? "border-[#6B2D34]"
                      : "border-transparent"
                  }`}
                >
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div ref={introRef} className="lg:col-span-2">
            <p className="uppercase text-xs tracking-[0.25em] text-[#6B2D34] mb-4">
              ✦ About This Room
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#4A3428] mb-5">
              {room.title}
            </h2>
            <p className="text-[#4A3428]/80 leading-relaxed">
              {room.longDescription}
            </p>

            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-[#E3D8C6]">
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-[#B08D57]">
                  Size
                </p>
                <p className="text-[#4A3428] font-serif text-lg mt-1">
                  {room.area}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-[#B08D57]">
                  Bed
                </p>
                <p className="text-[#4A3428] font-serif text-lg mt-1">
                  {room.bed}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-[#B08D57]">
                  Occupancy
                </p>
                <p className="text-[#4A3428] font-serif text-lg mt-1">
                  {room.guests}
                </p>
              </div>
            </div>

            <Link
              to={`/booking?room=${encodeURIComponent(room.title)}`}
              className="inline-flex items-center mt-8 group/btn"
            >
              <button className="px-8 py-3.5 bg-[#6B2D34] cursor-pointer rounded-full text-white uppercase tracking-[0.2em] text-sm transition duration-500 hover:bg-[#8A3B46]">
                Reserve {room.title}
              </button>
              <span className="w-12 h-12 rounded-full bg-[#6B2D34] flex items-center justify-center transition duration-500 group-hover/btn:bg-[#8A3B46] ml-2 flex-shrink-0">
                <svg
                  className="w-4 h-4 text-white transition-transform duration-300 group-hover/btn:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="bg-[#F6F1E8] px-5 sm:px-8 lg:px-12 pb-16 sm:pb-20">
        <div className="max-w-6xl mx-auto">
          <div
            ref={amenityRef}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8"
          >
            {amenities.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center text-center gap-3 py-6 px-3 rounded-xl border border-[#E3D8C6] bg-white/40"
              >
                <Icon className="text-2xl text-[#6B2D34]" />
                <span className="text-xs sm:text-sm text-[#4A3428]/80">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other rooms */}
      <section className="bg-[#4A3428] px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <h3 className="font-serif text-3xl sm:text-4xl text-white mb-10 text-center">
            Other Rooms You Might Like
          </h3>
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
            {otherRooms.map((r) => (
              <Link
                to={`/rooms/${r.id}`}
                key={r.id}
                className="group block rounded-xl overflow-hidden"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={r.image}
                    alt={r.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="pt-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#D6B06A]">
                    From {r.price} / night
                  </p>
                  <p className="font-serif text-xl text-white mt-1 group-hover:text-[#D6B06A] transition-colors duration-300">
                    {r.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default RoomDetail;
