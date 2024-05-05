"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Icon } from "./Icon";
{/* import { EventNavTopBar } from "./NavTopBar"; */ }

const Navbar = () => {
    const [navActive, setNavActive] = useState(false);

    return (
        <>
            {/* <EventNavTopBar
                title="Get to know the tech before you know the result of ten"
                countDown={true}
                CTA={{ status: true, label: "Learn More" }}
                EventLink="/events/techafterten"
                description="What to learn where to learn and how to learn? Tech after ten join the conf to know more!!"
                eventDate="2024-05-04 11:59 am"
            /> */}
            <div
                className={`sticky top-small left-small hamcontainer z-50 bg-white/80 backdrop-blur-[20px] rounded-full md:hidden cursor-pointer hover:bg-gray-bg h-10 w-10 flex items-center justify-center `}
                onClick={() => {
                    setNavActive(!navActive);
                }}
            >
                {
                    !navActive
                        ? <Icon
                            iconName="navopen"
                            className="h-5 w-5"
                        />
                        : <Icon
                            iconName="close"
                            className="h-5 w-5"
                        />
                }
            </div>

            <nav
                className={`md:sticky fixed  left-0 top-0 overflow-hidden  z-40 md:pointer-events-auto
                ${!navActive ? "pointer-events-none" : "pointer-events-auto"}
                w-screen`}
            >

                <main
                    className={`${!navActive ? "-translate-y-full " : "translate-y-0"
                        } relative w-full h-screen  grid place-content-center duration-500 transition md:w-full md:h-[100px]
                        md:translate-y-0 border-bottom-black border-bottom-2 md:min-h-[100px] `}
                >
                    <div className={`
                    backdrop-blur-[20px] absolute inset-0 -z-10 bg-[rgba(255,255,255,0.5)]
                        md:bg-[rgba(255,255,255,0.8)] 
                        `}></div>
                    <Link href="/">
                        <img
                            src={"/assets/logo.png"}
                            height={50}
                            width={50}
                            className={"absolute hidden md:block left-block top-[25px]  brk-1400:left-[calc((100%-1400px)/2)]"}
                            alt={"nav logo"}
                        />
                    </Link>
                    <ul className={`
                        text-sub-title font-small flex items-center flex-col gap-3 text-faded uppercase
                        md:flex-row md:space-x-small md:items-center md:h-full md:max-w-[600px] md:text-sub-para md:margin-l-auto
                        md:absolute md:right-block brk-1400:right-[calc((100%-1400px)/2)]
                        `}>
                        <Link href="/">
                            <li
                                className="link-underline"
                                onClick={() => setNavActive(false)}
                            >
                                Home
                            </li>
                        </Link>
                        <Link href="/about">
                            <li
                                className="link-underline"
                                onClick={() => setNavActive(false)}
                            >
                                About us
                            </li>
                        </Link>
                        <Link href="/events">
                            <li
                                className="link-underline"
                                onClick={() => setNavActive(false)}
                            >
                                Events
                            </li>
                        </Link>
                        <Link href="https://blog.cosognepal.org">
                            <li
                                className="link-underline"
                                onClick={() => setNavActive(false)}
                            >
                                Blog
                            </li>
                        </Link>
                        <Link href="/contact">
                            <li
                                className="link-underline"
                                onClick={() => setNavActive(false)}
                            >
                                Contact
                            </li>
                        </Link>
                        <Link href="/donate">
                            <li
                                className="link-underline"
                                onClick={() => setNavActive(false)}
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
