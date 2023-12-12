import Image from "next/image";

type Tdata = { title: string, number: number, icon: string }

const NumbersData: Tdata[] = [
    { title: "Schools Reached", number: 20, icon: "/assets/School_logo.svg" },
    { title: "Districts Reached", number: 5, icon: "/assets/District_logo.svg" },
    { title: "Events Organized", number: 12, icon: "/assets/Events_logo.svg" },
    { title: "Students Impacted", number: 1000, icon: "/assets/Students_logo.svg" }
]

const Numbers = () => {
    return (
        <main className="h-72 text-white bg-primary bg-[url('/assets/bgPattern.svg')] bg-cover bg-blend-multiply my-24 grid grid-cols-2 sm:grid-cols-4 justify-center place-items-center">
            {
                NumbersData.map((data, index) => {
                    return (
                        <div className="flex flex-col items-center" key={index}>
                            <div className="w-12 sm:w-20 aspect-square relative">
                                <Image src={data.icon} fill alt={data.title} />
                            </div>
                            <h2 className="text-center text-md sm:text-xl font-light">
                                {data.title}
                            </h2>
                            <h1 className="text-center text-xl sm:text-3xl font-bold">{data.number}+</h1>
                        </div>

                    )

                })
            }
        </main>
    );
};

export default Numbers;
