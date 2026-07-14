import React from "react";
const timelineItems = [
  {
    year: "1892",
    title: "THE HOUSE IS BUILT",
    text: "A Newari merchant family raises this courtyard house in Thamel, carving its windows and doorframes by hand in the style still found across the old city.",
  },
  {
    year: "2019",
    title: "THE RESTORATION",
    text: "After a long, careful restoration following the 2015 earthquake, the house reopens its gates as Heritage — its timber frame and courtyard kept exactly as they were.",
  },
];
const About2 = () => {
  return (
    <section
      className="relative overflow-hidden py-16 sm:py-0"
      style={{
        backgroundImage: "url('/images/bg-print.svg')",
        backgroundRepeat: "repeat",
        backgroundSize: "520px",
      }}
    >
    

     <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 items-center gap-10 px-6 sm:px-8 lg:px-12 pb-24 ">
  {/* Left: framed image */}
  <div className="col-span-1">
    <div className="flex justify-center lg:justify-start w-full">
      <div className="border border-[#d9cba3] p-2 sm:p-3 w-full max-w-md sm:max-w-lg">
        <img
          src="/images/about2.jpg"
          alt="Archive photograph of the heritage house before restoration"
          className="h-64 w-full object-cover sm:h-80 md:h-[420px] lg:h-[560px]"
        />
      </div>
    </div>
  </div>

  {/* Right: text content */}
  <div className="col-span-1">
    <div className="w-full">
      <h2 className="text-3xl sm:text-4xl md:text-[3.6rem]  text-[#2b2b2b]">
        Over a Century in the Same Courtyard
      </h2>

      <p className="mt-5 max-w-xl text-sm sm:text-xl text-gray-500">
        Tucked into a quiet lane just off Thamel's busier streets, Heritage
        has stood as a family home, then a guesthouse, and now a hotel, for
        more than 130 years. Built in 1892, this Newari courtyard house has
        witnessed the city grow around it while its timber frame and carved
        windows have stayed largely untouched.
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