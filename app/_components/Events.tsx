import SectionTitle from "@/components/SectionTitle";
import React from "react";
import getEvents from "../events/getEvents"

const Events = async () => {
    const EventsData = await getEvents();
    return (
        <main className="px-block w-screen mx-auto space-y-block">
            <SectionTitle title="Events" viewall="/events" />
            {/* events listing */}
            <section className="w-full max-w-[1400px] mx-auto grid grid-cols-auto-fit-600 grid-rows-2-400 gap-small justify-center">
                {EventsData.map((event, index) => (
                    <div
                        key={index}
                        style={{ backgroundImage: `url("${event.images[0]}")` }}
                        className={`relative rounded-[5px] overflow-hidden bg-no-repeat bg-cover group`}
                    >
                        <div className="absolute text-white px-8 pb-2 md:pb-6 bottom-0 h-1/2 w-full bg-gradient-to-t from-[rgba(0,0,0,0.8)] group-hover:from-30% flex justify-end flex-col">
                            <span className="text-info font-medium">
                                {event.date}
                            </span>
                            <div className="mb-[-10px] group-hover:mb-[0] transition-all ease-in-out duration-250">
                                <h1 className="text-title font-bold">{event.title}</h1>
                                <div className="descriptions space-y-v-small opacity-0 absolute top-[200px] group-hover:opacity-100 group-hover:top-[0px] group-hover:static">
                                    {
                                        event.descriptions.map((description, index) => {
                                            return (<p className="text-sub-para font-medium" key={index}>
                                                {description}
                                            </p>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </main>
    );
};

export default Events;
