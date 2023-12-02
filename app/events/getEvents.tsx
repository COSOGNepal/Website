import type { Tevent } from "./type";
import allEvents from "@/data/events.json"

export default async function getEvents(): Promise<Tevent[]> {
    const events: Tevent[] = allEvents.map(event => ({
        ...event,
        descriptions: event.description 
    })).reverse();
    return events;
}
