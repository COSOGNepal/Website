import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import "./globals.css";

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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
