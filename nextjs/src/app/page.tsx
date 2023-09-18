"use client";

import React from "react";
import { Hero, VideoDemo } from "./index";
import Numbers from "@/components/home/Numbers";

export default function Home() {
  return (
    <>
      <Hero />
      <VideoDemo />
      {/* to be replaced with original goals component */}
      <div className="h-[500px] flex justify-center items-center text-black text-center text-4xl font-extrabold">
        this is for goals section
      </div>

      <Numbers />
    </>
  );
}
