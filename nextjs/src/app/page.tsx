import React from "react";
import { Nav } from "@/components/global";

export default function Home() {
  return(
    <>
      <Nav />
      <div className="bg-main-gradient h-screen w-full flex items-center justify-center">
        <h1 className="w-full text-center text-6xl font-extrabold md:text-4xl ">
          Code to inspire, Code to change
          <br />
          Code for Social Good
        </h1>
      </div> 
    </>
  )
}
