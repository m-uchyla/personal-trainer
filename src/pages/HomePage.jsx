import React from 'react'
import { Button, Footer, Hero, Navbar } from '../components'
import About from '../components/sections/About'

const HomePage = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <About />
        <Footer />
    </>
  )
}

export default HomePage