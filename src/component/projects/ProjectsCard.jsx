import React from 'react'

const ProjectsCard = (props) => {
  return (
    <>
      <div className='w-full h-[280px] lg:w-1/2 lg:h-full group transition-all duration-500 relative rounded-none hover:rounded-[30px] overflow-hidden cursor-pointer'>
        <img className='h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105' src={props.image1} alt="" />
        <div className='opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center bg-black/30 transition-all duration-300'>
          <h2 className='uppercase text-2xl md:text-3xl lg:text-5xl font-[font1] pt-2 pb-1 px-6 transition-all text-white border-white border-2 lg:border-4 rounded-full tracking-wider hover:bg-white hover:text-black duration-300'>
            voir le projet
          </h2>
        </div>
      </div>
      
      <div className='w-full h-[280px] lg:w-1/2 lg:h-full group transition-all duration-500 relative rounded-none hover:rounded-[30px] overflow-hidden cursor-pointer'>
        <img className='h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105' src={props.image2} alt="" />
        <div className='opacity-0 group-hover:opacity-100 absolute inset-0 flex items-center justify-center bg-black/30 transition-all duration-300'>
          <h2 className='uppercase text-2xl md:text-3xl lg:text-5xl font-[font1] pt-2 pb-1 px-6 transition-all text-white border-white border-2 lg:border-4 rounded-full tracking-wider hover:bg-white hover:text-black duration-300'>
            voir le projet
          </h2>
        </div>
      </div>
    </>
  )
}

export default ProjectsCard

