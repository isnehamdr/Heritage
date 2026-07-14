import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import PageBanner from "../Components/Shared/PageBanner";
import useReveal from "../hooks/useReveal";
import rooms from "../data/rooms";

const roomOptions = rooms.map((r) => r.title);

const Booking = () => {
  const formRef = useReveal({ y: 30 });
  const sideRef = useReveal({ y: 30, start: "top 90%" });
  const [searchParams] = useSearchParams();
  const preselectedRoom = searchParams.get("room");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    checkin: "",
    checkout: "",
    guests: "2",
    room:
      preselectedRoom && roomOptions.includes(preselectedRoom)
        ? preselectedRoom
        : roomOptions[0],
    notes: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const fieldClass =
    "w-full bg-transparent border-b border-[#4A3428]/30 py-3 text-[#4A3428] placeholder:text-[#4A3428]/40 focus:outline-none focus:border-[#6B2D34] transition-colors duration-300";
  const labelClass =
    "block text-xs uppercase tracking-[0.15em] text-[#4A3428]/70 mb-2";

  return (
    <>
      <PageBanner
        crumb="Booking"
        kicker="Reserve Your Stay"
        title="Book Your Stay"
        description="Tell us your dates and we'll hold the room while our team confirms availability by email."
        image="/images/hero.avif"
      />

      <section className="bg-[#F6F1E8] px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form */}
          <div ref={formRef} className="lg:col-span-3">
            <p className="uppercase text-xs tracking-[0.25em] text-[#6B2D34] mb-4">
              ✦ Reservation Details
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#4A3428] mb-8">
              A Few Details, To Begin
            </h2>

            {submitted ? (
              <div className="border border-[#6B2D34]/30 bg-white/50 rounded-xl p-8 text-center">
                <p className="font-serif text-2xl text-[#6B2D34] mb-2">
                  Request Received
                </p>
                <p className="text-[#4A3428]/70">
                  Thank you, {form.name.split(" ")[0] || "friend"}. We'll
                  confirm your {form.room.toLowerCase()} by email shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className={labelClass}>Check-in</label>
                    <input
                      required
                      type="date"
                      name="checkin"
                      value={form.checkin}
                      onChange={handleChange}
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Check-out</label>
                    <input
                      required
                      type="date"
                      name="checkout"
                      value={form.checkout}
                      onChange={handleChange}
                      className={fieldClass}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className={labelClass}>Guests</label>
                    <select
                      name="guests"
                      value={form.guests}
                      onChange={handleChange}
                      className={fieldClass}
                    >
                      {[1, 2, 3, 4, "5+"].map((g) => (
                        <option key={g} value={g}>
                          {g} Guest{g !== 1 ? "s" : ""}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Room Type</label>
                    <select
                      name="room"
                      value={form.room}
                      onChange={handleChange}
                      className={fieldClass}
                    >
                      {roomOptions.map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className={labelClass}>Full Name</label>
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      type="text"
                      placeholder="Your name"
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Email</label>
                    <input
                      required
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="you@email.com"
                      className={fieldClass}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Phone</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    type="tel"
                    placeholder="+ Country code and number"
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Special Requests</label>
                  <textarea
                    name="notes"
                    value={form.notes}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Early check-in, dietary needs, airport pickup..."
                    className={`${fieldClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="px-8 py-3.5 bg-[#6B2D34] rounded-full text-white uppercase tracking-[0.2em] text-sm transition duration-500 hover:bg-[#8A3B46] hover:scale-105"
                >
                  Request Booking
                </button>
              </form>
            )}
          </div>

          {/* Side info */}
          <div ref={sideRef} className="lg:col-span-2">
            <div className="rounded-xl overflow-hidden mb-6">
              <img
                src="/images/img3.jpeg"
                alt="Heritage Hotel courtyard"
                className="w-full h-56 object-cover"
              />
            </div>
            <div className="bg-[#4A3428] rounded-xl p-7 text-white">
              <h3 className="font-serif text-2xl mb-4">Good to Know</h3>
              <ul className="space-y-3 text-white/70 text-sm leading-relaxed">
                <li>· Check-in from 2:00 PM, check-out by 11:00 AM</li>
                <li>· Free cancellation up to 48 hours before arrival</li>
                <li>· Breakfast included with every room</li>
                <li>· Airport pickup available on request</li>
              </ul>
              <p className="text-white/50 text-xs mt-6">
                This is a request form — a member of our team will confirm
                final availability and pricing by email before charging
                anything.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Booking;
