import React from 'react'
import CardCarousel from '../components/CardCarousel'
import Cards from '../components/Cards'
import Features from '../components/Features'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Testimonial from '../components/Testimonial'

const Dashboard = () => {
  return (
    <>
      <Hero />
      <CardCarousel />
      <Features />
      <Testimonial />
      <Stats />
    </>
  )
}

export default Dashboard