import { cn } from "@/lib/utils";

interface eventDescripterProps {
    eventTitle: string;
    description: string[];
    className?: {
        container?: string,
        paragraph?: string,
        paragraphContainer?: string,
        title?: string,
    }
}

const EventDescripter = (props: eventDescripterProps) => {
    return (
        <section
            className={cn(`about  space-y-5  snap-end bg-gray-bg py-block `, props.className?.container)} >
            <h1 className={cn(`heading text-2xl font-semibold `, props.className?.paragraph)}>
                {props.eventTitle}
            </h1>
            <div className={cn(`descirption text-black-mid space-y-2 `, props.className?.paragraphContainer)}>
                {
                    props.description.map((paragraph, index) => <p key={`description-para-${index}`} className={cn("", props.className?.paragraph)}>
                        {paragraph}
                    </p>
                    )
                }
            </div>
        </section>
    )
};

export default EventDescripter;

