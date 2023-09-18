"use client"

import { SectionTitle } from "@/components/global";
import { Project } from "@/components/home";

const Projects = () => {
    return (
        <div className="h-screen w-full bg-red-50 p-[20px]">
            <SectionTitle title="Projects" />
            <Project data={"This is going to be the actual data in Md format but for now it will be dummy"} />
        </div>
    )
}

export default Projects;
