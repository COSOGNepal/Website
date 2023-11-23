"use client"

import Image from "next/image";
import type { TdescriptorData } from "./type";
export default function AboutPage() {
    return (
        <div className="main_container h-max flex flex-col space-y-section w-full px-block mt-section">
            <Image src="/images/assets/about_banner.png" width={1230} height={470} alt="banner_about_section"
                className="banner max-w-[1230px] max-h-[470px]  h-auto  object-cover m-auto" />
            <div className="description flex flex-col space-y-[50px] max-w-[1200px] m-auto">
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
    )
}

function Descriptor({ title, description, list = [] }: TdescriptorData) {
    return (
        <div className="descriptor flex space-y-[20px] flex-col">
            <div className="title font-bold text-sub-title text-black-dark  ">
                {title}
            </div>
            <div className="description font-normal text-para text-black-mid">
                {description}
                <div className="list_con mt-small">
                    {
                        list?.map((li, index) => {
                            return <li key={index}>{li}</li>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
