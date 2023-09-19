import React, { useEffect, useRef } from "react";
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


    useEffect(() => {
        if (isInView) {
            animate(membersCount, 20, { duration: 4 });
            animate(projectsCount, 10, { duration: 2 });
            animate(eventsCount, 15, { duration: 3 });
        }
    }, [isInView]);

    return (
        <section
            ref={NumbersRef}
            className="grid grid-cols-3 bg-dark-pri py-[150px] items-center justify-items-center mt-[150px]"
        >
            <div className="flex flex-col items-center">
                <div className="text-white flex text-huge max-md:text-heading text-center font-extrabold">
                    <motion.h1>{projects}</motion.h1>+
                </div>
                <p className="text-text-grey-sec text-lg font-normal max-md:text-small">
                    Open source projects
                </p>
            </div>
            <div className="flex flex-col items-center">
                <div className="text-white flex text-huge max-md:text-heading text-center font-extrabold">
                    <motion.h1>{members}</motion.h1>+
                </div>
                <p className="text-text-grey-sec text-lg font-normal max-md:text-small">
                    Community Leaders
                </p>
            </div>
            <div className="flex flex-col items-center">
                <div className="text-white flex text-huge text-center max-md:text-heading font-extrabold">
                    <motion.h1>{events}</motion.h1>+
                </div>
                <p className="text-text-grey-sec text-lg font-normal max-md:text-small">
                    Social Good Events
                </p>
            </div>
        </section>
    );
};

export default Numbers;
