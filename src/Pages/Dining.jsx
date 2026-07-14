import React from "react";
import { Link } from "react-router-dom";
import PageBanner from "../Components/Shared/PageBanner";
import useReveal from "../hooks/useReveal";

const venues = [
  {
    name: "The Courtyard Table",
    hours: "7:00 AM – 10:30 PM",
    description:
      "Our main restaurant, set around the original stone courtyard. Newari classics by day, candlelit dinners by night.",
    image: "/images/img2.jpeg",
  },
  {
    name: "Rooftop Terrace",
    hours: "4:00 PM – 11:00 PM",
    description:
      "Small plates and local spirits with a view over Thamel's rooftops toward the Kathmandu Valley hills.",
    image: "/images/h2.avif",
  },
  {
    name: "In-Room Dining",
    hours: "24 Hours",
    description:
      "A quieter option — the same kitchen, brought to your room whenever you'd rather not leave it.",
    image: "/images/img1.jpeg",
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
  const venuesRef = useReveal({ stagger: 0.15, y: 40, start: "top 88%" });
  const menuRef = useReveal({ stagger: 0.12, y: 24, start: "top 90%" });
  const chefRef = useReveal({ y: 40 });

  return (
    <>
      <PageBanner
        crumb="Dining"
        kicker="Taste of the Valley"
        title="Dining & Kitchen"
        description="Three kitchens, one pantry — built on recipes carried through Newari households for generations, not reinvented for a menu card."
        image="/images/img2.jpeg"
      />

      {/* Intro */}
      <section className="bg-[#F6F1E8] px-5 sm:px-8 lg:px-12 pt-16 sm:pt-20">
        <div ref={introRef} className="max-w-3xl mx-auto text-center">
          <p className="uppercase text-xs tracking-[0.25em] text-[#6B2D34] mb-4">
            ✦ Cooked, Not Curated
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#4A3428] leading-tight">
            Recipes older than the hotel around them
          </h2>
          <p className="mt-6 text-[#4A3428]/75 leading-relaxed">
            Our kitchen team is mostly Newari families from this same
            neighbourhood, cooking the dishes they grew up on. Nothing here
            was invented for a tourist menu.
          </p>
        </div>
      </section>

      {/* Venues */}
      <section className="bg-[#F6F1E8] px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div
          ref={venuesRef}
          className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {venues.map((v) => (
            <div key={v.name} className="group">
              <div className="overflow-hidden rounded-xl h-[280px]">
                <img
                  src={v.image}
                  alt={v.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="pt-5">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#6B2D34]">
                    {v.name}
                  </h3>
                </div>
                <p className="text-xs uppercase tracking-[0.15em] text-[#B08D57] mt-1">
                  {v.hours}
                </p>
                <p className="text-[#4A3428]/75 text-sm leading-relaxed mt-3">
                  {v.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Menu highlights */}
      <section className="bg-[#4A3428] px-5 sm:px-8 lg:px-12 py-16 sm:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="uppercase text-xs tracking-[0.25em] text-[#D6B06A] mb-4">
              A Few Favourites
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white">
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
                      <p className="text-white font-serif text-lg">
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
      </section>

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
            <p className="font-serif text-xl sm:text-2xl text-[#6B2D34] leading-snug">
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
