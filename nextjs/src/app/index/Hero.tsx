import React from "react";
import { useRouter } from "next/navigation";
import Icons from "@/components/home/Icons";

const Hero = () => {
  const router = useRouter();

  return (
    <div
      className="bg-main-gradient h-screen w-full flex items-center justify-center flex-col relative"
      id="topSection"
    >
      {/* background icons */}
      <Icons />
      <h1 className="w-full text-center text-4xl font-extrabold max-md:text-3xl">
        Code to inspire, Code to change
        <br />
        Code for Social Good
      </h1>
      <div className="flex align-middle mt-20">
        <div
          className="h-10 leading-10 bg-btn-sec font-normal text-center rounded-lg w-44 cursor-pointer opacity-50 hover:bg-btn-sec-hover text-sm"
          onClick={() => {
            router.push("team");
          }}
        >
          Learn More
        </div>
        <div
          className="h-10 leading-10 bg-btn-pri font-bold text-center rounded-lg w-44 ml-5 cursor-pointer opacity-90 hover:opacity-100 text-sm"
          onClick={() => {
            router.push(
              "https://docs.google.com/forms/d/e/1FAIpQLScnfnp9w6Y4YNwbMGHj-A23ztDUGe0nN-aBS3tfctAQWAfgfg/viewform?usp=send_form"
            );
          }}
        >
          Join Now
        </div>
      </div>
    </div>
  );
};
export default Hero;
