import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const HomeBottomText = () => {
  const [time, setTime] = useState('')
  const containerRef = useRef(null)
  
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
  
      const options = {
        timeZone: 'America/Toronto', // Montreal timezone
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }
  
      const formattedTime = now.toLocaleTimeString('en-CA', options)
      setTime(formattedTime)
    }
  
    updateTime() 
    const interval = setInterval(updateTime, 1000)
  
    return () => clearInterval(interval)
  }, [])

  useGSAP(() => {
    gsap.from(".bottom-fade-in", {
      opacity: 0,
      y: 30,
      duration: 1.2,
      stagger: 0.15,
      ease: "power3.out",
      delay: 1.2
    })
  }, { scope: containerRef })

  return (
    <div 
      ref={containerRef} 
      className='font-[font2] w-full flex flex-col lg:flex-row justify-between items-center lg:items-end gap-6 lg:gap-10 mt-auto pb-4 select-none'
    >
      {/* Montreal Clock - Left on Desktop */}
      <div className='bottom-fade-in order-3 lg:order-1 flex items-center gap-2 text-[3.5vw] lg:text-[1vw] tracking-wider opacity-80'>
        🌐 <span>MONTREAL {time}</span>
      </div>

      {/* Action Buttons - Center on Desktop */}
      <div className='bottom-fade-in order-2 flex items-center justify-center gap-4 lg:gap-6 w-full lg:w-auto'>
        <div className='border-2 lg:border-3 border-white rounded-full hover:border-[#D3FD50] hover:text-[#D3FD50] transition-all duration-300 flex items-center justify-center px-6 py-2 lg:px-8 lg:py-3 uppercase cursor-pointer'>
          <Link className='text-[5vw] lg:text-[2.2vw] font-medium leading-none' to='/projects'>Projets</Link>
        </div>      

        <div className='border-2 lg:border-3 border-white rounded-full hover:border-[#D3FD50] hover:text-[#D3FD50] transition-all duration-300 flex items-center justify-center px-6 py-2 lg:px-8 lg:py-3 uppercase cursor-pointer'>
          <Link className='text-[5vw] lg:text-[2.2vw] font-medium leading-none' to='/agence'>Agence</Link>
        </div>
      </div>

      {/* Description text - Right on Desktop */}
      <p className='bottom-fade-in order-1 lg:order-3 text-[3.8vw] lg:text-[1vw] w-full max-w-[320px] lg:w-80 leading-relaxed text-center lg:text-right opacity-80'>
        M72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre.
      </p>
    </div>
  )
}

export default HomeBottomText

