import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import "./globals.css";
import Footer from "./_components/Footer";

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
      <body className="flex flex-col justify-between">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
