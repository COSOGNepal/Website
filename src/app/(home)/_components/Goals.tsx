import React from "react";

const Goals = () => {
  const GoalsList = [
    {
      id: 1,
      title: "Learn a new language",
      desc: "Master a foreign language, enabling better communication and understanding of different cultures.",
    },
    {
      id: 2,
      title: "Travel to at least 5 different countries",
      desc: "Explore diverse cultures, cuisines, and landscapes around the world.",
    },
    {
      id: 3,
      title: "Achieve a healthy work-life balance",
      desc: "Prioritize mental and physical well-being by balancing professional and personal life.",
    },
    {
      id: 4,
      title: "Start a personal blog",
      desc: "Share experiences, knowledge, and insights with a wider audience through a personal blog.",
    },
    {
      id: 5,
      title: "Learn to play a musical instrument",
      desc: "Acquire a new skill and find joy in creating music with a musical instrument.",
    },
    {
      id: 6,
      title: "Volunteer for a social cause",
      desc: "Contribute time and effort to a charitable organization or community project to make a positive impact.",
    },
  ];
  return (
    <main className="px-4 md:px-16 mt-20">
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
