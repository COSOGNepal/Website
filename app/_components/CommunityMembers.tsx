import Member from "@/components/Member";
import SectionTitle from "@/components/SectionTitle";
import React from "react";

import getMembers from "../about/getMembersInfo";
import { Tmember } from "../about/type";

const CommunityMembers = async () => {
    let members: Tmember[];
    try {
        members = await getMembers();
        return (
            <main className="px-standard brk-1400:px-0 space-y-block max-w-[1400px] brk-1400:mx-auto w-full">
                <SectionTitle title="Our Team" viewall="/about/#team" />
                {/* members list */}
                <div className="members grid gap-small complex-grid-members-section">
                    {
                        members.map((member, index) => {
                            if (member.post != "Executive Member" && member.post != "Outreach Coordinator")
                                return <Member key={index} data={member} />
                        })
                    }
                </div>
            </main >
        );
    }
    catch (e) {
        console.log("Sorry error from our side.")
        return (
            <p>
                Something went wrong.
            </p>)
    }
};

export default CommunityMembers;
