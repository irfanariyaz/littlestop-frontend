import React from 'react'
import Hero from './Hero.js'
import Slider from './slider.js'
import About from './About.js'

function Home() {
  return (
    <>
   <Hero />
   {/* <BestSellingProducts/> */}
   <Slider />
   <About/>
   </>
  )
}

export default Home