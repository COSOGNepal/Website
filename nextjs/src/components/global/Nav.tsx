"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function Nav(): React.JSX.Element {
  const [scrollPixel, setScrollPixel] = useState(scrollY);
  window.onscroll = () => {
    setScrollPixel(scrollY); // console.log(window.scrollY);
  };

  const router = useRouter();

  return (
    <nav
      className={`fixed top-0 px-8 py-4 flex tems-center w-full z-50 transition`}
      style={{ background: scrollPixel === 0 ? "transparent" : "white" }}
    >
      <Link href={"/"}>
        <Image
          src="/logo.png"
          alt="logo"
          width={50}
          height={50}
          className="h-12 cursor-pointer"
        />
      </Link>
      <div className="navContents flex items-center flex-1 justify-center ">
        <Link
          href={"/"}
          className="hover:bg-gray-300 text-white-500 rounded-md font-bold"
          style={{ color: scrollPixel === 0 ? "white" : "black" }}
        >
          Home
        </Link>
        <Link
          href={"/blog"}
          className="text-base opacity-70 hover:opacity-100 text-white mx-4"
          style={{ color: scrollPixel === 0 ? "white" : "black" }}
        >
          Blog
        </Link>
        <Link
          href={"/team"}
          className="text-white text-base opacity-70 hover:opacity-100 mr-4"
          style={{ color: scrollPixel === 0 ? "white" : "black" }}
        >
          About us
        </Link>
        <Link
          href={"/contact"}
          className="text-white text-base opacity-70 hover:opacity-100"
          style={{ color: scrollPixel === 0 ? "white" : "black" }}
        >
          Contact
        </Link>
      </div>

      <div className="flex align-middle">
        <div
          className="h-10 leading-10 bg-btn-sec text-center rounded-lg text-sm w-44 cursor-pointer opacity-90"
          style={{ color: scrollPixel === 0 ? "white" : "black" }}
          onClick={() => {
            router.push("/authenticate");
          }}
        >
          Connect
        </div>
      </div>
    </nav>
  );
}

export default Nav;
