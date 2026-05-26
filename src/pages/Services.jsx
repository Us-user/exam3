import React from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Section1Serv from './services/Section1Serv.jsx'
import Section2Serv from './services/Section2Serv.jsx'
import Section3Serv from './services/Section3Serv.jsx'

export default function Services() {
  return (
    <div>
      <Header />
      <Section1Serv/>
      <Section2Serv/>
      <Section3Serv/>
      <Footer />

    </div>
  )
}
