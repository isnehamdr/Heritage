import React, { useState, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

const services = [
    {
        title: "Swimming",
        image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200",
        description: "Dive into our crystal-clear infinity pool with stunning ocean views. Perfect for both relaxation and exercise.",
    },
    {
        title: "Golf Getaways",
        image:
            "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1200",
        description: "Experience world-class golf courses designed for champions. Enjoy breathtaking views and challenging fairways.",
    },
    {
        title: "In-Suite Spa",
        image:
            "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1200",
        description: "Rejuvenate with personalized spa treatments in the comfort of your suite. Luxury and wellness combined.",
    },
    {
        title: "Fine Dining",
        image:
            "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200",
        description: "Savor exquisite cuisine crafted by award-winning chefs. An unforgettable culinary journey awaits.",
    },
];

const Services = () => {
    const [active, setActive] = useState(1);
    const activeService = services[active];

    // Two stacked image layers for a true crossfade (no src-swap blink)
    const imgARef = useRef(null);
    const imgBRef = useRef(null);
    const frontLayer = useRef("A");
    const firstRender = useRef(true);

    // Crossfade to the new image whenever `active` changes
    useLayoutEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }

        const nextSrc = activeService.image;
        const frontIsA = frontLayer.current === "A";
        const frontEl = frontIsA ? imgARef.current : imgBRef.current;
        const backEl = frontIsA ? imgBRef.current : imgARef.current;

        if (!frontEl || !backEl) return;

        // Load the new image into the hidden back layer, invisible until ready
        gsap.set(backEl, { opacity: 0 });
        backEl.src = nextSrc;

        const tl = gsap.timeline({
            onComplete: () => {
                frontLayer.current = frontIsA ? "B" : "A";
            },
        });

        tl.to(
            frontEl,
            { opacity: 0, duration: 0.6, ease: "power2.inOut" },
            0
        ).to(
            backEl,
            { opacity: 1, duration: 0.6, ease: "power2.inOut" },
            0
        );

        return () => tl.kill();
    }, [active]);

    const handleHover = (index) => {
        if (index !== active) {
            setActive(index);
        }
    };

    return (
        <section className="min-h-screen relative overflow-hidden py-16 sm:py-24">
            {/* Background Image - Bottom Right */}
            <div
                className="absolute bottom-0 right-0 w-1/2 h-1/2 pointer-events-none z-0 opacity-50"
                style={{
                    backgroundImage: "url('/images/bg.png')",
                    backgroundSize: "contain",
                    backgroundPosition: "bottom right",
                    backgroundRepeat: "no-repeat",
                }}
            />

            <div
                className="absolute bottom-0 right-0 w-96 h-96 pointer-events-none z-0 opacity-5"
                style={{
                    backgroundImage: "url('/images/decoration.png')",
                    backgroundSize: "contain",
                    backgroundPosition: "bottom right",
                    backgroundRepeat: "no-repeat",
                }}
            />

            <div className="px-6 sm:px-10 md:px-16 lg:px-30 relative z-10">
                {/* Heading */}
                <div className="text-center text-[#6B2D34] mb-12 sm:mb-16 lg:mb-20">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif leading-tight sm:leading-none">
                        Where Every Day is
                        <br />
                        Designed for You
                    </h2>
                </div>

                {/* Layout */}
                <div className="grid lg:grid-cols-5 gap-8 lg:gap-16">
                    {/* Image */}
                    <div className="lg:col-span-2 flex items-center justify-center order-1 lg:order-none">
                        <div className="relative overflow-hidden rounded-xl w-full max-w-md mx-auto h-[280px] sm:h-[380px] md:h-[460px] lg:h-[600px]">
                            <img
                                ref={imgARef}
                                src={services[1].image}
                                alt={services[1].title}
                                className="absolute inset-0 w-full h-full object-cover object-top"
                                style={{ opacity: 1 }}
                            />
                            <img
                                ref={imgBRef}
                                src=""
                                alt=""
                                className="absolute inset-0 w-full h-full object-cover object-top"
                                style={{ opacity: 0 }}
                            />
                        </div>
                    </div>

                    {/* Services list */}
                    <div className="lg:col-span-3 flex flex-col relative z-10 order-2 lg:order-none">
                        <div className="space-y-0 sm:space-y-2 flex-1">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    onMouseEnter={() => handleHover(index)}
                                    onFocus={() => handleHover(index)}
                                    onClick={() => handleHover(index)}
                                    tabIndex={0}
                                    className="group relative flex items-center cursor-pointer"
                                >
                                    <div className="py-4 sm:py-6 border-b border-gray-200 w-full">
                                        <h3
                                            className={`
                                                text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif transition-all duration-300
                                                ${active === index
                                                    ? "text-[#6B2D34]"
                                                    : "text-gray-400 group-hover:text-gray-600"
                                                }
                                            `}
                                        >
                                            {service.title}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Description & Button */}
                        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8">
                            <h4 className="text-xs sm:text-sm uppercase tracking-wider text-[#6B2D34] font-semibold mb-3">
                                Service Overview
                            </h4>
                            <p className="text-[#6B2D34]/70 text-sm sm:text-md max-w-lg leading-relaxed">
                                {activeService.description}
                            </p>
                            <Link to="/experiences">
                                <button className="mt-6 px-6 sm:px-8 py-2.5 sm:py-3 cursor-pointer bg-[#6B2D34] text-white rounded-full text-sm font-medium hover:bg-[#8A3B46] transition-all duration-300 hover:scale-105 hover:shadow-lg">
                                    Explore all Services
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;