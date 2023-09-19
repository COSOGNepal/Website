import React from "react";
import { Button } from "../global";
import Link from "next/link";

export default function Project({ data, id }: { data: string, id: string }) {
    return (
        <Link href={`/projects/${id}`} className=" cursor-pointer w-[60%] min-h-[500px] grid grid-cols-2  border-gray-300 border-[1px] overflow-hidden rounded-md">
            <div className="bg-red-300 bg-no-repeat bg-cover" style={{ backgroundImage: `url(/testImg.jpg)` }}>
            </div>
            <div className="p-[50px] " >
                <div>
                    <h1 className="text-main-txt font-bold text-sub-heading">NFT Marketplace</h1>
                    <p className="text-sec-txt font-medium text-small">
                        A great place to buy NFT and get rich as soon as possible it is just amazing project you will not get it but anyways keep looking press the links below, if not go to hell and don’t contact us ever again.
                    </p>
                </div>
                <div className="mt-[50px]">
                    <h1 className="text-main-txt font-bold text-sub-heading">Main features:</h1>
                    <p className="text-sec-txt font-medium text-small">
                        1. It is an amazing site. <br />
                        2. It will  work no matter what. <br />
                        3. It is made in yavascript. <br />
                        4. It uses css as the database so its very good.
                    </p>
                </div>
                <div className="flex justify-center mt-[50px]">
                    <Button text="See Code" styles="bg-sec-txt" />
                    <Button text="See in action" styles="ml-[50px] bg-dark-pri text-white" />
                </div>
            </div>
        </Link>
    )
}

