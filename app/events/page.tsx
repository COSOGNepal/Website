import Event from "./Event";

export default function EventsPage() {
    return (
        <section className="mt-section px-block flex justify-between max-w-[1400px] w-[90%] m-auto">
            <div className="events space-y-block">
                <Event />
                <Event />
                <Event />
            </div>
            <div className="slider_container max-w-[400px] h-[80vh] p-standard flex flex-col justify-between items-center text-sub-para font-normal text-black-mid">
                <div className="start_time">
                    17<sup>th </sup> Jan 2021
                </div>
                <div className="slider relative h-[90%]">
                    <div className="line h-full w-[2px] bg-gray-dark"></div>
                    <div className="active_container h-max w-full">
                        <div className="line_active h-[50px] w-[10px] bg-primary absolute top-0 left-[-3px] rounded-[4px]"></div>
                        <div className="flex w-max space-x-small absolute top-[40px] left-[-7.95px]">
                            <div className="ball w-[20px] h-[20px] rounded-[10px] bg-primary"></div>
                            <div className="current_date font-bold">
                                12<sup>th </sup> Dec 2022
                            </div>
                        </div>
                    </div>
                </div>
                <div className="end_time">
                    18<sup>th </sup> Dec 2023
                </div>
            </div>

        </section>
    )

}
