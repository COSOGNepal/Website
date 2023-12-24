import Link from "next/link";
import React from "react";

const InfoBanner = ({
    leftContent,
    rightContent,
    CTALink,
}: {
    leftContent: any;
    rightContent: String;
    CTALink: any;
}) => {
    return (
        <main className="h-fit text-white bg-primary bg-[url('/assets/bgPattern.svg')] bg-cover bg-fixed bg-blend-multiply mt-section -mb-sectionw-full py-block brk-1400:px-[calc(((100%-1400px)/2)+50px)] px-standard">
            <div className="max-w-[1400px] flex justify-between items-center ">
                <div className="text-white flex justify-start">
                    {leftContent}
                </div>
                <div className="">
                    <Link href={CTALink} className="w-full md:w-auto min-w-max max-w-[480px]">
                        <button className="bg-gray-bg w-full px-12 rounded-sm text-faded text-para font-medium uppercase py-3 hover:bg-blue hover:text-white transition">
                            {rightContent}
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default InfoBanner;
