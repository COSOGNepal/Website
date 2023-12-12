"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
    const [navActive, setNavActive] = useState(false);

    return (
        <>
            <div className="fixed hamcontainer z-50 p-standard  bg-[rgba(255,255,255,0.8)] backdrop-blur-[20px] m-standard rounded-full md:hidden">
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
                className={`fixed left-0 overflow-hidden w-screen  min-h-screen md:min-h-[100px] h-[100px] z-40 md:pointer-events-auto${!navActive ? "pointer-events-none" : "pointer-events-auto"}`}
            >
                <main
                    className={`${!navActive ? "-translate-y-full " : "translate-y-0"
                        } relative w-full h-full grid place-content-center duration-500 transition md:w-full md:h-[100px] md:translate-y-0 border-bottom-black border-bottom-2  `}
                >
                    <div className={`
                    backdrop-blur-[20px] absolute inset-0 -z-10 bg-[rgba(255,255,255,0.5)]
                        md:bg-[rgba(255,255,255,0.8)] 
                        `}></div>
                    <Link href="/">
                        <Image
                            src={"/assets/logo.png"}
                            height={50}
                            width={50}
                            className={"absolute hidden md:block left-block top-[25px] "}
                            alt={"nav logo"}
                        />
                    </Link>
                    <ul className={`
                    text-sub-title font-small flex items-center flex-col gap-3 text-faded uppercase
                        md:flex-row md:space-x-small md:items-center md:h-full md:max-w-[600px] md:text-sub-para md:margin-l-auto md:absolute md:right-block
                        `}>
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
