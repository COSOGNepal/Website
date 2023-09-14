import React, { useRef, useState } from 'react'

type cursorModeTypes = "play" | "pause" | "hidden";
function VideoDemo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorMode, setCursor] =  useState<cursorModeTypes>("play");

  const handleMouseMove = (e: MouseEvent) =>{
    const pageX = e.pageX;
    const pageY = e.pageY;

    if(!cursorRef.current) return;

    cursorRef.current.style.top = `${pageY}px`;
    cursorRef.current.style.left = `${pageX}px`;

  }
  const handleMouseLeave = () =>{
  };
  const handleClick = () =>{
  };
console.log({cursorMode})
  // pausing the video when out of view.

  return (
    <div className='w-full '>
      <div ref={cursorRef} className="pointer-events-none cursor-none transition-all absolute top-0 left-0 bg-white h-[20px] w-[20px]">
        {
          cursorMode === "hidden" ? null
            :cursorMode === "play"?              
              <div > 

                <svg width="33" height="40" viewBox="0 0 33 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M33 20L-1.79446e-06 39.0526L-1.28837e-07 0.94744L33 20Z" fill="#030222"/>
                </svg>
              </div>
              :<>
                <div> 
                  <svg width="17" height="39" viewBox="0 0 17 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 -7.43094e-07L2.46316e-07 38L5.99996 38.1051L5.99996 0.0525603L0 -7.43094e-07Z" fill="#030222"/>
                    <path d="M11 0.0525603L17 0L17 38L11 38.0526L11 0.0525603Z" fill="#030222"/>
                  </svg>
                </div>

              </>
        } 
      </div>
      <video ref={videoRef} src="/video.mp4" className='w-screen h-auto cursor-none'  onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} onPlay={()=>{setCursor("pause")}} onPause={()=>{setCursor("play")}} onClick={handleClick}k muted loop></video>



    </div>
  )
}

export default VideoDemo
