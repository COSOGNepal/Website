import EventDescripter from "@/components/ui/EventAbout";
import Landing from "./_components/Landing";
import { GuestsSection } from "../techafterten/_components/Guests";
import TimeLine from "../techafterten/_components/TimeLine";
import FAQ from "../../_components/FAQ";
import { PrizeSection } from "./_components/Prizes";
import { cn } from "@/lib/utils";
import { lora } from "@/lib/fonts";
import { Icon } from "@/components/Icon";
import { SupportersSection } from "@/components/Supporters";

const EmpactathonPage = () => {
    return <div className="space-y-section">
        <Landing />

        {/* About */}
        <EventDescripter
            eventTitle="About the Event"
            description={[
                ` Computer Scinece in +2 program is designed to empower recent 10th
                    grade (SEE) graduates in Nepal to make informed decisions about
                    their future academic paths and careers. Choosing the right stream
                    after 10th grade is a critical step that can significantly impact
                    one's future opportunities. This program aims to equip students with
                    the knowledge and awareness to confidently choose a stream that
                    aligns with their interests, strengths, and future goals.
                `,
                ` Join us as we lay out the differences between Computer Science in
                    science and management; as we explore different career paths within
                    Computer Science; as we explore the job and educational
                    opportunities in Nepal and abroad, and discover the boundless
                    potential that awaits you in this ever-evolving landscape. `,
            ]}
            className={{
                container: ` brk-1400:px-[calc((100%-1400px)/2)] px-standard
                            `
            }}
        />

        {/* sponsors */}
        <SupportersSection
            sectionTitle="Sponsors And supporters"
            sectionDescription="Thank you all for the support without you our event would have been impossible to organize."
            supportersData={[
                {
                    name: "infosys",
                    logo: "https://static.vecteezy.com/system/resources/previews/020/336/451/non_2x/infosys-logo-infosys-icon-free-free-vector.jpg",
                    supportTitle: "Title Sponsor",
                    socials: {
                        facebook: "https://facebook.com",
                        twitter: "https://twitter.com",
                        linkedin: "https://linkedin.com"
                    }
                },
                {
                    name: "google",
                    logo: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
                    supportTitle: "Supporter",
                    socials: {
                        facebook: "https://facebook.com",
                        twitter: "https://twitter.com",
                        linkedin: "https://linkedin.com"
                    }
                },
                {
                    name: "microsoft",
                    logo: "https://www.microsoft.com/en-us/sites/default/files/inline-images/MSFT_logo_1920x1080_CIA.png",
                    supportTitle: "Supporter",
                    socials: {
                        facebook: "https://facebook.com",
                        twitter: "https://twitter.com",
                        linkedin: "https://linkedin.com"
                    }
                },
                {
                    name: "apple",
                    logo: "https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202106030739",
                    supportTitle: "Supporter",
                    socials: {
                        facebook: "https://facebook.com",
                        twitter: "https://twitter.com",
                        linkedin: "https://linkedin.com"
                    }
                }


            ]}
        />


        {/* Time line */}
        {/* Judges */}
        <GuestsSection
            sectionTitle="Judges"
            className={{
                notPublicYetCard: "bg-gradient-to-br to-empactathon-primary/45",
                sectionContainer: {
                    container: "w-full max-w-[1400px] mx-auto px-standard brk-1400:px-0 ",
                },
            }}
            guestData={[
                {
                    id: "1",
                    notPublicYet: true,
                    placeholder: <p>Revealing soon</p>,
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
                {
                    id: "4",
                    name: "Saroj Dahal",
                    designation: "CTO, 28Softwares",
                    image: "/assets/images/Events/CS_in_high_school/Saroj_Dahal.jpeg",
                    socials: [
                        {
                            name: "Linkedin",
                            icon: "linkedin",
                            link: "https://www.linkedin.com/in/isarojdahal/",
                        },
                    ],
                    short_intro: [
                        "Saroj Dahal is the founder and CTO of 28Softwares Pvt. Ltd. With 6+ years of experience in the Tech field, Saroj Dahal is equipped with knowledge of Web Development, Mobile App Development, DevOps and Cloud.",
                        `In free time, He teaches programming at a YouTube Channel called "EverydayKarma" with a vision to produce millions of Nepali Developers.`,
                    ],
                },
            ]}
        />
        {/* prizes */}

        <PrizeSection
            sectionComp={
                <div className={cn(
                    "title text-heading font-bold  text-center",
                )}>
                    <span className={`${lora.className} text-empactathon-dark`}>
                        Stand a chance to win from a prize pool of over
                    </span>
                    <br />
                    <span className={`${lora.className} bg-yellow-100 p-1 px-3 text-empactathon-dark`}>
                        Nrs. 100,000
                    </span>
                </div >
            }
            prizeData={
                [
                    {
                        prizeTitle: "Mega Winner",
                        prizeDescription: <div className={" text-gray-500"}>
                            <span className="flex gap-2">
                                <Icon iconName="userStar" />
                                <span>
                                    1
                                </span>
                            </span>
                            <span className="flex gap-2">
                                <span>
                                    RS.
                                </span>
                                <span>
                                    20,000
                                </span>
                            </span>
                        </div>,
                        prizeIcon: "trophy"
                    },
                    {
                        prizeTitle: "Omega Winner",
                        prizeDescription: <div className={" text-gray-500"}>
                            <span className="flex gap-2">
                                <Icon iconName="userStar" />
                                <span>
                                    1
                                </span>
                            </span>
                            <span className="flex gap-2">
                                <span>
                                    RS.
                                </span>
                                <span>
                                    30,000
                                </span>
                            </span>
                        </div>,
                        prizeIcon: "trophy"
                    },
                    {
                        prizeTitle: "Alpha Winner",
                        prizeDescription: <div className={" text-gray-500"}>
                            <span className="flex gap-2">
                                <Icon iconName="userStar" />
                                <span>
                                    1
                                </span>
                            </span>
                            <span className="flex gap-2">
                                <span>
                                    RS.
                                </span>
                                <span>
                                    10,000
                                </span>
                            </span>
                        </div>,
                        prizeIcon: "trophy"
                    },

                ]}
            className={{
                section: {
                    container: `w-full min-h-screen px-standard brk-1400:px-[calc((100%-1400px)/2)] bg-gradient-to-br from-white to-empactathon-primary/25 
                                flex flex-col justify-center items-center space-y-section 
                                `,
                    title: "text-black-dark"
                },
            }}

        />


        {/* Time line */}
        <TimeLine
            timelineTitle="Schedule of the Event"
            className={{
                iconContainer: "w-10 h-10 bg-empactathon-bg-green text-black-mid",
                container: "brk-1400:px-0 px-standard w-full max-w-[1400px] mx-auto"
            }}
            tasks={[
                {
                    description:
                        "Explain the purpose of the program and how it can benefit the recent SEE graduates. Briefly introduce the speakers and the topics they will be covering.",
                    icon: "star",
                    title: "Introduction to the event",
                },
                {
                    description:
                        "Siddhartha Neupane will talk about the career paths in computer science that are available in Nepal and abroad.",
                    icon: "speaker",
                    title: "Career Paths in Computer Science",
                },
                {
                    description:
                        "Pratiksha Pandey will talk about the educational and job opportunities in Nepal.",
                    icon: "speaker",
                    title: "Opportunities in Nepal",
                },
                {
                    description:
                        "Aashish Panthi will talk about the educational and job opportunities abroad, especially in the United States.",
                    icon: "speaker",
                    title: "Opportunities Abroad",
                },
                {
                    description:
                        "Saroj Dahal will lay out the differences between Computer Science in science and management in +2 level.",
                    icon: "description",
                    title: "CS in Science vs Management",
                },
                {
                    description: "Conclude the event and distrubution of resources talked about in the event.",
                    icon: "report",
                    title: "Conclude the event",
                },
            ]}
        />

        {/* faq */}
        <FAQ
            className={{
                accordionItem: "hover:bg-empactathon-bg-green"
            }}
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

    </div >
};

export default EmpactathonPage;
