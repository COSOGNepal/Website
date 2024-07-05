import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Empactathon",
    description: `Empactathon is a national- level high school hackathon that offers students a unique opportunity to showcase their skills and creativity.
                 It is designed to tackle three main SSGs defined by the United Nations: E (environment), C(Climate action), and H(Health & well - being).`,
    metadataBase: new URL("https://cosognepal.org/"),
    openGraph: {
        images: [{
            url: "/assets/empactathon_banner.png",
            width: 1600,
            height: 680,
            type: "image/png"
        }],
        emails: "contact@cosognepal.com",
    },
    twitter: {
        card: "summary",
        site: "@cosognepal",
        title: "Empactathon",
        description: `Empactathon is a national- level high school hackathon that offers students a unique opportunity to showcase their skills and creativity.
                 It is designed to tackle three main SSGs defined by the United Nations: E (environment), C(Climate action), and H(Health & well - being).`,
        images: [{
            url: "/assets/empactathon_banner.png",
            width: 1600,
            height: 680,
            type: "image/png"
        }],
    },
    icons: [{ url: "/empactfav256.ico", sizes: "any" }]
};

export default function EmpactathonLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
        </>
    );
}
