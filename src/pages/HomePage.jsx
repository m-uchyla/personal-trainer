import React from 'react'
import { Button, Footer, Hero, Navbar, Pricing } from '../components'
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
        <Footer />
    </>
  )
}

export default HomePage