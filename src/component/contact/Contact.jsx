import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Logo from '../../assets/Logo.png'
import { SiGmail } from "react-icons/si";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { SiGooglemaps } from "react-icons/si";
import Footer from '../common/Footer';

const Contact = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Entrance animation for header
    gsap.from(".contact-header", {
      y: 60,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out"
    });

    // Entrance animation for details
    gsap.from(".contact-info", {
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 0.4,
      stagger: 0.1,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="min-h-screen bg-black text-white overflow-hidden font-[font1] select-none flex flex-col justify-between pt-28 lg:pt-36">
      {/* Title & Description Container */}
      <div className="px-6 md:px-12 flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="contact-header uppercase leading-[0.9] text-[14vw] md:text-7xl lg:text-8xl xl:text-9xl font-bold">
          Pour <br/>Parler De
          <br /> Votre
          <br />Projet
        </h1>

        <p className="contact-info mt-6 text-base md:text-lg lg:text-xl opacity-70 max-w-md lg:max-w-lg">
          Dans un écran ou un bureau.<br />
          Chez vous. Chez nous. Partout.
        </p>
      </div>

      {/* Infinite CSS Marquee */}
      <div className="border-y border-white/20 overflow-hidden w-full flex my-10 group hover:bg-[#D3FD50] hover:text-black transition-colors duration-700 cursor-pointer">
        <div className="flex shrink-0 moveX items-center whitespace-nowrap py-4 text-[12vw] md:text-6xl lg:text-8xl uppercase font-bold font-[font1]">
          {[...Array(4)].map((_, index) => (
            <span key={index} className="flex items-center gap-3 lg:gap-8 mx-4 md:mx-8">
              Manthan@M72.ca
              <img
                src={Logo}
                alt="Logo"
                className="w-24 h-12 md:w-48 md:h-24 lg:w-64 lg:h-32 rounded-full object-cover shrink-0 filter drop-shadow-md"
              />
            </span>
          ))}
        </div>
        <div className="flex shrink-0 moveX items-center whitespace-nowrap py-4 text-[12vw] md:text-6xl lg:text-8xl uppercase font-bold font-[font1]">
          {[...Array(4)].map((_, index) => (
            <span key={index} className="flex items-center gap-3 lg:gap-8 mx-4 md:mx-8">
              Manthan@M72.ca
              <img
                src={Logo}
                alt="Logo"
                className="w-24 h-12 md:w-48 md:h-24 lg:w-64 lg:h-32 rounded-full object-cover shrink-0 filter drop-shadow-md"
              />
            </span>
          ))}
        </div>
      </div>

      {/* Info Details Container */}
      <div className="px-6 md:px-12 pb-16 text-base md:text-lg lg:text-xl opacity-80 flex flex-col gap-4 max-w-2xl self-center md:self-start">
        <p className="contact-info flex items-center justify-center md:justify-start gap-3">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=manthansuhagiya028@gmail.com" className="hover:text-[#D3FD50] transition-colors flex items-center gap-2">
            <SiGmail className="text-lg" /> MANTHAN@M72.ca
          </a>
        </p>
        <p className="contact-info flex items-center justify-center md:justify-start gap-3">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=manthansuhagiya028@gmail.com" className="hover:text-[#D3FD50] transition-colors flex items-center gap-2">
            <SiGmail className="text-lg" /> Manthansuhagiya028@gmail.com
          </a>
        </p>
        <p className="contact-info flex items-center justify-center md:justify-start gap-3">
          <a href="tel:+917990657232" className="hover:text-[#D3FD50] transition-colors flex items-center gap-2">
            <BsTelephone className="text-lg" /> +91 79906 57237
          </a>
        </p>
        <p className="contact-info flex items-center justify-center md:justify-start gap-3 hover:text-[#D3FD50] transition-colors">
          <FaCanadianMapleLeaf className="text-lg text-red-500" /> Montréal, Canada
        </p>
        <p className="contact-info flex items-center justify-center md:justify-start gap-3 mt-2">
          <a
            href="https://www.google.com/maps?q=525+Av.+Viger+O,+Montréal,+QC+H2Z+1G6,+Canada"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#D3FD50] hover:underline underline-offset-4 flex items-center gap-2"
          >
            <SiGooglemaps className="text-lg text-green-500" /> 525 Av. Viger O, Montréal, QC H2Z 1G6, Canada
          </a>
        </p>
      </div>

      <Footer />
    </section>
  );
};

export default Contact;
