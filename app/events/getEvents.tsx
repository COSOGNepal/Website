import type { Tevent } from "./type";

import eventsData from "@/data/events.json"

// returns the number of events from the events file in a sorted form.
export default async function getEvents(data: { numberOfEvents?: number } = { numberOfEvents: 0 }): Promise<Tevent[]> {
    try {
        const count = data.numberOfEvents;
        if (!eventsData) throw new Error("Invalid json file");
        if (eventsData.length < 1) throw new Error("Json file cannot be empty");

        //TODO: Short according to the date, in decending order.
        //using quick short to sort the data according to date;
        if (!count)
            return eventsData.reverse();

        const shortedEvents = eventsData
            .reverse()
            .filter((_, index) => {
                return (index + 1) <= count
            })
        return shortedEvents
    }
    catch (e) {
        console.log(e)
        throw new Error(e as string)
    }
}
