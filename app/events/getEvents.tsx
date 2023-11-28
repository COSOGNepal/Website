import type { Tevent } from "./type";
import allevents from "@/data/events.json"

export default async function getEvents(): Promise<Tevent[]> {
    const events: Tevent[] = allevents.map(event => ({
        ...event,
        descriptions: [event.description]
    }));
    return events;
}
