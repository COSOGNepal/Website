import SectionTitle from "@/components/SectionTitle";
import React from "react";

const Goals = () => {
    const GoalsList = [
        {
            id: 1,
            title: "Promote CS culture in high schools",
            desc: "We're dedicated to raising awareness about computer science education and opportunities among high school students.",
        },
        {
            id: 2,
            title: "Help establish CS clubs",
            desc: "We support high school students in launching and managing computer science clubs, fostering collaboration and knowledge sharing within and outside of their school.",
        },
        {
            id: 3,
            title: "Collaboration and Team Work Activities",
            desc: "We encourage teamwork and collaboration among students to enhance their learning experiences.",
        },
        {
            id: 4,
            title: "Skill Development Workshops",
            desc: "Our workshops equip students with practical computer science skills for success in the tech world.",
        },
        {
            id: 5,
            title: "Networking and Talk Shows",
            desc: "We connect students with industry experts through networking events and engaging talks to share how they started with computer science and provide the roadmaps for the newcomers.",
        },
        {
            id: 6,
            title: "Code for Charity",
            desc: "We use coding skills to address real-world issues and make a positive impact in our communities. Therefore, we’re encouraging students to help the non-profits adapt technology.",
        },
    ];
    return (
        <main className="px-block space-y-block ">
            <SectionTitle title="goals" />
            <section className="grid grid-cols-1 md:grid-cols-2 w-full gap-3 px-2 md:px-24">
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
