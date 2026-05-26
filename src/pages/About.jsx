import React from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Section1About from './about/Section1About.jsx'
import Section2About from './about/Section2About.jsx'
import Section3About from './about/Section3About.jsx'
import Section4About from './about/Section4About.jsx'

export default function About() {
  return (
    <div>
      <Header />
      <Section1About/>
      <Section2About/>
      <Section3About/>
      <Section4About/>
      <Footer />
    </div>
  )
}
