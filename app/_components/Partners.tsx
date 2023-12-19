import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import React from "react";

const partenersData = [
    "AWS Cloud Club",
    "Code for Change",
    "iTech Karnali",
    "Sagarmatha Techfest",
    "Hackademedia",
    "Sagarmatha Hacktoberfest"
]

const Partners = () => {
    return (
        <main className="bg-gray-bg p-block space-y-block px-standard md:px-block brk-1400:px-0">
            <SectionTitle title="we've partnered with" />
            <section className="flex gap-4 justify-center max-w-[1400px] mx-auto">
                {
                    partenersData.map((partnerName, index) =>
                        <div className="w-48 h-48 aspect-square relative" key={index}>
                            <Image
                                src={`/images/Partners/${partnerName
                                    .split(" ")
                                    .map(token => token.toLowerCase())
                                    .join("_")}.png`
                                }
                                fill
                                alt="Code for Change"
                            />
                        </div>
                    )

                }
            </section>
        </main>
    );
};

export default Partners;
