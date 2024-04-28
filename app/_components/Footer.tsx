import img from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="mt-section bg-gray-bg w-full py-block brk-1400:px-[calc(((100%-1400px)/2)+50px)] px-standard">
            <main className="flex md:space-x-standard items-center w-full max-w-[1400px] mx-auto flex-col sm:flex-row brk-1400:px-0">
                <img src={"/assets/logo.png"} width={100} height={100} alt="logo:" />
                <div className="navdata flex items-baseline w-full mt-standard flex-col space-y-standard justify-start v-sm:items-center v-sm:justify-between md:w-full md:mt-0 v-sm:flex-row">
                    <aside className="space-y-small">
                        <h1 className="font-semibold text-lg">
                            Coding for Social Good <span className="hidden sm:inline-block">(CoSoG) </span> Nepal
                        </h1>
                        <div className="navlist flex space-x-standard text-faded">
                            <ul className="text-sm flex space-y-v-small flex-col">
                                <Link href={"/"}>
                                    <li>Home</li>
                                </Link>
                                <Link href={"/about"}>
                                    <li>About</li>
                                </Link>
                                <Link href={"/events"}>
                                    <li>Events</li>
                                </Link>
                            </ul>
                            <ul className="text-sm flex space-y-v-small flex-col">
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
                    <aside className="flex flex-col space-y-small">
                        <div className="socialmedia h-fit w-fit cursor-pointer flex gap-small items-center">
                            <a
                                href="https://www.facebook.com/Cosognepal"
                                target="blank"
                                className="cursor-pointer"
                            >
                                <img
                                    src={"/assets/facebook_logo.svg"}
                                    width={30}
                                    height={30}
                                    alt="social"
                                />
                            </a>
                            <a href="https://www.instagram.com/cosognepal" target="blank">
                                <img
                                    src={"/assets/instagram_logo.svg"}
                                    width={30}
                                    height={30}
                                    className="cursor-pointer"
                                    alt="social"
                                />
                            </a>
                            <a href="https://www.linkedin.com/company/cosognepal/" target="blank">
                                <img
                                    src={"/assets/linkedin_logo.svg"}
                                    width={30}
                                    height={30}
                                    alt="social"
                                />
                            </a>
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=cosognepal@gmail.com" target="blank">
                                <img
                                    src={"/assets/gmail_logo.svg"}
                                    width={30}
                                    height={30}
                                    alt="social"
                                />
                            </a>
                        </div>
                        <div className="text_contents">
                            <h4 className="text-sm text-faded">contact@cosognepal.org</h4>
                            <h4 className="text-sm text-faded">
                                ©2024 cosognepal.org <br /> All rights are reserved.
                            </h4>
                        </div>
                    </aside>
                </div>

            </main>
        </footer>
    );
};

export default Footer;
