import React, { useRef, useState } from "react";

type cursorModeTypes = "play" | "pause" | "hidden";
function VideoDemo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorMode, setCursor] = useState<cursorModeTypes>("play");

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cursorRef.current || !videoRef.current) return;

    const clientX = e.pageX;
    const clientY = e.pageY;

    cursorRef.current.style.transform = `translate(${clientX}px, ${clientY}px)`
    console.log(`translate(${clientX}px, ${clientY}px)`)

  };
  const handleMouseLeave = () => {
    setCursor("hidden");
  };

  // pausing the video when out of view.

console.log(cursorMode)
  return (
    <div className="w-full ">
      <video
        ref={videoRef}
        src="/video.mp4"
        className="w-screen h-auto cursor-none "
        muted
        onMouseMove={(e) => handleMouseMove(e)} 
        onMouseLeave={handleMouseLeave}
        onPlay={() => {
          setCursor("play");
        }}
        onPause={() => {
          setCursor("pause");
        }}
        onMouseEnter={()=>{setCursor(videoRef.current? videoRef.current.paused?'pause': 'play' : "hidden")}}
        loop
      >
      </video>

      <div
        ref={cursorRef}
        className={`pointer-events-none cursor-none  h-[50px] w-[50px] bg-white absolute top-0 left-0 rounded-full flex justify-center items-center ${cursorMode === "hidden" ? 'opacity-0' : 'opacity-100'}`}
      >
        {cursorMode === "hidden" ? null : cursorMode === "play" ? (
          <> 
<svg width="16.5" height="20" viewBox="0 0 33 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M33 20L-1.79446e-06 39.0526L-1.28837e-07 0.94744L33 20Z" fill="#030222"/>
</svg>
          </>

        ) : (
          <> 
<svg width="16.5" height="20" viewBox="0 0 17 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 -7.43094e-07L2.46316e-07 38L5.99996 38.1051L5.99996 0.0525603L0 -7.43094e-07Z" fill="#030222"/>
<path d="M11 0.0525603L17 0L17 38L11 38.0526L11 0.0525603Z" fill="#030222"/>
</svg>
          </>

        )}
      </div>
    </div>
  );
}

export default VideoDemo;
