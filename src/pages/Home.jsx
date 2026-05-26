import React from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Section1Home from './home/Section1Home.jsx'
import Section2Home from './home/Section2Home.jsx'
import Section3Home from './home/Section3Home.jsx'
import Section4Home from './home/Section4Home.jsx'
import Section5Home from './home/Section5Home.jsx'
import Swagger from './home/Swagger.jsx'

export default function Home() {
  return (
    <div>
      <Header/>
      <Section1Home/>
      <Section2Home/>
      <Swagger/>
      <Section3Home/>
      <Section4Home/>
      <Section5Home/>
      <Footer/>
    </div>
  )
}
