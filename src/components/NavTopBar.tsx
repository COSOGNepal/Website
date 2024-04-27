"use client";
import { CountDown } from "./CountDown"

type TEventNavTopBar = {
    title: string,
    description: string,
    eventData: string,
    countDown?: boolean,
    CTA?: {
        status: boolean,
        label: string,
    },
    EventLink?: string
}
export const EventNavTopBar = (data: TEventNavTopBar) => {
    return <nav className="container fixed top-0 left-0">
        <div className="detailsCon">
            <div className="textContent">
                <h1 className="titleCon">
                    {data.title}
                </h1>
                <p className="description">
                    {data.description}
                </p>
            </div>
            {
                data?.countDown && <CountDown date={data.eventData} className="" />
            }

        </div>
        {
            data?.CTA?.status &&
            <button className="cta">
                {data?.CTA?.label}
            </button>
        }
    </nav>

}

