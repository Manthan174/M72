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

    gsap.to(".fullscreennav", {
      display: "none",
      duration: 0.01,
      onComplete: () => {
        navigate(path);
      },
    });
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
      className="fullscreennav z-50 text-white h-screen w-full fixed inset-0"
    >
      <div className="h-screen w-full fixed overflow-hidden inset-0 ">
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
                <path
                  fill="white"
                  fillRule="evenodd"
                  d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
                ></path>
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
          {/* Projects Link */}
          <div
            onClick={() => handleMenuClick("/projects")}
            className="link z-20 origin-top relative cursor-pointer border-t border-white/30 w-full"
          >
            <h1 className="font-[font2] relative z-10 cursor-pointer lg:text-[8vw] text-5xl uppercase lg:leading-[0.8] py-4 text-center">
              Projets
            </h1>
            <div className="moveLink pointer-events-none absolute inset-0 w-full h-full bg-[#D3FD50] text-black flex items-center overflow-hidden z-20">
              <div className="flex moveX items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-4xl uppercase lg:leading-[0.8] pt-2 text-center">
                  &nbsp; Pour Tout Voir &nbsp;
                </h2>
                <img
                  className="object-cover lg:w-64 w-38 lg:h-24 h-13 rounded-full shrink-0"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt="pic1"
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-4xl uppercase lg:leading-[0.8] pt-2 text-center">
                  &nbsp; Pour Tout Voir &nbsp;
                </h2>
                <img
                  className="object-cover lg:w-64 w-38 lg:h-24 h-13 rounded-full shrink-0"
                  src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                  alt="pic2"
                />
              </div>
              <div className="flex moveX items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-4xl uppercase lg:leading-[0.8] pt-2 text-center">
                  &nbsp; Pour Tout Voir &nbsp;
                </h2>
                <img
                  className="object-cover lg:w-64 w-38 lg:h-24 h-13 rounded-full shrink-0"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt="pic1"
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-4xl uppercase lg:leading-[0.8] pt-2 text-center">
                  &nbsp; Pour Tout Voir &nbsp;
                </h2>
                <img
                  className="object-cover lg:w-64 w-38 lg:h-24 h-13 rounded-full shrink-0"
                  src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                  alt="pic2"
                />
              </div>
            </div>
          </div>

          {/* Agence Link */}
          <div
            onClick={() => handleMenuClick("/agence")}
            className="link origin-top relative border-t border-white/30 w-full"
          >
            <h1 className="font-[font2] relative z-10 cursor-pointer lg:text-[8vw] text-5xl uppercase lg:leading-[0.8] py-4 text-center">
              Agence
            </h1>
            <div className="moveLink pointer-events-none absolute inset-0 w-full h-full bg-[#D3FD50] text-black flex items-center overflow-hidden z-20">
              <div className="flex moveX items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-4xl uppercase lg:leading-[0.8] pt-2 text-center">
                  &nbsp; Pour Tout Voir &nbsp;
                </h2>
                <img
                  className="object-cover lg:w-64 w-38 lg:h-24 h-13 rounded-full shrink-0"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt="pic1"
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-4xl uppercase lg:leading-[0.8] pt-2 text-center">
                  &nbsp; Pour Tout Voir &nbsp;
                </h2>
                <img
                  className="object-cover lg:w-64 w-38 lg:h-24 h-13 rounded-full shrink-0"
                  src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                  alt="pic2"
                />
              </div>
              <div className="flex moveX items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-4xl uppercase lg:leading-[0.8] pt-2 text-center">
                  &nbsp; Pour Tout Voir &nbsp;
                </h2>
                <img
                  className="object-cover lg:w-64 w-38 lg:h-24 h-13 rounded-full shrink-0"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt="pic1"
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-4xl uppercase lg:leading-[0.8] pt-2 text-center">
                  &nbsp; Pour Tout Voir &nbsp;
                </h2>
                <img
                  className="object-cover lg:w-64 w-38 lg:h-24 h-13 rounded-full shrink-0"
                  src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                  alt="pic2"
                />
              </div>
            </div>
          </div>

          {/* Contact Link */}
          <div
            onClick={() => handleMenuClick("/contact")}
            className="link origin-top relative border-t border-white/30 w-full"
          >
            <h1 className="font-[font2] relative z-10 cursor-pointer lg:text-[8vw] text-5xl uppercase lg:leading-[0.8] py-4 text-center">
              Contact
            </h1>
            <div className="moveLink pointer-events-none absolute inset-0 w-full h-full bg-[#D3FD50] text-black flex items-center overflow-hidden z-20">
              <div className="flex moveX items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-4xl uppercase lg:leading-[0.8] pt-2 text-center">
                  &nbsp; Pour Tout Voir &nbsp;
                </h2>
                <img
                  className="object-cover lg:w-64 w-38 lg:h-24 h-13 rounded-full shrink-0"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt="pic1"
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-4xl uppercase lg:leading-[0.8] pt-2 text-center">
                  &nbsp; Pour Tout Voir &nbsp;
                </h2>
                <img
                  className="object-cover lg:w-64 w-38 lg:h-24 h-13 rounded-full shrink-0"
                  src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                  alt="pic2"
                />
              </div>
              <div className="flex moveX items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-4xl uppercase lg:leading-[0.8] pt-2 text-center">
                  &nbsp; Pour Tout Voir &nbsp;
                </h2>
                <img
                  className="object-cover lg:w-64 w-38 lg:h-24 h-13 rounded-full shrink-0"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt="pic1"
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-4xl uppercase lg:leading-[0.8] pt-2 text-center">
                  &nbsp; Pour Tout Voir &nbsp;
                </h2>
                <img
                  className="object-cover lg:w-64 w-38 lg:h-24 h-13 rounded-full shrink-0"
                  src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                  alt="pic2"
                />
              </div>
            </div>
          </div>

          {/* Blogue Link */}
          <div className="link origin-top relative border-y border-white/30 w-full">
            <h1 className="font-[font2] relative z-10 lg:text-[8vw] text-5xl uppercase lg:leading-[0.8] py-4 text-center">
              Blogue
            </h1>
            <div className="moveLink pointer-events-none absolute inset-0 w-full h-full bg-[#D3FD50] text-black flex items-center overflow-hidden z-20">
              <div className="flex moveX items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-4xl uppercase lg:leading-[0.8] pt-2 text-center">
                  &nbsp; Pour Tout Voir &nbsp;
                </h2>
                <img
                  className="object-cover lg:w-64 w-38 lg:h-24 h-13 rounded-full shrink-0"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt="pic1"
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-4xl uppercase lg:leading-[0.8] pt-2 text-center">
                  &nbsp; Pour Tout Voir &nbsp;
                </h2>
                <img
                  className="object-cover lg:w-64 w-38 lg:h-24 h-13 rounded-full shrink-0"
                  src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                  alt="pic2"
                />
              </div>
              <div className="flex moveX items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-4xl uppercase lg:leading-[0.8] pt-2 text-center">
                  &nbsp; Pour Tout Voir &nbsp;
                </h2>
                <img
                  className="object-cover lg:w-64 w-38 lg:h-24 h-13 rounded-full shrink-0"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt="pic1"
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-4xl uppercase lg:leading-[0.8] pt-2 text-center">
                  &nbsp; Pour Tout Voir &nbsp;
                </h2>
                <img
                  className="object-cover lg:w-64 w-38 lg:h-24 h-13 rounded-full shrink-0"
                  src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c"
                  alt="pic2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default FullScreenNav;
