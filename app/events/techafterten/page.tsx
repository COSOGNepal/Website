import FAQ from "../../_components/FAQ";
import TimeLine from "./_components/TimeLine";
import { SpeakersSection } from "./_components/Speaker";

const Page = () => {
    return (
        <div className="mainContainer  snap-mandatory snap-y space-y-section *:w-full *:max-w-[1400px] *:px-standard *:brk-1400:mx-auto *:sm:px-block">
            <section className="gap-5 herosection   flex flex-col snap-start">
                <div className="imageContainer bg-fixed">
                    <img
                        src="/assets/techafter10.png"
                        alt="something"
                        className="w-full max-h-[50vh] object-cover"
                    />
                </div>
                <div className="textContainer space-y-standard">
                    <div className="title text-black-dark  text-2xl font-bold">
                        Computer Science in +2?
                    </div>
                    <div className="shortIntro text-black-mid brk-1400:max-w-[80%]">
                        Dear SEE graduates, Are you curious about a career in computer
                        science? Wondering if you should choose computer science in +2 or
                        not? Want to explore the plethora of opportunities in Nepal and
                        abroad?
                        <br /> <br />
                        We've got you covered. Cosog Nepal is organizing an interactive
                        session with leading figures in Nepali tech! ✨ Join us as we share
                        insights on opportunities, challenges, and how to explore your
                        potential in this exciting field.
                    </div>
                </div>
                <div className="actionsContainer flex flex-wrap *:w-full *:sm:w-max *:sm:px-5 *:rounded-md *:p-[10px] gap-3 text-center">
                    <a
                        href="https://forms.gle/QkaAimGAq48kg8Ri7"
                        className="action1 bg-primary text-white"
                        target="_blank"
                    >
                        Count Me In
                    </a>
                    <a
                        className="action2 bg-gray-bg text-gray-dark "
                        href="#learnMore"
                        id="learnMore"
                    >
                        Learn More
                    </a>
                </div>
            </section>

            <section className="about  space-y-5  snap-end bg-gray-bg py-block">
                <h1 className="heading text-2xl font-semibold">About the Event</h1>
                <div className="descirption text-black-mid">
                    <p>
                        Computer Scinece in +2 program is designed to empower recent 10th
                        grade (SEE) graduates in Nepal to make informed decisions about
                        their future academic paths and careers. Choosing the right stream
                        after 10th grade is a critical step that can significantly impact
                        one's future opportunities. This program aims to equip students with
                        the knowledge and awareness to confidently choose a stream that
                        aligns with their interests, strengths, and future goals.
                    </p>
                    <p className="mt-2">
                        Join us as we lay out the differences between Computer Science in
                        science and management; as we explore different career paths within
                        Computer Science; as we explore the job and educational
                        opportunities in Nepal and abroad, and discover the boundless
                        potential that awaits you in this ever-evolving landscape.
                    </p>
                </div>
            </section>

            <SpeakersSection
                data={[
                    {
                        id: "1",
                        name: "Pratiksha Pandey",
                        designation: "CEO at Smart Cheli",
                        image:
                            "/assets/images/Events/CS_in_high_school/Pratiksha_Pandey.jpg",
                        socials: [
                            {
                                name: "Linkedin",
                                icon: "linkedin",
                                link: "https://www.linkedin.com/in/pratiksha-pandey-608361ba/",
                            },
                        ],
                        short_intro: [
                            "Pratiksha Pandey is currently serving as a CEO of Smart Cheli which work to create gender balance in the STEM by providing playful learning.",
                            "She is electronic and communication engineer.Under her leadership smart Cheli has been worked with Bank of America,HEC Paris,One young world ,Bristol Myers Squibb and other global organisation.",
                        ],
                    },
                    {
                        id: "2",
                        name: "Aashish Panthi",
                        designation: "SWE intern at Apple",
                        image:
                            "/assets/images/Events/CS_in_high_school/Aashish_Panthi.jpeg",
                        socials: [
                            {
                                name: "Linkedin",
                                icon: "linkedin",
                                link: "https://www.linkedin.com/in/panthiaashish/",
                            },
                        ],
                        short_intro: [
                            "Aashish Panthi is a freshman at Fisk University located at Tenessee, the United States.",
                            "This summer he will be joining Apple as a Software Engineering Intern with the Apple Services Engineering team in Culver City, Los Angeles, California.",
                        ],
                    },
                    {
                        id: "3",
                        name: "Siddhartha Neupane",
                        designation: "HoD BSc. CS and AI at Softwarica College",
                        image: "/assets/images/Events/CS_in_high_school/Siddhartha_Neupane.jpg",
                        socials: [
                            {
                                name: "Linkedin",
                                icon: "linkedin",
                                link: "https://www.linkedin.com/in/siddhartha-neupane-310a2a162/",
                            },
                        ],
                        short_intro: [
                            "Siddhartha Neupane is a Head of the Department of BSc (Hons) Computer Science with Artificial Intelligence at Softwarica College, Kathmandu Nepal.",
                            "He has completed his bachelor's in Business Computing from the University of Central Lancashire and completed a master's degree in Big Data Systems from the Higher School of Economics. Mr. Siddhartha is a Data Enthusiast and has worked in the past as a Database Administrator at LLC PAK PROJECT, Moscow Russia.",
                        ],
                    },
                ]}
            />

            <section className="timeline">
                <TimeLine
                    datas={[
                        {
                            description:
                                "Briefly explain the purpose of the program and how it can benefit the recent SEE graduates. Briefly introduce the speakers and the topics they will be covering.",
                            icon: "star",
                            title: "Introducation to the event",
                        },
                        {
                            description:
                                "Siddhartha Neupane will talk about the career paths in computer science that are available in Nepal and abroad.",
                            icon: "speaker",
                            title: "Siddhartha Neupane",
                        },
                        {
                            description:
                                "Pratiksha Pandey will talk about the educational and job opportunities in Nepal.",
                            icon: "speaker",
                            title: "Pratiksha Pandey",
                        },
                        {
                            description:
                                "Aashish Panthi will talk about the educational and job opportunities abroad, especially in the United States.",
                            icon: "speaker",
                            title: "Aashish Panthi",
                        },
                        {
                            description:
                                "Lay out the differences between Computer Science in science and management in +2 level.",
                            icon: "description",
                            title: "Stream Description",
                        },
                        {
                            description: "Conclude the event and distrubution of resources.",
                            icon: "report",
                            title: "Conclude the event",
                        },
                    ]}
                />
            </section>

            <section className="faq">
                <FAQ
                    data={[
                        {
                            question: `What is the "Computer Science in +2" program?`,
                            answer:
                                "The program is designed to help recent 10th-grade graduates in Nepal make informed decisions about their future in the field of computer science.",
                            value: "item-1",
                        },
                        {
                            question: "Who should attend this event?",
                            answer:
                                "Reacent SEE graduates who are considering computer science for their further studies and want to learn about potential career paths and opportunities should attend.",
                            value: "item-2",
                        },
                        {
                            question: "What topics will the speakers cover?",
                            answer:
                                "Speakers will discuss career paths in computer science, differences between computer science in science and management streams, and educational and job opportunities in Nepal and abroad.",
                            value: "item-3",
                        },
                        {
                            question:
                                "Will there be opportunities to ask questions to the speakers?",
                            answer:
                                "Yes, there will be a Q&A session where participants can engage directly with the speakers.",
                            value: "item-4",
                        },
                        {
                            question: "How can I join the event?",
                            answer:
                                "Details will be provided on how to join the online event via email after you fill the registration form. Event will be on Google Meet.",
                            value: "item-5",
                        },
                        {
                            question: "Is there any fee to attend the event?",
                            answer:
                                "No, the event is free to attend for all interested participants.",
                            value: "item-6",
                        },
                        {
                            question: "Can non-SEE graduates attend the event?",
                            answer:
                                "While the event is targeted at recent SEE graduates, those with an interest in computer science education are welcome, subject to the event's capacity.",
                            value: "item-7",
                        },
                    ]}
                />
            </section>
        </div>
    );
};

export default Page;
