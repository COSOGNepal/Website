import Image from "next/image";
import React from "react";

const Partners = () => {
  return (
    <main className="bg-gray-bg my-12 py-12">
      <h2
        className={"text-xl md:text-3xl text-faded font-normal p-4 md:pl-24 "}
      >
        We&apos;ve partnered with
      </h2>
      <section className="flex gap-4 justify-center px-2 md:px-28 w-screen ">
        <div className="w-48">
          <Image
            src={"/images/Partners/codeforchange.png"}
            width={130}
            height={130}
            alt="Code for Change"
          />
        </div>
        <div className="w-48">
          <Image
            src={"/images/Partners/aws_club.png"}
            width={130}
            height={130}
            alt="AWS Cloud Club"
          />
        </div>
        <div className="w-48">
          <Image
            src={"/images/Partners/itechkarnali.png"}
            width={130}
            height={130}
            alt="iTech Karnali"
          />
        </div>
        <div className="w-48">
          <Image
            src={"/images/Partners/sagarmatha_techfest.png"}
            width={130}
            height={130}
            alt="Sagarmatha Techfest"
          />
        </div>
        <div className="w-48">
          <Image
            src={"/images/Partners/sagarmatha_hacktoberfest.png"}
            width={130}
            height={130}
            alt="Sagarmantha Hacktoberfest"
          />
        </div>
        <div className="w-48">
          <Image
            src={"/images/Partners/hackademedia.png"}
            width={130}
            height={130}
            alt="Hackademedia"
          />
        </div>
      </section>
    </main>
  );
};

export default Partners;
