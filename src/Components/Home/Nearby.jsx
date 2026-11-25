// import React from "react";
// import { Link } from "react-router-dom";

// const nearbyPlaces = [
//   {
//     title: "Stupa Temple",
//     image: "/images/frame1.png",
//   },
//   {
//     title: "Pashupatinath Temple",
//     image: "/images/frame2.png",
//   },
//   {
//     title: "Patan Durbar Square",
//     image: "/images/frame3.png",
//   },
//   {
//     title: "Thamel",
//     image: "/images/frame4.png",
//   },
// ];

// const Nearby = () => {
//   return (
//     <section className="grid lg:grid-cols-2 min-h-screen">
//       {/* Left Section - Sticky */}
//       <div className="bg-[#4A3428] flex flex-col py-12 px-6 lg:py-16 lg:sticky lg:top-0 lg:h-screen">
//         {/* Content - Top */}
//         <div className="flex-1 flex items-center">
//           <div className="max-w-lg">
//             <span className="text-white/40 text-sm uppercase tracking-[4px] font-semibold">
//               Explore Nearby
//             </span>

//             <h2 className=" text-3xl sm:text-5xl md:text-6xl text-white mt-4 leading-tight">
//               Discover Local
//               <br />
//               Attractions
//             </h2>

//             <p className="text-white/50 text-md mt-6 leading-relaxed">
//               Experience the best of what the city has to offer. From cultural
//               landmarks to natural beauty, find your perfect adventure just
//               moments away.
//             </p>
            

//             <Link to="/experiences">
//               <button className="mt-8 px-8 py-3 cursor-pointer bg-white text-black rounded-full font-medium hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-xl">
//                 View All Places
//               </button>
//             </Link>
//           </div>
//         </div>

//         {/* Bottom Image */}
//         <div className="w-full mt-8 relative">
//           <img
//             src="/images/bg2.png"
//             alt="Bottom decoration"
//             className="w-full h-auto invert object-cover"
//           />
//         </div>
//       </div>

//       {/* Right Section - With SVG Background */}
//       <div className="bg-[#2F4F44] py-20 px-10 relative overflow-hidden">
//         {/* SVG Pattern Background */}
//         <div 
//           className="absolute inset-0 w-full h-full pointer-events-none"
//           style={{
//             backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
//               `<svg xmlns="http://www.w3.org/2000/svg">
//                 <defs>
//                   <pattern id="a" width="120" height="120.1" patternUnits="userSpaceOnUse">
//                     <rect width="100%" height="100%" fill="#2b2b31"/>
//                <path fill="none" stroke="#ecc94b" d="m34.582 5.417.001-10.722h10.722v10.72zm18.014-18.014v25.305H27.293v-25.304zM19.999 20 20-19.888h39.888V20zM-5.305 5.417V-5.304l10.722-.001V5.416zm18.013-18.014V12.71l-25.304-.001v-25.304zM-19.888 20v-39.888H20V20zm54.47 25.305.002-10.722h10.721v10.722zm18.014-18.014.001 25.306H27.292V27.291zM20 59.888V20h39.888v39.888zM-5.304 34.584H5.417v10.721H-5.305zm18.013 18.013h-25.305V27.291H12.71zM-19.888 20H20v39.888h-39.888z"/>
//                   </pattern>
//                 </defs>
//                 <rect width="800%" height="800%" fill="url(#a)" transform="translate(-97 -.2)"/>
//               </svg>`
//             )}`,
    
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             backgroundRepeat: 'no-repeat',
//             opacity: 0.1,
//           }}
//         />

//         {/* Content */}
//         <div className="relative z-10">
//           <div className="flex flex-col items-center gap-20">
//             {nearbyPlaces.map((place, index) => (
//               <div
//                 key={index}
//                 className="group flex flex-col items-center cursor-pointer"
//               >
//                 {/* Image Container */}
//                 <div className="w-[340px] h-[420px] overflow-hidden">
//                   <img
//                     src={place.image}
//                     alt={place.title}
//                     className="w-full h-full object-cover "
//                   />
//                 </div>

//                 <h3 className="mt-6 text-3xl text-white transition duration-300 group-hover:text-white/80">
//                   {place.title}
//                 </h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Nearby;

















import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { gsap } from 'gsap';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Nearby = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    
    // Check if screen is mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const places = [
        {
            id: 1,
            image: "images/patan.png",
            title: "Patan Durbar Square",
            description: "A UNESCO World Heritage site featuring stunning Newari architecture, ancient temples, and intricate woodcarvings in the heart of Patan.",
            location: "Patan"
        },
        {
            id: 2,
            image: "images/swayambhunath.webp",
            title: "Swayambhunath Stupa",
            description: "An ancient Buddhist stupa perched on a hilltop offering panoramic views of Kathmandu Valley, also known as the 'Monkey Temple'.",
            location: "Kathmandu"
        },
        {
            id: 3,
            image: "images/garden.jpeg",
            title: "Garden of Dreams",
            description: "A serene neo-classical garden with beautiful pavilions, fountains, and peaceful pathways - a perfect escape from the bustling city.",
            location: "Kathmandu"
        },
        {
            id: 4,
            image: "images/lod.webp",
            title: "Lord of Drinks",
            description: "A popular rooftop bar and lounge offering spectacular views of Kathmandu with an extensive selection of craft cocktails and local beverages.",
            location: "Kathmandu"
        },
        {
            id: 5,
            image: "images/mohan2.jpg",
            title: "Mohan Tattoo Inn",
            description: "A vibrant and artistic guesthouse featuring traditional and modern tattoo art, creating a unique cultural experience for travelers.",
            location: "Kathmandu"
        },
        {
            id: 6,
            image: "images/assan.jpg",
            title: "Ason Bazar",
            description: "A bustling traditional market in the heart of Kathmandu, known for its vibrant street life, local shops, and authentic Nepali cuisine.",
            location: "Ason Bazar"
        },
    ];

    const bgRefs = useRef([]);
    bgRefs.current = [];

    const addToRefs = (el) => {
        if (el && !bgRefs.current.includes(el)) {
            bgRefs.current.push(el);
        }
    };

    // Initialize backgrounds on mobile
    useEffect(() => {
        if (isMobile && bgRefs.current.length > 0) {
            bgRefs.current.forEach((bg) => {
                if (bg) {
                    gsap.set(bg, {
                        opacity: 1,
                        y: 0
                    });
                }
            });
        }
    }, [isMobile]);

    const handleHover = (index, isHovering) => {
        // Only animate if not on mobile
        if (isMobile) return;
        
        const bg = bgRefs.current[index];
        if (bg) {
            if (isHovering) {
                gsap.to(bg, {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: "power2.out"
                });
            } else {
                gsap.to(bg, {
                    opacity: 0,
                    y: 40,
                    duration: 0.3,
                    ease: "power2.in"
                });
            }
        }
    };

    return (
        <div className="w-full bg-[#4A3428] py-24 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-10 right-0 pointer-events-none">
                <img 
                    className='w-[50vh] h-[40vh] opacity-10 object-cover object-top' 
                    src="images/bg.png" 
                    alt="bg img" 
                />
            </div>

            {/* Header Section */}
            <div className="max-w-7xl mx-auto px-4 space-y-8 mb-16 relative z-10">
                <div className="flex items-center space-x-4">
                    <span className='uppercase text-sm text-white font-medium tracking-wider'>explore</span>
                </div>
                <h2 className='text-3xl md:text-5xl font-medium uppercase tracking-widest leading-[1.2] text-white'>
                    Nearby Places
                </h2>
            </div>

            {/* Swiper Slider Section */}
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Background Text */}
                <div className="absolute top-0 left-0 -mt-24 w-full h-full overflow-hidden pointer-events-none">
                    <h2 className='uppercase tracking-[24px] text-[80px] md:text-[160px] text-white/5 whitespace-nowrap'>
                        Heritage
                    </h2>
                </div>

                <Swiper
                    modules={[Autoplay, Pagination, EffectFade]}
                    spaceBetween={30}
                    slidesPerView={2}
                    centeredSlides={false}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                        renderBullet: (index, className) => {
                            return `<span class="${className} custom-bullet"></span>`;
                        },
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                    }}
                    onSlideChange={(swiper) => {
                        setCurrentSlide(swiper.activeIndex);
                    }}
                    className="mySwiper pb-16"
                >
                    {places.map((place, index) => (
                        <SwiperSlide key={place.id}>
                            <div
                                className={`group relative pb-12 ${isMobile ? 'cursor-pointer' : ''}`}
                                onMouseEnter={() => handleHover(index, true)}
                                onMouseLeave={() => handleHover(index, false)}
                                onClick={() => {
                                    // For mobile, toggle the background on click
                                    if (isMobile) {
                                        const bg = bgRefs.current[index];
                                        if (bg) {
                                            const currentOpacity = gsap.getProperty(bg, 'opacity');
                                            if (currentOpacity === 1 || currentOpacity === '1') {
                                                gsap.to(bg, {
                                                    opacity: 0,
                                                    y: 40,
                                                    duration: 0.3,
                                                    ease: "power2.in"
                                                });
                                            } else {
                                                gsap.to(bg, {
                                                    opacity: 1,
                                                    y: 0,
                                                    duration: 0.5,
                                                    ease: "power2.out"
                                                });
                                            }
                                        }
                                    }
                                }}
                            >
                                {/* Image container with alternating heights */}
                                <div className={`relative overflow-hidden z-10 transition-all duration-300 ${
                                    index % 2 === 0
                                        ? 'h-[50vh] sm:h-[60vh] mt-[10vh]'
                                        : 'h-[60vh] sm:h-[70vh]'
                                }`}>
                                    <img
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        src={place.image}
                                        alt={place.title}
                                    />
                                    
                                    {/* Location Badge */}
                                    <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                                        {place.location}
                                    </div>
                                </div>

                                {/* Title and description */}
                                <div className="mt-6 relative z-10">
                                    <div className="flex items-center">
                                        <div className="w-8 h-[1px] bg-white mr-4 transition-all duration-300 group-hover:w-12"></div>
                                        <h3 className="text-2xl font-medium text-white tracking-wider">{place.title}</h3>
                                    </div>
                                    <p className="text-white p-2 mt-2 ml-12">{place.description}</p>
                                </div>

                                {/* Hover background panel with GSAP animation */}
                                <div
                                    ref={addToRefs}
                                    className={`absolute bottom-0 left-2 right-2 h-[50vh] bg-[#6B2D34] ${
                                        isMobile ? 'opacity-100' : 'opacity-0'
                                    }`}
                                    style={{ 
                                        transform: isMobile ? 'translateY(0px)' : 'translateY(40px)',
                                        ...(isMobile && { pointerEvents: 'none' })
                                    }}
                                ></div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Custom CSS for Swiper */}
            <style jsx>{`
                .swiper-pagination-bullet {
                    width: 10px;
                    height: 10px;
                    background: #6B2D34;
                    opacity: 1;
                    transition: all 0.3s ease;
                }
                .swiper-pagination-bullet-active {
                    background: #fff;
                    width: 30px;
                    border-radius: 5px;
                }
                .swiper-pagination {
                    position: relative;
                    margin-top: 20px;
                }
            `}</style>
        </div>
    );
};

export default Nearby;