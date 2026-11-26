import React, { useState } from "react";
import { Link } from "react-router-dom";

const DEFAULT_TESTIMONIALS = [
  {
    quote:
      "Stunning architecture, and fascinating history. Whether you're a history lover or just looking for a magical experience, this place is a must-visit!",
    name: "Harper A.",
    role: "Our visitor from France",
  },
  {
    quote:
      "Every corner tells a story. Walking across that bridge at sunset felt like stepping straight into a fairytale.",
    name: "Noah B.",
    role: "Our visitor from Belgium",
  },
  {
    quote:
      "The kind of place photos never quite do justice to. Go at golden hour and bring a jacket — the river breeze is worth it.",
    name: "Elena R.",
    role: "Our visitor from Italy",
  },
];

const exploreCards = [
  {
    eyebrow: "CHOOSE YOUR",
    title: "Stay",
    image: "/images/hotel/new (5).jpeg",
    link: "/rooms",
  },
  {
    eyebrow: "EXPERIENCE",
    title: "Dining",
    image: "/images/hotel/new (34).jpeg",
    link: "/dining",
  },
];

// Helper function to get initials
const getInitials = (name) => {
  return name
    .split(" ")
    .map(word => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

// Generate a consistent color based on name
const getAvatarColor = (name) => {
  const colors = [
    "bg-[#6B2D34]",
    "bg-[#8A3B46]",
    "bg-[#5C242B]",
    "bg-[#7A3340]",
    "bg-[#4A1D22]",
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
};

export default function Testimonial({
  bgImage = "/images/ground.jpeg",
  testimonials = DEFAULT_TESTIMONIALS,
}) {
  const [index, setIndex] = useState(0);

  const goTo = (newIndex) => {
    setIndex((newIndex + testimonials.length) % testimonials.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    goTo(index - 1);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    goTo(index + 1);
  };

  const current = testimonials[index];

  return (
    <>
      {/* =====================================================
          TESTIMONIAL
      ===================================================== */}
      <section className="relative min-h-[520px] w-full bg-neutral-900 sm:min-h-[600px] lg:min-h-[720px]">
        {/* Background */}
        <img
          src={bgImage}
          alt="Heritage courtyard at dusk"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/25 to-transparent" />

        {/* Testimonial card */}
        <div className="absolute bottom-4 left-4 right-4 z-10 sm:bottom-8 sm:left-auto sm:right-8 sm:w-[420px] md:w-[520px] lg:bottom-16 lg:right-12">
          <div className="flex items-stretch rounded-md bg-[#6B2D34] shadow-xl sm:rounded-none">
            {/* Previous */}
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={handlePrev}
              className="relative z-20 hidden w-10 shrink-0 items-center justify-center bg-[#6B2D34] text-white sm:flex hover:bg-[#8A3B46] transition-colors"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* Card body */}
            <div className="relative flex-1 bg-[#f6f1e8] px-5 py-5 pr-16 sm:px-6 sm:py-6 sm:pr-6">
              <p className="text-[15px] leading-relaxed text-neutral-500 sm:text-xl">
                "{current.quote}"
              </p>

              <div className="mt-4 flex items-center gap-3">
                {/* Avatar with initials */}
                <div className={`h-14 w-14 rounded-full flex items-center justify-center text-white font-semibold text-lg ${getAvatarColor(current.name)}`}>
                  {getInitials(current.name)}
                </div>

                <div>
                  <p className="text-lg font-semibold tracking-wide text-neutral-900">
                    {current.name.toUpperCase()}
                  </p>

                  <p className="text-md text-neutral-500">
                    {current.role}
                  </p>
                </div>
              </div>

              {/* Mobile arrows */}
              <div className="absolute right-3 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-2 sm:hidden">
                <button
                  type="button"
                  aria-label="Previous testimonial"
                  onClick={handlePrev}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#6B2D34] text-white shadow-lg hover:bg-[#8A3B46] transition-colors"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 15l-6-6-6 6" />
                  </svg>
                </button>

                <button
                  type="button"
                  aria-label="Next testimonial"
                  onClick={handleNext}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#6B2D34] text-white shadow-lg hover:bg-[#8A3B46] transition-colors"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Next */}
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={handleNext}
              className="relative z-20 hidden w-10 shrink-0 items-center justify-center bg-[#6B2D34] text-white sm:flex md:w-12 hover:bg-[#8A3B46] transition-colors"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPLORE STAY / DINING
      ===================================================== */}
      <section className="relative w-full bg-[#F5EFE5] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-[90px] z-30">
        <div className="mx-auto max-w-[1370px] relative z-30">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {exploreCards.map((card) => (
              <Link
                key={card.title}
                to={card.link}
                className="group relative block h-[440px] overflow-hidden rounded-lg border border-[#6B2D34]/30 sm:h-[480px] lg:h-[440px] cursor-pointer z-30"
              >
                {/* Image */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#6B2D34]/95 via-[#6B2D34]/15 to-transparent" />

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 sm:p-7 lg:p-8 z-40">
                  <div className="relative z-40">
                    {/* Eyebrow */}
                    <p className="mb-1 text-[12px] font-medium uppercase tracking-wide text-white/75 sm:text-[13px]">
                      {card.eyebrow}
                    </p>

                    {/* Title */}
                    <h2 className="text-4xl sm:leading-[0.85] text-white sm:text-[60px] lg:text-[62px]">
                      {card.title}
                    </h2>
                  </div>

                  {/* Arrow */}
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#6B2D34] text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-[#8A3B46] sm:h-14 sm:w-14 z-50 relative">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 19L19 5" />
                      <path d="M9 5h10v10" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}