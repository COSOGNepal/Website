"use client";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed inset-0 p-0 min-w-screen min-h-screen  ">
      <div className="absolute hamcontainer ">
        <Image
          src={"/assets/hamicon.png"}
          width={50}
          height={50}
          alt="mitho burger"
        />
      </div>
      <main className="relative w-full h-full grid place-content-center">
        <div className="backdrop-blur-[6px] absolute inset-0 -z-10 bg-transparent">
          {" "}
        </div>
        <ul className="text-3xl font-small flex items-center flex-col gap-3 text-faded">
          <li className="underline">Home</li>
          <li className="cursor-pointer">About Us </li>
          <li className="cursor-pointer">Events </li>
          <li className="cursor-pointer">Blogs </li>
          <li className="cursor-pointer">Contact </li>
          <li className="cursor-pointer">Donate</li>
        </ul>
      </main>
    </nav>
  );
};

export default Navbar;
