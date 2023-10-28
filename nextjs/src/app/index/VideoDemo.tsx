import React, { useRef, useState } from "react";

type cursorModeTypes = "play" | "pause" | "hidden";

function VideoDemo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorMode, setCursor] = useState<cursorModeTypes>("play");

  const handleMouseMove = (e: React.MouseEvent<HTMLVideoElement, MouseEvent>) => {
    const clientX = e.clientX;
    const clientY = e.clientY;

    if (!cursorRef.current) return;

    cursorRef.current.style.top = `${clientY}px`;
    cursorRef.current.style.left = `${clientX}px`;
  };

  const handleMouseLeave = () => {
    setCursor("hidden");
  };

  // pausing the video when out of view.

  return (
    <div className="w-full ">
      <video
        ref={videoRef}
        src="/video.mp4"
        className="w-screen h-auto cursor-none"
        muted
        onMouseOver={(e) => handleMouseMove(e)}
        onMouseLeave={handleMouseLeave}
        onPlay={() => {
          setCursor("play");
        }}
        onPause={() => {
          setCursor("pause");
        }}
        loop
      ></video>

      <div
        ref={cursorRef}
        className="pointer-events-none cursor-none transition-all absolute"
      >
        {cursorMode === "hidden" ? null : cursorMode === "play" ? (
          <></>
        ) : (
          <> </>
        )}
      </div>
    </div>
  );
}

export default VideoDemo;
