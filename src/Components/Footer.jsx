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
          className="absolute right-0 bottom-0 h-full w-auto max-w-none opacity-[0.07] object-contain select-none"
        />
      </div>

      {/* Optional Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#4A3428] via-[#4A3428]/95 to-transparent pointer-events-none"></div>

      <div className="relative z-10 px-5 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20">

        {/* Footer Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-6 gap-y-10 sm:gap-x-8 sm:gap-y-12 lg:gap-16">

          {/* Left */}
          <div className="col-span-2 lg:col-span-5">
            <p className="uppercase text-xs sm:text-sm tracking-[0.25em] text-[#CBAE9D]">
              Thamel Heritage Hotel
            </p>

            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl leading-tight mt-5">
              Thamel-6,
              <br />
              Kathmandu,
              <br />
              Nepal
            </h3>

            <div className="flex items-center mt-10">
              <Link to="/booking">
                <button className="bg-[#6B2D34] hover:bg-[#8A3B46] transition duration-300 px-8 py-4 rounded-full">
                  Book Now
                </button>
              </Link>

              <Link to="/booking">
                <button
                  aria-label="Book Now"
                  className="ml-4 w-14 h-14 rounded-full bg-[#6B2D34] hover:bg-[#8A3B46] hover:rotate-45 transition duration-300 flex items-center justify-center"
                >
                  <BsArrowUpRight size={22} />
                </button>
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="uppercase text-xs tracking-[0.25em] text-[#CBAE9D] mb-8">
              Contact
            </h4>

            <div className="space-y-4">
              <a
                href="tel:+97714567890"
                className="block hover:text-[#D6B06A] transition"
              >
                +977 1 456 7890
              </a>

              <a
                href="mailto:hello@heritage.com"
                className="block hover:text-[#D6B06A] transition break-all"
              >
                hello@heritage.com
              </a>

              <Link
                to="/contact"
                className="block hover:text-[#D6B06A] transition"
              >
                Contact Us
              </Link>

              <Link
                to="/faq"
                className="block hover:text-[#D6B06A] transition"
              >
                FAQ's
              </Link>
            </div>
          </div>

          {/* Sitemap */}
          <div className="col-span-1 lg:col-span-3">
            <h4 className="uppercase text-xs tracking-[0.25em] text-[#CBAE9D] mb-8">
              Sitemap
            </h4>

            <div className="space-y-2">
              {sitemapLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block font-serif text-2xl lg:text-4xl hover:text-[#D6B06A] transition duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Follow */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="uppercase text-xs tracking-[0.25em] text-[#CBAE9D] mb-8">
              Follow
            </h4>

            <div className="space-y-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-serif text-2xl lg:text-4xl hover:text-[#D6B06A] transition"
              >
                Instagram
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-serif text-2xl lg:text-4xl hover:text-[#D6B06A] transition"
              >
                Facebook
              </a>

              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-serif text-2xl lg:text-4xl hover:text-[#D6B06A] transition"
              >
                Pinterest
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#7C3D38] mt-16 pt-8 flex flex-col lg:flex-row justify-between items-center gap-6">

          <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm">
            <Link
              to="/privacy-policy"
              className="hover:text-[#D6B06A] transition"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="hover:text-[#D6B06A] transition"
            >
              Terms & Conditions
            </Link>
          </div>

          <p className="text-sm text-[#D8C5B6] text-center lg:text-right">
            © {new Date().getFullYear()} Thamel Heritage Hotel. All rights
            reserved. Crafted by{" "}
            <a
              href="https://sait.com.np/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D6B06A] transition"
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