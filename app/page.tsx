"use client";

import React from "react";
import Herosection from "./_components/Herosection";
import Partners from "./_components/Partners";
import Events from "./_components/Events";
import Numbers from "./_components/Numbers";
import CommunityMembers from "./_components/CommunityMembers";
import Goals from "./_components/Goals";
import CTABanner from "./_components/CTABanner";
import FAQ from "./_components/FAQ";

export default function Home() {
    return (
        <div className="flex flex-col space-y-section">
            <Herosection />
            <Partners />
            <Events />
            <Numbers />
            <CommunityMembers />
            <Goals />
            <CTABanner />
            <FAQ />
        </div >
    );
}
