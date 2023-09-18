import React, { useEffect, ref, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";

const Numbers = () => {
  const membersCount = useMotionValue(0);
  const projectsCount = useMotionValue(0);
  const eventsCount = useMotionValue(0);
  const members = useTransform(membersCount, Math.round);
  const projects = useTransform(projectsCount, Math.round);
  const events = useTransform(eventsCount, Math.round);
  const NumbersRef = useRef(null);
  const isInView = useInView(NumbersRef);
  window.onscroll = () => {
    console.log(isInView);
  };
  useEffect(() => {
    if (isInView) {
      const animation1 = animate(membersCount, 20, { duration: 4 });
      const animation2 = animate(projectsCount, 10, { duration: 2 });
      const animation3 = animate(eventsCount, 15, { duration: 3 });
      //animation duration kinda sucks
    }
  }, [isInView]);

  return (
    <main
      ref={NumbersRef}
      className="grid grid-cols-1 gap-y-6 md:grid-cols-3 bg-dark-pri py-12 h-fit md:h-64 items-center justify-items-center"
    >
      <div>
        <div className="text-white flex text-6xl text-center font-extrabold">
          {" "}
          <motion.h1>{projects}</motion.h1>+
        </div>

        <p className="text-text-grey-sec text-lg font-normal">
          Open source projects
        </p>
      </div>
      <div>
        <div className="text-white flex text-6xl text-center font-extrabold">
          {" "}
          <motion.h1>{members}</motion.h1>+
        </div>
        <p className="text-text-grey-sec text-lg font-normal">
          Community Leaders{" "}
        </p>
      </div>
      <div>
        <div className="text-white flex text-6xl text-center font-extrabold">
          {" "}
          <motion.h1>{events}</motion.h1>+
        </div>{" "}
        <p className="text-text-grey-sec text-lg font-normal">
          Social Good Events{" "}
        </p>
      </div>
    </main>
  );
};

export default Numbers;
