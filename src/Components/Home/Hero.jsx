import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const title = useRef(null);
  const subtitle = useRef(null);
  const buttons = useRef(null);
  const scroll = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    // Set initial states
    gsap.set(title.current, { opacity: 0, y: 80 });
    gsap.set(subtitle.current, { opacity: 0, y: 40 });
    gsap.set(buttons.current, { opacity: 0, y: 30 });
    gsap.set(scroll.current, { opacity: 0, y: 20 });

    // Text animations
    const tl = gsap.timeline();

    tl.to(title.current, {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power4.out",
    })
      .to(
        subtitle.current,
        {
          y: 0,
          opacity: 1,
          duration: 1,
        },
        "-=0.8"
      )
      .to(
        buttons.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
        },
        "-=0.6"
      )
      .to(
        scroll.current,
        {
          opacity: 1,
          y: 20,
          duration: 1,
        },
        "-=0.4"
      );

    // Scroll animation for the scroll indicator
    gsap.to(scroll.current, {
      y: 12,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // Hero stays visible for 1 viewport height, then fades out over the next viewport height
    gsap.to(heroRef.current, {
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top+=100vh top",
        end: "+=200%",
        scrub: 1,
      }
    });

    // Create the scroll effect - Hero stays fixed, About section moves over it
    // Removed opacity animation to prevent white overlay
    gsap.fromTo(aboutRef.current,
      {
        y: "100vh",
      },
      {
        y: "0",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top bottom",
          end: "top top",
          scrub: 1.5,
        },
      }
    );

    // Pin the about section when it reaches top
    ScrollTrigger.create({
      trigger: aboutRef.current,
      start: "top bottom",
      end: "top top",
      pin: true,
      pinSpacing: false,
    });

    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      {/* Hero Section - Fixed Position */}
      <section
        ref={heroRef}
        className="fixed inset-0 h-screen w-full overflow-hidden"
        style={{ zIndex: 1 }}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 h-full w-full"
          style={{
            backgroundImage: 'url("images/img4.jpeg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: 'scale(1.1)',
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-[1]" />

        {/* Content */}
        <div className="relative z-10 flex h-full w-full items-end justify-center px-4 sm:px-6 pb-16 sm:pb-20">
          <div className="max-w-5xl text-center text-[#F6F1E8]">
            <h1
              ref={title}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light text-white drop-shadow-2xl"
            >
              Where
              <br />
              Heritage Lives
            </h1>

            <p
              ref={subtitle}
              className="mx-auto mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base md:text-md leading-relaxed text-[#E8DFD5] drop-shadow-lg"
            >
              Experience timeless architecture, handcrafted elegance, and warm
              hospitality in a beautifully restored heritage residence.
            </p>

            <div
              ref={buttons}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
            >
              <Link to="/booking">
                <button className="w-full sm:w-auto cursor-pointer bg-[#6B2D34] px-6 sm:px-8 py-3 sm:py-3.5 uppercase tracking-[0.25em] text-xs sm:text-sm text-white transition duration-500 hover:bg-[#82404A] hover:scale-105 shadow-xl">
                  Book Your Stay
                </button>
              </Link>

              <Link to="/our-story">
                <button className="w-full sm:w-auto cursor-pointer border border-[#B08D57] px-6 sm:px-8 py-3 sm:py-3.5 uppercase tracking-[0.25em] text-xs sm:text-sm text-[#F6F1E8] transition duration-500 hover:bg-[#B08D57] hover:text-[#4A3428] hover:scale-105 shadow-xl">
                  Discover Our Story
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer to allow scrolling */}
      <div className="h-screen bg-black/70" />
    </>
  );
};

export default Hero;