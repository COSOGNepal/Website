
import React from "react";
import Herosection from "./_components/Herosection";
import Partners from "./_components/Partners";
import Events from "./_components/Events";
import Numbers from "./_components/Numbers";
import CommunityMembers from "./_components/CommunityMembers";
import Goals from "./_components/Goals";
// import FAQ from "./_components/FAQ";
import InfoBanner from "@/components/InfoBanner";

export default function Home() {
    return (
        <div className="flex flex-col space-y-section overflow-x-hidden ">
            <Herosection />
            <Partners />
            <Events />
            <Numbers />
            <CommunityMembers />
            <Goals />
            <InfoBanner
                leftContent={
                    <p className="max-w-[600px]">
                        Collaboration is one of the most powerfull thing, one must take part
                        with one another to better this world and to preserve kindness in
                        humanity.
                    </p>
                }
                cta={{ text: "Lets Collaborate", link: "https://forms.gle/nKwtAMG2Q4rL57QW7" }}
            />
            { /* // <FAQ 
        data={
            [
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
    ]
    }
            /> */}
        </div >
    );
}
