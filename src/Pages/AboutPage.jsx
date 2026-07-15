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
      title="Our Story"
        description="Discover how a Newari merchant family once lived within these walls in the heart of Thamel. We welcome you to step inside their story."
        image="/images/img3.jpeg"
      />
      <About1 />
      <About2 />

     
    </>
  )
}

export default AboutPage