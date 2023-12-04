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
            <main className="px-block space-y-block">
                <SectionTitle title="Our Members" viewall="/about/#team" />
                {/* members list */}
                <div className="members grid lg:grid-cols-3-320 grid-cols-auto-fit-320 grid-rows-max gap-standard justify-center">
                    {
                        members.map((member, index) => {
                            if (member.post != "Community Leader")
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
