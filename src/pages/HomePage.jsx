import React from 'react'
import { Footer, Hero, Navbar, Pricing, Contact } from '../components'
import About from '../components/sections/About'
import Transforms from '../components/sections/Transforms'

const HomePage = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <About />
        <Transforms />
        <Pricing />
        <Contact />
        <Footer />
    </>
  )
}

export default HomePage