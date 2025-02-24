import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Tech After Ten ",
    description:
        `Learn about CS from the professionals and their experiences.
        Dive into the world of tech with the "Computer Science in +2" program.
        Discover diverse careers, meet industry experts, and learn about opportunities in Nepal and beyond. `,
    creator: "Cosog Nepal",
    keywords: [
        "Cosog Nepal",
        "tech after ten",
        "cs in highschool",
        "Pratiksha Pandey",
        "Saroj Dahal",
        "Aashish Panthi",
        "Siddhartha Neupane"
    ],
    metadataBase: new URL("https://cosognepal.org/"),
    authors: [
        {
            name: "Saroj Regmi",
            url: "https://www.linkedin.com/in/sarojregmi200/"
        },
        {
            name: "Aashish Panthi",
            url: "https://www.linkedin.com/in/aashishpanthi/"
        },
        {
            name: "Cosog Nepal Team",
            url: "https://cosognepal.org/about#team"
        },
    ],
    twitter: {
        images: {
            url: "/assets/images/Events/CS_in_high_school/og.png",
            height: 1600,
            width: 628
        },
        title: "Tech After Ten",
        description: "Learn about CS from the professionals and their experiences",
        card: "summary_large_image",
        site: "https://www.cosognepal.org/events/techafterten/",
        creator: "Cosog Nepal",
    },
    robots: {
        follow: true,
        index: true,
        nocache: true,
        notranslate: true,
    },
    openGraph: {
        images: {
            url: "/assets/images/Events/CS_in_high_school/og.png",
            height: 1600,
            width: 628
        }
    },
}
export default function TechAfterTenLayout({ children }: { children: React.ReactNode }) {
    return (children);
}
