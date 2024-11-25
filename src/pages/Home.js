import React from 'react'
import Hero from './Hero.js'
import Slider from './slider.js'
import About from './About.js'
import HomeCategoreies from './HomeCategoreies.js'
import Testimonials from './Testimonials.js'

function Home() {
  return (
    <>
   <Hero />
   {/* <BestSellingProducts/> */}
   <Slider />
   <About/>
   <HomeCategoreies/>
   <Testimonials/>
   </>
  )
}

export default Home