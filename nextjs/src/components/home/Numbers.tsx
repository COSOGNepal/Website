import React, { useEffect, useRef } from "react";
import increasedNumber from "./../../utils/increaseNumbers";

const Numbers = () => {
  const NumbersRef = useRef() || null;
  let callback = (entries, observer) => {
    entries.forEach((entry) => {
      console.log(entry);
      // Each entry describes an intersection change for one observed
      // target element:
      //   entry.boundingClientRect
      //   entry.intersectionRatio
      //   entry.intersectionRect
      //   entry.isIntersecting
      //   entry.rootBounds
      //   entry.target
      //   entry.time
    });
  };
  useEffect(() => {
    let options = {
      root: document.querySelector("body"),
      rootMargin: "20px",
      threshold: 1.0,
    };

    let observer = new IntersectionObserver(callback, options);
    observer.observe(NumbersRef.current);
    console.log(NumbersRef.current);
  }, []);
  return (
    <main
      ref={NumbersRef}
      className="grid grid-cols-1 gap-y-6 md:grid-cols-3 bg-dark-pri py-12 h-fit md:h-64 items-center justify-items-center"
    >
      <div>
        <h2 className="text-white text-6xl text-center font-extrabold">
          {increasedNumber(30)}+
        </h2>
        <p className="text-text-grey-sec text-lg font-normal">
          Open source projects
        </p>
      </div>
      <div>
        <h2 className="text-white text-6xl text-center font-extrabold">10+</h2>
        <p className="text-text-grey-sec text-lg font-normal">
          Community Members{" "}
        </p>
      </div>
      <div>
        <h2 className="text-white text-6xl text-center font-extrabold">10+</h2>
        <p className="text-text-grey-sec text-lg font-normal">
          Social Good Events{" "}
        </p>
      </div>
    </main>
  );
};

export default Numbers;
