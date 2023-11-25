import Image from "next/image";

export default function Event() {
    return (
        <div className="main_container max-w-[680px] h-max">
            <div className="imagesContainer grid grid-cols-2-320 grid-rows-2-250 gap-small">
                <div className="image col-span-2 overflow-hidden relative group cursor-pointer">
                    <Image src="/images/Event.png" height={260} width={680} alt="event" className="event w-full h-max absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover:scale-105  transition-all ease-in-out duration-150 " />
                </div>
                <div className="image group overflow-hidden cursor-pointer">
                    <Image src="/images/Event.png" height={260} width={680} alt="event" className="image group-hover:scale-105  transition-all ease-in-out duration-150" />
                </div>
                <div className="image overflow-hidden group cursor-pointer">
                    <Image src="/images/Event.png" height={260} width={680} alt="event" className="image group-hover:scale-105  transition-all ease-in-out duration-150" />
                </div>
            </div >
            <div className="desc_container">
                <div className="date">
                    17<sup>th </sup> Jan 2021
                </div>
                <h1 className="title">
                    Ramchap school bharman bewasthapan samiti sanga ko bhet
                </h1>
                <div className="desc">
                    <p>
                        Bar off step class keep car information shoulder. Father quite send state year factor model. Physical control per ahead get throw.
                    </p>
                    <p>
                        Who table notice develop. Buy onto answer only product several. Reach arrive customer food live beyond check space. Pull professor movie value fish news care.
                    </p>
                </div>
            </div>
        </div>
    )
}
