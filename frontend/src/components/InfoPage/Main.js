import React from 'react'
import Navbar from '../../common/Navbar'
import Footer from '../../common/Footer'
import FormPage from './FormPage'

const Main = () => {
  return (
    <div className="min-h-screen bg-white">
        <Navbar/>
        <div className="h-[calc(65vh-96px)] flex items-center justify-center px-4">
          <h1 className="text-6xl md:text-7xl w-5/6 text-center lg:text-8xl xl:text-9xl font-medium text-gray-300">
            Important Information
          </h1>
        </div>
        <FormPage/>
        <Footer/>
    </div>
  )
}

export default Main