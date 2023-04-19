import React from 'react'
import { Button, Footer, Hero, Navbar, Pricing } from '../components'
import About from '../components/sections/About'

const HomePage = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <About />
        <Pricing />
        <Footer />
    </>
  )
}

export default HomePage