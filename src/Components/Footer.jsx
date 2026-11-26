import React from "react";
import { Link } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";

const sitemapLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/our-story" },
  { name: "Rooms", path: "/rooms" },
  { name: "Dining", path: "/dining" },
  { name: "Gallery", path: "/gallery" },
  { name: "Experiences", path: "/experiences" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#836352] text-[#F6F1E8] rounded-t-[30px] sm:rounded-t-[50px] mt-6 sm:mt-10">
      {/* Background Pencil Sketch */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/images/footer-sketch.png"
          alt=""
          className="absolute right-0 bottom-0 h-full w-auto max-w-none opacity-[0.05] object-contain select-none"
        />
      </div>

      {/* Gradient Overlay - Hidden on mobile */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#4A3428] via-[#4A3428]/95 to-transparent pointer-events-none hidden sm:block"></div>

      <div className="relative z-10 px-5 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-x-6 gap-y-10 sm:gap-x-8 sm:gap-y-12 lg:gap-16">
          {/* Left - Brand & Address */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-5">
            <p className="uppercase text-xs sm:text-sm tracking-[0.25em] text-[#CBAE9D] font-medium">
              Thamel Heritage Hotel & Spa
            </p>

            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl leading-tight mt-4 text-white/90">
              Chibahal,
              <br />
              Narsingh Chowk,
              <br />
              Thamel-26
            </h3>

            <p className="mt-3 text-[#CBAE9D] text-sm">
              Kathmandu, Nepal
            </p>

            {/* Book Now Button */}
            <div className="flex items-center mt-8 group/buttons">
              <Link to="/booking" className="inline-block">
                <button className="bg-[#6B2D34] group-hover/buttons:bg-[#8A3B46] transition duration-300 px-8 py-3.5 rounded-full text-white font-medium text-sm uppercase tracking-[0.15em]">
                  Book Now
                </button>
              </Link>

              <Link
                to="/booking"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#6B2D34] group-hover/buttons:bg-[#8A3B46] group-hover/buttons:rotate-45 transition duration-300 "
                aria-label="Book Now"
              >
                <BsArrowUpRight size={20} className="text-white" />
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-3">
            <h4 className="uppercase text-xs tracking-[0.25em] text-[#CBAE9D] mb-6 font-medium">
              Contact
            </h4>

            <div className="space-y-4">
              <a
                href="tel:+9779768585630"
                className="block text-base hover:text-[#D6B06A] transition relative group"
              >
                <span className="relative inline-block">
                  +977-9768585630
                  <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-[#D6B06A] transition-all duration-300 group-hover:w-full"></span>
                </span>
              </a>

              <a
                href="mailto:info@thamelheritagehotel.com"
                className="block text-base hover:text-[#D6B06A] transition break-all relative group"
              >
                <span className="relative inline-block">
                  info@thamelheritagehotel.com
                  <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-[#D6B06A] transition-all duration-300 group-hover:w-full"></span>
                </span>
              </a>

              <Link
                to="/contact"
                className="block text-base hover:text-[#D6B06A] transition relative group"
              >
                <span className="relative inline-block">
                  Contact Us
                  <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-[#D6B06A] transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>

              {/* <Link
                to="/faq"
                className="block text-base hover:text-[#D6B06A] transition relative group"
              >
                <span className="relative inline-block">
                  FAQ's
                  <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-[#D6B06A] transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link> */}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-2">
            <h4 className="uppercase text-xs tracking-[0.25em] text-[#CBAE9D] mb-6 font-medium">
              Quick Links
            </h4>

            <div className="space-y-2.5">
              {sitemapLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block text-base hover:text-[#D6B06A] transition duration-300 relative group"
                >
                  <span className="relative inline-block">
                    {item.name}
                    <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-[#D6B06A] transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Follow */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <h4 className="uppercase text-xs tracking-[0.25em] text-[#CBAE9D] mb-6 font-medium">
              Follow Us
            </h4>

            <div className="space-y-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-base hover:text-[#D6B06A] transition relative group"
              >
                <span className="relative inline-block">
                  Instagram
                  <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-[#D6B06A] transition-all duration-300 group-hover:w-full"></span>
                </span>
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-base hover:text-[#D6B06A] transition relative group"
              >
                <span className="relative inline-block">
                  Facebook
                  <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-[#D6B06A] transition-all duration-300 group-hover:w-full"></span>
                </span>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-base hover:text-[#D6B06A] transition relative group"
              >
                <span className="relative inline-block">
                  LinkedIn
                  <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-[#D6B06A] transition-all duration-300 group-hover:w-full"></span>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#7C3D38]/50 mt-12 pt-8 flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm">
         © {new Date().getFullYear()} Thamel Heritage Hotel & Spa. All rights
            reserved.
          </div>

          <p className="text-sm text-[#D8C5B6] text-center lg:text-right">
            Crafted by{" "}
            <a
              href="https://sait.com.np/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D6B06A] transition relative group inline-block"
            >
              <span className="relative inline-block">
                S.A I.T Solution Nepal
                <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-[#D6B06A] transition-all duration-300 group-hover:w-full"></span>
              </span>
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;