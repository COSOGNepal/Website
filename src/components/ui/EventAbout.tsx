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
            className={`about  space-y-5  snap-end bg-gray-bg py-block ${props?.className?.container}`}
        >
            <h1 className={`heading text-2xl font-semibold ${props.className?.title}`}>
                {props.eventTitle}
            </h1>
            <div className={`descirption text-black-mid space-y-2 ${props.className?.paragraphContainer}`}>
                {
                    props.description.map((paragraph, index) => <p key={`description-para-${index}`} className={`${props.className?.paragraph}`}>
                        {paragraph}
                    </p>
                    )
                }
            </div>
        </section>
    )
};

export default EventDescripter;

