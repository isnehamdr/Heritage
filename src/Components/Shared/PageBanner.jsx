import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

const PageBanner = ({ kicker, title, description, image, crumb }) => {
  const kickerRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(
      kickerRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.6 }
    )
      .fromTo(
        titleRef.current,
        { opacity: 0, y: 34 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.3"
      )
      .fromTo(
        lineRef.current,
        { width: 0 },
        { width: "64px", duration: 0.7 },
        "-=0.6"
      )
      .fromTo(
        descRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.5"
      );
  }, []);

  return (
    <section className="relative w-full h-[58vh] sm:h-[62vh] min-h-[440px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 h-full w-full"
        style={{
          backgroundImage: `url("${image}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: "scale(1.06)",
        }}
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#F6F1E8] via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-5 sm:px-6 text-center text-[#F6F1E8] pt-16 md:pt-20">
        {crumb && (
          <p className="uppercase text-[11px] sm:text-xs tracking-[0.25em] text-white/55 mb-5">
            <Link to="/" className="hover:text-white transition-colors duration-300">
              Home
            </Link>
            <span className="mx-2 text-white/30">/</span>
            <span className="text-white/85">{crumb}</span>
          </p>
        )}

        {kicker && (
          <p
            ref={kickerRef}
            className="uppercase text-xs sm:text-sm tracking-[0.35em] text-[#D6B06A] mb-4"
          >
            {kicker}
          </p>
        )}

        <h1
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] drop-shadow-xl"
        >
          {title}
        </h1>

        <div
          ref={lineRef}
          className="h-[2px] bg-[#D6B06A] mx-auto mt-6"
          style={{ width: 0 }}
        />

        {description && (
          <p
            ref={descRef}
            className="mt-6 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed text-white/80"
          >
            {description}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageBanner;
