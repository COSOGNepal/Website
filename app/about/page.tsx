import Image from "next/image";
import { Descriptor } from "./_components";
import SectionTitle from "@/components/SectionTitle";
import Member from "@/components/Member";
import getMembers from "./getMembersInfo";

export default async function AboutPage() {
    const members = await getMembers();
    return (
        <div className="main_container h-max flex flex-col space-y-section w-full px-standard sm:px-block mt-section max-w-[1400px] m-auto pb-section">
            <div className="aboutSection w-full">
                <Image src="/images/assets/about_banner.png" width={1400} height={550} alt="banner_about_section"
                    className="banner max-h-[550px] h-auto object-cover m-auto" />
                <div className="description flex flex-col space-y-standard mt-block sm:space-y-block">
                    <Descriptor title="Who we are?"
                        descriptions={[`Cosog Nepal, also known as Coding for Social Good, is a student-driven non-profit organization founded in November 2022. Based in Kathmandu, Nepal, we are dedicated to revolutionizing computer science education throughout the country. Our primary focus is enabling students to initiate and manage Computer Science clubs in secondary and high schools across remote areas, creating a vibrant community of young tech enthusiasts.`, "Our work extends beyond education; we are deeply involved in charitable coding initiatives, contributing to Nepal's digitalization. As a bridge between traditional values and modern technology, we are uniquely positioned to foster a blend of learning and innovation for social good, placing us at the forefront of Nepal's technological advancement and educational transformation."]} />
                    <Descriptor title="Our story" descriptions={["Cosog Nepal's journey was rooted in a transformative observation by Bibek, our president, during his tenure as a STEM instructor. The recent expansion of the Nepalese high school system from 11th-12th to 9th-12th grades opened new doors for younger students, yet many remained unaware of these burgeoning opportunities, especially in technology. Bibek identified a critical void in high schools: the absence of a Computer Science club culture from grade 9 onwards. This gap deprived students of valuable experiences like engaging with cutting-edge technologies, participating in hackathons, and competing in Olympiads – opportunities essential for cultivating tech-savvy and competitive individuals.", "Recognizing the need to fill this gap, Bibek, alongside Aashish and five high school graduates, founded Cosog Nepal. Their vision was to establish a culture of technology exploration and innovation in high schools, starting from the 9th grade opening doors to skill refinement, competitive participation, and overall personal and professional growth in the digital age."]} />
                    <Descriptor
                        title="Our Mission"
                        descriptions={["At Cosog Nepal, our mission is to help high school students establish and sustain computer science clubs in their schools. Our goal is to cultivate young innovators and leaders who are proficient in technology and ready to make a difference in their communities.",
                            "Our strategy includes a range of activities to engage and inspire students. We organize networking events with tech professionals, provide opportunities for students to showcase their skills in coding competitions and hackathons, and encourage them to contribute to society through our 'Coding for Charity' program. Our coding workshops are designed to enhance practical skills and keep students abreast of the latest technological advancements.",
                            "With these initiatives, our ultimate aim is to ignite a culture for technology in students, equipping them with the knowledge and skills to drive meaningful change in the world."
                        ]}
                    />
                    <Descriptor
                        title="Our Impact"
                        descriptions={["At Cosog Nepal, we've made significant strides in advancing computer science education and supporting Nepal's digital transformation:"]}
                        list={["Raising Awareness in Schools: We've conducted informative presentations in over 20 schools across Nepal. These sessions have been instrumental in enlightening high school students about the value of computer science education and the importance of initiating CS clubs.",
                            "Software Fellowship Program: We organized a comprehensive five-day fellowship focusing on Python programming. This program has equipped students with foundational programming skills, enabling them to write their first programs.",
                            "Open-Source Awareness: Our initiative to promote open-source contributions has inspired over 100 individuals. This program encourages active participation in open-source projects, fostering a collaborative and innovative coding community.",
                            "Charitable Coding Initiatives: We are currently engaged in charitable coding projects. These initiatives are crucial in driving forward Nepal's digitalization, demonstrating our commitment to using technology for societal advancement."
                        ]} />
                </div>
            </div>
            <div className="board_members space-y-block " id="team">
                <SectionTitle title="Board Members" />
                <div className="members grid grid-cols-auto-fit-320 grid-rows-max gap-standard justify-center">
                    {
                        members.map((member, index) => {
                            if (member.post != "Community Leader")
                                return <Member key={index} data={member} />
                        })
                    }
                </div>
            </div>
            <div className="community_leaders space-y-block ">
                <SectionTitle title="Community Leaders" />
                <div className="members grid lg:grid-cols-3-320 grid-cols-auto-fit-320 grid-rows-max gap-standard justify-center">
                    {
                        members.map((member, index) => {
                            if (member.post === "Community Leader")
                                return <Member key={index} data={member} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}
