import { Icon } from '@/components/Icon'
import { margarine, rubik_wet_paint } from '@/lib/fonts'
import React from 'react'

function Landing() {
    return (
        <section className="h-[calc(100vh-120px)] bg-empactathon-bg-green flex  justify-center w-full items-center flex-col gap-3 md:gap-0">

            {/* cloud  leaf */}
            <Icon iconName="drippingCloud" className="absolute top-1/3 left-0 h-[20vw] -scale-x-100 z-10" />

            {/* cloud  right */}
            <Icon iconName="drippingCloud" className="absolute top-1/3 right-0 h-[20vw] -scale-x-100 z-10" />

            {/* right bottom grass */}
            <Icon iconName="grass" className="absolute bottom-0 right-0  h-[30vw] z-20" />

            {/* left bottom  grass */}
            <Icon iconName="grass" className="absolute bottom-0 left-0 -scale-x-100 h-[30vw] z-20" />

            {/* Top left  leaf */}
            <Icon iconName="leaf" className="absolute top-10 left-0 h-[10vw] z-20" />

            {/* Top right  leaf */}
            <Icon iconName="leaf" className="absolute top-10 right-0 h-[10vw] -scale-x-100 z-20" />



            <h1 className="md:text-title text-sub-title text-empactathon-dark font-bold z-30">
                First High School Hackathon
            </h1>

            <h1 className={`heading ${rubik_wet_paint.className} text-empactathon-primary md:text-[80px] text-[40px] text-center stroke-white  z-30`}
                style={{
                    textShadow: "0px -6px white, 0px 10px white"
                }}>
                Empactathon
            </h1>

            <p className={`space-x-2 text-empactathon-dark md:text-sub-title text-para font-medium z-30`}>
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

            <a className="cta px-10 py-4 bg-empactathon-primary text-white rounded-md mt-section uppercase font-bold z-30"
                href="https://forms.gle/CTPzvpR51dNa81mT6">
                Pre Register
            </a>

        </section>
    )
}

export default Landing
