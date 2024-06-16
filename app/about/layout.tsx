import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Coding for Social Good (CoSoG) Nepal",
    description: "Cosog Nepal (Coding for Social Good) is a non-profit organization working to promote Computer Science Education and Initiate CS Clubs in Sec/High Schools in Nepal and facilitating charitable coding initiatives to aid in Nepal's digitalization.",
    metadataBase: new URL("https://cosognepal.org/"),
    openGraph: {
        images: [{
            url: "/assets/logo.png",
            width: 368,
            height: 368,
            type: "image/png"
        }]
    },
    icons: [{ url: "/favicon.ico", sizes: "any" }]
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        { children }
    );
}
