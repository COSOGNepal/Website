import Image from "next/image"

export default function Member() {
    const { name, post, fb, insta, linkedin, image } = {
        name: "Saroj Regmi",
        post: "IT Head",
        fb: "https://www.facebook.com/sarojregmi200",
        insta: "https://www.instagram.com/sarojregmi200",
        linkedin: "https://www.linkedin.com/sarojregmi200",
        image: "/images/Members/Saroj_Regmi.jpg"
    };
    return (
        <div className="member max-h-[350px] max-w-[320px] rounded-[5px] relative overflow-hidden group transition-all duration-100 ease-in-out">
            <Image src={image} height={350} width={320} alt={"SarojRegmi"}
                className="image" />
            <div className="description h-full w-full bg-gradient-to-t from-[rgba(0,0,0,0.7)] group-hover:from-[rgba(0,0,0,0.9)] to-transparent absolute top-0 left-0 p-standard align-baseline">
                <div className="visible mt-[90%] group-hover:mt-[70%] transition-all duration-300 ease-in-out">
                    <div className="title font-bold text-sub-title text-white"> {name} </div>
                    <div className="post font-normal text-para text-white-light">{post} </div>
                </div>
                <div className="socials flex space-x-small mt-[200%] opacity-0 group-hover:mt-small group-hover:opacity-100 transition-all duration-300 ease-in-out">
                    <a
                        href={fb}
                        target="blank"
                        className="cursor-pointer"
                    >
                        <Image
                            src={"/assets/facebook_logo.png"}
                            className="grayscale hover:grayscale-0"
                            width={25}
                            height={25}
                            alt="facebook_logo"
                        />
                    </a>
                    <a href={insta} target="blank">
                        <Image
                            src={"/assets/instagram_logo.png"}
                            className="grayscale hover:grayscale-0 "
                            width={25}
                            height={25}
                            alt="instagram_logo"
                        />
                    </a>
                    <a href={linkedin} target="blank">
                        <Image
                            src={"/assets/linkedin_logo.png"}
                            className="grayscale hover:grayscale-0"
                            width={25}
                            height={25}
                            alt="linkedin_logo"
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}
