import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useContext, useEffect, useRef, useState } from "react";
import { NavbarContext } from "../contaxt/NavContext";
import { Link, useNavigate } from "react-router-dom";
import Projects from "../pages/Projects";
import { IoArrowDownOutline } from "react-icons/io5";

const FullScreenNav = () => {
  const fullNavLinksRef = useRef(null);
  const fullScreenRef = useRef(null);

  const [navOpen, setNavOpen] = useContext(NavbarContext);

  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [navOpen]);

  function gsapAnimation() {
    const tl = gsap.timeline();
    tl.to(".fullscreennav", {
      display: "block",
    });
    tl.to(".stairing", {
      delay: 0.1,
      height: "100%",
      stagger: {
        amount: -0.3,
      },
    });
    tl.to(".link", {
      opacity: 1,
      rotateX: 0,
      stagger: {
        amount: 0.3,
      },
    });
    tl.to(".navlink", {
      opacity: 1,
    });
  }
  function gsapAnimationReverse() {
    const tl = gsap.timeline();
    tl.to(".link", {
      opacity: 0,
      rotateX: 90,
      stagger: {
        amount: 0.1,
      },
    });
    tl.to(".stairing", {
      height: 0,
      stagger: {
        amount: 0.1,
      },
    });
    tl.to(".navlink", {
      opacity: 0,
    });
    tl.to(".fullscreennav", {
      display: "none",
    });
  }
  const navigate = useNavigate();

  const handleMenuClick = (path) => {
    setNavOpen(false);
    navigate(path);
  };

  useGSAP(
    function () {
      if (navOpen) {
        gsapAnimation();
      } else {
        gsapAnimationReverse();
      }
    },
    [navOpen]
  );

  return (
    <div
      ref={fullScreenRef}
      id="fullscreenav"
      className="fullscreennav z-50 text-white h-[100dvh] w-full fixed inset-0"
    >
      <div className="h-[100dvh] w-full fixed overflow-hidden inset-0 ">
        <div className="h-full w-full flex">
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div className="relative h-full w-full flex flex-col justify-between p-6 lg:p-10 z-10">
        <div className="navlink flex w-full justify-between items-start">
          <div>
            <div onClick={() => handleMenuClick("/")} className="w-29 cursor-pointer">
              <svg
                className="w-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 103 44"
              >
                <text x="0" y="36" fontFamily="font2" fontWeight="bold" fontSize="38" fill="white" letterSpacing="-2">M72</text>
              </svg>
            </div>
            <div className="absolute mt-4">
              <h6 className="flex items-center gap-1 text-[#D3FD50] text-[3.5vw] lg:text-[1vw]">
                Double click on
                <div className="animate-bounce">
                  <IoArrowDownOutline />
                </div>
              </h6>
            </div>
          </div>
          {/* Responsive Close Button */}
          <div
            onClick={() => {
              setNavOpen(false);
            }}
            className="lg:h-16 lg:w-16 h-12 w-12 flex items-center justify-center relative cursor-pointer group"
          >
            <div className="absolute w-full h-[2px] bg-[#D3FD50] rotate-45 transition-transform duration-300 group-hover:scale-x-110"></div>
            <div className="absolute w-full h-[2px] bg-[#D3FD50] -rotate-45 transition-transform duration-300 group-hover:scale-x-110"></div>
          </div>
        </div>

        <div id="all-links" className="w-full flex flex-col justify-center flex-grow py-10">
          {[
            { name: 'Projets', path: '/projects', img1: 'https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b', img2: 'https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c' },
            { name: 'Agence', path: '/agence', img1: 'https://k72.ca/images/caseStudies/CRISIS24/crisis24_behance_1920X1200_cartes.jpg?w=1280&h=960&s=bb42c9de87442e1bffc542c332e07124', img2: 'https://k72.ca/images/caseStudies/OSM/thumbnail_OSM_1280.jpg?w=1280&h=960&s=968b0d5b6e3ac3b7ab84c1706efd4377' },
            { name: 'Contact', path: '/contact', img1: 'https://k72.ca/images/caseStudies/PME-MTL/PME-MTL_Thumbnail.jpg?w=1280&h=960&s=49e3b251d0a28f1f8d40fd59517fc000', img2: 'https://k72.ca/images/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail.jpg?w=1280&h=960&s=5c944bb014f8643227ad7bb117fccc14' },
            { name: 'Blogue', path: '#', img1: 'https://k72.ca/images/blog/blogImg/K72_article_ChatGPT_blogue.jpg?w=640&h=290&s=cec2aa341c22369e36e602c558c49e2a', img2: 'https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c' }
          ].map((item, idx) => (
            <div
              key={idx}
              onClick={() => item.path !== '#' && handleMenuClick(item.path)}
              className={`link z-20 origin-top relative ${item.path !== '#' ? 'cursor-pointer' : ''} border-t ${idx === 3 ? 'border-b' : ''} border-white/30 w-full group`}
            >
              <h1 className="font-[font2] relative z-10 lg:text-[8vw] text-5xl uppercase lg:leading-[0.8] py-4 text-center transition-transform duration-300 group-hover:scale-105">
                {item.name}
              </h1>
              <div className="moveLink pointer-events-none absolute inset-0 w-full h-full bg-[#D3FD50]/90 backdrop-blur-sm text-black flex items-center overflow-hidden z-20">
                <div className="flex moveX items-center">
                  {[...Array(2)].map((_, i) => (
                    <React.Fragment key={i}>
                      <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-4xl uppercase lg:leading-[0.8] pt-2 text-center px-4">
                        Pour Tout Voir
                      </h2>
                      <img
                        className="object-cover lg:w-64 w-38 lg:h-24 h-13 rounded-full shrink-0 shadow-lg"
                        src={item.img1}
                        alt="pic1"
                      />
                      <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-4xl uppercase lg:leading-[0.8] pt-2 text-center px-4">
                        Pour Tout Voir
                      </h2>
                      <img
                        className="object-cover lg:w-64 w-38 lg:h-24 h-13 rounded-full shrink-0 shadow-lg"
                        src={item.img2}
                        alt="pic2"
                      />
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default FullScreenNav;
