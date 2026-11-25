import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HERO_IMAGE = "/images/img3.jpeg";

const FEATURES = [
  {
    number: "01",
    title: "A Family's Story",
    body: "Every carved window holds a story the guidebooks skip. Our staff trace the house's old trade routes, family feuds, and quiet renovations back to the records that still exist upstairs.",
    tag: "Heritage",
  },
  {
    number: "02",
    title: "Events & Experiences",
    body: "Candlelit dinners in the courtyard, seasonal Newari festivals, and lantern-lit evening walks. Our calendar turns a stay here into something you take part in, not just watch.",
    tag: "Culture",
  },
  {
    number: "03",
    title: "Tours & Local Access",
    body: "Step past where most visitors stop. Private tours open the archive room, the rooftop at dusk, and workshops closed to the public, guided by people who know this neighbourhood by heart.",
    tag: "Exploration",
  },
];

const timelineItems = [
  {
    number: "01",
    year: "1992",
    title: "THE HOUSE IS BUILT",
    text: "A Newari merchant family raises this courtyard house in Thamel, carving its windows and doorframes by hand in the style still found across the old city.",
    tags: ["Heritage", "Architecture"],
  },
  {
    number: "02",
    year: "2019",
    title: "THE RESTORATION",
    text: "After a long, careful restoration following the 2015 earthquake, the house reopens its gates as Heritage — its timber frame and courtyard kept exactly as they were.",
    tags: ["Restoration", "Preservation"],
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
  const aboutRef = useRef(null);
  const heroRef = useRef(null);

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

      // Animation for about section
      gsap.fromTo(
        aboutRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#F6F1E8]">
      {/* Hero Section with Image and Features */}
   <div ref={heroRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 lg:py-20 xl:py-24">
  {/* Header - Stacked on mobile */}
  <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 lg:mb-14">
    <div className="w-full">
      <p
        ref={kickerRef}
        className="tracking-[0.14em] text-[10px] sm:text-xs uppercase mb-2 sm:mb-4 text-[#6B2D34]"
      >
        ✦ Built in timber, kept in story
      </p>
      <h1
        ref={headlineRef}
        className="w-full font-medium uppercase leading-[1.1] text-[2rem] sm:text-[3rem] md:text-[3.8rem] lg:text-[4.5rem] xl:text-[5rem] text-[#6B2D34]"
      >
        Immerse Yourself In
        <br className="hidden xs:block" />
        Our Heritage Story.
      </h1>
    </div>
    <div ref={introRef} className="font-sans text-sm sm:text-[15px] leading-relaxed text-[#4A3428] max-w-2xl">
      <p>
        From evening lantern walks to seasonal Newari festivals, we offer
        unforgettable moments throughout the year. Step into the house's
        history and discover something extraordinary. Book a private tour
        and explore Thamel like never before.
      </p>
    </div>
  </div>

  {/* Hero image - Different layout on mobile */}
  <div ref={imageWrapRef} className="relative w-full rounded-xl overflow-hidden">
    <div className="relative w-full h-[300px] xs:h-[350px] sm:h-[420px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[760px] overflow-hidden">
      <img
        ref={imgRef}
        src={HERO_IMAGE}
        alt="Candlelit hallway inside the hotel, lined with carved wooden doors and lanterns"
        className="w-full h-full object-cover brightness-95"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
    </div>

    <CornerMark markRef={cornerTLRef} className="top-3 left-3 sm:top-4 sm:left-4 w-5 h-5 sm:w-8 sm:h-8" />
    <CornerMark markRef={cornerTRRef} className="top-3 right-3 sm:top-4 sm:right-4 scale-x-[-1] w-5 h-5 sm:w-8 sm:h-8" />

    {/* Features - Vertical list on mobile, horizontal on desktop */}
    <div className="absolute bottom-0 left-0 right-0">
      {/* Mobile: Vertical scrollable cards */}
      <div className="block sm:hidden overflow-x-auto pb-3 px-4">
        <div className="flex gap-3 snap-x snap-mandatory">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              ref={(el) => (cardsRef.current[i] = el)}
              className="group flex-shrink-0 w-[240px] snap-start py-3 px-4 bg-black/40 backdrop-blur-sm rounded-lg border border-white/10"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] text-[#B9975B] font-serif">{f.number}</span>
                <h3 className="font-serif text-sm uppercase font-medium text-white">
                  {f.title}
                </h3>
              </div>
              <p className="font-sans text-[11px] leading-relaxed text-white/70 line-clamp-2">
                {f.body}
              </p>
              <span className="inline-block mt-2 text-[8px] uppercase tracking-[0.15em] text-[#B9975B]/60 border border-[#B9975B]/30 rounded-full px-2 py-0.5">
                {f.tag}
              </span>
            </div>
          ))}
        </div>
        {/* Scroll indicator */}
        <div className="flex justify-center gap-1 mt-3">
          <span className="w-6 h-0.5 bg-[#B9975B] rounded-full"></span>
          <span className="w-2 h-0.5 bg-white/30 rounded-full"></span>
          <span className="w-2 h-0.5 bg-white/30 rounded-full"></span>
        </div>
      </div>

      {/* Desktop: Grid layout */}
      <div className="hidden sm:grid grid-cols-3">
        {FEATURES.map((f, i) => (
          <div
            key={f.title}
            ref={(el) => (cardsRef.current[i] = el)}
            className={`group py-5 sm:py-6 lg:py-8 px-5 sm:px-6 lg:px-8 relative border-t border-white/20 hover:border-[#B9975B]/80 transition-colors duration-500 ${
              i === 0 ? "sm:border-l-0" : "sm:border-l sm:border-l-white/15"
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs text-[#B9975B] font-serif">{f.number}</span>
              <h3 className="relative inline-block font-serif text-lg sm:text-xl lg:text-2xl uppercase font-medium text-white">
                {f.title}
                <span className="absolute left-0 -bottom-1.5 h-px w-0 bg-[#B9975B] transition-all duration-500 ease-out group-hover:w-full" />
              </h3>
            </div>
            <p className="font-sans text-xs sm:text-sm leading-relaxed text-white/75">{f.body}</p>
           
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
      {/* About Section - Timeline - Matches Services page layout */}
      <section className=" px-5 sm:px-8 lg:px-12">
        <div ref={aboutRef} className="mx-auto max-w-[1370px]">
          {/* Section Header */}
          <div className="mb-12 text-center">
            {/* <p className="uppercase text-xs tracking-[0.25em] text-[#6B2D34] mb-4">
              ✦ Over a Century in the Same Courtyard
            </p> */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#6B2D34] leading-tight">
              A Story Written in <span className="italic">Timber & Stone</span>
            </h2>
          </div>

          {/* Timeline Items - Using Services page layout */}
          <div className="space-y-5">
            {timelineItems.map((item) => (
              <article
                key={item.number}
                className="group rounded-xl bg-[#FAF8F3] p-4 sm:p-5 lg:p-4"
              >
                <div className="grid min-h-[280px] grid-cols-1 gap-8 lg:grid-cols-[1fr_2fr] lg:gap-10">
                  {/* Year & Number */}
                  <div className="flex flex-col justify-center items-start p-4 sm:p-6 bg-[#6B2D34]/5 rounded-lg">
                    <span className="font-serif text-sm text-[#6B2D34] mb-2">
                      {item.number}
                    </span>
                    <span className="font-serif text-5xl sm:text-6xl lg:text-7xl text-[#6B2D34] font-light leading-none">
                      {item.year}
                    </span>
                    <div className="w-12 h-px bg-[#6B2D34] mt-4" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-between py-3 lg:py-4">
                    <div>
                      <h3 className="font-serif text-2xl leading-tight text-[#6B2D34] sm:text-3xl lg:text-[34px] mb-3">
                        {item.title}
                      </h3>
                      <p className="max-w-2xl font-serif text-base leading-[1.35] text-[#806D63] sm:text-lg">
                        {item.text}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-6">
                      {item.tags.map((tag) => (
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
              </article>
            ))}
          </div>

          {/* Additional Info Box */}
          <div className="mt-12 p-8 bg-[#6B2D34]/5 rounded-xl border border-[#6B2D34]/10 text-center">
            <p className="font-serif text-lg text-[#4A3428] max-w-2xl mx-auto">
              "Built in 1992, this Newari courtyard house has witnessed the city grow around it 
              while its timber frame and carved windows have stayed largely untouched."
            </p>
            <span className="inline-block mt-4 text-xs uppercase tracking-[0.2em] text-[#B08D57]">
              — The Heritage Archives
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}