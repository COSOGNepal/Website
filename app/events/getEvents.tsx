import type { Tevent } from "./type";
export default async function getEvents(): Promise<Tevent[]> {
    const events: Tevent[] = [
        {
            title: "Event title, is great",
            date: "17th Jun 2020",
            images: ["/images/Event.png", "/images/Event.png", "/images/Event.png"],
            descriptions: ["The event description is very importnant as it explains the event and this can be very long as well as very short as well.",
                "The event description is very importnant as it explains the event and this can be very long as well as very short as well.",
                "The event description is very importnant as it explains the event and this can be very long as well as very short as well."
            ]
        },
        {
            title: "Event title, is great",
            date: "17th Jun 2020",
            images: ["/images/Event.png", "/images/Event.png", "/images/Event.png"],
            descriptions: ["The event description is very importnant as it explains the event and this can be very long as well as very short as well.",
                "The event description is very importnant as it explains the event and this can be very long as well as very short as well.",
                "The event description is very importnant as it explains the event and this can be very long as well as very short as well."
            ]
        },
        {
            title: "Event title, is great",
            date: "17th Jun 2020",
            images: ["/images/Event.png", "/images/Event.png", "/images/Event.png"],
            descriptions: ["The event description is very importnant as it explains the event and this can be very long as well as very short as well.",
                "The event description is very importnant as it explains the event and this can be very long as well as very short as well.",
                "The event description is very importnant as it explains the event and this can be very long as well as very short as well."
            ]
        },
        {
            title: "Event title, is great",
            date: "17th Jun 2020",
            images: ["/images/Event.png", "/images/Event.png", "/images/Event.png"],
            descriptions: ["The event description is very importnant as it explains the event and this can be very long as well as very short as well.",
                "The event description is very importnant as it explains the event and this can be very long as well as very short as well.",
                "The event description is very importnant as it explains the event and this can be very long as well as very short as well."
            ]
        }

    ]
    return events;
}
