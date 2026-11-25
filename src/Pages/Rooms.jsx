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

const RoomCard = ({ room }) => {
  const cardRef = useReveal({ y: 50, duration: 0.9, start: "top 90%" });

  return (
    <div
      ref={cardRef}
      className="group relative rounded-lg overflow-visible block"
    >
      {/* Link to room detail - wraps the image only */}
      <Link to={`/rooms/${room.slug}`} className="block">
        {/* Image Container */}
        <div className="relative overflow-hidden h-[400px] sm:h-[450px] md:h-[500px] rounded-lg">
          <img
            src={room.image}
            alt={room.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Overlay with Area and Bed Info - Shows on hover */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
            {/* Content that slides in from top */}
            <div className="absolute top-6 left-6 flex flex-col gap-3 transform -translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 z-30">
              {/* Area Badge */}
              <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <svg
                  className="w-4 h-4 text-[#6B2D34]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"
                  />
                </svg>
                <span className="text-[#2A1A12] text-sm font-medium">{room.area}</span>
              </div>

              {/* Bed Type Badge */}
              <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <svg
                  className="w-4 h-4 text-[#6B2D34]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
                <span className="text-[#2A1A12] text-sm font-medium">{room.bed}</span>
              </div>

              {/* Guests Badge */}
              <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <svg
                  className="w-4 h-4 text-[#6B2D34]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                <span className="text-[#2A1A12] text-sm font-medium">{room.guests}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="py-6 relative z-10">
        <div className="flex items-start justify-between">
          <div>
            {/* <div className="flex items-center gap-3 mb-2">
              <span className="text-sm font-medium text-[#6B2D34]">
                {room.price} <span className="text-xs font-normal text-[#6B2D34]/60">/ night</span>
              </span>
            </div> */}
            <h3 className="text-xl sm:text-2xl font-serif text-[#6B2D34] mb-2">
              {room.title}
            </h3>
            <p className="text-[#6B2D34]/60 text-sm sm:text-base max-w-md">
              {room.description}
            </p>
          </div>
          {/* Arrow Button - Links to room detail */}
          <Link
            to={`/rooms/${room.slug}`}
            className="w-10 h-10 rounded-full bg-[#6B2D34] flex items-center justify-center transition-all duration-300 hover:bg-[#8A3B46] group/arrow hover:scale-110 hover:shadow-lg flex-shrink-0 mt-1"
          >
            <svg
              className="w-5 h-5 text-white transition-transform duration-300 group-hover/arrow:translate-x-1"
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
          </Link>
        </div>

        {/* Book Now Button - Below card (always visible) */}
        <div className="mt-4">
          <Link
            to={`/booking/${room.slug}`}
            className="inline-block w-full sm:w-auto px-6 py-2.5 bg-[#6B2D34] text-white text-sm font-medium rounded-full hover:bg-[#8A3B46] transition-all duration-300 text-center hover:shadow-lg transform hover:scale-105"
          >
            Book Now
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
        title="Rooms & Suites"
        description="Eight ways to rest inside a building older than most of Kathmandu's street names — each one restored by hand, not gutted and rebuilt."
        image="/images/hotel/new (5).jpeg"
      />

      {/* Intro + amenities strip */}
      <section className="bg-[#F6F1E8] px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
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

      {/* Room list - Grid Layout */}
      <section className="bg-[#F6F1E8] px-5 sm:px-8 lg:px-12 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Rooms;