import React from 'react'
import { Link } from 'react-router-dom'
import PageBanner from '../Components/Shared/PageBanner'
import About1 from '../Components/About/About1'
import About2 from '../Components/About/About2'

const AboutPage = () => {
  return (
    <>
      <PageBanner
        crumb="Our Story"
        kicker="Since 1892"
        title="Our Story"
        description="Discover how a Newari merchant family once lived within these walls in the heart of Thamel. We welcome you to step inside their story."
        image="/images/img3.jpeg"
      />
      <About1 />
      <About2 />

      {/* Closing CTA */}
      <section className="bg-[#4A3428] py-16 sm:py-20 px-5 sm:px-8 text-center">
        <h3 className="font-serif text-3xl sm:text-4xl text-white mb-5">
          Come see it for yourself
        </h3>
        <p className="text-white/60 max-w-xl mx-auto mb-8">
          Photos only carry a story so far. The rest is best experienced
          from our courtyard, tea in hand.
        </p>
        <Link to="/booking">
          <button className="px-8 py-3.5 bg-[#6B2D34] rounded-full text-white uppercase tracking-[0.2em] text-sm transition duration-500 hover:bg-[#8A3B46]">
            Book Your Stay
          </button>
        </Link>
      </section>
    </>
  )
}

export default AboutPage