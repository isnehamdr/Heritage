import React, { useState, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

    const containerRef = useRef(null);
    const sectionRef = useRef(null);
    const itemRefs = useRef([]);
    const firstRender = useRef(true);

    // Two stacked image layers for a true crossfade (no src-swap blink)
    const imgARef = useRef(null);
    const imgBRef = useRef(null);
    const frontLayer = useRef("A");

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
            { opacity: 0, duration: 0.9, ease: "power2.inOut" },
            0
        ).to(
            backEl,
            { opacity: 1, duration: 0.9, ease: "power2.inOut" },
            0
        );

        return () => tl.kill();
    }, [active]);

    // Pin the image + drive `active` state off scroll position of each title
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Pin the left image column while the right list scrolls past
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top top",
                end: "bottom bottom",
                pin: true,
                pinSpacing: true,
            });

            // One trigger per title — activates when it crosses the center of the viewport
            itemRefs.current.forEach((el, index) => {
                ScrollTrigger.create({
                    trigger: el,
                    start: "top bottom",
                    end: "center center",
                    onEnter: () => setActive(index),
                    onEnterBack: () => setActive(index),
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="min-h-screen relative overflow-hidden">
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
            
            {/* Another background option - decorative element */}
            <div 
                className="absolute bottom-0 right-0 w-96 h-96 pointer-events-none z-0 opacity-5"
                style={{
                    backgroundImage: "url('/images/decoration.png')",
                    backgroundSize: "contain",
                    backgroundPosition: "bottom right",
                    backgroundRepeat: "no-repeat",
                }}
            />

            <div className="px-8 sm:px-16 lg:px-30 relative z-10">
                {/* Heading */}
                <div className="text-center text-[#6B2D34] mb-20">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif leading-none">
                        Where Every Day is
                        <br />
                        Designed for You
                    </h2>
                </div>

                {/* Layout */}
                <div className="grid lg:grid-cols-5 gap-16">
                    {/* Left - Image (pinned while the right column scrolls) */}
                    <div className="lg:col-span-2 flex items-center justify-center h-[600px]">
                        <div
                            ref={containerRef}
                            className="relative overflow-hidden rounded-xl w-full max-w-md mx-auto h-[600px]"
                        >
                            <img
                                ref={imgARef}
                                src={services[1].image}
                                alt=""
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

                    {/* Right - Services (scroll through these to drive `active`) */}
                    <div className="lg:col-span-3 flex flex-col relative z-10">
                        <div className="space-y-2 flex-1">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    ref={(el) => (itemRefs.current[index] = el)}
                                    className="group relative flex items-center"
                                >
                                    <div className="py-6 border-b border-gray-200 w-full">
                                        <h3
                                            className={`
                        text-3xl sm:text-5xl font-serif transition-all duration-300
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
                        <div className="mt-8 pt-8">
                            <div className="">
                                <h4 className="text-sm uppercase tracking-wider text-[#6B2D34] font-semibold mb-3">
                                    Service Overview
                                </h4>
                                <p className="text-[#6B2D34]/70 text-md max-w-lg leading-relaxed">
                                    {activeService.description}
                                </p>
                                <button className="mt-6 px-8 py-3 bg-[#6B2D34] text-white rounded-full text-sm font-medium hover:bg-[#8A3B46] transition-all duration-300 hover:scale-105 hover:shadow-lg">
                                    Explore all Services
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;