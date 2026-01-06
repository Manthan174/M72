import React from "react";
import Video1 from '/video.mp4'

const Video = () => {
  return (
    <div className="h-full w-full">
      <video
        className="h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src={Video1}
      ></video>
    </div>
  );
};

export default Video;
