import React from 'react'

const ProjectsCard = (props) => {
  return (
    <>
         
          <div className='lg:w-1/2 group h-full transition-all relative rounded-none hover:rounded-[35px] overflow-hidden'>
          <img className='h-full w-full object-cover' src={props.image1} alt="" />
          <div className='opacity-0 group-hover:opacity-100 absolute top-0 left-0 flex items-center justify-center bg-black/10 h-full w-full'>
            <h2 className='uppercase text-5xl font-[font1] pt-2 px-4 transition-all text-white border-white border-4 rounded-full'>vior le projet</h2>
          </div>
          </div>
          <div className='lg:w-1/2 group h-full transition-all relative rounded-none hover:rounded-[35px] overflow-hidden'>
          <img className='h-full w-full object-cover' src={props.image2} alt="" />
          <div className='opacity-0 group-hover:opacity-100 absolute top-0 left-0 flex items-center justify-center bg-black/10 h-full w-full'>
            <h2 className='uppercase text-5xl font-[font1] pt-2 px-4 transition-all text-white border-white border-4 rounded-full'>vior le projet</h2>
          </div>
          </div>
          
    </>
  )
}

export default ProjectsCard
