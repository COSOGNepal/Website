"use client"
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import React from "react";
//import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const partenersData = [
    "AWS Cloud Club",
    "Code for Change",
    "iTech Karnali",
    "Sagarmatha Techfest",
    "Hackademedia",
    "Sagarmatha Hacktoberfest"
]

// const slidesPerView = Math.min(innerWidth - (partenersData.length * 20), 1400 - 20 * partenersData.length) / 192

const Partners = () => {
    return (
        <main className="bg-gray-bg p-block space-y-block px-standard md:px-block brk-1400:px-0">
            <SectionTitle title="we've partnered with" />
            <section>
                <div className="flex space-x-standard justify-center max-w-[1400px] mx-auto overflow-hidden">
                    {
                        partenersData.map((partnerName, index) =>
                            <div key={index}>
                                <div className={`w-48 h-48 aspect-square relative grid place-items-center bg-white rounded-md`}>
                                    <Image
                                        src={`/assets/images/Partners/${partnerName
                                            .split(" ")
                                            .map(token => token.toLowerCase())
                                            .join("_")}.png`
                                        }
                                        height={150}
                                        width={150}
                                        alt={partnerName}
                                    />
                                </div>
                            </div>
                        )
                    }
                </div>
            </section>
        </main>
    );
};

export default Partners;
