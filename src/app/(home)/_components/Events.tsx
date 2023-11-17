import Link from "next/link";
import React from "react";

const Events = () => {
  const EventData = [
    {
      id: 1,
      date: "14 march 2023",
      title: "Fueling the Spark:",
      description: "Igniting Computer Science Clubs Through CoSoG!",
      location: "Nepal, Asia",
      imgPath: "/images/Event1.jpg",
    },
    {
      id: 2,

      date: "14 march 2023",
      title: "Empowering High Schools",
      description: "We will create digital nepal... soon",
      location: "Nepal, Asia",
      imgPath: "/images/Event2.jpg",
    },
    {
      id: 3,

      date: "14 march 2023",
      title: "Empowering High Schools",
      description: "We will create digital nepal... soon",
      location: "Nepal, Asia",
      imgPath: "/images/Event3.jpg",
    },
    {
      id: 4,

      date: "14 march 2023",
      title: "Empowering High Schools",
      description: "We will create digital nepal... soon",
      location: "Nepal, Asia",
      imgPath: "/images/Event1.jpg",
    },
  ];
  return (
    <main className="px-5 w-screen mx-auto pt-16">
      <div className="flex mb-5 justify-between">
        <h2 className={"text-xl md:text-3xl text-faded font-normal "}>
          Events
        </h2>
        <h2 className={"text-base md:text-xl text-faded font-normal "}>
          <Link href={"/events"}> View All</Link>
        </h2>
      </div>
      {/* events listing */}
      <section className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 px-2 md:px-20 gap-4 bg-contain ">
        {EventData.map((data) => (
          <div
            key={data.id}
            style={{ backgroundImage: `url("${data.imgPath}")` }}
            className={`relative aspect-[12/9] rounded-xl overflow-hidden bg-no-repeat bg-cover`}
          >
            <div className="absolute  text-white px-8 pb-2 md:pb-6 bottom-0 h-1/2 w-full bg-gradient-to-t from-dark-transparent to-transparent flex justify-end flex-col gap-3">
              <span className="text-sm md:text-base font-light">
                {data.date}
              </span>
              <div>
                <h1 className="text-xl md:text-3xl font-bold">{data.title}</h1>
                <h2 className="text-sm md:text-md font-medium">
                  {data.description}{" "}
                </h2>
              </div>

              <h3 className="text-sm md:text-md font-normal">
                {data.location}{" "}
              </h3>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Events;
