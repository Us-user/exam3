import React from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Section1Contact from './contact/Section1Contact.jsx'
import Section2Contact from './contact/Section2Contact.jsx'

export default function Contact() {
  return (
    <div>
      <Header />
      <Section1Contact/>
      <Section2Contact/>
      <Footer/>

    </div>
  )
}
