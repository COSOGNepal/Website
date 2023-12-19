"use client"
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const partenersData = [
    "AWS Cloud Club",
    "Code for Change",
    "iTech Karnali",
    "Sagarmatha Techfest",
    "Hackademedia",
    "Sagarmatha Hacktoberfest"
]
const slidesPerView = Math.round(Math.min(innerWidth, 1400) / 192) - 1

const Partners = () => {
    return (
        <main className="bg-gray-bg p-block space-y-block px-standard md:px-block brk-1400:px-0">
            <SectionTitle title="we've partnered with" />
            <section className="flex space-x-standard justify-center max-w-[1400px] mx-auto overflow-hidden">
                <Swiper spaceBetween={10} autoplay slidesPerView={slidesPerView}>
                    {
                        partenersData.map((partnerName, index) =>
                            <SwiperSlide key={index}>
                                <div className={`w-48 h-48 aspect-square relative grid place-items-center bg-white rounded-md`}>
                                    <Image
                                        src={`/images/Partners/${partnerName
                                            .split(" ")
                                            .map(token => token.toLowerCase())
                                            .join("_")}.png`
                                        }
                                        height={150}
                                        width={150}
                                        alt={partnerName}
                                    />
                                </div>
                            </SwiperSlide>
                        )

                    }
                </Swiper>
            </section>
        </main>
    );
};

export default Partners;
