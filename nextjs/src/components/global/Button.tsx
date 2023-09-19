"use client"
import React from "react";

interface buttonProps {
    text: string,
    styles: string,
}

export default function Button({ styles, text }: buttonProps) {
    return <button className={`min-w-[150px] w-[100%] h-[50px] rounded-[4px] ${styles}`}>
        {text}
    </button>
}
