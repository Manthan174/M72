import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
   const [time, setTime] = useState('')
  
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

  return (
    <div className='font-[font2] flex items-center justify-center lg:gap-3 gap-4 lg:pt-56 pt-  '>
      <p className='absolute lg:text-[1vw] lg:w-64 lg:right-6 lg:bottom-32 lg:leading-relaxed
                    text-[4vw] w-64 bottom-21 right-4 leading-tight'>
        
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.
      </p>
       <div>
        <div className="lg:flex lg:items-center lg:gap-2 lg:absolute lg:left-0 lg:bottom-0 absolute left-0 bottom-0">
            🌐 <span className=''>MONTREAL {time}</span>
          </div>
       </div>
        <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] flex items-center lg:px-8 lg:h-22 px-2 lg:pt-5 lg:mb-0 mb-5 border-white rounded-full uppercase '>
      <Link className='lg:text-[6.5vw] text-[6vw] ' to='/projects'>Projets</Link>
        </div>      

        <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] flex items-center lg:px-8 lg:h-22 px-2 lg:pt-5 lg:mb-0 mb-5 border-white rounded-full uppercase '>
      <Link className='lg:text-[6.5vw] text-[6vw]' to='/agence'>Agence</Link>
    </div>
    </div>
  )
}

export default HomeBottomText
