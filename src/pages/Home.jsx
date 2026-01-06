import React from 'react'
import Video from '../component/home/Video'
import HomeHeroText from '../component/home/HomeHeroText'
import HomeBottomText from '../component/home/HomeBottomText'

const Home = () => {
  return (
    <div className='text-white h-screen w-screen'>
    <div className='h-full w-full fixed'>
      <Video/>
    </div>

    <div className='h-screen  w-screen lg:h-full lg:w-full pb-2 overflow-hidden relative flex flex-col justify-between'>
        <HomeHeroText/>
        <HomeBottomText/>
    </div>

    </div>
  )
}

export default Home
