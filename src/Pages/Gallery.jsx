import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import PageBanner from "../Components/Shared/PageBanner";
import useReveal from "../hooks/useReveal";

const images = [
  { src: "/images/img1.jpeg", caption: "Courtyard, early morning light" },
  { src: "/images/img2.jpeg", caption: "The Courtyard Table restaurant" },
  { src: "/images/h2.avif", caption: "Rooftop Terrace at dusk" },
  { src: "/images/img3.jpeg", caption: "Candlelit hallway, west wing" },
  { src: "/images/frame3.png", caption: "Patan Durbar Square, ten minutes away" },
  { src: "/images/img4.jpeg", caption: "Royal Thamel Suite" },
  { src: "/images/h1.avif", caption: "Garden Wing veranda" },
  { src: "/images/frame1.png", caption: "Boudhanath Stupa at sunset" },
  { src: "/images/about2.jpg", caption: "Original 1892 restoration archive" },
  { src: "/images/h3.avif", caption: "Heritage Family Suite" },
  { src: "/images/frame2.png", caption: "Pashupatinath, morning rites" },
  { src: "/images/h4.avif", caption: "Valley View Room" },
];

const Lightbox = ({ image, onClose }) => {
  const overlayRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.35, ease: "power2.out" }
    );
    gsap.fromTo(
      imgRef.current,
      { opacity: 0, scale: 0.94 },
      { opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" }
    );

    const handleKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  return (
    <div
      ref={overlayRef}
      onClick={onClose}
      className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center px-4 py-10 sm:p-10 cursor-zoom-out"
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-5 right-5 sm:top-8 sm:right-8 text-white text-4xl leading-none hover:rotate-90 transition-transform duration-300"
      >
        ×
      </button>
      <div
        ref={imgRef}
        onClick={(e) => e.stopPropagation()}
        className="max-w-4xl w-full"
      >
        <img
          src={image.src}
          alt={image.caption}
          className="w-full max-h-[75vh] object-contain rounded-lg"
        />
        <p className="text-white/70 text-center mt-4 text-sm tracking-wide">
          {image.caption}
        </p>
      </div>
    </div>
  );
};

const Gallery = () => {
  const [active, setActive] = useState(null);
  const gridRef = useReveal({ stagger: 0.06, y: 30, start: "top 90%" });

  return (
    <>
      <PageBanner
        crumb="Gallery"
        kicker="A Closer Look"
        title="Gallery"
        description="Rooms, courtyards, food, and the neighbourhood around us — tap any photo for a closer look."
        image="/images/frame4.png"
      />

      <section className="bg-[#F6F1E8] px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div
          ref={gridRef}
          className="max-w-6xl mx-auto columns-2 md:columns-3 gap-4 sm:gap-5 [column-fill:_balance]"
        >
          {images.map((img, i) => (
            <button
              key={img.src + i}
              onClick={() => setActive(img)}
              className="group relative block w-full mb-4 sm:mb-5 overflow-hidden rounded-lg break-inside-avoid cursor-zoom-in"
            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500 flex items-end">
                <p className="p-4 text-white text-xs sm:text-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  {img.caption}
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {active && <Lightbox image={active} onClose={() => setActive(null)} />}
    </>
  );
};

export default Gallery;
