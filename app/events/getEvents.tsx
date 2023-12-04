import type { Tevent } from "./type";

import eventsData from "@/data/events.json"

export default async function getEvents(): Promise<Tevent[] | Error> {
    try {
        if (!eventsData) throw new Error("Invalid json file");
        if (eventsData.length < 1) throw new Error("Json file cannot be empty");

        return eventsData.reverse();
    }
    catch (e) {
        console.log(e)
        throw new Error(e as string)
    }
}
