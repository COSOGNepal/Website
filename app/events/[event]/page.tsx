import FAQ from "../../_components/FAQ";
import TimeLine from "./_components/TimeLine";
import { SpeakersSection } from "./_components/Speaker";

const Page = () => {
    return (
        <div className="mainContainer mt-section snap-mandatory snap-y space-y-section *:w-full *:max-w-[1400px] *:px-standard *:brk-1400:mx-auto *:sm:px-block">
            <section className="gap-5 herosection   flex flex-col snap-start">
                <div className="imageContainer bg-fixed">
                    <img src="/assets/testing.jpg" alt="something" className="w-full max-h-[50vh] object-cover" />
                </div>
                <div className="textContainer space-y-standard">
                    <div className="title text-black-dark  text-2xl font-bold">
                        Tech after 10
                    </div>
                    <div className="shortIntro text-black-mid brk-1400:max-w-[80%]">
                        Learn all about what you should choose to loose less and win more in this game of compitition.
                        Learn all about what you should choose to loose less and win more in this game of compitition.
                    </div>
                </div>
                <div className="actionsContainer flex flex-wrap *:w-full *:sm:w-max *:sm:px-5 *:rounded-md *:p-[10px] gap-3 text-center">
                    <div className="action1 bg-primary text-white">
                        Count Me In
                    </div>
                    <div className="action2 bg-gray-bg text-gray-dark ">
                        Learn More
                    </div>
                </div>
            </section>

            <section className="about  space-y-5  snap-end bg-gray-bg py-block">
                <h1 className="heading text-2xl font-semibold">
                    About the Event
                </h1>
                <div className="descirption text-black-mid">
                    <p>Welcome to our counseling event tailored exclusively for class 10 students! Hosted by [Organization Name], a non-profit organization dedicated to promoting tech literacy, this event aims to illuminate the possibilities and realities within the diverse realms of Information Technology and Telecommunication (ITT) fields.</p>
                    <p>Embark on a journey of inspiration and enlightenment as speakers from various ITT fields share their personal stories and professional insights. From software development to cybersecurity, from telecommunications to artificial intelligence, our esteemed speakers bring a wealth of experience and wisdom to the table.</p>
                    <p>Through their narratives, students will gain a deeper understanding of the vast opportunities that exist within the ITT industry. They will also learn about the challenges and limitations that come with pursuing a career in these dynamic fields.</p>
                    <p>Our event is not just about imparting knowledge; it's about igniting passions and empowering the next generation of tech enthusiasts. Whether you dream of coding the next revolutionary app or safeguarding cyberspace from threats, this event will equip you with the guidance and encouragement you need to navigate your path forward.</p>
                    <p>Join us as we explore what is possible and what is not possible in the world of ITT, and discover the boundless potential that awaits you in this ever-evolving landscape. Let's embark on this journey together and shape the future of technology, one step at a time.</p>
                </div>

            </section>

            <SpeakersSection data={[
                {
                    id: "1",
                    name: "Saroj Regmi",
                    designation: "Software Developer",
                    image: "/images/Members/Saroj_Regmi.jpg",
                    socials: [
                        {
                            name: "Facebook",
                            icon: "facebook",
                            link: "https://www.facebook.com/sarojregmi"
                        },
                        {
                            name: "Linkedin",
                            icon: "linkedin",
                            link: "https://www.linkedin.com/in/sarojregmi"
                        },
                        {
                            name: "Twitter",
                            icon: "twitter",
                            link: "https://www.twitter.com/sarojregmi"
                        },
                    ],
                    short_intro: [
                        "Saroj Regmi is a seasoned software developer with over 10 years of experience in the industry.",
                        "He specializes in web development, mobile app development, and cloud computing.",
                        "Saroj is passionate about open-source technologies and enjoys contributing to various projects in his free time.",
                    ],
                },
                {
                    id: "2",
                    name: "Aashish Panthi",
                    designation: "Cybersecurity Analyst",
                    image: "/images/Members/Aashish_Panthi.jpeg"
                },
                {
                    id: "3",
                    name: "Sushil Bhattarai",
                    designation: "Telecommunications Engineer",
                    image: "/images/Members/Sushil_Bhattarai.png"
                },
            ]} />

            <section className="timeline">
                <TimeLine datas={
                    [
                        {
                            description: "Event starting and event details discussion",
                            icon: "star",
                            title: "Intro to the event"
                        },
                        {
                            description: "Cs stream in mgmnt and science  ko description",
                            icon: "description",
                            title: "Stream Description"
                        },
                        {
                            description: "Speaker 1 time",
                            icon: "speaker",
                            title: "Speaker 1"
                        },
                        {
                            description: "Speaker 2 time",
                            icon: "speaker",
                            title: "Speaker 2"
                        },
                        {
                            description: "Speaker 3 time",
                            icon: "speaker",
                            title: "Speaker 3"
                        },
                        {
                            description: "Summary of the event and resource distrubution",
                            icon: "report",
                            title: "Summary"
                        },
                    ]
                } />
            </section>

            <section className="faq">
                <FAQ data={[
                    {
                        question: "What has keys but can't open locks?",
                        answer: "A piano",
                        value: "item-1",
                    },
                    {
                        question:
                            "What comes once in a minute, twice in a moment, but never in a thousand years?",
                        answer: "The letter 'M'",
                        value: "item-2",
                    },
                    {
                        question: "What has a heart that doesn't beat?",
                        answer: "An artichoke",
                        value: "item-3",
                    },
                    {
                        question: "What has an endless supply of letters but starts empty?",
                        answer: "A mailbox",
                        value: "item-4",
                    },
                    {
                        question: "What has a head, a tail, is brown, and has no legs?",
                        answer: "A penny",
                        value: "item-5",
                    },
                    {
                        question:
                            "What has cities but no houses, forests but no trees, and rivers but no water?",
                        answer: "A map",
                        value: "item-6",
                    },
                ]} />
            </section>
        </div>
    )
}

export default Page;

