import React from "react";
import Image from "next/image";

export default function Project({ data }: { data: string }) {
    return (
        <div className="w-[75%] h-[500px] flex flex-row border-gray-300 border-[1px]">
            <div className="w-[50%] h-full object-cover">
                <Image alt="project Image" src={"/testImg.jpg"} width={2560} height={1440} className="object-cover w-full h-full" />
            </div>

            <div className="p-[50px]" >
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
            </div>
        </div>
    )
}
