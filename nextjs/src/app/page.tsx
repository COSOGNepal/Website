"use client";

import Link from "next/link";
import React from "react";


export default function Home() {
    return (
        <>
            <h1>
                This site is under construction.
                Stay tuned to be amazed.
            </h1>

            <p>
                Till then read some blogs.
                <Link href={"/blogs"}> Go to blogs </Link>
            </p>

        </>
    );

};






















