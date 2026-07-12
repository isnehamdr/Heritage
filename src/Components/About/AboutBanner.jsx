import React from 'react';

const AboutBanner = () => {
  return (
    <div className="relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[500px] bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 py-12 md:py-16 lg:py-20"
         style={{ backgroundImage: `url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}>
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center text-center">
       

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 tracking-wide">
          ABOUT US
        </h1>

        {/* Decorative line */}
        <div className="w-16 md:w-24 h-0.5 bg-amber-400/80 mb-6 md:mb-8"></div>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed md:leading-loose px-2">
          Discover how knights, nobles & servants lived within the castle's walls
          <br className="hidden sm:block" />
          during its golden age. We welcome you to step back in time.
        </p>
      </div>
    </div>
  );
};

export default AboutBanner;