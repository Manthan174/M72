import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Logo from '../../assets/Logo.png'
import { SiGmail } from "react-icons/si";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { SiGooglemaps } from "react-icons/si";



const Contact = () => {
  const rowsRef = useRef([]);

  useGSAP(() => {
    rowsRef.current.forEach((row, index) => {
      const distance = row.scrollWidth / 2;

      gsap.fromTo(
        row,
        { x: 0 },
        {
          x: index % 2 === 0 ? -distance : distance,
          duration: 25,
          ease: "none",
          repeat: -1,
          modifiers: {
            x: (x) => `${parseFloat(x) % distance}px`,
          },
        }
      );
    });
  }, []);

  return (
    <section className="min-h-screen bg-black text-white overflow-hidden font-[font1]">
      
     
      <div className="px-6 pt-24 pb-15 font-[font1]">
        <h1 className="uppercase font- leading-[0.85] text-center
          text-[12vw] md:text-[8vw]">
          Pour <br/>Parler De
          <br /> Votre
          <br />Projet
        </h1>

        <p className="mt-6 text-sm md:text-base opacity-70 font-[font1] lg:text-left text-center">
          Dans un écran ou un bureau.<br />
          Chez vous. Chez nous. Partout.
        </p>
        <a
  href="https://www.google.com/maps?q=525+Av.+Viger+O,+Montréal,+QC+H2Z+1G6,+Canada"
  target="_blank"
  rel="noopener noreferrer"
  className="text-sm opacity-70 hover:opacity-100 transition-opacity hover:text-[#D3FD50]
  text-sm  hover:underline underline-offset-4 lg:right-2  fixed lg:bottom-111 lg:gap-2 
  lg:pt-0 pt-3.5 lg:text-center text-center inline-flex"
>
  <SiGooglemaps/>525 Av. Viger O, Montréal, QC H2Z 1G6, Canada
</a>

      </div>

      <div className="border-t border-white overflow-hidden">
        {[0].map((_, i) => (
          <div
            key={i}
            className="relative w-full overflow-hidden"
          >
            <div
              ref={(el) => (rowsRef.current[i] = el)}
              className="flex w-max items-center whitespace-nowrap gap-1 py-6
                text-[10vw] md:text-[6vw] uppercase font-bold font-[font1] "
            >
              {[...Array(2)].map((_, dup) =>
                Array(4)
                  .fill("Manthan@M72.ca")
                  .map((text, index) => (
                    <span
                      key={`${dup}-${index}`}
                      className="flex items-center lg:gap-3 gap-1 lg:text-[8vw] text-4xl"
                    >
                      {text}
                      <img
                        src={Logo}
                        alt=""
                        className="w-32 h-15 rounded-all object-cover md:w-60 md:h-36 object-cover rounded-full object-cover"
                      />
                    </span>
                  ))
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="px-6 py-14 text-sm opacity-70">
        <p><a href="https://mail.google.com/mail/?view=cm&fs=1&to=manthansuhagiya028@gmail.com" className="opacity-100 hover:opacity-70 inline-flex"><SiGmail/>&nbsp;&nbsp;MANTHAN@M72.ca</a></p>
        <p><a href="https://mail.google.com/mail/?view=cm&fs=1&to=manthansuhagiya028@gmail.com" className="opacity-100 hover:opacity-70 inline-flex"><SiGmail/>&nbsp;&nbsp;Manthansuhagiya028@gmail.com</a></p>
        <p><a href="tel:+917990657232"
        className="opacity-100 hover:opacity-70 transition-opacity flex"
        ><BsTelephone />&nbsp;&nbsp;+91 79906 57237
          </a></p>
        <p className="inline-flex"><FaCanadianMapleLeaf />&nbsp;&nbsp;Montréal, Canada</p>
      </div>
    </section>
  );
};

export default Contact;
