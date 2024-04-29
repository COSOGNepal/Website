"use client";
import { useState } from "react";
import Icons from "@assets/index";
import { Icon } from "@/components/Icon";

type TSpeakerParams = {
    id: string,
    name: string,
    image: string,
    designation: string,
    short_intro?: string[], // each string is a paragraph
    socials?: {
        name: string,
        icon: keyof typeof Icons,
        link: string,
    }[],
    tagline?: string
}

const Speaker = (data: TSpeakerParams & { onClick: () => void }) => {
    return <div
        className="speakerContainer bg-gray-bg w-full relative min-h-[450px] overflow-hidden rounded-md cursor-pointer"
        onClick={data.onClick}
    >
        <img src={data.image} alt={`${data.name}-image`} className="image w-full absolute top-0 left-0  h-full object-cover" />
        <div className="details p-3 bg-gradient-to-t from-black-dark/80 to-40% to-black-dark/10 absolute w-full h-full flex flex-col items-start justify-end text-white">
            <h1 className="text-white font-bold text-2xl">
                {data.name}
            </h1>
            <h3 className="">
                {data.designation}
            </h3>
        </div>
    </div>
}

type TSpeakerModalParam = TSpeakerParams & { modalState: boolean, closeModal: () => void };
const SpeakerModal = (data: TSpeakerModalParam) => {
    return (
        <div className="text-center md:text-left p-small  py-standard w-full max-w-[1400px] md:px-standard brk-1400:mx-auto sm:px-block">
            <div
                className="close cursor-pointer"
                onClick={data.closeModal}
            >
                <Icon iconName="close" className="h-5 w-5 text-black-dark" />
            </div>
            <div className="speakerDetails flex justify-between flex-wrap-reverse gap-small mt-5">
                <div className="textdetails flex-1 space-y-small min-w-96">
                    <div className="intro">
                        <div className="name text-2xl text-black-dark font-bold">
                            {data.name}
                        </div>
                        <div className="designation text-primary">
                            {data.designation}
                        </div>
                    </div>
                    <div className="short_intro text-black-mid space-y-2">
                        {data.short_intro?.map((intro) => (
                            <p key={intro} className="text-wrap px-5 md:px-0">{intro}</p>
                        ))}
                    </div>
                </div>
                <div className="imageSocials w-auto flex flex-col justify-center items-center md:items-start mx-auto md:mx-0">
                    <img src={data.image} alt={data.name} className="image max-w-52 aspect-square object-cover rounded-md" />
                    <div className="socials">
                        <div className="links flex gap-3 flex-wrap mt-3 items-center justify-center">
                            {data.socials?.map((social, index) => (
                                <a key={index} href={social.link} >
                                    <Icon iconName={social.icon} className="text-gray-dark w-8 h-8 hover:text-primary" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
}


/* it is written separately to make sure the entire page doesnot rerender during a state change of the modal  */

const SpeakersSection = ({ data }: { data: TSpeakerParams[] }) => {
    const [speakerModal, setSpeakerModal] = useState<{ visible: boolean, active: string }>({ visible: false, active: "" });

    return (
        <section className="speakers_section ">
            <h1 className="title text-2xl font-semibold">
                Speakers
            </h1>
            <div className="speakersContainer grid  gap-small py-standard place-items-center [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
                {!!data?.length && data?.map((speaker) => (
                    <Speaker
                        key={speaker.id}
                        {...speaker}
                        onClick={() => setSpeakerModal({ visible: true, active: speaker.id })} />
                ))}
            </div>

            <div className={`ModalContainer w-full min-h-96 bg-white/80 backdrop-blur-md fixed bottom-0 left-0  z-50 [box-shadow:0px_-20px_50px_rgba(0,0,0,0.18)]
                            transition-translate duration-300  ease-in-out
                            ${speakerModal.visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-40"} `}
            >
                {data?.filter((speaker) => speaker.id === speakerModal.active).map((speaker) => (
                    <SpeakerModal
                        modalState={speakerModal?.visible}
                        closeModal={() => setSpeakerModal({ visible: false, active: "" })}
                        {...speaker}
                    />
                ))}
            </div>
        </section>
    )
}


export {
    Speaker,
    SpeakerModal,
    SpeakersSection,
}
