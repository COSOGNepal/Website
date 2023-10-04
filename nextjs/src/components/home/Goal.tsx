import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from 'framer-motion'

export type TgoalPosition = {
    x: number,
    y: number,
    responsive?: {
        breakPoint: number,
        x: number,
        y: number
    }[]
}

type TgoalProps = {
    index: number,
    title: string,
    desc: string,
    position: TgoalPosition
}

type TfinalGoalPosition = Omit<TgoalPosition, "responsive">


const Goal = ({ index, title, desc, position }: TgoalProps) => {
    const [finalGoalPosition, setFinalGoalPosition] = useState<TfinalGoalPosition>({
        x: position.x,
        y: position.y
    });

    const goalConRef = useRef<HTMLDivElement | null>(null);

    const makeResponsive = () => {
        if (!goalConRef.current || !position.responsive || position.responsive.length === 0) return;

        goalConRef.current.style.top = `${position.y}%`;
        goalConRef.current.style.left = `${position.x}%`;

        setFinalGoalPosition({
            x: position.x,
            y: position.y,
        })

        position.responsive.forEach((screen) => {
            const size = screen.breakPoint;
            if (!matches(size) || !goalConRef.current) return;

            goalConRef.current.style.top = `${screen.y}%`;
            goalConRef.current.style.left = `${screen.x}%`;

            setFinalGoalPosition({
                x: screen.x,
                y: screen.y,
            })
        })
    }
    const matches = (size: number): boolean => {
        if (!goalConRef.current) return false;
        const query = `(max-width: ${size}px)`
        return window.matchMedia(query).matches;
    }

    const { scrollYProgress } = useScroll({
        target: goalConRef,
        offset: ["start end", "1 0.8"]
    });

    const animatedGoalPosition = {
        x: useTransform(scrollYProgress, [1, 0], [0, 1]).get() || 0
    }

    useEffect(() => {
        makeResponsive();
        window.addEventListener("resize", makeResponsive);

        return () => {
            window.removeEventListener("resize", makeResponsive)
        }
    }, [])

    return (
        <motion.div
            className={`w-[500px] flex rounded-md bg-white shadow-goals
                    h-[150px] overflow-hidden ${index % 2 !== 0 && 'flex-row-reverse'} 
                    max-xl:scale-75 max-[880px]:scale-100 min-[880px]:absolute min-[880px]:my-[20px] mx-auto`}
            style={{
                left: `${finalGoalPosition.x}%`,
                top: `${finalGoalPosition.y}%`,
                marginLeft: index % 2 === 0 ? `${-(100 - finalGoalPosition.x) * animatedGoalPosition.x}%` : `${finalGoalPosition.x * animatedGoalPosition.x}%`
            }}
            ref={goalConRef}
        >
            <div className="flex-1 p-[32px]">
                <h1 className="text-main-txt font-bold text-heading ">
                    {title}
                </h1>
                <p className="text-sec-txt font-normal text-small">
                    {desc}
                </p>
            </div>
            <div className="w-[120px] h-full bg-[#EDEDED] flex justify-center items-center">
                <h1 className="text-white text-huge font-bold">
                    0{index + 1}
                </h1>
            </div>
        </motion.div >
    )
}

export default Goal;
