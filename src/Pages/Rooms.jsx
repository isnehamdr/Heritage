import React from "react";
import { Link } from "react-router-dom";
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

const RoomCard = ({ room, index }) => {
  const cardRef = useReveal({ y: 50, duration: 0.9, start: "top 90%" });
  return (
    <div
      ref={cardRef}
      className="group grid md:grid-cols-2 gap-6 md:gap-10 items-center py-10 sm:py-12 border-b border-[#E3D8C6]"
    >
      <Link
        to={`/rooms/${room.id}`}
        className={`block overflow-hidden rounded-xl h-[280px] sm:h-[360px] md:h-[420px] ${
          index % 2 === 1 ? "md:order-2" : ""
        }`}
      >
        <img
          src={room.image}
          alt={room.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </Link>

      <div className={index % 2 === 1 ? "md:order-1" : ""}>
        <span className="uppercase text-xs tracking-[0.25em] text-[#B08D57]">
          From {room.price} / night
        </span>
        <Link to={`/rooms/${room.id}`}>
          <h3 className="font-serif text-3xl sm:text-4xl text-[#6B2D34] mt-3 mb-4 hover:text-[#8A3B46] transition-colors duration-300">
            {room.title}
          </h3>
        </Link>
        <p className="text-[#4A3428]/80 leading-relaxed max-w-md">
          {room.description}
        </p>

        <div className="flex flex-wrap gap-x-8 gap-y-3 mt-6 text-sm text-[#4A3428]/70">
          <span className="flex items-center gap-2">
            <FiSun className="text-[#6B2D34]" /> {room.area}
          </span>
          <span className="flex items-center gap-2">
            <PiBedFill className="text-[#6B2D34]" /> {room.bed}
          </span>
          <span className="flex items-center gap-2">
            <FiUsers className="text-[#6B2D34]" /> {room.guests}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-3 mt-8">
          <Link to={`/rooms/${room.id}`}>
            <button className="px-7 py-3 cursor-pointer border border-[#6B2D34] rounded-full text-[#6B2D34] uppercase tracking-[0.2em] text-xs sm:text-sm transition duration-500 hover:bg-[#6B2D34] hover:text-white">
              View Details
            </button>
          </Link>

          <Link
            to={`/booking?room=${encodeURIComponent(room.title)}`}
            className="inline-flex items-center group/btn"
          >
            <button className="px-7 py-3 bg-[#6B2D34] rounded-full text-white uppercase tracking-[0.2em] text-xs sm:text-sm transition duration-500 hover:bg-[#8A3B46]">
              Reserve
            </button>
            <span className="w-11 h-11 rounded-full bg-[#6B2D34] flex items-center justify-center transition duration-500 group-hover/btn:bg-[#8A3B46] ml-2 flex-shrink-0">
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
    </div>
  );
};

const Rooms = () => {
  const introRef = useReveal({ y: 30 });
  const amenityRef = useReveal({ stagger: 0.12, y: 24, start: "top 92%" });

  return (
    <>
      <PageBanner
        crumb="Rooms"
        kicker="Where You'll Stay"
        title="Rooms & Suites"
        description="Eight ways to rest inside a building older than most of Kathmandu's street names — each one restored by hand, not gutted and rebuilt."
        image="/images/img4.jpeg"
      />

      {/* Intro + amenities strip */}
      <section className="bg-[#F6F1E8] px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <div ref={introRef} className="max-w-2xl">
            <p className="uppercase text-xs tracking-[0.25em] text-[#6B2D34] mb-4">
              ✦ Every Room Has Its Own Story
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#4A3428] leading-tight">
              Rest inside restored heritage, not a reproduction of it
            </h2>
          </div>

          <div
            ref={amenityRef}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mt-14"
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

      {/* Room list */}
      <section className="bg-[#F6F1E8] px-5 sm:px-8 lg:px-12 pb-16 sm:pb-24">
        <div className="max-w-6xl mx-auto">
          {rooms.map((room, i) => (
            <RoomCard room={room} index={i} key={room.title} />
          ))}
        </div>
      </section>

      {/* CTA */}
      {/* <section className="bg-[#4A3428] py-16 sm:py-20 px-5 sm:px-8 text-center">
        <h3 className="font-serif text-3xl sm:text-4xl text-white mb-5">
          Not sure which room suits you?
        </h3>
        <p className="text-white/60 max-w-xl mx-auto mb-8">
          Write to us with your dates and what you're hoping for, and we'll
          match you to the right room ourselves.
        </p>
        <Link to="/contact">
          <button className="px-8 py-3.5 bg-[#6B2D34] rounded-full text-white uppercase tracking-[0.2em] text-sm transition duration-500 hover:bg-[#8A3B46]">
            Ask Us Directly
          </button>
        </Link>
      </section> */}
    </>
  );
};

export default Rooms;
