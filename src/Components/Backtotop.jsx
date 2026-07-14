import React, { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";

const Backtotop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        className={`fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3 transition-all duration-300 ${
          showButton
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        {/* WhatsApp */}
        <a
          href="https://wa.me/9779800000000"
          target="_blank"
          rel="noopener noreferrer"
         className="cursor-pointer"
          aria-label="WhatsApp"
        >
          <img
            src="/images/whatsapplogo.png"
            alt="WhatsApp Icon"
            className="h-14 w-14"
          />
        </a>

        {/* Back To Top */}
        <button
          onClick={scrollToTop}
          className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[#6B2D34] text-white shadow-lg transition duration-300 hover:scale-110 "
          aria-label="Back to Top"
        >
          <ArrowUp size={26} />
        </button>
      </div>
    </>
  );
};

export default Backtotop;