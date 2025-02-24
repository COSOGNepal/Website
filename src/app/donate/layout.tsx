import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cosog Nepal || Donation",
    description: "Your donation to Cosog Nepal will help us change many students life. Donate to improve Cs in Nepal.",
    metadataBase: new URL("https://cosognepal.org/"),
    openGraph: {
        images: [{
            url: "/assets/about_banner.png",
            width: 1600,
            height: 1200,
            type: "image/png"
        }],
        emails: "contact@cosognepal.com",
    },
    twitter: {
        card: "summary",
        site: "@cosognepal",
        title: "Cosog Nepal || Donation",
        description: "Your donation to Cosog Nepal will help us change many students life. Donate to improve Cs in Nepal.",
        images: [{
            url: "/assets/about_banner.png",
            width: 1600,
            height: 1200,
            type: "image/png"
        }],
    },
    icons: [{ url: "/favicon.ico", sizes: "any" }]
};

export default function AboutLayout({
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
