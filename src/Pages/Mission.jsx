import React from "react";

const facts = [
  {
    label: "Where it came from",
    text: "A community school building in Kathmandu.",
  },
  {
    label: "What happened to it",
    text: "The building collapsed in the 2015 earthquake. This piece was recovered and preserved.",
  },
  {
    label: "Why it matters",
    text: "More than a century old, it reminds us to protect the craft, stories, and community around us.",
  },
];

const purposeSections = [
  {
    number: "01",
    title: "What We Do & How We Do It",
    text: "We create thoughtful stays in the heart of Thamel, bringing together the warmth of Nepalese hospitality, the character of a heritage property, and the ease of contemporary travel. Every detail, from a genuine welcome and comfortable room to local guidance and attentive service, is shaped by a team that listens, cares, and acts with respect for our guests and our neighbourhood.",
  },
  {
    number: "02",
    title: "What We Offer",
    text: "We offer more than a place to sleep: a calm, comfortable base for discovering Kathmandu. Guests can expect well-appointed accommodation, caring service, useful local recommendations, and a setting surrounded by the colour, food, shopping, and culture of Thamel. Whether your visit is for a short city break, business, or a longer Nepal journey, we aim to make every stay easy, personal, and memorable.",
  },
  {
    number: "03",
    title: "Our Vision",
    text: "Our vision is to be a hotel guests remember for its soul as much as its service: a place where heritage is not simply displayed, but lived with care. We want each visit to create a meaningful connection to Kathmandu while helping preserve the local craftsmanship, stories, and hospitality that make this city unique for the generations to come.",
  },
];

const Mission = () => {
  return (
    <>
      <section className="relative flex min-h-[560px] h-[72svh] w-full items-center justify-center overflow-hidden sm:h-screen">
        <img
          src="/images/hotel/new (9).jpeg"
          alt="Thamel Heritage hospitality"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 mx-auto flex h-full max-w-3xl flex-col items-center justify-center px-5 text-center text-white sm:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-white/75 sm:text-sm">Thamel Heritage</p>
          <h1 className="mt-4 font-serif text-5xl leading-none sm:text-6xl md:text-7xl lg:text-8xl">
            Our Mission
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg md:text-xl">
            Honouring Kathmandu's heritage through thoughtful stays, genuine care,
            and meaningful connections.
          </p>
        </div>
      </section>

    <section
      className="relative overflow-hidden py-16 sm:pt-12 max-w-7xl mx-auto"
     
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-6 px-4 pt-8 lg:grid-cols-2 sm:pt-16">
        <div className="col-span-1">
          <div className="flex w-full justify-center lg:justify-start">
            <div className="w-full max-w-md border border-[#d9cba3] p-2 sm:max-w-lg sm:p-3">
              <img
                src="/images/hotel/new (9).jpeg"
                alt="Replica of the preserved heritage piece displayed in the lobby"
                className="h-64 w-full object-cover sm:h-80 md:h-[420px] lg:h-[560px]"
              />
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <div className="relative w-full overflow-hidden border border-[#d9cba3] bg-[#f8f5ef] p-6 sm:p-10 lg:p-12">
            <img
              src="/images/Thamel Heritage.png"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.06]"
            />
            <div className="relative">
            <p className="text-xs uppercase tracking-[0.28em] text-[#9a8355]">Our purpose</p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-[3.6rem] text-[#2b2b2b]">
              Our Mission
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-gray-500 sm:text-xl">
              To welcome every guest with the warmth of Nepalese hospitality while
              celebrating the heritage, craftsmanship, and stories that make
              Kathmandu extraordinary.
            </p>

            <div className="mt-7 h-px w-20 bg-[#9a8355]" />
            <p className="mt-7 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base">
              At Thamel Heritage, we believe a memorable stay should feel both
              effortless and rooted in its surroundings. Our home in the heart of
              Thamel gives guests a welcoming place to rest while opening a door
              to the city's living culture, local flavours, and everyday stories.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base">
              We honour traditional Nepalese character in the details we preserve
              and bring a personal, attentive approach to every journey. Whether
              you are arriving for the first time or returning to Kathmandu, our
              purpose is to help you feel cared for, connected, and at home.
            </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24">
        <div className="border-t border-[#d9cba3]">
          {purposeSections.map((section) => (
            <article
              key={section.number}
              className="grid gap-5 border-b border-[#d9cba3] py-10 sm:py-12 md:grid-cols-[100px_1fr_1.4fr] md:gap-8"
            >
              <span className="text-sm tracking-[0.2em] text-[#9a8355]">{section.number}</span>
              <h3 className="text-2xl text-[#2b2b2b] sm:text-3xl">{section.title}</h3>
              <p className="max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
                {section.text}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="px-4 py-10 sm:py-12">
  {/* Text + image side by side */}
  <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
    <div>
      <p className="text-xs uppercase tracking-[0.28em] text-[#9a8355]">The piece in our lobby</p>
      <p className="mt-5 max-w-xl text-sm leading-relaxed text-gray-500 sm:text-base">
        A replica of the piece shown here welcomes guests in our lobby. The
        original was recovered from a Kathmandu community school building
        that collapsed in the 2015 earthquake. Presumed to be more than a
        century old, it is a quiet reminder that heritage deserves to be
        cared for, shared, and carried forward.
      </p>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-500 sm:text-base">
        That belief guides the way we host. We pair the comfort and
        reliability travellers need with a sense of place that invites them
        to discover the living culture beyond our doors.
      </p>
    </div>

   <div className="w-full max-w-md border border-[#d9cba3] p-2 sm:p-3">
  <img
    src="/images/turtle.jpeg"
    alt="Replica of the preserved piece displayed on the lobby wall"
    className="aspect-square w-full object-contain"
    loading="lazy"
  />
</div>
  </div>

  {/* Facts: unchanged, full width below */}
  <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
    {facts.map((item) => (
      <div key={item.label}>
        <div className="mb-3 h-px w-full bg-[#d9cba3]" />
        <h3 className="text-base tracking-wide text-[#2b2b2b] sm:text-lg">
          {item.label}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-gray-500">{item.text}</p>
      </div>
    ))}
  </div>
</div>
    </section>
    </>
  );
};

export default Mission;
