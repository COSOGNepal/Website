import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import "./globals.css";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
    title: "Coding for Social Good (CoSoG) Nepal",
    description: "Cosog Nepal (Coding for Social Good) is a non-profit organization working to promote Computer Science Education and Initiate CS Clubs in Sec/High Schools in Nepal and facilitating charitable coding initiatives to aid in Nepal's digitalization.",
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
        <html lang="en">
            <body className="flex flex-col justify-between  overflow-x-hidden">
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
