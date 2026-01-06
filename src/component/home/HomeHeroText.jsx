import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[font1] lg:pt-5 pt-84 h-screen w-screen text-center">
      <div className="lg:text-[9.5vw] text-[12vw] uppercase lg:leading-[8vw] leading-[10vw] justify-center flex items-center">L'étincelle </div>
      <div className="lg:text-[9.5vw] text-[12vw] uppercase lg:leading-[8vw] leading-[10vw] justify-center flex items-center">
                qui
        <div className="lg:h-[7vw] lg:w-[16vw] h-[9vw] w-[20vw] rounded-full lg:-mt-8 -mt-2 overflow-hidden">
          <Video />
        </div>
        génère
      </div>
      <div className="lg:text-[9.5vw] text-[12vw] uppercase lg:leading-[8vw] leading-[10vw] justify-center flex items-center">la créativité</div>
    </div>
  );
};

export default HomeHeroText;
