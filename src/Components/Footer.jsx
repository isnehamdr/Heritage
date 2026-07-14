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
    <footer className="bg-[#4A3428] text-[#F6F1E8] rounded-t-[30px] sm:rounded-t-[50px] mt-6 sm:mt-10 relative z-10">
      <div className="px-5 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20">
        {/* Footer Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-6 gap-y-10 sm:gap-x-8 sm:gap-y-12 lg:gap-16">
          {/* Left */}
          <div className="col-span-2 lg:col-span-5">
            <p className="uppercase text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] text-[#CBAE9D]">
              Thamel Heritage Hotel
            </p>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl leading-tight mt-4 sm:mt-6">
              Thamel-6,
              <br />
              Kathmandu,
              <br />
              Nepal
            </h3>
            <div className="flex items-center mt-8 sm:mt-12">
              <Link to="/booking">
                <button className="bg-[#6B2D34] hover:bg-[#8A3B46] px-6 sm:px-8 py-3 sm:py-4 rounded-full transition duration-300 text-sm sm:text-base">
                  Book Now
                </button>
              </Link>
              <Link to="/booking">
                <button
                  aria-label="Book Now"
                  className="h-11 w-11 sm:h-14 sm:w-14 ml-3 sm:ml-4 rounded-full bg-[#6B2D34] hover:bg-[#8A3B46] hover:rotate-45 transition duration-300 flex items-center justify-center flex-shrink-0"
                >
                  <BsArrowUpRight />
                </button>
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="uppercase text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] text-[#CBAE9D] mb-4 sm:mb-8">
              Contact
            </h4>
            <div className="space-y-2 sm:space-y-4 text-sm sm:text-base">
              <a href="tel:+9771456890" className="block hover:text-[#D6B06A] transition">
                +977 1 456 7890
              </a>
              <a
                href="mailto:hello@heritage.com"
                className="block break-words hover:text-[#D6B06A] transition"
              >
                hello@heritage.com
              </a>
              <Link to="/contact" className="block hover:text-[#D6B06A] transition">
                Contact Us
              </Link>
              <Link to="/contact" className="block hover:text-[#D6B06A] transition">
                FAQ's
              </Link>
            </div>
          </div>

          {/* Sitemap */}
          <div className="col-span-1 lg:col-span-3">
            <h4 className="uppercase text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] text-[#CBAE9D] mb-4 sm:mb-8">
              Sitemap
            </h4>
            <div className="space-y-1 sm:space-y-2">
              {sitemapLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block font-serif text-xl sm:text-2xl lg:text-4xl hover:text-[#D6B06A] transition"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Follow */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="uppercase text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] text-[#CBAE9D] mb-4 sm:mb-8">
              Follow
            </h4>
            <div className="space-y-1 sm:space-y-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-serif text-xl sm:text-2xl lg:text-4xl hover:text-[#D6B06A] transition"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-serif text-xl sm:text-2xl lg:text-4xl hover:text-[#D6B06A] transition"
              >
                Facebook
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-serif text-xl sm:text-2xl lg:text-4xl hover:text-[#D6B06A] transition"
              >
                Pinterest
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#7C3D38] mt-12 sm:mt-20 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 text-center md:text-left">
          <div className="flex gap-6 sm:gap-8 text-xs sm:text-sm">
            <Link to="/contact" className="hover:text-[#D6B06A] transition">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-[#D6B06A] transition">
              Terms & Conditions
            </Link>
          </div>
          <p className="text-xs sm:text-sm text-[#D8C5B6]">
            © {new Date().getFullYear()} Heritage Hotel. All rights reserved. Crafted by{" "}
            <a
              href="https://sait.com.np/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#c7959b]"
            >
              S.A I.T Solution Nepal
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
