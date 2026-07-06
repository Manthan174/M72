import React, { useRef } from "react";
import Video from "./Video";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HomeHeroText = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    
    // Animate lines rising
    tl.from(".hero-line-inner", {
      y: "115%",
      duration: 1.4,
      stagger: 0.15,
      ease: "power4.out",
    });

    // Animate the capsule expanding
    tl.from(".hero-capsule", {
      width: 0,
      opacity: 0,
      duration: 1.2,
      ease: "power3.inOut"
    }, "-=1.0");
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="font-[font1] flex flex-col justify-center items-center flex-grow text-center py-4 select-none">
      <div className="overflow-hidden h-[12vw] lg:h-[8.5vw] flex items-center justify-center">
        <span className="hero-line-inner inline-block lg:text-[9.5vw] text-[12vw] uppercase lg:leading-[8vw] leading-[10vw]">
          L'étincelle
        </span>
      </div>
      
      <div className="overflow-hidden h-[12vw] lg:h-[8.5vw] flex items-center justify-center gap-3">
        <span className="hero-line-inner flex items-center justify-center lg:text-[9.5vw] text-[12vw] uppercase lg:leading-[8vw] leading-[10vw]">
          qui
          <div className="hero-capsule lg:h-[6.5vw] lg:w-[15vw] h-[8vw] w-[18vw] rounded-full overflow-hidden mx-3 inline-block relative border border-white/20">
            <Video />
          </div>
          génère
        </span>
      </div>

      <div className="overflow-hidden h-[12vw] lg:h-[8.5vw] flex items-center justify-center">
        <span className="hero-line-inner inline-block lg:text-[9.5vw] text-[12vw] uppercase lg:leading-[8vw] leading-[10vw]">
          la créativité
        </span>
      </div>
    </div>
  );
};

export default HomeHeroText;

