import { quickSortByDate } from "@/lib/sortings";
import type { Tevent } from "./type";
import { parse, format } from "date-fns"

import eventsData from "@/data/events.json"

// returns the number of events from the events file in a sorted form.
export default async function getEvents({ numberOfEvents, order }: { numberOfEvents: number, order: "Asc" | "Des" } = { numberOfEvents: 0, order: "Des" }): Promise<Tevent[]> {
    try {
        if (!eventsData) throw new Error("Invalid json file");
        if (eventsData.length < 1) throw new Error("Cannot get Events since there are none present in the Events json file.");

        let dataToSort = eventsData;
        if (numberOfEvents)
            dataToSort = eventsData.slice(0, numberOfEvents - 1);

        // converting the date to actual date and then back.
        const eventsWithActualData = dataToSort.map(data => ({
            ...data,
            date: parse(data.date, "do MMMM yyyy", new Date())
        }))

        const sortedEvents = quickSortByDate<Tevent>({
            data: eventsWithActualData,
            sortKey: "date",
            direction: order
        }).map((event) => ({
            ...event,
            date: format(event.date, "do MMMM yyyy")
        }));

        return sortedEvents;
    }
    catch (e) {
        console.log(e)
        throw new Error(e as string)
    }
}
