import React from 'react'

const Rooms = () => {
  const roomData = [
    {
      id: 1,
      title: "Deluxe Suite",
      description: "Spacious suite with panoramic views",
      image: "/images/img1.jpeg",
      area: "45 m²",
      bed: "King Bed",
      price: "$299/night"
    },
    {
      id: 1,
      title: "Deluxe Suite",
      description: "Spacious suite with panoramic views",
      image: "/images/img1.jpeg",
      area: "45 m²",
      bed: "King Bed",
      price: "$299/night"
    },
    {
      id: 1,
      title: "Deluxe Suite",
      description: "Spacious suite with panoramic views",
      image: "/images/img1.jpeg",
      area: "45 m²",
      bed: "King Bed",
      price: "$299/night"
    },
    {
      id: 2,
      title: "Executive Room",
      description: "Modern comfort with city views",
      image: "/images/img2.jpeg",
      area: "35 m²",
      bed: "Queen Bed",
      price: "$199/night"
    }
  ];

  return (
    <>
      {/* Hero Section with Image */}
      <section className="relative w-full h-screen overflow-hidden bg-[#F6F1E8]">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <img
            src="/images/img1.jpeg"
            alt="Luxury Room"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 h-full flex flex-col justify-between px-8 sm:px-16 lg:px-24 py-12 sm:py-16">
          {/* Top Section - Luxury & Retreat */}
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-wide">
                Luxury
              </h2>
            </div>
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-wide">
                Retreat
              </h2>
            </div>
          </div>

          {/* Bottom Section - Description & Link */}
          <div className="flex flex-col items-center text-center">
            <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-sm mx-auto leading-relaxed font-bold">
              Experience unparalleled comfort and elegance in our thoughtfully 
              designed rooms.
            </p>
            <div className="mt-6 sm:mt-8">
              <a
                href="/rooms"
                className="text-white text-sm uppercase font-semibold relative inline-block pb-1 group cursor-pointer"
              >
                explore Room
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform origin-left transition-transform duration-300 group-hover:scale-x-100 scale-x-0"></span>
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white/30"></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Spaces made for Relaxation */}
      <section className="w-full bg-[#F6F1E8] pt-16 sm:pb-12 sm:pt-20 md:pb-16 md:pt-24 px-8 sm:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between gap-12 md:gap-16">
            {/* Left - Spaces made for Relaxation */}
            <div className="flex-1 text-left">
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#6B2D34] tracking-wide mb-4">
                Spaces made
                <br />
                for Relaxation
              </h3>
              <p className="text-[#6B2D34]/70 text-base sm:text-md leading-relaxed max-w-lg">
                From soft textures to serene interiors, every room is created to help you unwind and feel at home.
              </p>
            </div>

            {/* Right - Button */}
            <div className="flex-shrink-0 ">
              <div className="flex items-center mb-4 lg:mb-0">
                <a
                  href="/rooms"
                  className="px-8 py-3 bg-[#6B2D34] rounded-full text-white text-sm transition duration-500 hover:bg-[#8A3B46] whitespace-nowrap "
                >
                  View all Rooms
                </a>
                <div className="w-12 h-12 rounded-full bg-[#6B2D34] flex items-center justify-center transition duration-500 hover:bg-[#8A3B46] group cursor-pointer hover:scale-110 hover:shadow-lg flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-1"
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Room Cards Section */}
      <section className="w-full pb-16 sm:pb-20 md:pb-24 px-8 sm:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {roomData.map((room) => (
              <div
                key={room.id}
                className="group relative rounded-lg overflow-visible"
              >
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
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="py-6 relative z-10">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-serif text-[#6B2D34] mb-2">
                        {room.title}
                      </h3>
                      <p className="text-[#6B2D34]/60 text-sm sm:text-base">
                        {room.description}
                      </p>
                    </div>
                    {/* Arrow Button */}
                    <div className="w-10 h-10 rounded-full bg-[#6B2D34] flex items-center justify-center transition-all duration-300 hover:bg-[#8A3B46] group/arrow cursor-pointer hover:scale-110 hover:shadow-lg flex-shrink-0 mt-1">
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
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Rooms