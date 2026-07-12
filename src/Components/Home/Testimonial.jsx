import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const DEFAULT_TESTIMONIALS = [
  {
    quote:
      "Stunning architecture, and fascinating history. Whether you're a history lover or just looking for a magical experience, this place is a must-visit!",
    name: "Harper A.",
    role: "Our visitor from France",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
  },
  {
    quote:
      "Every corner tells a story. Walking across that bridge at sunset felt like stepping straight into a fairytale.",
    name: "Noah B.",
    role: "Our visitor from Belgium",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
  },
  {
    quote:
      "The kind of place photos never quite do justice to. Go at golden hour and bring a jacket — the river breeze is worth it.",
    name: "Elena R.",
    role: "Our visitor from Italy",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
  },
];

export default function Testimonial({
  bgImage = "/images/img3.jpeg",
  testimonials = DEFAULT_TESTIMONIALS,
}) {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const quoteRef = useRef(null);
  const authorRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(sectionRef.current, { autoAlpha: 0 });
      gsap.set(cardRef.current, { autoAlpha: 0, x: 120 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.to(sectionRef.current, { autoAlpha: 1, duration: 0.7 }).to(
        cardRef.current,
        { autoAlpha: 1, x: 0, duration: 1, ease: "power4.out" },
        "-=0.4"
      );

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.fromTo(
                cardRef.current,
                { autoAlpha: 0, x: 120 },
                { autoAlpha: 1, x: 0, duration: 0.9, ease: "power4.out" }
              );
              observer.disconnect();
            }
          });
        },
        { threshold: 0.3 }
      );
      if (sectionRef.current) observer.observe(sectionRef.current);
      return () => observer.disconnect();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
    const xFrom = direction > 0 ? 24 : -24;
    tl.fromTo(
      quoteRef.current,
      { autoAlpha: 0, x: xFrom },
      { autoAlpha: 1, x: 0, duration: 0.5 }
    ).fromTo(
      authorRef.current,
      { autoAlpha: 0, x: xFrom },
      { autoAlpha: 1, x: 0, duration: 0.5 },
      "-=0.35"
    );
  }, [index, direction]);

  const goTo = (newIndex, dir) => {
    setDirection(dir);
    setIndex((newIndex + testimonials.length) % testimonials.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    goTo(index - 1, -1);
  };
  const handleNext = (e) => {
    e.stopPropagation();
    goTo(index + 1, 1);
  };

  const current = testimonials[index];

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[520px] sm:min-h-[600px] lg:min-h-[720px] bg-neutral-900"
    >
      {/* Background photo */}
      <img
        src={bgImage}
        alt="Historic stone bridge leading to a castle"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/25 to-transparent" />

      {/* Testimonial card */}
      <div
        ref={cardRef}
        className="absolute bottom-4 right-4 left-4 z-10 sm:left-auto sm:right-8 sm:bottom-8 sm:w-[420px] md:w-[520px] lg:right-12 lg:bottom-16"
      >
        <div className="flex items-stretch rounded-md bg-[#6b2d34] shadow-xl sm:rounded-none">
          {/* Left chevron — sm and up only */}
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={handlePrev}
            className="relative z-20 hidden w-10 shrink-0 cursor-pointer items-center justify-center bg-[#6b2d34] text-white transition-colors sm:flex"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Card body */}
          <div className="relative flex-1 bg-[#f6f1e8] px-5 py-5 pr-16 sm:px-6 sm:py-6 sm:pr-6">
            <p
              ref={quoteRef}
              className="text-[15px] sm:text-xl leading-relaxed text-neutral-500"
            >
              "{current.quote}"
            </p>

            <div ref={authorRef} className="mt-4 flex items-center gap-3">
              <img
                src={current.avatar}
                alt={current.name}
                className="h-14 w-14 rounded-full object-cover"
              />
              <div>
                <p className="text-lg font-semibold tracking-wide text-neutral-900">
                  {current.name.toUpperCase()}
                </p>
                <p className="text-md text-neutral-500">{current.role}</p>
              </div>
            </div>

            {/* Up/down chevrons — mobile only, inside the card so they stay clickable */}
            <div className="absolute right-3 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-2 sm:hidden">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={handlePrev}
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#6b2d34] text-white shadow-lg"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 15l-6-6-6 6" />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={handleNext}
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#6b2d34] text-white shadow-lg"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right chevron — sm and up only */}
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={handleNext}
            className="relative z-20 hidden w-10 shrink-0 cursor-pointer items-center justify-center bg-[#6b2d34] text-white transition-colors sm:flex md:w-12"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}