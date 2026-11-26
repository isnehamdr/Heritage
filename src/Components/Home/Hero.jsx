
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

    // Hero fade on scroll
    gsap.to(heroRef.current, {
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top+=100vh top",
        end: "+=200%",
        scrub: 1,
      },
    });

    // About section scroll effect
    if (aboutRef.current) {
      gsap.fromTo(
        aboutRef.current,
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

      ScrollTrigger.create({
        trigger: aboutRef.current,
        start: "top bottom",
        end: "top top",
        pin: true,
        pinSpacing: false,
      });
    }

    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="fixed inset-0 h-screen w-full overflow-hidden"
        style={{ zIndex: 1 }}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 h-full w-full"
          style={{
            backgroundImage: 'url("/images/hotel/hotel.jpeg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: "scale(1.1)",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 z-[1] bg-black/40" />

        {/* Content */}
        <div className="relative z-10 flex h-full w-full items-end justify-center px-4 pb-24 sm:px-6 sm:pb-20">
          <div className="max-w-5xl text-center text-[#F6F1E8]">
            <h1
              ref={title}
              className="text-4xl font-light text-white drop-shadow-2xl sm:text-5xl md:text-7xl lg:text-8xl"
            >
              Step Into

              <br />
              Living History
            </h1>

            <div
              ref={buttons}
              className="mt-8 flex flex-col justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4"
            >
              {/* Book Your Stay */}
              <Link to="/booking" className="hidden sm:block">
                <button
                  type="button"
                  className="w-full cursor-pointer bg-[#6B2D34] px-6 py-3 text-xs uppercase tracking-[0.25em] text-white shadow-xl sm:w-auto sm:px-8 sm:py-3.5 sm:text-sm"
                >
                  Book Your Stay
                </button>
              </Link>

              {/* Discover Our Story */}
              <Link
                to="/our-mission"
                className="hidden w-full sm:block sm:w-auto"
              >
                <button
                  type="button"
                  className="w-full cursor-pointer border border-[#6B2D34] bg-[#6B2D34] px-6 py-3 text-xs uppercase tracking-[0.25em] text-[#F6F1E8] shadow-xl sm:w-auto sm:bg-transparent sm:px-8 sm:py-3.5 sm:text-sm"
                >
                  Discover Our Story
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Fixed Book Now Button - Right side, rotated 90deg, visible on all screens */}
      <div className="fixed sm:hidden block -right-8 top-1/2 -translate-y-1/2 z-40">
        <Link to="/booking">
          <button className="bg-[#6B2D34] px-4 py-2 uppercase  text-xs text-white transition duration-500 hover:bg-[#82404A] shadow-xl origin-center rotate-90 whitespace-nowrap">
            Book Now
          </button>
        </Link>
      </div>

      {/* Spacer */}
      <div className="h-screen bg-black/70" />
    </>
  );
};

export default Hero;
