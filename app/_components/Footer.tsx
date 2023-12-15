import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="h-52 bg-gray-bg w-full  mt-section py-block">
            <main className="flex flex-wrap justify-end md:justify-between items-center w-full max-w-[1400px] mx-auto px-block brk-1400:px-0">
                <aside className="flex gap-8 items-center col-span-1 md:col-span-2">
                    <div className="relative w-28 h-28">
                        <Image src={"/assets/logo.png"} fill alt="logo:" />
                    </div>
                    <div>
                        <h1 className="font-semibold text-lg ">
                            Coding for Social Good (CoSoG) Nepal
                        </h1>{" "}
                        <ul className=" text-sm flex gap-3">
                            <Link href={"/"}>
                                <li>Home</li>
                            </Link>
                            <Link href={"/about"}>
                                <li>About</li>
                            </Link>
                            <Link href={"/events"}>
                                <li>Events</li>
                            </Link>
                            <Link href={"https://blog.cosognepal.org"}>
                                <li>Blog</li>
                            </Link>
                            <Link href={"/contact"}>
                                <li>Contact</li>
                            </Link>
                            <Link href={"/donate"}>
                                <li>Donate</li>
                            </Link>
                        </ul>
                    </div>
                </aside>
                <aside className="col-span-1 flex flex-col items-start justify-center">
                    <div className="socialmedia h-fit w-fit cursor-pointer flex gap-3">
                        <a
                            href="https://www.facebook.com/Cosognepal"
                            target="blank"
                            className="cursor-pointer"
                        >
                            <Image
                                src={"/assets/facebook_logo.svg"}
                                width={30}
                                height={30}
                                alt="social"
                            />
                        </a>
                        <a href="https://www.instagram.com/cosognepal" target="blank">
                            <Image
                                src={"/assets/instagram_logo.svg"}
                                width={30}
                                height={30}
                                className="cursor-pointer"
                                alt="social"
                            />
                        </a>
                        <a href="https://www.linkedin.com/company/cosognepal/" target="blank">
                            <Image
                                src={"/assets/linkedin_logo.svg"}
                                width={30}
                                height={30}
                                alt="social"
                            />
                        </a>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=cosognepal@gmail.com" target="blank">
                            <Image
                                src={"/assets/gmail_logo.svg"}
                                width={30}
                                height={30}
                                alt="social"
                            />
                        </a>
                    </div>
                    <h4 className="text-sm text-faded my-2">contact@cosognepal.org</h4>
                    <h4 className="text-sm text-faded">
                        ©2023 cosognepal.org. All rights are reserved.
                    </h4>
                </aside>
            </main>
        </footer>
    );
};

export default Footer;
