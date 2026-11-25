import React from "react";

const services = [
    {
        number: "01",
        title: "Meeting & Event",
        description:
            "Whether it's a business meeting, a private celebration, or a special event, we provide the perfect setting and support to make it memorable.",
        image: "/images/hotel/new (2).jpeg",
        tags: ["Event Planning", "Private Dining", "Customizable Spaces"],
    },
    {
        number: "02",
        title: "Private Dining",
        description:
            "Enjoy an intimate dining experience crafted around your preferences, with exceptional cuisine and thoughtful service.",
        image: "/images/hotel/new (36).jpeg",
        tags: ["Fine Cuisine", "Private Chef", "In-Room Dining"],
    },
    {
        number: "03",
        title: "Wellness & Relaxation",
        description:
            "Take time to unwind with carefully selected wellness experiences designed to restore your body and mind.",
        image: "/images/hotel/new (40).jpeg",
        tags: ["Spa", "Wellness", "Relaxation"],
    },
    {
        number: "04",
        title: "Local Experiences",
        description:
            "Discover the character of the destination through curated experiences, hidden gems, and memorable adventures.",
        image: "/images/patan.png",
        tags: ["Tours", "Culture", "Experiences"],
    },
     {
        number: "05",
        title: "Personalized Concierge",
        description:
            "From local recommendations to tailored arrangements, our concierge ensures every detail of your stay is handled with care.",
        image: "/images/hotel/new (30).jpeg",
        tags: ["Concierge", "Local Guide", "Reservations"],
    },
];

const Services = () => {
    return (
        <>
            {/* Hero Section with Background Image */}
            <section className="relative h-screen w-full overflow-hidden">
                {/* Background Image with overlay */}
                <div className="absolute inset-0">
                    <img
                        src="/images/hotel/new (9).jpeg"
                        alt="Our Services"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                {/* Content Container */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center px-5 sm:px-8 text-center text-white">
                    {/* Title - Centered */}
                    <div>
                        <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9]">
                            <span className="block">Services
                            </span>
                            {/* <span className="block italic font-light">Our services</span> */}
                        </h2>
                    </div>

                    {/* Description - Centered at bottom */}
                    <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4">
                        <p className="text-white/90 text-base sm:text-lg md:text-xl font-light leading-relaxed">
                            Discover personalized experiences crafted to make your stay truly unforgettable.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services List Section */}
            <section className="bg-[#F4EEE4] px-5 py-20 sm:px-8 lg:px-12">
                {/* Services */}

                <div>
                    <h2 className="font-semibold text-center text-[#6B2D34] text-5xl sm:text-6xl md:text-7xl mb-24 leading-[0.9]">
                        <span className="block">Explore
                        </span>
                        <span className="block italic font-light">Our services</span>
                    </h2>
                </div>
                <div className="mx-auto max-w-[1370px] space-y-5">
                    {services.map((service) => (
                        <article
                            key={service.number}
                            className="group rounded-xl bg-[#FAF8F3] p-4 sm:p-5 lg:p-4"
                        >
                            <div className="grid min-h-[340px] grid-cols-1 gap-8 lg:grid-cols-[430px_1fr] lg:gap-10">
                                {/* Image */}
                                <div className="h-[300px] overflow-hidden rounded-md sm:h-[360px] lg:h-full">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex flex-col justify-between py-3 lg:py-4">
                                    {/* Title */}
                                    <div className="flex items-start gap-4">
                                        <span className="pt-1 font-serif text-sm text-[#6B2D34]">
                                            {service.number}
                                        </span>

                                        <h3 className="font-serif text-3xl leading-tight text-[#6B2D34] sm:text-4xl lg:text-[38px]">
                                            {service.title}
                                        </h3>
                                    </div>

                                    {/* Bottom content */}
                                    <div className="flex flex-col gap-8 xl:flex-row xl:items-end xl:justify-between">
                                        {/* Description */}
                                        <p className="max-w-[390px] font-serif text-base leading-[1.35] text-[#806D63] sm:text-lg">
                                            {service.description}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 xl:max-w-[260px] xl:justify-end">
                                            {service.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="rounded-full bg-[#55140F] px-4 py-2 font-serif text-sm text-[#F8F1E7] transition-colors duration-300 group-hover:bg-[#7A211A]"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Services;