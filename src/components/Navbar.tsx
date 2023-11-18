"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
    const [navClicked, setNavClicked] = useState(false);
    return (
        <>
            <div className="fixed hamcontainer z-50 py-6 px-6 md:px-10">
                <div className="relative w-full h-full">
                    <Image
                        src={navClicked ? "/assets/crossIcon.svg" : "/assets/hamIcon.svg"}
                        width={navClicked ? 30 : 50}
                        height={navClicked ? 30 : 50}
                        className=" cursor-pointer  z-30"
                        alt="mitho burger"
                        onClick={() => {
                            setNavClicked(!navClicked);
                        }}
                    />
                </div>
            </div>
            <nav
                className={`fixed inset-0 p-0 min-w-screen min-h-screen z-40 ${!navClicked ? "pointer-events-none" : "pointer-events-auto"
                    }`}
            >
                <main
                    className={`${!navClicked ? "-translate-y-full " : "translate-y-0"
                        } -translate-y-full relative w-full h-full grid place-content-center duration-500 transition `}
                >
                    <div className="backdrop-blur-[20px] absolute inset-0 -z-10 bg-transparent">
                    </div>

                    <ul className="text-2xl font-small flex items-center flex-col gap-3 text-faded uppercase">
                        <Link href="#">
                            <li className="link link-underline link-underline-black cursor-pointer ">
                                Home
                            </li>
                        </Link>
                        <Link href="#">
                            <li className="link link-underline link-underline-black cursor-pointer ">
                                About us
                            </li>
                        </Link>
                        <Link href="#">
                            <li className="link link-underline link-underline-black cursor-pointer ">
                                Events
                            </li>
                        </Link>
                        <Link href="#">
                            <li className="link link-underline link-underline-black cursor-pointer ">
                                Blog
                            </li>
                        </Link>
                        <Link href="#">
                            <li className="link link-underline link-underline-black cursor-pointer ">
                                Contact
                            </li>
                        </Link>
                        <Link href="#">
                            <li className="link link-underline link-underline-black cursor-pointer ">
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
