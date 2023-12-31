import Link from "next/link";
import React from "react";

const CTABanner = () => {
    return (
        <main className="min-h brk-1400:px-[calc(((100%-1400px)/2)+50px)] text-white bg-primary bg-[url('/assets/bgPattern.svg')] bg-no-repeat bg-cover bg-fixed bg-blend-multiply flex items-center justify-between flex-col space-y-standard md:space-y-0 p-standard lg:py-block md:space-x-standard md:justify-center md:flex-row">
            <div className="text-para text-white md:w-[70%]">
                Collaboration is one of the most powerfull thing, one must take part
                with one another to better this world and to preserve kindness in
                humanity.
            </div>
            <Link href={"https://forms.gle/nKwtAMG2Q4rL57QW7"} className="w-full md:w-auto min-w-max max-w-[480px]">
                <button className="bg-gray-bg w-full px-12 rounded-sm text-faded text-para font-medium uppercase py-3 hover:bg-blue hover:text-white transition">
                    Lets Collaborate
                </button>
            </Link>
        </main>
    );
};

export default CTABanner;
