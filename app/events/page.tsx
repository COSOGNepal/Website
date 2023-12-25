"use client";

import Event from "./_components/Event"
import getEvents from "./getEvents"
import { Tevent } from "./type";
import { useEffect, useRef, useState } from "react"

export default function EventsPage() {
    const [events, setEvents] = useState<Tevent[]>([]);
    const dates: string[] = events.map((event) => (event.date))
    const [currentDate, setCurrentDate] = useState<string>("");
    const [activeBarHeight, setActiveBarHeight] = useState<number>(0)
    const previousScrollY = useRef(0)
    const events_container = useRef<HTMLDivElement | null>(null)
    const activeBarHeightPerEvent = 100 / events.length;

    useEffect(() => {
        (async () => {
            try {
                const events = await getEvents();
                setEvents(events)
            }
            catch (e) {
                console.log("Sorry, something went wrong while getting events.", e)
            }
        })()
    }, [])

    useEffect(() => {
        const scrollAction = () => {
            let currentScrollY = window.scrollY;
            if (!events_container.current) return
            const totalScrollHeight = (((events_container.current.childNodes[0]) as HTMLDivElement).getBoundingClientRect().height);
            const onePercent = (activeBarHeightPerEvent / totalScrollHeight) * events.length / 2;

            if (currentScrollY > previousScrollY.current) {
                // moving down 
                setActiveBarHeight((currentActiveBarHeight) => {
                    if (currentActiveBarHeight > 90) return currentActiveBarHeight
                    return currentActiveBarHeight + onePercent
                })
            }
            else {
                setActiveBarHeight((currentActiveBarHeight) => {
                    if (currentActiveBarHeight < 5) return currentActiveBarHeight
                    return currentActiveBarHeight - onePercent
                })
            }
            previousScrollY.current = currentScrollY
        };
        if (events.length > 0)
            window.addEventListener("scroll", scrollAction)
        return () => {
            window.removeEventListener("scroll", scrollAction)
        }
    }, [dates])

    return (
        <section className={`mt-section px-standard flex max-w-[1400px] w-full m-auto space-x-standard 
                             flex-col items-center justify-between relative xl:static xl:items-start xl:justify-center xl:flex-row`}>
            <div className="events space-y-block" ref={events_container}>
                {
                    events.map((event, index) => {
                        return <Event
                            data={event}
                            key={index}
                            index={index}
                            states={{ setCurrentDate, setActiveBarHeight }}
                            activeBarHeightPerEvent={activeBarHeightPerEvent} />
                    })
                }
            </div>
            <div className={`slider_container min-w-max p-standard flex flex-col items-baseline text-sub-para font-normal
                             text-black-mid sticky rotate-90 h-[90vw] w-[20px] xl:space-y-standard xl:items-center 
                             xl:rotate-0 xl:top-section xl:h-[90vh] xl:w-[200px] bg-red-300`}>
                <div className="start_time -rotate-90 xl:rotate-0">
                    {dates[0]}
                </div>
                <div className="slider relative h-[90%] top-0 w-full left-1/2">
                    <div className="line h-full w-[2px] bg-gray-dark"></div>
                    <div className="active_container h-max w-full">
                        <div className="line_active w-[10px] bg-primary absolute top-0 left-[-3px] rounded-[4px]"
                            style={{ height: `${activeBarHeight}%` }}></div>
                        <div className="flex w-max space-x-small absolute left-[-7.95px]" style={{ top: `${activeBarHeight - 0.5}%` }}>
                            <div className="ball w-[20px] h-[20px] rounded-[10px] bg-primary"></div>
                            <div className="current_date font-bold -rotate-90 xl:rotate-0 -mt-section">
                                {currentDate}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="end_time -rotate-90 xl:rotate-0">
                    {dates[dates.length - 1]}
                </div>
            </div>
        </section>
    )
}
