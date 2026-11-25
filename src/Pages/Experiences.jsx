import React from "react";
import { Link } from "react-router-dom";
import useReveal from "../hooks/useReveal";

const experiences = [
  {
    number: "01",
    title: "Mohan's Tattoo Studio",
    duration: "10 Minutes",
    time: "Mon, Wed, Fri — 2:00 PM",
    description:
      "Visit one of Kathmandu's most respected tattoo studios, where master artist Mohan blends traditional Newari motifs with contemporary designs. Witness the intricate process of hand-tapped tattooing—a centuries-old art form—and discover the deep spiritual meanings behind sacred Buddhist symbols and deity imagery that adorn both locals and travelers seeking a permanent piece of Nepali heritage.",
    image: "/images/mohan.jpg",
    tags: ["Tattoo Art", "Spiritual", "Heritage Craft"],
  },
  {
    number: "02",
    title: "Garden of Dreams Escape",
    duration: "12 Minutes",
    time: "Every Morning, 8:00 AM",
    description:
      "Step into the enchanting Garden of Dreams, a neo-classical sanctuary tucked away from Kathmandu's vibrant streets. Built in the 1920s by Field Marshal Kaiser Shumsher, this six-acre masterpiece features elegant pavilions, tranquil fountains, and lush European-inspired landscaping. A quiet morning stroll here offers a serene contrast to the bustling city, making it a perfect start to your day.",
    image: "/images/garden.jpeg",
    tags: ["Heritage", "Garden", "Architecture"],
  },
  {
    number: "03",
    title: "LOD Nightlife Experience",
    duration: " 15 Minutes",
    time: "Daily, 9:00 PM",
    description:
      "Experience Kathmandu's most iconic nightlife destination—Lord of the Drinks (LOD). With its sleek modern interiors, cutting-edge sound system, and electric atmosphere, LOD is where the city's cosmopolitan energy comes alive. Perfect for guests looking to contrast the day's heritage explorations with a vibrant evening of music, cocktails, and socializing in the heart of Thamel.",
    image: "/images/lod.webp",
    tags: ["Nightlife", "Entertainment", "Social"],
  },
];
const Experiences = () => {
  const heroRef = useReveal({ y: 30 });
  const gridRef = useReveal({ stagger: 0.1, y: 20, start: "top 92%" });

  return (
    <>
      {/* Hero Section with Background Image - Same as Services page */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <img
            src="/images/img3.jpeg"
            alt="Experiences"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content Container */}
        <div ref={heroRef} className="relative z-10 h-full flex flex-col items-center justify-center px-5 sm:px-8 text-center text-white">
          {/* Title - Centered */}
          <div>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9]">
              <span className="block">Experiences</span>
              {/* <span className="block italic font-light">Beyond The Room</span> */}
            </h2>
          </div>

          {/* Description - Centered at bottom */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4">
            <p className="text-white/90 text-base sm:text-lg md:text-xl font-light leading-relaxed">
              Curated the way a friend who lives here would plan your week, not the way a brochure would.
            </p>
          </div>
        </div>
      </section>

      {/* Experiences List Section - Same layout as Services */}
      <section className="bg-[#F4EEE4] px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1370px] space-y-5">
          {experiences.map((exp) => (
            <article
              key={exp.number}
              className="group rounded-xl bg-[#FAF8F3] p-4 sm:p-5 lg:p-4"
            >
              <div className="grid min-h-[340px] grid-cols-1 gap-8 lg:grid-cols-[430px_1fr] lg:gap-10">
                {/* Image */}
                <div className="h-[300px] overflow-hidden rounded-md sm:h-[360px] lg:h-full">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="h-[50vh] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between py-3 lg:py-4">
                  {/* Title Section */}
                  <div>
                    <div className="flex items-start gap-4">
                      <span className="pt-1 font-serif text-sm text-[#7B343D]">
                        {exp.number}
                      </span>
                      <div>
                        <h3 className="font-serif text-3xl leading-tight text-[#7B343D] sm:text-4xl lg:text-[38px]">
                          {exp.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 mt-2">
                          <span className="text-xs uppercase tracking-[0.15em] text-[#806D63]">
                            {exp.duration}
                          </span>
                          <span className="text-[#806D63]/30">•</span>
                          <span className="text-xs uppercase tracking-[0.15em] text-[#806D63]">
                            {exp.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom content */}
                  <div className="flex flex-col gap-8 xl:flex-row xl:items-end xl:justify-between">
                    {/* Description */}
                    <p className="max-w-[500px] font-serif text-base leading-[1.35] text-[#806D63] sm:text-lg">
                      {exp.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 xl:max-w-[260px] xl:justify-end">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[#55140F] px-4 py-2 font-serif text-sm text-[#F8F1E7] transition-colors duration-300 group-hover:bg-[#7A211A]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="bg-[#2F4F44] px-5 sm:px-8 py-16 sm:py-20 text-center">
        <h3 className="font-serif text-3xl sm:text-4xl text-white mb-5">
          Want something not on this list?
        </h3>
        <p className="text-white/60 max-w-xl mx-auto mb-8">
          Our concierge can arrange private guides, transport, and permits
          for the Kathmandu Valley beyond what's scheduled here.
        </p>
        <Link to="/contact">
          <button className="px-8 py-3.5 bg-white text-[#2F4F44] rounded-full uppercase tracking-[0.2em] text-sm font-medium transition duration-500 hover:bg-white/90 hover:scale-105">
            Talk to Our Concierge
          </button>
        </Link>
      </section> */}
    </>
  );
};

export default Experiences;