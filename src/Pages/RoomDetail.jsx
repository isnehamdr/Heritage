import React, { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import useReveal from "../hooks/useReveal";
import {
  FiWifi,
  FiCoffee,
  FiTv,
  FiUsers,
  FiMapPin,
  FiPhone,
  FiClock,
  FiShoppingBag,
  FiDroplet,
  FiSun,
  FiWind,
  FiLock,
} from "react-icons/fi";
import {
  PiBedFill,
  PiArmchairFill,
  PiFanFill,
  PiPlantFill,
} from "react-icons/pi";
import { MdOutlineRoomService, MdOutlineKitchen, MdOutlineLocalParking } from "react-icons/md";
import { FaHotTub, FaUmbrellaBeach } from "react-icons/fa";
import rooms from "../data/rooms";

const RoomDetail = () => {
  const { slug } = useParams(); // Changed from { id } to { slug }
  const room = rooms.find((r) => r.slug === slug); // Changed from r.id to r.slug

  const introRef = useReveal({ y: 30 });
  const galleryRef = useReveal({ y: 30 });
  const amenityRef = useReveal({ stagger: 0.08, y: 20, start: "top 92%" });
  const featuresRef = useReveal({ stagger: 0.1, y: 24, start: "top 92%" });

  const [activeImage, setActiveImage] = useState(room ? room.gallery[0] : "");

  if (!room) {
    return <Navigate to="/rooms" replace />;
  }

  const otherRooms = rooms.filter((r) => r.slug !== room.slug).slice(0, 3); // Changed from r.id to r.slug

  const roomFeatures = [
    { icon: FiWifi, label: "High-Speed WiFi" },
    { icon: FiTv, label: "Smart TV" },
    { icon: MdOutlineRoomService, label: "24/7 Room Service" },
    { icon: FiCoffee, label: "Coffee Maker" },
    { icon: PiFanFill, label: "Air Conditioning" },
    { icon: FiDroplet, label: "Rain Shower" },
    // { icon: FiSun, label: "Private Balcony" },
    { icon: FiWind, label: "Soundproof Windows" },
    { icon: PiPlantFill, label: "Indoor Plants" },
    { icon: FiLock, label: "Safe Deposit Box" },
    { icon: FiUsers, label: "Concierge Service" },
    { icon: MdOutlineLocalParking, label: "Free Parking" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url("${room.image}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative h-full flex flex-col items-center justify-center px-5 text-center text-white">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-wide">
            {room.title}
          </h1>

          {/* Room Details */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-full px-4">
            <div className="flex justify-center items-center gap-2 sm:gap-3 flex-wrap">
              {/* Bed */}
              <div className="w-[140px] sm:w-[150px] h-[60px] bg-[#F8F2E8] rounded-full flex flex-col items-center justify-center">
                <PiBedFill className="text-[#6B2D34] text-lg mb-1" />
                <p className="text-[#4A3428] text-sm font-semibold">
                  {room.bed}
                </p>
              </div>

              {/* Guests */}
              <div className="w-[140px] sm:w-[150px] h-[60px] bg-[#F8F2E8] rounded-full flex flex-col items-center justify-center">
                <FiUsers className="text-[#6B2D34] text-lg mb-1" />
                <p className="text-[#4A3428] text-sm font-semibold">
                  {room.guests}
                </p>
              </div>

              {/* Area */}
              <div className="w-[140px] sm:w-[150px] h-[60px] bg-[#F8F2E8] rounded-full flex flex-col items-center justify-center">
                <FiMapPin className="text-[#6B2D34] text-lg mb-1" />
                <p className="text-[#4A3428] text-sm font-semibold">
                  {room.area}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview + Image Section */}
      <section className="bg-[#F6F1E8] px-5 sm:px-8 lg:px-12 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div ref={introRef}>
            <p className="uppercase text-xs font-semibold tracking-[0.25em] text-[#6B2D34] mb-4">
              Overview
            </p>
            <p className="text-[#4A3428] mb-2 text-2xl max-w-lg">
              {room.description}
            </p>
            <p className="text-[#4A3428] text-2xl max-w-lg">
              {room.longDescription}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-[#4A3428]">
                <FiClock className="text-[#6B2D34]" />
                <span>Check-in: 2PM</span>
              </div>
              <div className="flex items-center gap-2 text-[#4A3428]">
                <FiClock className="text-[#6B2D34]" />
                <span>Check-out: 12PM</span>
              </div>
            </div>
          </div>

          <div className="relative rounded-md overflow-hidden shadow-2xl">
            <div className="aspect-[3/3]">
              <img
                src={room.image}
                alt={room.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Gallery */}
      <section className="relative w-full h-screen min-h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700"
          style={{ backgroundImage: `url(${activeImage})` }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative h-full flex flex-col items-center justify-end pb-12 px-5">
          <div ref={galleryRef} className="w-full max-w-2xl">
            <div className="grid grid-cols-4 gap-3 sm:gap-4">
              {room.gallery.map((src) => (
                <button
                  key={src}
                  onClick={() => setActiveImage(src)}
                  className={`relative rounded-lg overflow-hidden aspect-[3/2] border-2 transition-all duration-300 ${activeImage === src
                      ? "border-[#D6B06A] scale-105 shadow-xl z-10"
                      : "border-white/30 hover:border-white/60 opacity-60 hover:opacity-90"
                    }`}
                >
                  <img
                    src={src}
                    alt="Gallery thumbnail"
                    className="w-full h-full object-cover"
                  />
                  {activeImage === src && (
                    <div className="absolute inset-0 bg-[#D6B06A]/20" />
                  )}
                  {activeImage !== src && (
                    <div className="absolute inset-0 bg-black/40" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features & Amenities */}
      <section className="bg-[#F6F1E8] px-5 sm:px-8 lg:px-12 py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - What's Included */}
          <div ref={featuresRef}>
            <p className="uppercase text-xs font-semibold tracking-[0.25em] text-[#6B2D34] mb-3">
              What's Included
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-7xl text-[#4A3428] mb-4">
              Features & Amenities
            </h2>
          </div>

          {/* Right - Facilities Grid */}
          <div ref={amenityRef} className="bg-white/60 rounded-2xl p-6 sm:p-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {roomFeatures.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center text-center gap-2 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#E3D8C6]"
                >
                  <Icon className="text-2xl text-[#6B2D34]" />
                  <span className="text-xs text-[#4A3428]/80 leading-tight">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <Link
              to={`/booking?room=${encodeURIComponent(room.title)}`}
              className="block mt-8"
            >
              <button className="w-full py-4 bg-[#6B2D34] text-white rounded-full uppercase tracking-[0.2em] text-sm transition duration-500 hover:bg-[#8A3B46] cursor-pointer">
                Reserve Now
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default RoomDetail;