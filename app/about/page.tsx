"use client"

import Image from "next/image";

import { Descriptor } from "./_components";
import SectionTitle from "@/components/SectionTitle";

export default function AboutPage() {
    return (
        <div className="main_container h-max flex flex-col space-y-section w-full px-block mt-section max-w-[1400px] m-auto">
            <div className="aboutSection">
                <Image src="/images/assets/about_banner.png" width={1230} height={470} alt="banner_about_section"
                    className="banner  max-h-[470px]  h-auto  object-cover m-auto" />
                <div className="description flex flex-col space-y-block  mt-block max-w-[1200px] m-auto">
                    <Descriptor title="Who are we?" description="Cosog Nepal (Coding for Social Good) is a non-profit organization working to promote Computer Science Education and Initiate CS Clubs in Sec/High Schools in Nepal and facilitating charitable coding initiatives to aid in Nepal's digitalization." />
                    <Descriptor title="Our story" description="Force leg push. Change recognize cultural natural. Material life someone hand attorney hot build. Bring pay upon light company your car. Success none throw. Both kitchen past deal eye east." />
                    <Descriptor title="Our Mission" description="Population life level half. Investment program modern beat machine black. Last six there street enter agent. Begin technology PM wife million there movement matter."
                        list={["Personal probably wait interest worker its. Member others throw scene two mission camera.",
                            "Personal probably wait interest worker its. Member others throw scene two mission camera.",
                            "Personal probably wait interest worker its. Member others throw scene two mission camera."
                        ]}
                    />
                    <Descriptor title="Our Impact" description="Population life level half. Investment program modern beat machine black. Last six there street enter agent. Begin technology PM wife million there movement matter."
                        list={["Personal probably wait interest worker its. Member others throw scene two mission camera.",
                            "Personal probably wait interest worker its. Member others throw scene two mission camera.",
                            "Personal probably wait interest worker its. Member others throw scene two mission camera."
                        ]}
                    />
                </div>

            </div>
            <div className="main_members space-y-block">
                <SectionTitle title="Board Members" />
                <div className="members">
                    <div className="member max-h-[350px] max-w-[320px] rounded-[5px] relative overflow-hidden group transition-all duration-100 ease-in-out">
                        <Image src={"/images/Members/Saroj_Regmi.jpg"} height={350} width={320} alt={"SarojRegmi"}
                            className="image" />
                        <div className="description h-full w-full bg-gradient-to-t from-[rgba(0,0,0,0.7)] group-hover:from-[rgba(0,0,0,0.9)] to-transparent absolute top-0 left-0 p-standard align-baseline">
                            <div className="visible mt-[90%] group-hover:mt-[70%] transition-all duration-300 ease-in-out">
                                <div className="title font-bold text-sub-title text-white"> Saroj Regmi </div>
                                <div className="post font-normal text-para text-white-light"> IT Head </div>
                            </div>
                            <div className="socials flex space-x-small mt-[200%] opacity-0 group-hover:mt-small group-hover:opacity-100 transition-all duration-300 ease-in-out">
                                <a
                                    href={"fb"}
                                    target="blank"
                                    className="cursor-pointer"
                                >
                                    <Image
                                        src={"/assets/facebook_logo.png"}
                                        className="grayscale hover:grayscale-0"
                                        width={25}
                                        height={25}
                                        alt="facebook_logo"
                                    />
                                </a>
                                <a href={"insta"} target="blank">
                                    <Image
                                        src={"/assets/instagram_logo.png"}
                                        className="grayscale hover:grayscale-0 "
                                        width={25}
                                        height={25}
                                        alt="instagram_logo"
                                    />
                                </a>
                                <a href={"linkedin"} target="blank">
                                    <Image
                                        src={"/assets/linkedin_logo.png"}
                                        className="grayscale hover:grayscale-0"
                                        width={25}
                                        height={25}
                                        alt="linkedin_logo"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

