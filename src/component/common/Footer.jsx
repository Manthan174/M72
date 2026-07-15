import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [time, setTime] = useState('');
    
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'America/Toronto', 
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      const formattedTime = now.toLocaleTimeString('en-CA', options);
      setTime(formattedTime);
    };
  
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-black text-white lg:px-12 pt-16 pb-6 border-t border-white/10 relative z-10 font-[font1]">
      <div className="flex items-center justify-between flex-wrap gap-6 px-4">
        <div className="flex gap-4">
          {['FB', 'IG', 'IN', 'BE'].map((item) => (
            <div
              key={item}
              className="w-12 h-12 lg:w-16 lg:h-16 border border-white/40 rounded-full flex items-center justify-center
                        text-base lg:text-xl font-semibold cursor-pointer backdrop-blur-sm bg-white/5
                        hover:bg-white hover:text-black hover:border-white transition-all duration-300 shadow-lg hover:shadow-white/20"
            >
              {item}
            </div>
          ))}
        </div>
        <Link to='/contact'>
          <button 
            className="border border-white/40 rounded-full px-8 py-3 lg:px-10 lg:py-4 text-base lg:text-xl font-semibold
                        backdrop-blur-sm bg-white/5 hover:bg-white hover:text-black hover:border-white transition-all duration-300 shadow-lg hover:shadow-white/20 group"
          >
            CONTACT <span className="ml-2 inline-block transition-transform duration-300 group-hover:scale-125">♥</span>
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
          className="hover:text-[#D3FD50] transition-colors font-semibold uppercase tracking-wider flex items-center gap-1 group"
        >
          RETOUR EN HAUT <span className="transition-transform duration-300 group-hover:-translate-y-1">↑</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
