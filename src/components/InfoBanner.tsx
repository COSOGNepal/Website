import Link from "next/link";
import React, { Children } from "react";

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
    <main className="h-fit  text-white bg-primary bg-[url('/assets/bgPattern.svg')] bg-contain bg-blend-multiply my-24 grid grid-cols-1 md:grid-cols-3 justify-center place-items-center pl-2 py-8">
      <div className="col-span-2  text-white flex justify-start">
        {leftContent}
      </div>
      <div className="col-span-1">
        <Link href={CTALink}>
          <button className="bg-gray-bg px-12 rounded-sm text-faded text-xl font-bold py-3 hover:bg-transparent hover:text-white transition border">
            {rightContent}
          </button>
        </Link>
      </div>
    </main>
  );
};

export default InfoBanner;
