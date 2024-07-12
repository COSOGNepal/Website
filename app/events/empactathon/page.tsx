import EventDescripter from "@/components/ui/EventAbout";
import Landing from "./_components/Landing";
import { GuestsSection } from "../techafterten/_components/Guests";

const EmpactathonPage = () => {
    return <>
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
                container: " brk-1400:px-[calc((100%-1400px)/2)] px-standard "
            }}
        />
        {/* Time line */}
        {/* Judges */}
        <GuestsSection
            sectionTitle="Judges"
            className={{ notPublicYetCard: "" }}
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

        {/* faq */}
    </>
};

export default EmpactathonPage;
