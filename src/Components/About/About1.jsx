import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HERO_IMAGE = "/images/img3.jpeg";

const FEATURES = [
  {
    title: "A Family's Story",
    body: "Every carved window holds a story the guidebooks skip. Our staff trace the house's old trade routes, family feuds, and quiet renovations back to the records that still exist upstairs.",
  },
  {
    title: "Events & Experiences",
    body: "Candlelit dinners in the courtyard, seasonal Newari festivals, and lantern-lit evening walks. Our calendar turns a stay here into something you take part in, not just watch.",
  },
  {
    title: "Tours & Local Access",
    body: "Step past where most visitors stop. Private tours open the archive room, the rooftop at dusk, and workshops closed to the public, guided by people who know this neighbourhood by heart.",
  },
];

function CornerMark({ className = "", markRef }) {
  return (
    <svg
      ref={markRef}
      className={`absolute w-8 h-8 z-10 pointer-events-none ${className}`}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="mark-path" d="M20 2 L20 14 M20 2 L14 8 M20 2 L26 8" stroke="#B9975B" strokeWidth="1" strokeLinecap="round" />
      <path className="mark-path" d="M2 20 L14 20 M2 20 L8 14 M2 20 L8 26" stroke="#B9975B" strokeWidth="1" strokeLinecap="round" />
      <circle className="mark-path" cx="20" cy="20" r="3" stroke="#B9975B" strokeWidth="1" fill="none" />
      <path className="mark-path" d="M20 20 L32 32" stroke="#B9975B" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

export default function About1() {
  const kickerRef = useRef(null);
  const headlineRef = useRef(null);
  const introRef = useRef(null);
  const imageWrapRef = useRef(null);
  const imgRef = useRef(null);
  const cornerTLRef = useRef(null);
  const cornerTRRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(kickerRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.6 })
        .fromTo(headlineRef.current, { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.9 }, "-=0.35")
        .fromTo(introRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.55")
        .fromTo(imageWrapRef.current, { opacity: 0, scale: 1.04 }, { opacity: 1, scale: 1, duration: 1.1, ease: "power2.out" }, "-=0.4")
        .fromTo(imgRef.current, { scale: 1.12 }, { scale: 1, duration: 1.6, ease: "power2.out" }, "-=1.1");

      [cornerTLRef.current, cornerTRRef.current].forEach((el) => {
        if (!el) return;
        const paths = el.querySelectorAll(".mark-path");
        paths.forEach((p) => {
          const len = p.getTotalLength ? p.getTotalLength() : 40;
          gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
        });
        tl.to(paths, { strokeDashoffset: 0, duration: 0.8, stagger: 0.06, ease: "power2.inOut" }, "-=0.9");
      });

      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 26 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current[0],
            start: "top 88%",
            once: true,
          },
        }
      );

      gsap.to(imgRef.current, {
        yPercent: 6,
        ease: "none",
        scrollTrigger: {
          trigger: imageWrapRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#F6F1E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14 py-16 sm:py-20 lg:py-24">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-8 lg:gap-16 items-end mb-10 sm:mb-14">
          <div className="w-full">
            <p
              ref={kickerRef}
              className="tracking-[0.14em] text-xs uppercase mb-4 text-[#6B2D34]"
            >
              ✦ Built in timber, kept in story
            </p>
            <h1
              ref={headlineRef}
              className="w-full font-medium uppercase leading-[0.95] text-[2.2rem] sm:text-[3.4rem] lg:text-[4.5rem] xl:text-[5rem] text-[#6B2D34]"
            >
              Immerse Yourself In
              <br />
              Our Heritage Story.
            </h1>
          </div>
          <div ref={introRef} className="font-sans text-sm sm:text-[15px] leading-relaxed text-[#4A3428]">
            <p>
              From evening lantern walks to seasonal Newari festivals, we offer
              unforgettable moments throughout the year. Step into the house's
              history and discover something extraordinary. Book a private tour
              and explore Thamel like never before.
            </p>
          </div>
        </div>

        {/* Hero image with features overlaid on bottom */}
        <div ref={imageWrapRef} className="relative w-full rounded-xl overflow-hidden">
          <div className="relative w-full h-[320px] sm:h-[480px] md:h-[560px] lg:h-[700px] xl:h-[760px] overflow-hidden">
            <img
              ref={imgRef}
              src={HERO_IMAGE}
              alt="Candlelit hallway inside the hotel, lined with carved wooden doors and lanterns"
              className="w-full h-full object-cover brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
          </div>

          <CornerMark markRef={cornerTLRef} className="top-4 left-4" />
          <CornerMark markRef={cornerTRRef} className="top-4 right-4 scale-x-[-1]" />

          {/* Features overlaid on the bottom of the image */}
          <div className="absolute bottom-0 left-0 right-0 grid grid-cols-1 sm:grid-cols-3">
            {FEATURES.map((f, i) => (
              <div
                key={f.title}
                ref={(el) => (cardsRef.current[i] = el)}
                className={`group py-5 sm:py-7 lg:py-8 px-5 sm:px-6 lg:px-8 relative border-t border-white/20 hover:border-[#B9975B]/80 transition-colors duration-500 ${
                  i === 0 ? "sm:border-l-0" : "sm:border-l sm:border-l-white/15"
                }`}
              >
                <h3 className="relative inline-block font-serif text-lg sm:text-xl lg:text-2xl uppercase font-medium mb-2 sm:mb-3 text-white">
                  {f.title}
                  <span className="absolute left-0 -bottom-1.5 h-px w-0 bg-[#B9975B] transition-all duration-500 ease-out group-hover:w-full" />
                </h3>
                <p className="font-sans text-xs sm:text-sm leading-relaxed text-white/75">{f.body}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}