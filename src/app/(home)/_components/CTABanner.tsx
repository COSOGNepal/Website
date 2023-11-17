import Link from "next/link";
import React from "react";

const CTABanner = () => {
  return (
    <main className="min-h-fit h-44 text-white bg-primary bg-[url('/assets/bgPattern.svg')] bg-contain bg-blend-multiply my-24 grid grid-cols-1 md:grid-cols-3 justify-center place-items-center pl-2 md:pl-16 px-5 py-4">
      <div className="col-span-2 text-lg text-white">
        Collaboration is one of the most powerfull thing, one must take part
        with one another to better this world and to preserve kindness in
        humanity.
      </div>
      <div className="col-span-1">
        <Link href={"/collaborate-or-something-idk-rn"}>
          <button className="bg-gray-bg px-12 rounded-sm text-faded text-xl font-bold py-3 hover:bg-transparent hover:text-white transition border">
            Lets Collaborate
          </button>
        </Link>
      </div>
    </main>
  );
};

export default CTABanner;
