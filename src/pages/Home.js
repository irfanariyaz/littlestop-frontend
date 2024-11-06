import React from 'react'
import Hero from './Hero.js'
import Slider from './slider.js'
import About from './About.js'
import Categoreies from './Categories.js'
import Testimonials from './Testimonials.js'

function Home() {
  return (
    <>
   <Hero />
   {/* <BestSellingProducts/> */}
   <Slider />
   <About/>
   <Categoreies/>
   <Testimonials/>
   </>
  )
}

export default Home