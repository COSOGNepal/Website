"use client";
import RouteHeading from "@/components/RouteHeading";

import React, { useState } from "react";

const ContactPage = () => {
    const [ContactInfo, setContactInfo] = useState({
        email: "",
        phone: "",
        message: "",
    });

    return (
        <main className="px-section">
            <RouteHeading Title={"Contact"} Route={"home/contact"} />

            <section className="w-screen md:w-8/12 mx-auto flex flex-col items-center mb-block">
                <div className="md:w-8/12 text-faded mx-[0] md:mx-auto mb-standard">
                    <h2 className="text-sub-title font-semibold pb-2">Send a message</h2>
                    <p className="text-sub-para">Email</p>
                    <input
                        className="rounded-sm w-full h-12 py-3 px-2 text-faded text-info border focus:outline  "
                        type="text"
                        placeholder="Ex: contact@cosognepal.org"
                        value={ContactInfo.email}
                        onChange={(e) => {
                            setContactInfo((prev) => ({ ...prev, email: e.target.value }));
                        }}
                    />
                </div>
                <div className=" text-title md:w-8/12 text-faded mx-[0] md:mx-auto mb-standard">
                    <p className="text-sub-para">Phone Number</p>
                    <input
                        className="rounded-sm w-full h-12 py-3 px-2 text-faded text-info border focus:outline  "
                        type="text"
                        placeholder="Ex: 9866776670"
                        value={ContactInfo.phone}
                        onChange={(e) => {
                            setContactInfo((prev) => ({ ...prev, phone: e.target.value }));
                        }}
                    />
                </div>
                <div className=" text-title md:w-8/12 text-faded mx-[0] md:mx-auto mb-standard">
                    <p className="text-sub-para">Message</p>
                    <textarea
                        rows={60}
                        cols={30}
                        className="rounded-sm w-full h-44 py-3 px-2 text-faded text-info border focus:outline  "
                        placeholder="Ex: Hey CoSoG Nepal thank you for your work I love what you are doing keep doing the same work..."
                        value={ContactInfo.message}
                        onChange={(e) => {
                            setContactInfo((prev) => ({ ...prev, message: e.target.value }));
                        }}
                    ></textarea>
                </div>
                <button
                    className={` h-12 rounded-md w-full md:w-8/12 overflow-hidden px-5 py-3 bg-blue text-white hover:bg-primary transition `}
                    onClick={() => {
                        console.log("to call handle submit");
                    }}
                >
                    {" "}
                    Submit
                </button>
                {/* additional contact information */}

                <div className="md:w-8/12 text-sub-title  text-faded md:mx-auto mt-block">
                    <h2 className=" font-semibold pb-2">Our Socials</h2>
                    <p className="text-sub-para">
                        You can connect with us via our&nbsp;
                        <a
                            href="https://www.facebook.com/cosognepal"
                            className="underline text-blue"
                            target="blank"
                        >
                            Facebook
                        </a>,{" "}
                        <a
                            href="https://www.instagram.com/cosognepal"
                            className="underline text-blue"
                            target="blank"
                        >
                            Instagram
                        </a>
                        {/* ,{" "}
                        <a
                            href="https://www.fundraisepage.com"
                            className="underline text-blue"
                            target="blank"
                        >
                            Twitter(X)
                        </a> */}
                        ,{" "}
                        <a
                            href="https://www.linkedin.com/company/cosognepal/"
                            className="underline text-blue"
                            target="blank"
                        >
                            Linkedin
                        </a>{", "}
                        and {" "}
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=cosognepal@gmail.com"
                            className="underline text-blue"
                            target="_blank"
                        >
                            Gmail
                        </a>{" ."}
                    </p>
                </div>

                <div className="md:w-8/12 text-sub-title  text-faded md:mx-auto mt-block">
                    <h2 className=" font-semibold pb-2">Contact Number</h2>
                    <p className="text-sub-para">
                        You can connect with us via our&nbsp;
                        <a
                            href="tel:+9779863196247"
                            className="underline text-blue"
                            target="blank"
                        >
                            +977 9863196247
                        </a>,{" "}
                        this contact number is available for contact during office time of
                        Nepal.
                    </p>
                </div>

                <div className="md:w-8/12 text-sub-title  text-faded md:mx-auto mt-block">
                    <h2 className=" font-semibold pb-2">Organization Email</h2>
                    <p className="text-sub-para">
                        You can get in touch by mailing us at: {" "}
                        <a
                            href="mailto:contact@cosognepal.org"
                            className="underline text-blue"
                            target="blank"
                        >
                            contact@cosognepal.org
                        </a>
                    </p>
                </div>
            </section>
        </main>
    );
};

export default ContactPage;
