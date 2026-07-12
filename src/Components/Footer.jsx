// import React from "react";
// import { BsArrowUpRight } from "react-icons/bs";

// const Footer = () => {
//   return (
//     <footer className="bg-[#4A3428] text-[#F6F1E8] rounded-t-[50px] mt-32 relative">
//       {/* Newsletter */}
//       <div className="px-6 lg:px-12 py-20">

//         <div className="flex flex-col items-center text-center">
//           {/* Content removed as per your comment */}
//         </div>

//         {/* Footer Grid */}
//         <div className="grid lg:grid-cols-12 gap-16">
//           {/* Left */}
//           <div className="lg:col-span-5">
//             <p className="uppercase text-sm tracking-[0.25em] text-[#CBAE9D]">
//               Thamel Heritage Hotel
//             </p>
//             <h3 className="font-serif text-4xl leading-tight mt-6">
//               Thamel-6,
//               <br />
//               Kathmandu,
//               <br />
//               Nepal
//             </h3>
//             <div className="flex items-center mt-12">
//               <button className="bg-[#6B2D34] hover:bg-[#D22D2D] px-8 py-4 rounded-full transition duration-300">
//                 Book Now
//               </button>
//               <button className="h-14 w-14 rounded-full bg-[#6B2D34] hover:rotate-45 transition duration-300 flex items-center justify-center">
//                 <BsArrowUpRight />
//               </button>
//             </div>
//           </div>

//           {/* Contact */}
//           <div className="lg:col-span-2">
//             <h4 className="uppercase text-sm tracking-[0.25em] text-[#CBAE9D] mb-8">
//               Contact
//             </h4>
//             <div className="space-y-4">
//               <p>+91 9876543210</p>
//               <p>hello@heritage.com</p>
//               <a href="/" className="block hover:text-[#D6B06A]">
//                 Contact Us
//               </a>
//               <a href="/" className="block hover:text-[#D6B06A]">
//                 FAQ's
//               </a>
//             </div>
//           </div>

//           {/* Sitemap */}
//           <div className="lg:col-span-3">
//             <h4 className="uppercase text-sm tracking-[0.25em] text-[#CBAE9D] mb-8">
//               Sitemap
//             </h4>
//             <div className="space-y-2">
//               {[
//                 "Home",
//                 "About",
//                 "Rooms",
//                 "Dining",
//                 "Gallery",
//                 "Experiences",
//                 "Reviews",
//               ].map((item) => (
//                 <a
//                   key={item}
//                   href="/"
//                   className="block font-serif text-4xl hover:text-[#D6B06A] transition"
//                 >
//                   {item}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Services */}
//           <div className="lg:col-span-2">
//             <h4 className="uppercase text-sm tracking-[0.25em] text-[#CBAE9D] mb-8">
//               Explore
//             </h4>
//             <div className="space-y-2">
//               {[
//                 "Stay",
//                 "Dining",
//                 "Spa",
//                 "Wellness",
//                 "Events",
//               ].map((item) => (
//                 <a
//                   key={item}
//                   href="/"
//                   className="block font-serif text-4xl hover:text-[#D6B06A] transition"
//                 >
//                   {item}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Bottom */}
//         <div className="border-t border-[#7C3D38] mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
//           <div className="flex gap-8 text-sm">
//             <a href="/" className="hover:text-[#D6B06A]">
//               Privacy Policy
//             </a>
//             <a href="/" className="hover:text-[#D6B06A]">
//               Terms & Conditions
//             </a>
//           </div>
//           <p className="text-sm text-[#D8C5B6]">
//             © {new Date().getFullYear()} Heritage Hotel. All rights reserved. Crafted by <a href="https://sait.com.np/" target="_blank" className="hover:text-[#6B2D34]">S.A I.T Solution Nepal</a>.
//           </p>
//         </div>

//       </div>

//       {/* Image Section - Absolute positioned at bottom */}
//       {/* <div className="absolute bottom-0 left-0 right-0 flex justify-center px-6 z-10">
//         <img 
//           src="/images/bg4.png" 
//           alt="Heritage Hotel Experience"
//           className="w-full "
//         />
//       </div> */}

//     </footer>
//   );
// };

// export default Footer;








import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-[#4A3428] text-[#F6F1E8] rounded-t-[30px] sm:rounded-t-[50px] mt-16 sm:mt-32 relative z-10">
      {/* Newsletter */}
      <div className="px-5 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20">

        <div className="flex flex-col items-center text-center">
          {/* Content removed as per your comment */}
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-6 gap-y-10 sm:gap-x-8 sm:gap-y-12 lg:gap-16">
          {/* Left */}
          <div className="col-span-2 lg:col-span-5">
            <p className="uppercase text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] text-[#CBAE9D]">
              Thamel Heritage Hotel
            </p>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl leading-tight mt-4 sm:mt-6">
              Thamel-6,
              <br />
              Kathmandu,
              <br />
              Nepal
            </h3>
            <div className="flex items-center mt-8 sm:mt-12">
              <button className="bg-[#6B2D34] hover:bg-[#D22D2D] px-6 sm:px-8 py-3 sm:py-4 rounded-full transition duration-300 text-sm sm:text-base">
                Book Now
              </button>
              <button className="h-11 w-11 sm:h-14 sm:w-14 ml-3 sm:ml-4 rounded-full bg-[#6B2D34] hover:rotate-45 transition duration-300 flex items-center justify-center flex-shrink-0">
                <BsArrowUpRight />
              </button>
            </div>
          </div>

          {/* Contact */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="uppercase text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] text-[#CBAE9D] mb-4 sm:mb-8">
              Contact
            </h4>
            <div className="space-y-2 sm:space-y-4 text-sm sm:text-base">
              <p>+91 9876543210</p>
              <p className="break-words">hello@heritage.com</p>
              <a href="/" className="block hover:text-[#D6B06A]">
                Contact Us
              </a>
              <a href="/" className="block hover:text-[#D6B06A]">
                FAQ's
              </a>
            </div>
          </div>

          {/* Sitemap */}
          <div className="col-span-1 lg:col-span-3">
            <h4 className="uppercase text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] text-[#CBAE9D] mb-4 sm:mb-8">
              Sitemap
            </h4>
            <div className="space-y-1 sm:space-y-2">
              {[
                "Home",
                "About",
                "Rooms",
                "Dining",
                "Gallery",
                "Experiences",
                "Reviews",
              ].map((item) => (
                <a
                  key={item}
                  href="/"
                  className="block font-serif text-xl sm:text-2xl lg:text-4xl hover:text-[#D6B06A] transition"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="uppercase text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] text-[#CBAE9D] mb-4 sm:mb-8">
              Explore
            </h4>
            <div className="space-y-1 sm:space-y-2">
              {[
                "Stay",
                "Dining",
                "Spa",
                "Wellness",
                "Events",
              ].map((item) => (
                <a
                  key={item}
                  href="/"
                  className="block font-serif text-xl sm:text-2xl lg:text-4xl hover:text-[#D6B06A] transition"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#7C3D38] mt-12 sm:mt-20 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 text-center md:text-left">
          <div className="flex gap-6 sm:gap-8 text-xs sm:text-sm">
            <a href="/" className="hover:text-[#D6B06A]">
              Privacy Policy
            </a>
            <a href="/" className="hover:text-[#D6B06A]">
              Terms & Conditions
            </a>
          </div>
          <p className="text-xs sm:text-sm text-[#D8C5B6]">
            © {new Date().getFullYear()} Heritage Hotel. All rights reserved. Crafted by{" "}
            <a
              href="https://sait.com.np/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#c7959b]"
            >
              S.A I.T Solution Nepal
            </a>
            .
          </p>
        </div>

      </div>

      {/* Image Section - Absolute positioned at bottom */}
      {/* <div className="absolute bottom-0 left-0 right-0 flex justify-center px-6 z-10">
        <img 
          src="/images/bg4.png" 
          alt="Heritage Hotel Experience"
          className="w-full "
        />
      </div> */}

    </footer>
  );
};

export default Footer;
