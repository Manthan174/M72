import React from 'react'
import { useRef, useContext } from 'react'
import { NavbarColorContext, NavbarContext } from '../contaxt/NavContext'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const navGreenRef = useRef(null)
    const  [navOpen, setNavOpen] = useContext(NavbarContext) 
    const [navColor, setNavColor]= useContext(NavbarColorContext)
  return (
    <div className='w-full top-0 items-start flex fixed justify-between z-30'>
      <div className='p-2 '>
        <Link to='/'>
        <div className='fixed lg:w-28 w-26'>
        <svg className='w-full ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
          <text x="0" y="36" fontFamily="font2" fontWeight="bold" fontSize="38" fill={navColor} letterSpacing="-2">M72</text>
        </svg>
      </div>
      </Link>
      </div>
       <div onClick={() => {
        setNavOpen(true)
       }} onMouseEnter={() => {
        navGreenRef.current.style.height ='100%'
       }}
       onMouseLeave={() => {
        navGreenRef.current.style.height = '0%'
       }}
       className='lg:h-13 h-11 relative lg:w-60 w-40 bg-black group cursor-pointer'>
        
        <div ref={navGreenRef} className='bg-[#D3FD50] transition-all duration-300 absolute top-0 h-0 w-full '>

        </div>
         <div className='relative h-full lg:px-6 px-7  flex flex-col justify-center items-end lg:gap-1.5 gap-1'>
            <div className="lg:w-14 w-11 lg:h-[0.06vw] h-[0.3vw] bg-white group-hover:bg-black transition-colors duration-300"></div>
            <div className="lg:w-8 w-6 lg:h-[0.06vw] h-[0.3vw] bg-white group-hover:bg-black transition-colors duration-300"></div>
        </div>
       </div>
    </div>
  )
}

export default Navbar

