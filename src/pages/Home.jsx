import React from 'react'
import Video from '../component/home/Video'
import HomeHeroText from '../component/home/HomeHeroText'
import HomeBottomText from '../component/home/HomeBottomText'

const Home = () => {
  return (
    <div className='relative h-[100dvh] w-full text-white overflow-hidden bg-black select-none'>
      {/* Background Video */}
      <div className='absolute inset-0 w-full h-full z-0 pointer-events-none'>
        <Video/>
      </div>

      {/* Main Content Layout */}
      <div className='relative z-10 h-full w-full flex flex-col justify-between p-6 lg:p-10'>
        {/* Header spacer to avoid clashing with fixed Navbar */}
        <div className='h-16 lg:h-24'></div>

        <HomeHeroText/>
        <HomeBottomText/>
      </div>
    </div>
  )
}

export default Home

