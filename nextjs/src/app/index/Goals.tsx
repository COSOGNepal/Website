"use client";

import React, { useEffect, useRef, useState } from "react";
import { Goal } from "@/components/home";
import { SectionTitle } from "@/components/global";
import { goalPosition } from "@/components/home/Goal";
import { GoalsArrow } from "@/utils/svgs";

const goalsPosition: goalPosition[] = [
    {
        x: "22%",
        y: "10%",
        responsive: [
            {
                breakPoint: 1500,
                x: "22%",
                y: "15%"
            },
            {
                breakPoint: 1280,
                x: "5%",
                y: "12%"
            }
        ]
    },
    {
        x: "60%",
        y: "30%",
        responsive: [
            {
                breakPoint: 1280,
                x: "50%",
                y: "27%"
            }
        ]
    },
    {
        x: "4%",
        y: "45%",
        responsive: [
            {
                breakPoint: 1280,
                x: "-2%",
                y: "41%"
            }
        ]
    },
    {
        x: "45%",
        y: "70%",
        responsive: [
            {
                breakPoint: 1280,
                x: "41%",
                y: "56%"
            }
        ]
    },
    {
        x: "10px",
        y: "90%",
        responsive: [

            {
                breakPoint: 1280,
                x: "-5%",
                y: "73%"
            }, {
                breakPoint: 980,
                x: "-5%",
                y: "70%"
            },
        ]
    }

]

export default function Goals() {
    const sectionRef = useRef<HTMLElement | null>(null)

    const [scrollPercent, setScrollPercent] = useState<number>(0);

    useEffect(() => {
        const scrollTracker = () => {
            if (!sectionRef.current) return

            const section = sectionRef.current;
            const totalScroll = section.clientHeight;
            const currentScroll = scrollY + (section.clientHeight / 2) - section.offsetTop;

            const progress = currentScroll / totalScroll

            setScrollPercent(progress)
        }
        window.addEventListener("scroll", scrollTracker)
        return () => {
            removeEventListener("scroll", scrollTracker)
        }
    }, [])
    return (
        <section
            ref={sectionRef}
            className="h-screen bg-white w-full relative p-[20px]">
            <SectionTitle title="Main Goals" />

            <GoalsArrow scrollPercent={scrollPercent} />
            {
                Array(5).fill("").map((_, i) => {
                    return (
                        <Goal
                            key={i}
                            index={i}
                            title="Testing the goals"
                            desc="This is the desccription it can be long as well"
                            position={goalsPosition[i]} />
                    )
                })
            }
        </section>
    )
}

