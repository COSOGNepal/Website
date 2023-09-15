import { Nav } from "@/components/global";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/global/Footer";


export const metadata: Metadata = {
  title: "COSOG Nepal",
  description: "Code to make change, Code for social good.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
