import React from 'react'
import Hero from '../Components/Home/Hero'
import About from '../Components/Home/About'
import Rooms from '../Components/Home/Rooms'
import Services from '../Components/Home/Services'
import Nearby from '../Components/Home/Nearby'
import Testimonial from '../Components/Home/Testimonial'

const Home = () => {
    return (
        <>

            <Hero />
            <About />
            <Rooms />
            <Services />
            <Nearby />
            <Testimonial/>
        </>
    )
}

export default Home