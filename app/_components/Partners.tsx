import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import React from "react";

const Partners = () => {
    return (
        <main className="bg-gray-bg p-block space-y-block px-standard md:px-block brk-1400:px-0">
            <SectionTitle title="we've partnered with" />
            <section className="flex gap-4 justify-center max-w-[1400px] mx-auto">
                <div className="w-48">
                    <Image
                        src={"/images/Partners/codeforchange.png"}
                        width={130}
                        height={130}
                        alt="Code for Change"
                    />
                </div>
                <div className="w-48">
                    <Image
                        src={"/images/Partners/aws_club.png"}
                        width={130}
                        height={130}
                        alt="AWS Cloud Club"
                    />
                </div>
                <div className="w-48">
                    <Image
                        src={"/images/Partners/itechkarnali.png"}
                        width={130}
                        height={130}
                        alt="iTech Karnali"
                    />
                </div>
                <div className="w-48">
                    <Image
                        src={"/images/Partners/sagarmatha_techfest.png"}
                        width={130}
                        height={130}
                        alt="Sagarmatha Techfest"
                    />
                </div>
                <div className="w-48">
                    <Image
                        src={"/images/Partners/sagarmatha_hacktoberfest.png"}
                        width={130}
                        height={130}
                        alt="Sagarmantha Hacktoberfest"
                    />
                </div>
                <div className="w-48">
                    <Image
                        src={"/images/Partners/hackademedia.png"}
                        width={130}
                        height={130}
                        alt="Hackademedia"
                    />
                </div>
            </section>
        </main>
    );
};

export default Partners;
