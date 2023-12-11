import SectionTitle from "@/components/SectionTitle";
import React from "react";
import getEvents from "../events/getEvents"

const Events = async () => {
    const EventsData = await getEvents({count: 4});
    console.log(EventsData)
    return (
        <main className="px-block w-screen mx-auto space-y-block">
            <SectionTitle title="Events" viewall="/events" />
            {/* events listing */}
            <section className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 px-2 md:px-20 gap-4 bg-contain ">
                {EventsData.map((event, index) => (
                    <div
                        key={index}
                        style={{ backgroundImage: `url("${event.images[0]}")` }}
                        className={`relative aspect-[12/9] rounded-xl overflow-hidden bg-no-repeat bg-cover`}
                    >
                        <div className="absolute  text-white px-8 pb-2 md:pb-6 bottom-0 h-1/2 w-full bg-gradient-to-t from-dark-transparent to-transparent flex justify-end flex-col gap-3">
                            <span className="text-sm md:text-base font-light">
                                {event.date}
                            </span>
                            <div>
                            <h1 className="text-xl md:text-3xl font-bold">{event.title}</h1>
                            <div className="descriptions"> 
                            {
                            event.descriptions.map((description, index)=>{
                                    return (<p className="text-sm md:text-md font-medium" key={index}>
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
