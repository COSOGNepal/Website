'use client'

import Image from "next/image"
import type { Tevent } from "../type";
import React, { useEffect, useRef, useState } from "react";

type Tparam =
    {
        data: Tevent,
        index: number,
        states: {
            setCurrentDate: React.Dispatch<React.SetStateAction<string>>,
            setActiveBarHeight: React.Dispatch<React.SetStateAction<number>>
        }
        , activeBarHeightPerEvent: number
    }

export default function Event({ data, index, states, activeBarHeightPerEvent }: Tparam) {
    const { title, images, date, descriptions } = data;
    const main_container = useRef<HTMLDivElement | null>(null);
    const [bottomOffset, setBottomOffset] = useState<number>(0)
    const visibleActions = () => {
        states.setCurrentDate(date)
        if (index === 0) return states.setActiveBarHeight(index * activeBarHeightPerEvent)
        states.setActiveBarHeight((index + 1) * activeBarHeightPerEvent)
    }
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) visibleActions()
    }, {
        rootMargin: '0px',
        threshold: 0.90
    });

    useEffect(() => {
        if (!main_container.current) return
        observer.observe(main_container.current)
    }, [])

    return (
        <div className="main_container max-w-[680px] h-max flex flex-col border-white-light border-2" ref={main_container}>
            <div className="imagesContainer grid grid-cols-2 grid-rows-2-250 gap-small w-full">
                <div className="image col-span-2 overflow-hidden relative group cursor-pointer">
                    <Image src={images[0]} height={260} width={680} alt="event" className="event w-full h-max absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover:scale-105  transition-all ease-in-out duration-150 " />
                </div>
                <div className="image group overflow-hidden cursor-pointer h-max">
                    <Image src={images[1]} height={260} width={680} alt="event" className="image group-hover:scale-105  transition-all ease-in-out duration-150" />
                </div>
                <div className="image overflow-hidden group cursor-pointer h-max">
                    <Image src={images[2]} height={260} width={680} alt="event" className="image group-hover:scale-105  transition-all ease-in-out duration-150" />
                </div>
            </div >
            <div className="desc_container h-auto w-full p-standard">
                <div className="date font-normal text-black-mid text-sub-para">
                    {date}
                </div>
                <h1 className="title font-bold text-black-dark text-sub-title">
                    {title}
                </h1>
                <div className="desc text-black-mid text-para mt-small space-y-v-small">
                    {
                        descriptions.map((description, index) => {
                            return (<p key={index}> {description} </p>)
                        })
                    }
                </div>
            </div>
        </div>
    )
}
