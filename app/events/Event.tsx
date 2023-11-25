import Image from "next/image";

export default function Event() {
    return (
        <div className="main_container">
            <div className="imagesContainer" >
                <Image src="/images/Event1" height={260} width={680} alt="Event1" className="image1" />
                <Image src="/images/Event2" height={260} width={680} alt="Event2" className="image2" />
                <Image src="/images/Event3" height={260} width={680} alt="Event3" className="image3" />
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
