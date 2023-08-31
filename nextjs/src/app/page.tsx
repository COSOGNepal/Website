"use client"

import React from "react";
import { Nav } from "@/components/global";
import { useRouter } from "next/navigation";
import Icons from "@/components/home/Icons";

export default function Home(): React.JSX.Element{
  const router = useRouter();
  return(
    <>
      <Nav />
      <div className="bg-main-gradient h-screen w-full flex items-center justify-center flex-col">
        <h1 className="w-full text-center text-6xl font-extrabold md:text-4xl ">
          Code to inspire, Code to change
          <br />
          Code for Social Good
        </h1>


        <div className='flex align-middle mt-20'>
          <div className='h-10 leading-10 bg-btn-sec-red text-center rounded-lg w-44 cursor-pointer opacity-50 hover:opacity-70' onClick={()=>{router.push("login")}}>
           Learn More 
          </div>
          <div className='h-10 leading-10 bg-btn-pri-red text-center rounded-lg w-44 ml-5 cursor-pointer opacity-90 hover:opacity-100' onClick={()=>{router.push("register")}}>
            Join Now
          </div>
        </div>
        <Icons />
      </div> 
    </>
  )
}
