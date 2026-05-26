import React from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Section1Careers from './careers/Section1Careers.jsx'
import Section2Careers from './careers/Section2Careers.jsx'
import Section3Careers from './careers/Section3Careers.jsx'

export default function Careers() {
  return (
    <div>
      <Header />
      <Section1Careers/>
      <Section2Careers/>
      <Section3Careers/>
      <Footer />
    </div>
  )
}
