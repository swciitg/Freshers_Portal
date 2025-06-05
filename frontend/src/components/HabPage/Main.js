import React from 'react'
import Navbar from '../../common/Navbar'
import Footer from '../../common/Footer'
import Facilities from './MainPage'
const Main = () => {
  return (
    <div>
        <Navbar />
{/* <div className="h-[calc(65vh-96px)] flex flex-col items-center justify-center px-4 text-center"> */}
  {/* Title */}
  {/* <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-gray-300">
   Hostel Affairs
  </h1>
  </div> */}
  <div className="space-y-16 py-16 px-10">
        
          <Facilities
          />
      </div>
        <Footer/>

    </div>
  )
}

export default Main