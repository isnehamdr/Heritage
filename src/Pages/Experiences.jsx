import React from "react";
import { Link } from "react-router-dom";
import PageBanner from "../Components/Shared/PageBanner";
import useReveal from "../hooks/useReveal";

const experiences = [
  {
    title: "Heritage Walking Tour",
    duration: "2.5 Hours",
    time: "Every Morning, 7:30 AM",
    description:
      "A guided walk through Thamel's back lanes and the Kathmandu Durbar Square, led by a historian, not a script.",
    image: "/images/frame3.png",
  },
  {
    title: "Boudhanath at Dusk",
    duration: "2 Hours",
    time: "Daily, 5:00 PM",
    description:
      "Circle the great stupa as butter lamps are lit, and stay for tea with a monk from the neighbouring monastery.",
    image: "/images/frame1.png",
  },
  {
    title: "Newari Cooking Class",
    duration: "3 Hours",
    time: "Tue, Thu, Sat — 10:00 AM",
    description:
      "Learn to make momo and choila from scratch in our courtyard kitchen, then eat everything you cook.",
    image: "/images/img2.jpeg",
  },
  {
    title: "Pashupatinath Morning Rites",
    duration: "2 Hours",
    time: "Daily, 6:00 AM",
    description:
      "Watch the riverside cremation rites and morning puja at one of Hinduism's most sacred temples, respectfully and quietly.",
    image: "/images/frame2.png",
  },
  {
    title: "Patan Craft Trail",
    duration: "4 Hours",
    time: "Wed, Fri, Sun — 9:00 AM",
    description:
      "Visit working metal and wood workshops in Patan, where Newari craftsmanship has continued for over a thousand years.",
    image: "/images/frame4.png",
  },
  {
    title: "Courtyard Wellness Evening",
    duration: "90 Minutes",
    time: "Every Evening, 6:30 PM",
    description:
      "Himalayan herb steam, a short yoga session, and a quiet hour in our restored courtyard after the streets go dark.",
    image: "/images/img4.jpeg",
  },
];

const ExperienceCard = ({ exp }) => {
  const ref = useReveal({ y: 50, duration: 0.9, start: "top 90%" });
  return (
    <div
      ref={ref}
      className="group relative rounded-xl overflow-hidden h-[420px] sm:h-[460px]"
    >
      <img
        src={exp.image}
        alt={exp.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7 text-white">
        <p className="text-xs uppercase tracking-[0.2em] text-[#D6B06A] mb-2">
          {exp.duration} · {exp.time}
        </p>
        <h3 className="font-serif text-2xl sm:text-3xl mb-2">{exp.title}</h3>
        <p className="text-white/75 text-sm leading-relaxed max-w-sm opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500 overflow-hidden">
          {exp.description}
        </p>
      </div>
    </div>
  );
};

const Experiences = () => {
  const introRef = useReveal({ y: 30 });
  const gridRef = useReveal({ stagger: 0.1, y: 20, start: "top 92%" });
  const ctaRef = useReveal({ y: 30 });

  return (
    <>
      <PageBanner
        crumb="Experiences"
        kicker="Beyond The Room"
        title="Experiences"
        description="Curated the way a friend who lives here would plan your week, not the way a brochure would."
        image="/images/img3.jpeg"
      />

      <section className="bg-[#F6F1E8] px-5 sm:px-8 lg:px-12 pt-16 sm:pt-20 pb-8">
        <div ref={introRef} className="max-w-2xl">
          <p className="uppercase text-xs tracking-[0.25em] text-[#6B2D34] mb-4">
            ✦ Small Groups, Local Guides
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#4A3428] leading-tight">
            Hover a card to see what's included
          </h2>
        </div>
      </section>

      <section className="bg-[#F6F1E8] px-5 sm:px-8 lg:px-12 pb-16 sm:pb-24">
        <div
          ref={gridRef}
          className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {experiences.map((exp) => (
            <ExperienceCard exp={exp} key={exp.title} />
          ))}
        </div>
      </section>

      <section
        ref={ctaRef}
        className="bg-[#2F4F44] px-5 sm:px-8 py-16 sm:py-20 text-center"
      >
        <h3 className="font-serif text-3xl sm:text-4xl text-white mb-5">
          Want something not on this list?
        </h3>
        <p className="text-white/60 max-w-xl mx-auto mb-8">
          Our concierge can arrange private guides, transport, and permits
          for the Kathmandu Valley beyond what's scheduled here.
        </p>
        <Link to="/contact">
          <button className="px-8 py-3.5 bg-white text-[#2F4F44] rounded-full uppercase tracking-[0.2em] text-sm font-medium transition duration-500 hover:bg-white/90 hover:scale-105">
            Talk to Our Concierge
          </button>
        </Link>
      </section>
    </>
  );
};

export default Experiences;
