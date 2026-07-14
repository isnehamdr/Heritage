import React from "react";
import { Link } from "react-router-dom";

const nearbyPlaces = [
  {
    title: "Stupa Temple",
    image: "/images/frame1.png",
  },
  {
    title: "Pashupatinath Temple",
    image: "/images/frame2.png",
  },
  {
    title: "Patan Durbar Square",
    image: "/images/frame3.png",
  },
  {
    title: "Thamel",
    image: "/images/frame4.png",
  },
];

const Nearby = () => {
  return (
    <section className="grid lg:grid-cols-2 min-h-screen my-24">
      {/* Left Section - Sticky */}
      <div className="bg-[#4A3428] flex flex-col p-12 lg:p-16 lg:sticky lg:top-0 lg:h-screen">
        {/* Content - Top */}
        <div className="flex-1 flex items-center">
          <div className="max-w-lg">
            <span className="text-white/40 text-sm uppercase tracking-[4px] font-semibold">
              Explore Nearby
            </span>

            <h2 className="text-5xl md:text-6xl text-white mt-4 leading-tight">
              Discover Local
              <br />
              Attractions
            </h2>

            <p className="text-white/50 text-md mt-6 leading-relaxed">
              Experience the best of what the city has to offer. From cultural
              landmarks to natural beauty, find your perfect adventure just
              moments away.
            </p>
            

            <Link to="/experiences">
              <button className="mt-8 px-8 py-3 cursor-pointer bg-white text-black rounded-full font-medium hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                View All Places
              </button>
            </Link>
          </div>
        </div>

        {/* Bottom Image */}
        <div className="w-full mt-8 relative">
          <img
            src="/images/bg2.png"
            alt="Bottom decoration"
            className="w-full h-auto invert object-cover"
          />
        </div>
      </div>

      {/* Right Section - With SVG Background */}
      <div className="bg-[#2F4F44] py-20 px-10 relative overflow-hidden">
        {/* SVG Pattern Background */}
        <div 
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
              `<svg xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="a" width="120" height="120.1" patternUnits="userSpaceOnUse">
                    <rect width="100%" height="100%" fill="#2b2b31"/>
               <path fill="none" stroke="#ecc94b" d="m34.582 5.417.001-10.722h10.722v10.72zm18.014-18.014v25.305H27.293v-25.304zM19.999 20 20-19.888h39.888V20zM-5.305 5.417V-5.304l10.722-.001V5.416zm18.013-18.014V12.71l-25.304-.001v-25.304zM-19.888 20v-39.888H20V20zm54.47 25.305.002-10.722h10.721v10.722zm18.014-18.014.001 25.306H27.292V27.291zM20 59.888V20h39.888v39.888zM-5.304 34.584H5.417v10.721H-5.305zm18.013 18.013h-25.305V27.291H12.71zM-19.888 20H20v39.888h-39.888z"/>
                  </pattern>
                </defs>
                <rect width="800%" height="800%" fill="url(#a)" transform="translate(-97 -.2)"/>
              </svg>`
            )}`,
    
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.1,
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          <div className="flex flex-col items-center gap-20">
            {nearbyPlaces.map((place, index) => (
              <div
                key={index}
                className="group flex flex-col items-center cursor-pointer"
              >
                {/* Image Container */}
                <div className="w-[340px] h-[420px] overflow-hidden">
                  <img
                    src={place.image}
                    alt={place.title}
                    className="w-full h-full object-cover "
                  />
                </div>

                <h3 className="mt-6 text-3xl text-white transition duration-300 group-hover:text-white/80">
                  {place.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nearby;