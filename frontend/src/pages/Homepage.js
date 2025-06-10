import React from 'react'
import HomePage1 from '../components/Homepage/Homepage'
import HomePage2 from '../components/Homepage/Homepage2'
import HomePage3 from '../components/Homepage/Saathi'
import AboutInstitute from '../components/Homepage/Card'
import SaathiPage from '../components/Homepage/SaathiPage'
import Footer from '../common/Footer'
import OneStopHighlight from './OneStop'

const Homepage = () => {
  return (
    <div>
        <HomePage1/>
        <AboutInstitute/>
        <HomePage2/>
        <HomePage3/>
        <OneStopHighlight/>
        <Footer/>
    </div>
  )
}

export default Homepage