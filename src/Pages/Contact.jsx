import React, { useState } from "react";
import PageBanner from "../Components/Shared/PageBanner";
import useReveal from "../hooks/useReveal";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";

const info = [
  {
    icon: FiMapPin,
    label: "Address",
    value: "Thamel-6, Kathmandu, Nepal",
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: "+977 1 456 7890",
  },
  {
    icon: FiMail,
    label: "Email",
    value: "hello@heritage.com",
  },
  {
    icon: FiClock,
    label: "Front Desk",
    value: "Open 24 Hours",
  },
];

const Contact = () => {
  const formRef = useReveal({ y: 30 });
  const infoRef = useReveal({ stagger: 0.1, y: 24, start: "top 90%" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageBanner
        crumb="Contact"
        kicker="Say Hello"
        title="Contact Us"
        description="Questions about a stay, a special request, or just want directions from the airport — we're a short reply away."
        image="/images/img1.jpeg"
      />

      <section className="bg-[#F6F1E8] px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form */}
          <div ref={formRef} className="lg:col-span-3">
            <p className="uppercase text-xs tracking-[0.25em] text-[#6B2D34] mb-4">
              ✦ Send a Message
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#4A3428] mb-8">
              We'd Love to Hear From You
            </h2>

            {submitted ? (
              <div className="border border-[#6B2D34]/30 bg-white/50 rounded-xl p-8 text-center">
                <p className="font-serif text-2xl text-[#6B2D34] mb-2">
                  Message Sent
                </p>
                <p className="text-[#4A3428]/70">
                  Thank you, {form.name.split(" ")[0] || "friend"}. We'll
                  write back within a day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.15em] text-[#4A3428]/70 mb-2">
                      Full Name
                    </label>
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      type="text"
                      placeholder="Your name"
                      className="w-full bg-transparent border-b border-[#4A3428]/30 py-3 text-[#4A3428] placeholder:text-[#4A3428]/40 focus:outline-none focus:border-[#6B2D34] transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-[0.15em] text-[#4A3428]/70 mb-2">
                      Email
                    </label>
                    <input
                      required
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="you@email.com"
                      className="w-full bg-transparent border-b border-[#4A3428]/30 py-3 text-[#4A3428] placeholder:text-[#4A3428]/40 focus:outline-none focus:border-[#6B2D34] transition-colors duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.15em] text-[#4A3428]/70 mb-2">
                    Subject
                  </label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    type="text"
                    placeholder="What's this about?"
                    className="w-full bg-transparent border-b border-[#4A3428]/30 py-3 text-[#4A3428] placeholder:text-[#4A3428]/40 focus:outline-none focus:border-[#6B2D34] transition-colors duration-300"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.15em] text-[#4A3428]/70 mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us a little about your trip..."
                    className="w-full bg-transparent border-b border-[#4A3428]/30 py-3 text-[#4A3428] placeholder:text-[#4A3428]/40 focus:outline-none focus:border-[#6B2D34] transition-colors duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="px-8 py-3.5 bg-[#6B2D34] rounded-full text-white uppercase tracking-[0.2em] text-sm transition duration-500 hover:bg-[#8A3B46] hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div ref={infoRef} className="lg:col-span-2 space-y-5">
            {info.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-start gap-4 p-5 rounded-xl border border-[#E3D8C6] bg-white/40"
              >
                <div className="w-11 h-11 rounded-full bg-[#6B2D34] flex items-center justify-center flex-shrink-0">
                  <Icon className="text-white text-lg" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-[#B08D57]">
                    {label}
                  </p>
                  <p className="text-[#4A3428] mt-1">{value}</p>
                </div>
              </div>
            ))}

            <div className="rounded-xl overflow-hidden h-64 border border-[#E3D8C6] mt-2">
              <iframe
                title="Heritage Hotel Location"
                src="https://www.google.com/maps?q=Thamel,Kathmandu,Nepal&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
