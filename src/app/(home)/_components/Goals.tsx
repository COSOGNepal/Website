import React from "react";

const Goals = () => {
  const GoalsList = [
    {
      id: 1,
      title: "Helping people understand the tech",
      desc: "In this day and age understanding the tech is a must. No one is complete without the tech knowledge so we focus on guiding young generation towards it",
    },
    {
      id: 2,
      title: "Helping people understand the tech",
      desc: "In this day and age understanding the tech is a must. No one is complete without the tech knowledge so we focus on guiding young generation towards it",
    },
    {
      id: 3,
      title: "Helping people understand the tech",
      desc: "In this day and age understanding the tech is a must. No one is complete without the tech knowledge so we focus on guiding young generation towards it",
    },
    {
      id: 4,
      title: "Helping people understand the tech",
      desc: "In this day and age understanding the tech is a must. No one is complete without the tech knowledge so we focus on guiding young generation towards it",
    },
    {
      id: 5,
      title: "Helping people understand the tech",
      desc: "In this day and age understanding the tech is a must. No one is complete without the tech knowledge so we focus on guiding young generation towards it",
    },
    {
      id: 6,
      title: "Helping people understand the tech",
      desc: "In this day and age understanding the tech is a must. No one is complete without the tech knowledge so we focus on guiding young generation towards it",
    },
  ];
  return (
    <main className="px-4 md:px-16 my-20">
      <h2 className={"text-xl md:text-3xl text-faded font-normal "}>
        Our Main Goals{" "}
      </h2>
      <section className="grid grid-cols-1 md:grid-cols-2 w-full gap-3 py-8 px-2 md:px-24">
        {GoalsList.map((goal) => (
          <div className="col-span-1 bg-gray-bg p-5 " key={goal.id}>
            <h2 className="text-lg font-semibold">{goal.title} </h2>
            <p className="text-faded text-md">{goal.desc}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Goals;
