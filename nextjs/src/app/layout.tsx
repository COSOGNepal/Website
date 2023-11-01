import type { Metadata } from "next";


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
                {children}
            </body>
        </html>
    );
}
