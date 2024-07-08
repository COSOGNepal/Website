import { rubik_wet_paint } from '@/lib/fonts'
import React from 'react'

function Landing() {
    return (
        <section className='min-h-screen bg-empactathon-bg-green flex  justify-center w-full items-center flex-col'>

            <h1 className={`heading ${rubik_wet_paint.className} text-empactathon-primary text-[80px] text-center stroke-white`}
                style={{
                    textShadow: "0px -6px white, 0px 10px white"
                }}
            >
                Empactathon
            </h1>

            <p className='space-x-2 text-empactathon-dark text-sub-title font-medium'>
                <span>
                    Education,
                </span>
                <span>
                    Climate
                </span>
                <span>
                    and Health
                </span>
            </p>

        </section>
    )
}

export default Landing
