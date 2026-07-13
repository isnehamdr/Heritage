import React from "react";
const timelineItems = [
  {
    year: "1247",
    title: "THE CASTLE IS BORN",
    text: "Construction of Blackthorn Castle begins under the command of Lord Edric Blackthorn, establishing a stronghold that will shape the region's history for centuries.",
  },
  {
    year: "1892",
    title: "THE GRAND RESTORATION",
    text: "After decades of abandonment, Blackthorn Castle is restored, reviving its former grandeur and opening its gates to the world once again.",
  },
];
const About2 = () => {
  return (
    <section
      className="relative overflow-hidden py-16 md:py-28"
      style={{
        backgroundImage: "url('/images/bg-print.svg')",
        backgroundRepeat: "repeat",
        backgroundSize: "520px",
      }}
    >
    

     <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 items-center gap-10 px-6 sm:px-8 lg:px-12 py-24 mt-12">
  {/* Left: framed image */}
  <div className="col-span-1">
    <div className="flex justify-center lg:justify-start w-full">
      <div className="border border-[#d9cba3] p-2 sm:p-3 w-full max-w-md sm:max-w-lg">
        <img
          src="/images/about2.jpg"
          alt="Blackthorn Castle painting"
          className="h-64 w-full object-cover sm:h-80 md:h-[420px] lg:h-[560px]"
        />
      </div>
    </div>
  </div>

  {/* Right: text content */}
  <div className="col-span-1">
    <div className="w-full">
      <h2 className="text-3xl sm:text-4xl md:text-[3.6rem]  text-[#2b2b2b]">
        Centuries of Legend &amp; Power
      </h2>

      <p className="mt-5 max-w-xl text-sm sm:text-xl text-gray-500">
        Perched high atop the misty cliffs of Raven's Hollow, Blackthorn
        Castle has stood as a guardian of the land for over 800 years.
        Built in 1247, this medieval stronghold has witnessed centuries
        of royal feuds, legendary battles, and whispered secrets that
        still linger within its stone walls.
      </p>

      {/* Timeline */}
      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 ">
        {timelineItems.map((item) => (
          <div key={item.year}>
            <div className="mb-3 h-px w-full bg-[#d9cba3]" />
            <h3 className=" text-lg sm:text-2xl text-[#2b2b2b] tracking-wide">
              {item.year} &ndash; {item.title}
            </h3>
            <p className="mt-3 text-sm  text-gray-500">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
    </section>
  );
};

export default About2;