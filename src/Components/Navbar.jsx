import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Link, useLocation } from "react-router-dom"; // Import Link and useLocation

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation(); // Get current location

  const menuRef = useRef(null);
  const navbarRef = useRef(null);
  const tl = useRef(null);
  const linkRefs = useRef([]);

  // Define your routes with paths
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Our Story", path: "/our-story" },
    { name: "Rooms", path: "/rooms" },
    { name: "Dining", path: "/dining" },
    { name: "Experiences", path: "/experiences" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY && currentScrollY > 40) {
        setScrolled(true);
      } else if (currentScrollY <= 40) {
        setScrolled(false);
      }
      
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    tl.current = gsap.timeline({ paused: true });

    tl.current.fromTo(
      menuRef.current,
      { y: "-100%" },
      { y: "0%", duration: 0.8, ease: "power4.inOut" }
    );
  }, []);

  useEffect(() => {
    if (open) {
      tl.current.play();
      animateNavLinks();
    } else {
      tl.current.reverse();
    }
  }, [open]);

  const animateNavLinks = () => {
    linkRefs.current.forEach((link, index) => {
      gsap.fromTo(
        link,
        { opacity: 0, x: 30, rotation: 3 },
        {
          opacity: 1,
          x: 0,
          rotation: 0,
          duration: 0.6,
          delay: 0.3 + index * 0.08,
          ease: "power3.out",
        }
      );
    });
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  // Close menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <>
      {/* NAVBAR */}
      <nav
        ref={navbarRef}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          visible ? "translate-y-0" : "-translate-y-full"
        } ${scrolled ? "bg-[#F6F1E8] shadow-md" : "bg-transparent"}`}
      >
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 h-16 md:h-20 flex items-center justify-between">
          {/* LEFT - LOGO (Mobile) */}
          <div className="md:hidden">
            <Link to="/">
              <h1 className={`text-xl tracking-[0.2em] font-serif transition-colors duration-300 ${
                scrolled ? "text-[#2A1A12]" : "text-white"
              }`}>
                HERITAGE
              </h1>
            </Link>
          </div>

          {/* LEFT - MENU BUTTON (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setOpen(true)}
              className="justify-center items-center flex gap-2 group cursor-pointer"
              aria-label="Open menu"
            >
              <p className={`uppercase tracking-[0.2em] text-sm transition-colors duration-300 ${
                scrolled ? "text-[#2A1A12]" : "text-white"
              }`}>
                MENU
              </p>
              <div className="flex flex-col gap-1.5">
                <span className={`w-8 h-[2px] transition-all duration-300 group-hover:w-10 ${
                  scrolled ? "bg-[#2A1A12]" : "bg-white"
                }`}></span>
                <span className={`w-5 h-[2px] transition-all duration-300 group-hover:w-7 ${
                  scrolled ? "bg-[#2A1A12]" : "bg-white"
                }`}></span>
              </div>
            </button>
          </div>

          {/* LOGO - Center (Desktop) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
            <Link to="/">
              <h1 className={`text-3xl lg:text-4xl tracking-[0.3em] font-serif transition-colors duration-300 whitespace-nowrap ${
                scrolled ? "text-[#2A1A12]" : "text-white"
              }`}>
                HERITAGE
              </h1>
            </Link>
          </div>

          {/* RIGHT - MENU BUTTON (Mobile) */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setOpen(true)}
              className="justify-center items-center flex gap-2 group"
              aria-label="Open menu"
            >
              <p className={`uppercase tracking-[0.2em] text-xs transition-colors duration-300 ${
                scrolled ? "text-[#2A1A12]" : "text-white"
              }`}>
                MENU
              </p>
              <div className="flex flex-col gap-1.5">
                <span className={`w-6 h-[1.5px] transition-all duration-300 group-hover:w-8 ${
                  scrolled ? "bg-[#2A1A12]" : "bg-white"
                }`}></span>
                <span className={`w-4 h-[1.5px] transition-all duration-300 group-hover:w-6 ${
                  scrolled ? "bg-[#2A1A12]" : "bg-white"
                }`}></span>
              </div>
            </button>
          </div>

          {/* RIGHT - BOOK NOW BUTTON (Desktop Only) */}
          <div className="hidden md:flex items-center ">
            <Link to="/booking">
              <button className="px-6 py-3 bg-[#6B2D34] rounded-full cursor-pointer text-white uppercase tracking-[0.2em] text-sm transition duration-500 hover:bg-[#8A3B46]">
                Book Now
              </button>
            </Link>

            {/* Round shape with arrow */}
            <Link to="/booking">
              <div className="w-12 h-12 rounded-full bg-[#6B2D34] flex items-center justify-center transition duration-500 hover:bg-[#8A3B46] group cursor-pointer flex-shrink-0 ml-2">
                <svg
                  className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </nav>

      {/* FULLSCREEN MENU - OFF CANVAS */}
      <div
        ref={menuRef}
        className="fixed inset-0 bg-[#F6F1E8] z-[100] -translate-y-full overflow-y-auto"
      >
        <div className="min-h-full flex flex-col px-6 sm:px-8 md:px-12 py-6 sm:py-8 md:py-10">
          {/* TOP SECTION - Logo & Close Button */}
          <div className="flex justify-between items-start">
            <div>
              <Link to="/" onClick={() => setOpen(false)}>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif tracking-[0.3em] text-[#4A3428]">
                  HERITAGE
                </h2>
              </Link>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-4xl sm:text-5xl md:text-6xl text-[#4A3428] hover:text-[#6B2D34] transition duration-300 leading-none hover:rotate-90 transform"
              aria-label="Close menu"
            >
              ×
            </button>
          </div>

          {/* BOTTOM SECTION - Image left, Nav links bottom right */}
          <div className="flex-1 flex flex-col md:flex-row items-end justify-between pb-6 md:pb-12">
            {/* Left - Image */}
            <div className="w-full md:w-1/3 lg:w-1/3 mb-6 md:mb-0 opacity-0" ref={el => {
              if (el && open) {
                gsap.fromTo(el, 
                  { opacity: 0, x: -50, scale: 0.9 },
                  { opacity: 1, x: 0, scale: 1, duration: 0.8, delay: 0.2, ease: "power3.out" }
                );
              }
            }}>
              <img
                src="/images/patan.png"
                alt="Heritage"
                className="w-full h-[40vh] mt-6 sm:h-[70vh] object-cover rounded-lg"
              />
            </div>

            {/* Right - Navigation Links - Bottom Right */}
            <div className="w-full md:w-2/3 lg:w-3/4 flex flex-col items-start md:items-end">
              <div className="flex flex-col items-start md:items-end gap-2 sm:gap-3 w-full">
                {navLinks.map((item, index) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    ref={el => linkRefs.current[index] = el}
                    className={`group relative text-[#4A3428] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif tracking-widest transition duration-300 text-left md:text-right opacity-0 w-full md:w-auto ${
                      location.pathname === item.path ? 'text-[#6B2D34]' : ''
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {item.name}
                    {/* Underline animation */}
                    <span className={`absolute -bottom-1 left-0 md:left-auto md:right-0 h-[2px] bg-[#6B2D34] transition-all duration-300 ${
                      location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                    {/* Hover scale effect */}
                    <span className="absolute inset-0 bg-[#6B2D34]/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></span>
                  </Link>
                ))}
                
                {/* About Us & Round Arrow Buttons */}
                <div className="flex items-center mt-2 sm:mt-4 opacity-0 w-full sm:w-auto" ref={el => {
                  if (el && open) {
                    gsap.fromTo(el,
                      { opacity: 0, y: 30 },
                      { opacity: 1, y: 0, duration: 0.6, delay: 0.8, ease: "power3.out" }
                    );
                  }
                }}>
                  <Link to="/booking" className="flex-1 sm:flex-none">
                    <button 
                      className="px-6 py-3 bg-[#6B2D34] rounded-full text-white uppercase tracking-[0.2em] text-sm transition duration-500 hover:bg-[#8A3B46] w-full sm:w-auto"
                      onClick={() => setOpen(false)}
                    >
                      Book Now
                    </button>
                  </Link>

                  {/* Round shape with arrow */}
                  <Link to="/booking">
                    <div className="w-12 h-12 rounded-full bg-[#6B2D34] flex items-center justify-center transition duration-500 hover:bg-[#8A3B46] group cursor-pointer hover:scale-110 hover:shadow-lg flex-shrink-0 ml-2">
                      <svg
                        className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center pt-4">
            <p className="text-[#4A3428]/40 text-xs sm:text-sm tracking-[0.2em]">
              © 2026 HERITAGE
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;