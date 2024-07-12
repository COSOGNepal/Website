import { margarine, rubik_wet_paint } from '@/lib/fonts'
import React from 'react'

function Landing() {
    return (
        <section className='h-[calc(100vh-120px)] bg-empactathon-bg-green flex  justify-center w-full items-center flex-col gap-3 md:gap-0'>
            <h1 className='md:text-title text-sub-title text-empactathon-dark font-bold'>
                First High School Hackathon
            </h1>

            <h1 className={`heading ${rubik_wet_paint.className} text-empactathon-primary md:text-[80px] text-[40px] text-center stroke-white  `}
                style={{
                    textShadow: "0px -6px white, 0px 10px white"
                }}>
                Empactathon
            </h1>

            <p className={`space-x-2 text-empactathon-dark md:text-sub-title text-para font-medium `}>
                <span className={`${margarine.className}`}>
                    Education,
                </span>
                <span className={`${margarine.className}`}>
                    Climate
                </span>
                <span className={`${margarine.className}`}>
                    and Health
                </span>
            </p>

            <a className="cta px-10 py-4 bg-empactathon-primary text-white rounded-md mt-section uppercase font-bold"
                href="https://forms.gle/CTPzvpR51dNa81mT6">
                Pre Register
            </a>

        </section>
    )
}

export default Landing
