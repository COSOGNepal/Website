import Link from "next/link";
import React from "react";

const InfoBanner = ({
    leftContent,
    cta,
}: {
    leftContent: React.ReactNode;
    cta?: {
        text: string,
        link: string,
    }
}) => {
    return (
        <main className="h-fit text-white bg-primary bg-[url('/assets/bgPattern.svg')] bg-cover bg-fixed bg-blend-multiply mt-section -mb-sectionw-full py-block brk-1400:px-[calc(((100%-1400px)/2)+50px)] px-standard">
            <div className="max-w-[1400px] flex  flex-wrap items-center justify-between">
                {leftContent}
                {
                    cta &&
                    <Link href={cta.link} className="bg-gray-bg w-max px-12 rounded-sm text-faded text-para font-medium uppercase py-3 hover:bg-blue-blue hover:text-white transition">
                        {cta.text}
                    </Link>
                }
            </div>
        </main>
    );
};

export default InfoBanner;
