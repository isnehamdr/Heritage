import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);
    const lineRef = useRef(null);
    const image1Ref = useRef(null);
    const image2Ref = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const path = lineRef.current;
            
            // Animated SVG Line
            if (path) {
                const length = path.getTotalLength();

                gsap.set(path, {
                    strokeDasharray: length,
                    strokeDashoffset: length,
                });

                gsap.to(path, {
                    strokeDashoffset: 0,
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        end: "bottom bottom",
                        scrub: 1.5,
                        invalidateOnRefresh: true,
                    },
                });
            }

            // Parallax effect for Image 1 (left image)
            if (image1Ref.current) {
                gsap.to(image1Ref.current, {
                    y: -80, // Moves up slightly
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 2,
                        invalidateOnRefresh: true,
                    },
                });
            }

            // Parallax effect for Image 2 (right image) - opposite direction
            if (image2Ref.current) {
                gsap.to(image2Ref.current, {
                    y: 80, // Moves down slightly
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 2,
                        invalidateOnRefresh: true,
                    },
                });
            }

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="">
            {/* Additional content to continue scrolling */}
            <section
                ref={sectionRef}
                className="relative overflow-hidden z-20 bg-[#F6F1E8] pt-8 pb-32 px-4 sm:px-6 border-t border-[#E8DFD5]"
            >
                {/* Animated SVG Line */}
                <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    viewBox="0 0 1440 2200"
                    preserveAspectRatio="none"
                >
                    <path
                        ref={lineRef}
                        d="
                        M -150 120
                        C 180 360 600 620 900 360
                        C 1180 120 1460 340 1200 560
                        C 960 760 930 980 1240 1180
                        C 1510 1360 1460 1720 1100 1900
                        C 840 2040 660 2140 840 2200
                        "
                        fill="none"
                        stroke="#B85B5B"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        opacity=".55"
                    />
                </svg>

                {/* Content with z-index above the SVG */}
                <div className="relative z-10 max-w-6xl mx-auto text-center">
                    {/* 5 Star Rating */}
                    <div className="flex justify-center items-center mb-1">
                        {[...Array(5)].map((_, index) => (
                            <svg
                                key={index}
                                className="h-3 text-[#6B2D34] fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                        ))}
                    </div>

                    {/* Since 1975 */}
                    {/* <p className="text-[#6B2D34] text-md font-semibold mb-8">
                        Since 2026
                    </p> */}

                    {/* Title */}
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-light pt-24 text-[#6B2D34] mb-6 leading-tight">
                        Where every
                        <br />
                        stay becomes a Story
                    </h2>

                    {/* Description */}
                    <p className="text-[#4A3428] max-w-3xl mx-auto text-base leading-relaxed">
                        At Maravilla, hospitality is crafted with intention and elegance. Our spaces are
                        designed to offer more than comfort — they create an atmosphere where guests can
                        unwind, connect, and experience.
                    </p>

                    <p className="text-[#4A3428] max-w-3xl mx-auto text-base leading-relaxed mt-4">
                        Whether you are enjoying a peaceful stay, savoring refined culinary experiences,
                        or embracing moments of wellness and renewal, Maravilla invites you to slow down
                        and indulge in life's finer moments.
                    </p>

                    {/* Buttons */}
                    <div className="flex justify-center items-center">
                        <button className="mt-8 px-6 py-3 bg-[#6B2D34] rounded-full text-white uppercase tracking-[0.2em] text-sm transition duration-500 hover:bg-[#8A3B46]">
                            About Us
                        </button>

                        {/* Round shape with arrow */}
                        <div className="mt-8 w-12 h-12 rounded-full bg-[#6B2D34] flex items-center justify-center transition duration-500 hover:bg-[#8A3B46] group cursor-pointer">
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
                    </div>
                </div>

                {/* Image Grid with parallax effect */}
                <div className="relative z-10 max-w-5xl pt-20 mx-auto">
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="overflow-hidden rounded-xl">
                            <img
                                ref={image1Ref}
                                src="/images/img2.jpeg"
                                alt="Thamel Heritage"
                                className="w-full h-[80vh] rounded-xl object-cover will-change-transform"
                            />
                        </div>
                        <div className="mt-16 overflow-hidden rounded-xl">
                            <img
                                ref={image2Ref}
                                src="/images/img1.jpeg"
                                alt="Thamel Heritage"
                                className="w-full h-[80vh] object-cover rounded-xl will-change-transform"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About