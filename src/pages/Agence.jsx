import React, { useEffect, useRef, useState } from "react";
import {useGSAP} from '@gsap/react'
import gsap from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { Link } from "react-router-dom";

const Agence = () => {
    
    gsap.registerPlugin(ScrollTrigger)
    const imageDivRef = useRef(null)
    const imageRef = useRef(null)

    const imageArray = [
        "https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7",

        'https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64',

        'https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991',

        'https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2',

        'https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6',

        'https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a',

        'https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847',

        'https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6',

        'https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a',
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

    useGSAP(function(){
        gsap.to(imageDivRef.current,{
            scrollTrigger:{
                trigger:imageDivRef.current, 
               
                start:'top 23%',
                end:'top -100%',
                pin: true,
                pinSpacing: true,
                pinReparent: true,
                pinType: 'transform',
                scrub: 1, 
                anticipatePin: 1,
                invalidateOnRefresh: true,
                onUpdate: (elem) => {
                    let imageIndex;

                    if(elem.progress < 1) {
                        imageIndex = Math.floor(elem.progress * imageArray.length)
                    }else{
                        imageIndex = imageArray.length - 1
                    }

                    imageRef.current.src = imageArray[imageIndex]
                }
            }
        })
    })
  return (
   <div className="parent">
     <div id='page1' className=" py-1">
        <div ref={imageDivRef} className="lg:absolute absolute lg:top-80 -top-[5vw] lg:left-[33vw] left-[30vw] overflow-hidden lg:rounded-3xl rounded-xl  lg:w-[15vw] lg:h-[20vw] h-[27vw] w-[20vw]">
            <img ref={imageRef} className="lg:absolute  absolute w-full h-full object-cover"
            src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7" alt="" />
        </div>
        <div className="relative font-[font2]">
      <div className="lg:mt-[55vh] mt-[22vh]">
        <h1 className="lg:text-[20vw] text-[18vw] text-center uppercase lg:leading-[18vw] leading-[15vw]">Soixan7e <br />Douze</h1>
      </div>
      <div className="lg:pl-[41%] relative lg:mt-20 mt-25 pl-[4%] ">
      <p className="lg:text-5xl text-xl leading-tight relative font-[font2]">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.
      </p>
      </div>
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
            className="border-2 border-white rounded-full lg:px-10 px-12 py-4 lg:py-4 ml-2text-3xl font-semibold
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
   </div>
  );
};

export default Agence;
