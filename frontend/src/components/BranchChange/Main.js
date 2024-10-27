import React from 'react'
import Navbar from '../../common/Navbar'
import Footer from '../../common/Footer'
import MainPage from './MainPage'

const Main = () => {
  return (
    <div>
        <Navbar />
<div className="h-[calc(60vh-96px)] flex flex-col items-center justify-center px-4 text-center">
  {/* Title */}
  <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-gray-300">
   Branch Change
  </h1>
  </div>
  <MainPage/>
        <Footer/>

    </div>
  )
}

export default Main