"use client";
import { CountDown } from "./CountDown"

type TEventNavTopBar = {
    title: string,
    description: string,
    eventDate: string,
    countDown?: boolean,
    CTA?: {
        status: boolean,
        label: string,
    },
    EventLink?: string
}
export const EventNavTopBar = (data: TEventNavTopBar) => {
    return <nav className="bg-primary  w-full brk-1400:px-[calc((100%-1400px)/2)] p-standard  text-center">
        <div className="titleCon text-white ">
            <span >
                {data.title} &nbsp;
            </span>
            <a href={data.EventLink} className="underline">
                Learn More
            </a>
        </div>
        {
            data?.countDown && <CountDown date={data.eventDate} className="" />
        }
    </nav>
}

