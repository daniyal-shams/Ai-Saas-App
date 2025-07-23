import AiTools from '@/components/home-panel/AiTools'
import Footer from '@/components/home-panel/Footer'
import Hero from '@/components/home-panel/Hero'
import Navbar from '@/components/home-panel/Navbar'
import Plan from '@/components/home-panel/Plan'
import Testimonial from '@/components/home-panel/Testimonial'
import React from 'react'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AiTools />
      <Testimonial />
      <Plan />
      <Footer />
    </>
  )
}

export default Home
