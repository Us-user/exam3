import React from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Section1Proj from './projects/Section1Proj.jsx'
import Section2Proj from './projects/Section2Proj.jsx'
import Section5Home from './home/Section5Home.jsx'

export default function Projects() {
  return (
    <div>
            <Header/>
            <Section1Proj/>
            <Section2Proj/>
            <Section5Home/>
            <Footer/>
      
    </div>
  )
}
