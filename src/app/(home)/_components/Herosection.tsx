import Image from "next/image";
import React from "react";

const Herosection = () => {
  return (
    <section className="w-screen min-h-screen">
      <main className="relative flex p-0 z-10  w-screen min-h-screen">
        <div className="item1 absolute ">
          <div className="relative w-40 h-52  md:w-56 md:h-64 ">
            <Image src={"/assets/bgShape1.svg"} fill alt={"background"} />
          </div>
        </div>
        <div className="item2 absolute -bottom-20 left-1/2 -translate-x-1/2">
          <div className="relative w-52 h-64  md:w-72 md:h-96 ">
            <Image src={"/assets/bgShape2.svg"} fill alt={"background"} />
          </div>
        </div>

        <div className="socialmedia z-50 h-fit w-fit absolute  cursor-help bottom-5 right-16 flex sm:flex-col gap-3">
          <a
            href="https://www.facebook.com/Cosognepal"
            target="blank"
            className="cursor-pointer"
          >
            <Image
              src={"/assets/facebook_logo.svg"}
              width={40}
              height={40}
              alt="social"
            />
          </a>
          <a href="https://www.facebook.com/Cosognepal" target="blank">
            <Image
              src={"/assets/instagram_logo.svg"}
              width={40}
              height={40}
              className="cursor-pointer"
              alt="social"
            />
          </a>
          <a href="https://www.linkedin.com/company/cosognepal/" target="blank">
            <Image
              src={"/assets/linkedin_logo.svg"}
              width={40}
              height={40}
              alt="social"
            />
          </a>
        </div>
        <main className="w-full h-auto flex ">
          <div className="left pl-8 md:pl-32 flex-1 relative z-0 ">
            <div className="flex flex-col gap-5 h-full justify-center ">
              <div className="text-2xl md:text-3xl text-dark-primary font-bold">
                <h2>Coding is great and </h2>
                <h2>you look great while coding</h2>
              </div>
              <p className="w-full text-left text-faded text-sm md:text-base">
                Designing is way way better than coding, since you have the
                power to control the coders which is way powerfull. Do not
                believe me give it a shot.
              </p>
              <button
                onClick={() => {
                  console.log("first");
                }}
                className="bg-primary cursor-pointer w-44 h-12 text-white mt-8 text-center py-2"
              >
                Be a member
              </button>
            </div>
          </div>
          <div className="hidden sm:grid right flex-1  place-items-center">
            <div className="relative w-64 h-64">
              <Image src={"/assets/logo.png"} fill alt="logo" />
            </div>
          </div>
        </main>
      </main>
    </section>
  );
};

export default Herosection;
