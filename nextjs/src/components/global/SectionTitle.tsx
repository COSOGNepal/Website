'use client';

import React from "react";

export default function SectionTitle({ title }: { title: string }) {
    return (
        <h1 className="text-main-txt font-semibold text-heading">
            {title}
        </h1>
    )
}
