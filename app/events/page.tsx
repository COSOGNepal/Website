import Event from "./Event";

export default function EventsPage() {
    return (
        <section className="mt-section px-block flex justify-between max-w-[1400px] m-auto">
            <div className="events space-y-block">
                <Event />
                <Event />
                <Event />
            </div>
            <div className="slider max-w-[300px] min-w-[250px] min-h-[500px] max-h-screen bg-black-light">


            </div>

        </section>
    )

}
