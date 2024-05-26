"use client";
import { useEffect, useState } from "react";
import { CountDown } from "./CountDown"
import { usePathname } from "next/navigation";

type TEventNavTopBar = {
    title: string,
    description: string,
    eventDate: string,
    countDown?: boolean,
    CTA?: {
        status: boolean,
        label: string,
        link: string,
    },
    EventLink?: string,
    excludeRoute?: string[],
}
export const EventNavTopBar = (data: TEventNavTopBar) => {
    const pathname = usePathname();
    const shouldRender = !data?.excludeRoute?.includes(pathname) || false;

    return shouldRender && <nav className="bg-primary  w-full brk-1400:px-[calc((100%-1400px)/2)] p-standard flex justify-between items-center">
        <div className="titleCon text-white pb-small ">
            <h2 className="font-bold text-lg">
                {data.title} &nbsp;
            </h2>
            {
                data?.description && <p className="text-white">
                    {data?.description}
                </p>
            }
        </div>

        {data?.CTA?.status &&
            <a href={data.CTA?.link}>
                <button className="bg-white-light p-3 rounded-md text-blue-700">
                    {data.CTA?.label}
                </button>
            </a>
        }
    </nav>
}

