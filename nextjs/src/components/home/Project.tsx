import React, { MouseEvent, useEffect } from "react";
import { Button } from "../global";
import Link from "next/link";
import "./style/project.css";

export default function Project({ data, id }: { data: string, id: string }) {
    const seeCodeAction = () => { };
    const seeInAction = () => { };

    const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
        const rectPostion = e.currentTarget.getBoundingClientRect(),
            x = e.clientX - rectPostion.x,
            y = e.clientY - rectPostion.y,
            _width = rectPostion.width,
            _height = rectPostion.height;

        const travelPer = {
            x: x / _width,
            y: y / _height
        };
        const threshold = 8,
            rotateX = travelPer.x * threshold,
            rotateY = travelPer.y * threshold;

        e.currentTarget.style.setProperty("--mouseX", `${x}px`)
        e.currentTarget.style.setProperty("--mouseY", `${y}px`)
        e.currentTarget.style.transform = `perspective(${rectPostion.width}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`
    }

    const resetTransform = (e: MouseEvent<HTMLAnchorElement>) => {
        e.currentTarget.style.transform = "";
    }

    return (
        <Link
            href={`/projects/${id}`}
            className="wrapper_container mt-[50px] p-[1px] cursor-pointer w-[80%] max-w-[1000px] min-h-[500px] rounded-md overflow-hidden inline-block max-md:w-full"
            onMouseMove={handleMouseMove}
            onMouseLeave={resetTransform}
        >
            <div className="border_element"></div>
            <div
                className="main_container h-full w-full rounded-[13px] grid grid-cols-2  max-md:grid-cols-1  max-md:grid-rows-prjt-min-bfk "
            >
                <div
                    className="image_section bg-no-repeat bg-cover relative group"
                    style={{ backgroundImage: `url(/testImg.jpg)` }}
                >
                    <div
                        className="image_section_overlay opacity-0 group-hover:opacity-100 bg-overlay absolute top-0 left-0 flex justify-center items-center h-full w-full">
                        <LinkIcon />
                    </div>
                </div>
                <div className="p-[50px] text_section" >
                    <div className="text_section_fp1">
                        <h1 className="text-main-txt font-bold text-sub-heading">NFT Marketplace</h1>
                        <p className="text-sec-txt font-medium text-small">
                            A great place to buy NFT and get rich as soon as possible it is just amazing project you will not get it but anyways keep looking press the links below, if not go to hell and don’t contact us ever again.
                        </p>
                    </div>
                    <div className="mt-[50px] text_section_fp2">
                        <h1 className="text-main-txt font-bold text-sub-heading">Main features:</h1>
                        <p className="text-sec-txt font-medium text-small">
                            1. It is an amazing site. <br />
                            2. It will  work no matter what. <br />
                            3. It is made in yavascript. <br />
                            4. It uses css as the database so its very good.
                        </p>
                    </div>
                    <div className="flex justify-center mt-[50px] action_buttons">
                        <Button text="See Code" styles="bg-sec-txt" onclick={seeCodeAction} />
                        <Button text="See in action" styles="ml-[50px] bg-dark-pri text-white" onclick={seeInAction} />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export function LinkIcon({ className }: { className?: string }) {
    return (
        <div className={className}>
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M75 86.4584H25C21.9611 86.4584 19.0466 85.2512 16.8977 83.1023C14.7489 80.9535 13.5417 78.039 13.5417 75.0001V25.0001C13.5417 21.9611 14.7489 19.0467 16.8977 16.8978C19.0466 14.749 21.9611 13.5417 25 13.5417H50C50.8288 13.5417 51.6236 13.871 52.2097 14.457C52.7957 15.0431 53.125 15.8379 53.125 16.6667C53.125 17.4955 52.7957 18.2904 52.2097 18.8765C51.6236 19.4625 50.8288 19.7917 50 19.7917H25C23.6187 19.7917 22.2939 20.3405 21.3171 21.3172C20.3404 22.294 19.7917 23.6187 19.7917 25.0001V75.0001C19.7917 76.3814 20.3404 77.7062 21.3171 78.6829C22.2939 79.6597 23.6187 80.2084 25 80.2084H75C76.3813 80.2084 77.7061 79.6597 78.6828 78.6829C79.6596 77.7062 80.2083 76.3814 80.2083 75.0001V50.0001C80.2083 49.1713 80.5376 48.3764 81.1236 47.7904C81.7097 47.2043 82.5045 46.8751 83.3333 46.8751C84.1621 46.8751 84.957 47.2043 85.543 47.7904C86.1291 48.3764 86.4583 49.1713 86.4583 50.0001V75.0001C86.4583 78.039 85.2511 80.9535 83.1023 83.1023C80.9534 85.2512 78.0389 86.4584 75 86.4584ZM83.3333 36.4584C82.5079 36.4476 81.7193 36.1149 81.1355 35.5312C80.5518 34.9475 80.2191 34.1589 80.2083 33.3334V19.7917H66.6667C65.8379 19.7917 65.043 19.4625 64.4569 18.8765C63.8709 18.2904 63.5417 17.4955 63.5417 16.6667C63.5417 15.8379 63.8709 15.0431 64.4569 14.457C65.043 13.871 65.8379 13.5417 66.6667 13.5417H83.3333C84.1588 13.5525 84.9474 13.8852 85.5311 14.469C86.1148 15.0527 86.4475 15.8413 86.4583 16.6667V33.3334C86.4475 34.1589 86.1148 34.9475 85.5311 35.5312C84.9474 36.1149 84.1588 36.4476 83.3333 36.4584Z" fill="white" />
                <path d="M56.25 46.8749C55.4461 46.8134 54.6982 46.4395 54.1667 45.8332C53.6542 45.2603 53.3709 44.5186 53.3709 43.7499C53.3709 42.9812 53.6542 42.2395 54.1667 41.6666L81.25 14.5832C81.5361 14.2762 81.8811 14.03 82.2644 13.8592C82.6478 13.6884 83.0616 13.5965 83.4812 13.5891C83.9008 13.5817 84.3175 13.6589 84.7067 13.8161C85.0958 13.9732 85.4493 14.2072 85.746 14.5039C86.0427 14.8007 86.2767 15.1541 86.4339 15.5433C86.591 15.9324 86.6682 16.3492 86.6608 16.7688C86.6534 17.1883 86.5616 17.6022 86.3908 17.9855C86.22 18.3688 85.9737 18.7138 85.6667 18.9999L58.3333 45.8332C57.8018 46.4395 57.0539 46.8134 56.25 46.8749Z" fill="white" />
            </svg>
        </div>
    )
}
