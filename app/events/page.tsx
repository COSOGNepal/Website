"use client";

import Event from "./_components/Event"
import getEvents from "./getEvents"
import { Tevent } from "./type";
import { useEffect, useState } from "react"

export default function EventsPage() {
    const [events, setEvents] = useState<Tevent[]>([]);
    const dates: string[] = events.map((event) => (event.date))

    const [currentDate, setCurrentDate] = useState<string>("");

    useEffect(() => {
        (async () => {
            setEvents(await getEvents())
        })()

    }, [])
    useEffect(() => { setCurrentDate(dates[0]) }, [dates])

    return (
        <section className="mt-section px-block flex justify-between max-w-[1400px] w-[90%] m-auto">
            <div className="events space-y-block">
                {
                    events.map((event, index) => {
                        return <Event data={event} key={index} />
                    })
                }
            </div>
            <div className="slider_container max-w-[400px] h-[80vh] p-standard flex flex-col justify-between items-center text-sub-para font-normal text-black-mid sticky top-block ">
                <div className="start_time">
                    {dates[0]}
                </div>
                <div className="slider relative h-[90%]  top-0">
                    <div className="line h-full w-[2px] bg-gray-dark"></div>
                    <div className="active_container h-max w-full">
                        <div className="line_active h-[50px] w-[10px] bg-primary absolute top-0 left-[-3px] rounded-[4px]"></div>
                        <div className="flex w-max space-x-small absolute top-[40px] left-[-7.95px]">
                            <div className="ball w-[20px] h-[20px] rounded-[10px] bg-primary"></div>
                            <div className="current_date font-bold">
                                {currentDate}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="end_time">
                    {dates[dates.length - 1]}
                </div>
            </div>

        </section>
    )

}
