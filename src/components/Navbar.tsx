"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);

  return (
    <>
      <div className="fixed hamcontainer z-50 py-6 px-6 md:px-10">
        <div className="relative w-full h-full cursor-pointer"
            onClick={() => {
              setNavActive(!navActive);
            }}
        >
          <Image
            src={navActive ? "/assets/crossIcon.svg" : "/assets/hamIcon.svg"}
            width={navActive ? 30 : 50}
            height={navActive ? 30 : 50}
            className="z-30"
            alt="Nav Icon"
          />
        </div>
      </div>
      <nav
        className={`fixed inset-0 p-0 min-w-screen min-h-screen z-40 ${
          !navActive ? "pointer-events-none" : "pointer-events-auto"
        }`}
      >
        <main
          className={`${
            !navActive ? "-translate-y-full " : "translate-y-0"
          } relative w-full h-full grid place-content-center duration-500 transition `}
        >
          <div className="backdrop-blur-[20px] absolute inset-0 -z-10 bg-[rgba(255,255,255,0.5)]"></div>
          <ul className="text-sub-title font-small flex items-center flex-col gap-3 text-faded uppercase">
            <Link href="/">
              <li
                onClick={() => setNavActive(!navActive)}
                className="link-underline"
              >
                Home
              </li>
            </Link>
            <Link href="/about">
              <li
                onClick={() => setNavActive(!navActive)}
                className="link-underline"
              >
                About us
              </li>
            </Link>
            <Link href="/events">
              <li
                onClick={() => setNavActive(!navActive)}
                className="link-underline"
              >
                Events
              </li>
            </Link>
            <Link href="https://blog.cosognepal.org">
              <li
                onClick={() => setNavActive(!navActive)}
                className="link-underline"
              >
                Blog
              </li>
            </Link>
            <Link href="/contact">
              <li
                onClick={() => setNavActive(!navActive)}
                className="link-underline"
              >
                Contact
              </li>
            </Link>
            <Link href="/donate">
              <li
                className="link-underline"
                onClick={() => setNavActive(!navActive)}
              >
                Donate
              </li>
            </Link>
          </ul>
        </main>
      </nav>
    </>
  );
};

export default Navbar;
