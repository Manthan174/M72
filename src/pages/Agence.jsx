import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from '@gsap/react'
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from "react-router-dom";

const Agence = () => {
    gsap.registerPlugin(ScrollTrigger)
    
    const triggerRef = useRef(null)
    const textRef = useRef(null)
    const imgWrapperRef = useRef(null)

    const teamMembers = [
      {
        name: "Carl Pichette",
        role: "Associé, Stratégie",
        quote: "On cherche la friction qui crée l'étincelle pour générer de l'émotion.",
        image: "https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7"
      },
      {
        name: "Olivier Caron",
        role: "Directeur de création",
        quote: "Créer des connexions authentiques entre les marques et les humains.",
        image: "https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64"
      },
      {
        name: "Chantal Gylman",
        role: "Directrice conseil",
        quote: "La clarté et la rigueur au service de l'audace créative.",
        image: "https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991"
      },
      {
        name: "Michèle D'Anjou",
        role: "Productrice",
        quote: "Donner vie aux idées les plus folles avec précision et passion.",
        image: "https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2"
      },
      {
        name: "Mélanie Châteauneuf",
        role: "Stratège",
        quote: "Comprendre le comportement humain pour inspirer le changement.",
        image: "https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6"
      },
      {
        name: "Camille Joly",
        role: "Designer graphique",
        quote: "Le design n'est pas ce que l'on voit, mais ce que l'on ressent.",
        image: "https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a"
      },
      {
        name: "Meggie Lavoie",
        role: "Conceptrice-rédactrice",
        quote: "Les mots ont le pouvoir de redéfinir la trajectoire d'une marque.",
        image: "https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847"
      },
      {
        name: "Joël Letarte",
        role: "Développeur créatif",
        quote: "Fusionner le code et l'art pour bâtir le web de demain.",
        image: "https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6"
      }
    ];

    const [activeIndex, setActiveIndex] = useState(0)
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
        // Title entrance reveal
        gsap.from(".intro-title", {
          y: 60,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.8
        });

        // Paragraph entrance reveal
        gsap.from(".intro-desc", {
          y: 40,
          opacity: 0,
          duration: 1.2,
          delay: 1.0,
          ease: "power3.out"
        });

        // Pinned scroll behavior for team members
        ScrollTrigger.create({
          trigger: triggerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const index = Math.min(
              Math.floor(progress * teamMembers.length),
              teamMembers.length - 1
            );
            setActiveIndex(index);
          }
        });
    }, { scope: triggerRef })

    // Track activeIndex changes and trigger transitions
    const prevIndexRef = useRef(0);
    useEffect(() => {
      if (prevIndexRef.current !== activeIndex) {
        prevIndexRef.current = activeIndex;

        // Clean text transition
        const textElements = textRef.current.children;
        gsap.fromTo(textElements, 
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: "power2.out" }
        );

        // Flash and zoom image card
        gsap.fromTo(imgWrapperRef.current, 
          { scale: 0.96, filter: "brightness(0.7) contrast(1.2)" },
          { scale: 1, filter: "brightness(1) contrast(1)", duration: 0.45, ease: "power3.out" }
        );
      }
    }, [activeIndex]);

    return (
     <div className="parent text-black select-none bg-white">
       {/* Page 1 Intro */}
       <div id='page1' className="py-1 min-h-[100dvh] relative flex flex-col justify-between px-6 lg:px-16 bg-white">
          <div className="h-16 lg:h-24"></div>
          <div className="relative font-[font2] z-10 my-auto">
            <div>
              <h1 className="intro-title lg:text-[18vw] text-[14vw] text-center uppercase lg:leading-[16vw] leading-[12vw] tracking-tighter text-black">
                Soixan7e <br />Douze
              </h1>
            </div>
            <div className="lg:max-w-2xl mx-auto relative lg:mt-16 mt-12 text-center">
              <p className="intro-desc lg:text-2xl text-base leading-relaxed font-[font2] text-black/80">
                Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center pb-12 animate-bounce mt-10">
            <span className="text-black/60 text-[3.5vw] lg:text-[1vw] tracking-widest font-mono">DÉFILER VERS LE BAS ↓</span>
          </div>
       </div>

       {/* Team Section */}
       <div ref={triggerRef} className="relative min-h-[400vh] w-full border-t border-black/10 bg-white">
         <div className="sticky top-0 h-[100dvh] w-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-24 py-16 overflow-hidden bg-white">
           
           {/* Futuristic Background Watermark */}
           <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
             <h2 className="text-[25vw] uppercase font-black tracking-widest text-black select-none">L'ÉQUIPE</h2>
           </div>

           {/* Left Pane: Info display */}
           <div className="w-full lg:w-1/2 flex flex-col justify-center items-start z-10 h-1/2 lg:h-full lg:pr-12">
             <div ref={textRef} className="font-[font2] flex flex-col gap-3 lg:gap-5 max-w-xl text-black">
               
               {/* Team Index Counter */}
               <span className="text-black text-[8vw] lg:text-[3.5vw] font-mono leading-none tracking-wider">
                 {String(activeIndex + 1).padStart(2, '0')} 
                 <span className="text-black/30 text-[4vw] lg:text-[1.8vw]"> / {String(teamMembers.length).padStart(2, '0')}</span>
               </span>
               
               {/* Accent Line */}
               <div className="w-16 lg:w-24 h-[2px] bg-black mt-1"></div>

               {/* Member Name */}
               <h3 className="text-[7.5vw] lg:text-[4vw] font-bold uppercase leading-none tracking-tight text-black mt-2">
                 {teamMembers[activeIndex]?.name}
               </h3>

               {/* Member Role */}
               <h4 className="text-[4vw] lg:text-[1.5vw] text-black/60 uppercase tracking-widest font-semibold leading-none mt-1">
                 {teamMembers[activeIndex]?.role}
               </h4>

               {/* Member Quote */}
               <p className="text-[3.8vw] lg:text-[1.2vw] leading-relaxed text-black/70 italic font-[font1] mt-2 max-w-lg border-l-2 border-black/20 pl-4 py-1">
                 "{teamMembers[activeIndex]?.quote}"
               </p>
             </div>
           </div>

           {/* Right Pane: Image display */}
           <div className="w-full lg:w-1/2 flex justify-center items-center z-10 h-1/2 lg:h-full mt-4 lg:mt-0">
             <div 
               img-wrapper-id="img-wrapper"
               ref={imgWrapperRef} 
               className="relative lg:w-[22vw] lg:h-[30vw] w-[45vw] h-[60vw] max-h-[380px] lg:max-h-[480px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.06)] border border-black/10"
             >
               <img 
                 className="w-full h-full object-cover select-none"
                 src={teamMembers[activeIndex]?.image} 
                 alt={teamMembers[activeIndex]?.name} 
               />
               
               {/* Futuristic UI elements on overlay */}
               <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 pointer-events-none"></div>
               <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-black"></div>
               <div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-black"></div>
               <div className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-black"></div>
               <div className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-black"></div>
             </div>
           </div>
         </div>
       </div>

       {/* Footer */}
       <footer className="bg-black text-white lg:px-12 pt-16 pb-6 border-t border-white/10 relative z-10">
         <div className="flex items-center justify-between flex-wrap gap-6 px-4">
           <div className="flex gap-4">
             {['FB', 'IG', 'IN', 'BE'].map((item) => (
               <div
                 key={item}
                 className="w-12 h-12 lg:w-16 lg:h-16 border border-white/40 rounded-full flex items-center justify-center
                            text-base lg:text-xl font-semibold cursor-pointer
                            hover:bg-white hover:text-black hover:border-white transition-all duration-300"
               >
                 {item}
               </div>
             ))}
           </div>
           <Link to='/contact'>
             <button 
               className="border border-white/40 rounded-full px-8 py-3 lg:px-10 lg:py-4 text-base lg:text-xl font-semibold
                          hover:bg-white hover:text-black hover:border-white transition-all duration-300"
             >
               CONTACT <span className="ml-2">♥</span>
             </button>
           </Link>
         </div>

         <div className="mt-16 flex items-center justify-between text-xs lg:text-sm flex-wrap gap-6 border-t border-white/10 pt-8 px-4">
           <div className="flex items-center gap-2">
             🌐 <span className="tracking-wide">MONTREAL_{time}</span>
           </div>

           <div className="flex flex-wrap gap-x-6 gap-y-2 text-[10px] lg:text-xs opacity-60">
             <a href="#" className="hover:text-[#D3FD50] transition-colors">POLITIQUE DE CONFIDENTIALITÉ</a>
             <a href="#" className="hover:text-[#D3FD50] transition-colors">AVIS DE CONFIDENTIALITÉ</a>
             <a href="#" className="hover:text-[#D3FD50] transition-colors">RAPPORT ÉTHIQUE</a>
             <a href="#" className="hover:text-[#D3FD50] transition-colors">OPTIONS DE CONSENTEMENT</a>
           </div>

           <button 
             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
             className="hover:text-[#D3FD50] transition-colors font-semibold uppercase tracking-wider"
           >
             RETOUR EN HAUT ↑
           </button>
         </div>
       </footer>
     </div>
    );
};

export default Agence;
