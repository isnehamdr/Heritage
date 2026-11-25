import React from "react";
import { Link } from "react-router-dom";
import useReveal from "../hooks/useReveal";

const venues = [
  {
    number: "01",
    name: "Bihani",
    hours: "7:00 AM – 10:30 PM",
    description:
      "Main Dining Hall is situated right adjacent to the lobby. Restaurant offers Breakfast/ Lunch and dinner for both inhouse and outside guests. Restaurant offer global cuisine focusing on continental, Indian/Nepali and Chinese food. Dining place also offers a small bar offering international spirits, wines and cocktails.",
    image: "/images/img2.jpeg",
    tags: ["Newari Cuisine", "Courtyard", "Candlelit"],
  },
  {
    number: "02",
    name: "Rooftop Bar",
    hours: "4:00 PM – 11:00 PM",
    description:
      "Rooftop bar situated on the top floor of the hotel viewing swimming pool and the deck area. Bar offers International and domestic liquor brands and famous cocktails. An ideal place to spend time with family , friends and loved once enjoying 310-degree view of Kathmandu valley.",
    image: "/images/hotel/new (36).jpeg",
    tags: ["Rooftop", "Small Plates", "Local Spirits"],
  },
  
];

const menu = [
  {
    course: "To Start",
    items: [
      { name: "Chatamari", note: "Rice-flour crepe, egg, buffalo mince" },
      { name: "Momo, Steamed or Fried", note: "Buffalo, chicken, or vegetable" },
      { name: "Bara", note: "Black lentil pancake, ginger, garlic" },
    ],
  },
  {
    course: "Main Plates",
    items: [
      { name: "Newari Khaja Set", note: "Beaten rice, choila, seasonal sides" },
      { name: "Thakali Thali", note: "Rice, lentils, seasonal vegetables, pickle" },
      { name: "Sekuwa Platter", note: "Fire-grilled marinated meats" },
    ],
  },
  {
    course: "To Finish",
    items: [
      { name: "Yomari", note: "Steamed rice dumpling, molasses, sesame" },
      { name: "Sel Roti & Honey", note: "Ring-shaped rice bread, valley honey" },
      { name: "Masala Chiya", note: "Spiced milk tea, hotel blend" },
    ],
  },
];

const Dining = () => {
  const introRef = useReveal({ y: 30 });
  const heroRef = useReveal({ y: 30 });
  const venuesRef = useReveal({ stagger: 0.1, y: 20, start: "top 90%" });
  const menuRef = useReveal({ stagger: 0.12, y: 24, start: "top 90%" });
  const chefRef = useReveal({ y: 40 });

  return (
    <>
      {/* Hero Section with Background Image - Same as Services page */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <img
            src="/images/img2.jpeg"
            alt="Dining & Kitchen"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content Container */}
        <div ref={heroRef} className="relative z-10 h-full flex flex-col items-center justify-center px-5 sm:px-8 text-center text-white">
          {/* Title - Centered */}
          <div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] font-medium ">
              Dining &
            <br />
              Kitchen
            </h2>
          </div>

          {/* Description - Centered at bottom */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4">
            <p className="text-white/90 text-base sm:text-lg md:text-xl font-light leading-relaxed">
              Three kitchens, one pantry — built on recipes carried through Newari households for generations, not reinvented for a menu card.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      {/* <section className="bg-[#F6F1E8] px-5 sm:px-8 lg:px-12 pt-16 sm:pt-20 pb-8">
        <div ref={introRef} className="max-w-3xl mx-auto text-center">
          <p className="uppercase text-xs tracking-[0.25em] text-[#6B2D34] mb-4">
            ✦ Cooked, Not Curated
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#4A3428] leading-tight">
            Recipes older than the hotel around them
          </h2>
          <p className="mt-6 text-[#4A3428]/75 leading-relaxed">
            Our kitchen team is mostly Newari families from this same
            neighbourhood, cooking the dishes they grew up on. Nothing here
            was invented for a tourist menu.
          </p>
        </div>
      </section> */}

      {/* Venues - Updated to match Services page layout */}
      <section className="bg-[#F4EEE4] px-5 py-16 sm:py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1370px] space-y-5">
          {venues.map((venue) => (
            <article
              key={venue.number}
              className="group rounded-xl bg-[#FAF8F3] p-4 sm:p-5 lg:p-4"
            >
              <div className="grid min-h-[340px] grid-cols-1 gap-8 lg:grid-cols-[430px_1fr] lg:gap-10">
                {/* Image */}
                <div className="h-[300px] overflow-hidden rounded-md sm:h-[360px] lg:h-full">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="h-[50vh] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between py-3 lg:py-4">
                  {/* Title Section */}
                  <div>
                    <div className="flex items-start gap-4">
                      <span className="pt-1 text-sm text-[#7B343D]">
                        {venue.number}
                      </span>
                      <div>
                        <h3 className="text-3xl leading-tight text-[#7B343D] sm:text-4xl lg:text-[38px]">
                          {venue.name}
                        </h3>
                        <p className="text-xs uppercase tracking-[0.15em] text-[#806D63] mt-2">
                          {venue.hours}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom content */}
                  <div className="flex flex-col gap-8 xl:flex-row xl:items-end xl:justify-between">
                    {/* Description */}
                    <p className="max-w-[450px] text-base leading-[1.35] text-[#806D63] sm:text-lg">
                      {venue.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 xl:max-w-[260px] xl:justify-end">
                      {venue.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[#55140F] px-4 py-2 text-sm text-[#F8F1E7] transition-colors duration-300 group-hover:bg-[#7A211A]"
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

      {/* Menu highlights */}
      {/* <section className="bg-[#4A3428] px-5 sm:px-8 lg:px-12 py-16 sm:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="uppercase text-xs tracking-[0.25em] text-[#D6B06A] mb-4">
              A Few Favourites
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-white">
              From the Menu
            </h2>
          </div>

          <div ref={menuRef} className="grid sm:grid-cols-3 gap-10 sm:gap-8">
            {menu.map((section) => (
              <div key={section.course}>
                <h3 className="uppercase text-sm tracking-[0.2em] text-[#D6B06A] mb-5 pb-3 border-b border-white/15">
                  {section.course}
                </h3>
                <ul className="space-y-5">
                  {section.items.map((item) => (
                    <li key={item.name}>
                      <p className="text-white text-lg">
                        {item.name}
                      </p>
                      <p className="text-white/50 text-sm mt-1">
                        {item.note}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Chef's note / CTA */}
      <section
        ref={chefRef}
        className="bg-[#F6F1E8] px-5 sm:px-8 lg:px-12 py-16 sm:py-20"
      >
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-8 sm:gap-12 text-center sm:text-left">
          <img
            src="/images/img3.jpeg"
            alt="Our kitchen"
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover flex-shrink-0"
          />
          <div>
            <p className="text-xl sm:text-2xl text-[#6B2D34] leading-snug">
              "We cook the way our grandmothers did — slow, on request, and
              rarely the same way twice."
            </p>
            <p className="mt-4 text-sm uppercase tracking-[0.2em] text-[#B08D57]">
              The Kitchen Team
            </p>
            <Link to="/booking" className="inline-block mt-6">
              <button className="px-7 py-3 bg-[#6B2D34] rounded-full text-white uppercase tracking-[0.2em] text-xs sm:text-sm transition duration-500 hover:bg-[#8A3B46]">
                Reserve a Table
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dining;