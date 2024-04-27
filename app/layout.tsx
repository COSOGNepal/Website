import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import "./globals.css";
import Footer from "./_components/Footer";
import { EventNavTopBar } from "@/components/NavTopBar";

export const metadata: Metadata = {
    title: "Coding for Social Good (CoSoG) Nepal",
    description: "Cosog Nepal (Coding for Social Good) is a non-profit organization working to promote Computer Science Education and Initiate CS Clubs in Sec/High Schools in Nepal and facilitating charitable coding initiatives to aid in Nepal's digitalization.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <link rel="icon" href="/favicon.ico" sizes="any" />
            <meta property="og:image" content="/assets/logo.png" />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content="386" />
            <meta property="og:image:height" content="386" />
            <body className="flex flex-col justify-between  overflow-x-hidden">
                { // <EventNavTopBar
                    //     title="Cosog Nepal Presents tech after 10."
                    //     description="Where students after the see will meet the profesnals to learn more about the real advantages of choosing tech as their main carrier"
                    //     eventData="2024-05-04 11:59pm"
                    //     countDown={true}
                    //     EventLink="/events/techaftersee"
                    //     CTA={{ label: "Go to Event", status: true }}
                    // />
                }
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
