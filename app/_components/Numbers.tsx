import img from "next/image";

type Tdata = { title: string; number: number; icon: string };

const NumbersData: Tdata[] = [
    { title: "Schools Reached", number: 30, icon: "/assets/School_logo.svg" },
    { title: "Districts Reached", number: 10, icon: "/assets/District_logo.svg" },
    { title: "Events Organized", number: 15, icon: "/assets/Events_logo.svg" },
    {
        title: "Students Impacted",
        number: 10000,
        icon: "/assets/Students_logo.svg",
    },
];

const Numbers = () => {
    return (
        <main className="w-full brk-1400:px-[calc(((100%-1400px)/2)+50px)] text-white bg-primary bg-[url('/assets/bgPattern.svg')] bg-cover bg-blend-multiply bg-fixed grid grid-cols-1 v-sm:grid-cols-2 gap-y-standard md:grid-cols-4 justify-center place-items-center p-standard md:p-block">
            {NumbersData.map((data, index) => {
                return (
                    <div
                        className="flex flex-row w-full items-center space-x-standard v-sm:flex-col v-sm:w-auto v-sm:items-center v-sm:space-y-small"
                        key={index}
                    >
                        <div className="w-14 v-sm-12 md:w-20 aspect-square relative">
                            <img src={data.icon} alt={data.title} />
                        </div>
                        <div className="text_context">
                            <h2 className="text-center text-sub-title font-bold v-sm:text-gray-bg v-sm:text-para v-sm:font-medium">
                                {data.title}
                            </h2>
                            <h1 className="text-gray-bg v-sm:text-center v-sm:text-title v-sm:font-bold">
                                {data.number}+
                            </h1>
                        </div>
                    </div>
                );
            })}
        </main>
    );
};

export default Numbers;
