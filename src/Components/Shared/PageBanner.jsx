import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

const PageBanner = ({ kicker, title, description, image, crumb }) => {
  const kickerRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    if (kickerRef.current) {
      tl.fromTo(
        kickerRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6 }
      );
    }
    
    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 34 },
      { opacity: 1, y: 0, duration: 1 },
      "-=0.3"
    );
    
    if (descRef.current) {
      tl.fromTo(
        descRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.5"
      );
    }
  }, []);

  return (
    <section className="relative w-full h-[70vh] sm:h-[75vh] md:h-[80vh] min-h-[520px] sm:min-h-[560px] max-h-[820px] flex items-center justify-center overflow-hidden">
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

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black/40" />

      {/* Title - Centered */}
      <div className="relative z-10 w-full max-w-3xl px-5 sm:px-6 text-center text-[#F6F1E8]">
        {kicker && (
          <p
            ref={kickerRef}
            className="uppercase text-[11px] sm:text-xs md:text-sm tracking-[0.28em] sm:tracking-[0.35em] text-[#D6B06A] mb-3 sm:mb-4"
          >
            {kicker}
          </p>
        )}
        
        <h1
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[1.1] sm:leading-[1.05] drop-shadow-xl px-2"
        >
          {title}
        </h1>
      </div>

      {/* Description - Bottom Center */}
      {description && (
        <p
          ref={descRef}
          className="absolute bottom-12 sm:bottom-16 left-1/2 -translate-x-1/2 z-10 max-w-xl sm:max-w-2xl text-sm sm:text-base leading-relaxed text-white/90 drop-shadow-md px-4 text-center w-full"
        >
          {description}
        </p>
      )}
    </section>
  );
};

export default PageBanner;