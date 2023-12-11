import type { Tevent } from "./type";

import eventsData from "@/data/events.json"

export default async function getEvents(data:{count?: number} = 0): Promise<Tevent[]> {
    try {
        const count = data.count;
        if (!eventsData) throw new Error("Invalid json file");
        if (eventsData.length < 1) throw new Error("Json file cannot be empty");
        
        if(!count)
            return eventsData.reverse();
        const shortedEvents = eventsData
                                .reverse()
                                .filter((event, index) => {
                                    return (index + 1) <= count 
                                    })
        return shortedEvents
    }
    catch (e) {
        console.log(e)
        throw new Error(e as string)
    }
}
