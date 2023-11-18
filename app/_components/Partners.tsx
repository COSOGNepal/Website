import Image from "next/image";
import React from "react";

const Partners = () => {
  return (
    <main className="bg-gray-bg my-12 py-12">
      <h2
        className={"text-xl md:text-3xl text-faded font-normal p-4 md:pl-24 "}
      >
        We've partnered with
      </h2>
      <section className="flex gap-4 justify-center px-2 md:px-28 w-screen ">
        <div className="w-48">
          <Image
            src={"/assets/partner_demo.png"}
            width={130}
            height={130}
            alt="partner__logo"
          />
        </div>
        <div className="w-48">
          <Image
            src={"/assets/partner_demo.png"}
            width={130}
            height={130}
            alt="partner__logo"
          />
        </div>
        <div className="w-48">
          <Image
            src={"/assets/partner_demo.png"}
            width={130}
            height={130}
            alt="partner__logo"
          />
        </div>
        <div className="w-48">
          <Image
            src={"/assets/partner_demo.png"}
            width={130}
            height={130}
            alt="partner__logo"
          />
        </div>
        <div className="w-48">
          <Image
            src={"/assets/partner_demo.png"}
            width={130}
            height={130}
            alt="partner__logo"
          />
        </div>
      </section>
    </main>
  );
};

export default Partners;
