"use client"
import img from "next/image";
import React from "react";

const Herosection = () => {
    return (
        <section className="w-screen max-w-[1400px] brk-1400:mx-auto h-screen">
            <main className="relative top-0  flex z-10 w-full h-full">
                <div className="item1 absolute">
                    <div className="relative w-40 h-52  md:w-56 md:h-64 ">
                        <img src={"/assets/bgShape1.svg"} alt={"background"} />
                    </div>
                </div>
                <div className="item2 absolute -bottom-20 left-1/2 -translate-x-1/2">
                    <div className="relative w-52 h-64  md:w-72 md:h-96 ">
                        <img src={"/assets/bgShape2.svg"} alt={"background"} />
                    </div>
                </div>
                <div className="socialmedia z-[100] h-fit w-fit absolute bottom-standard right-standard md:right-standard flex sm:flex-col gap-small">
                    <a
                        href="https://www.facebook.com/Cosognepal"
                        target="blank"
                        className="cursor-pointer"
                    >
                        <img
                            src={"/assets/facebook_logo.svg"}
                            width={40}
                            height={40}
                            alt="social"
                        />
                    </a>
                    <a href="https://www.instagram.com/cosognepal" target="blank">
                        <img
                            src={"/assets/instagram_logo.svg"}
                            width={40}
                            height={40}
                            className="cursor-pointer"
                            alt="social"
                        />
                    </a>
                    <a href="https://www.linkedin.com/company/cosognepal/" target="blank">
                        <img
                            src={"/assets/linkedin_logo.svg"}
                            width={40}
                            height={40}
                            alt="social"
                        />
                    </a>
                </div>
                <main className="w-full flex flex-col-reverse justify-center h-auto md:flex-row brk-1400:px-0 px-standard">
                    <div className="left brk-1400:px-0 relative z-0 w-full mt-block md:mt-0">
                        <div className="flex flex-col h-full justify-center space-y-block">
                            <div className="text_content">
                                <div className="text-title text-dark-primary font-bold md:text-heading">
                                    <h2>
                                        <span className="hidden sm:inline-block">
                                            Coding for Social Good Nepal
                                        </span>
                                        <br />
                                        CoSoG Nepal
                                    </h2>
                                </div>
                                <p className="max-w-[1000px] text-left text-faded text-para mt-standard leading-tight">
                                    CoSoG Nepal is a non-profit organization working to promote Computer Science Education and Initiate CS Clubs in Secondary/High Schools in Nepal and facilitating charitable coding initiatives to aid in Nepal&apos;s digitalization.
                                </p>
                            </div>
                            <button
                                onClick={() => {
                                    window.open(
                                        "https://forms.gle/gRPEzxmbL9febVuMA",
                                        "_blank"
                                    );
                                }}
                                className="bg-primary cursor-pointer h-12 text-white text-center py-2 mt-block rounded-[5px] font-medium w-full sm:w-48"
                            >
                                Join our community
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="relative w-64 h-64">
                            <img src={"/assets/logo.png"} alt="logo" />
                        </div>
                    </div>
                </main>
            </main>
        </section>
    );
};

export default Herosection;
