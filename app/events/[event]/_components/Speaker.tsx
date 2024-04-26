
type TSpeakerParams = {
    name: string,
    image: string,
    designation: string,
    short_intro?: string[], // each string is a paragraph
    socials?: {
        name: string,
        icon: string,
        link: string,
    }
    tagline?: string
}

const Speaker = (data: TSpeakerParams) => {
    return <div className="speakerContainer bg-gray-bg w-full relative min-h-[450px] overflow-hidden rounded-md cursor-pointer">
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

type TSpeakerModalParam = TSpeakerParams & { modalState: boolean };
const SpeakerModal = (data: TSpeakerModalParam) => {
    return (
        <dialog
            className="ModalContainer"
            open={data.modalState} >


        </dialog>
    );
}

export {
    Speaker,
    SpeakerModal,
}
