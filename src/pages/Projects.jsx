import React, { useEffect, useState } from 'react'
import ProjectsCard from '../component/projects/ProjectsCard'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import { Link } from 'react-router-dom'

export default function Projects() {

  const projects = [
    {
      image1: 'https://k72.ca/images/blog/blogImg/K72_article_ChatGPT_blogue.jpg?w=640&h=290&s=cec2aa341c22369e36e602c558c49e2a',
      image2: 'https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c',
    },
    {
      image1: 'https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b',
      image2: 'https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c',
    },
    {
      image1: 'https://k72.ca/images/caseStudies/CRISIS24/crisis24_behance_1920X1200_cartes.jpg?w=1280&h=960&s=bb42c9de87442e1bffc542c332e07124',
      image2: 'https://k72.ca/images/caseStudies/OSM/thumbnail_OSM_1280.jpg?w=1280&h=960&s=968b0d5b6e3ac3b7ab84c1706efd4377',
    },
    {
      image1: 'https://k72.ca/images/caseStudies/PME-MTL/PME-MTL_Thumbnail.jpg?w=1280&h=960&s=49e3b251d0a28f1f8d40fd59517fc000',
      image2: 'https://k72.ca/images/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail.jpg?w=1280&h=960&s=5c944bb014f8643227ad7bb117fccc14',
    },
    {
      image1: 'https://k72.ca/images/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img.jpg?w=1280&h=960&s=1d30e394b903c242ad9a4f2cb2463cda',
      image2: 'https://k72.ca/images/caseStudies/SollioAg/thumbnailimage_SollioAg.jpg?w=1280&h=960&s=3085861fabc3a15e7f8f8a01c07afa4f',
    },
    {
      image1: 'https://k72.ca/images/caseStudies/Opto_Reseau_Brand/opto_thumbnail2.jpg?w=1280&h=960&s=7f23d7d824eb04c784dcf51380fe3996',
      image2: 'https://k72.ca/images/caseStudies/OKA/OKA_thumbnail.jpg?w=1280&h=960&s=c12c27c9db3c521e4c82a246a8d5c022',
    },
    {
      image1: 'https://k72.ca/images/caseStudies/Opto/thumbnailimage_opto.jpg?w=1280&h=960&s=938f0bfb3de1ff2a2846b884eec2d757',
      image2: 'https://th.bing.com/th/id/OIP.nY2Fa57Qot38DS0iuFcs8QHaD9?w=292&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
    },
  ]
  const [time, setTime] = useState('')

useEffect(() => {
  const updateTime = () => {
    const now = new Date()

    const options = {
      timeZone: 'America/Toronto', 
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


  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    gsap.from('.hero', {
      height: '100px',
      stagger: { amount: 0.4 },
      scrollTrigger: {
        trigger: '.lol',
        start: 'top 100%',
        end: 'top -150%',
        scrub: true,
      },
    })
  })

  return (
    <>
    
      <div className="lg:p-2 p-1">
        <div className="pt-[41vh]">
          <h2 className="flex font-[font2] lg:text-[13vw] text-[20vw] uppercase">
            Projets <div className=' lg:text-[4vw] lg:mt-13 text-[6vw] mt-3'><sup className='lg:leading-tight'>17</sup></div>
          </h2>
        </div>

        <div className="lol lg:-mt-19 -mt-6">
          {projects.map((elem, idx) => (
            <div
              key={idx}
              className="hero w-full h-[500px] flex lg:flex-row flex-col mb-2 gap-2"
            >
              <ProjectsCard image1={elem.image1} image2={elem.image2} />
            </div>
          ))}
        </div>
      </div>

    
      <footer className="bg-black  text-white lg:px-8  pt-10 lg:pb-6 pb-2">
      
        <div className="flex items-center justify-between flex-wrap gap-6">
          <div className="flex gap-4 px-2">
            {['FB', 'IG', 'IN', 'BE'].map((item) => (
              <div
                key={item}
                className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center
                           text-xl font-semibold cursor-pointer
                           hover:bg-white hover:text-black transition-all duration-300"
              >
                {item}
              </div>
            ))}
          </div>
            <Link to='/contact'>
          <button
            className="border-2 border-white rounded-full lg:px-10 px-12 py-4 lg:py-4 ml-6  text-3xl font-semibold
                       hover:bg-white hover:text-black transition-all duration-300"
          >
            CONTACT <span className="ml-2">♥</span>
          </button>
          </Link>
        </div>

        <div className="mt-16 flex items-center justify-between text-sm flex-wrap gap-4">
          <div className="lg:flex lg:items-center lg:gap-2 lg:ml-0 ml-21">
            🌐 <span>MONTREAL_{time}</span>
          </div>

          <div className="lg:flex lg:flex-wrap lg:justify-center lg:gap-4 lg:text-center
                           grid 
          ">
            <a href="#" className="hover:underline">POLITIQUE DE CONFIDENTIALITÉ</a>
            <a href="#" className="hover:underline">AVIS DE CONFIDENTIALITÉ</a>
            <a href="#" className="hover:underline">RAPPORT ÉTHIQUE</a>
            <a href="#" className="hover:underline">OPTIONS DE CONSENTEMENT</a>
          </div>

          <a href="#" className="hover:underline lg:text-[] text-[2.3vh] lg:ml-0 ml-25 font-semibold">
            RETOUR EN HAUT
          </a>
    
        </div>
      </footer>
    </>
  )
}
