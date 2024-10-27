import React from 'react'
import Navbar from '../../common/Navbar'
import Footer from '../../common/Footer'
import Mainpage from './Mainpage'

const Main = () => {
  return (
    <div>
        <Navbar/>
        <div className="h-[calc(110vh-96px)] flex flex-col items-center justify-center px-4 text-center">
  {/* Title */}
  <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-gray-300">
  Students' <br /> Gymkhana <br /> Council
  </h1>
  <p className="mt-16 text-lg md:text-xl text-gray-500 max-w-3xl">
  A powerful and apolitical organization that acts as a connecting bridge between the administration and the student community.
  </p>
  </div>
        <Mainpage/>
        <Footer/>
    </div>
  )
}

export default Main