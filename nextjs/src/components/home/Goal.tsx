import { useEffect, useRef } from "react"

export interface goalPosition {
    x: string,
    y: string,
    responsive?: {
        breakPoint: number,
        x: string,
        y: string
    }[]
}

interface GoalProps {
    index: number,
    title: string,
    desc: string,
    position: goalPosition
}

const Goal = ({ index, title, desc, position }: GoalProps) => {
    const goalConRef = useRef<HTMLDivElement | null>(null);

    const makeResponsive = () => {
        if (!goalConRef.current || !position.responsive || position.responsive.length === 0) return;

        goalConRef.current.style.top = position.y;
        goalConRef.current.style.left = position.x;

        position.responsive.forEach((screen) => {
            const size = screen.breakPoint;
            if (!matches(size) || !goalConRef.current) return;

            goalConRef.current.style.top = screen.y;
            goalConRef.current.style.left = screen.x;
        })
    }
    const matches = (size: number): boolean => {
        if (!goalConRef.current) return false;
        const query = `(max-width: ${size}px)`
        return window.matchMedia(query).matches;
    }



    useEffect(() => {
        makeResponsive();
        window.addEventListener("resize", makeResponsive);

        return () => {
            window.removeEventListener("resize", makeResponsive)
        }

    }, [])
    return (
        <div
            className={`w-[500px] flex rounded-md bg-white shadow-goals
                    h-[150px] overflow-hidden ${index % 2 !== 0 && 'flex-row-reverse'} 
                    max-xl:scale-75 max-[880px]:scale-100 min-[880px]:absolute max-[880px]:my-[20px] mx-auto`}
            style={{
                top: position.y,
                left: position.x,
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
        </div >)
}

export default Goal;
