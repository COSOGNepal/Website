"use client";

import React from "react";

const ContactPage = () => {
    return (
        <main className="px-standard w-full md:max-w-[750px] md:mx-auto md:px-0 mt-section space-y-block">
            <div className="text-faded space-y-small">
                <h2 className="text-mid-title font-bold text-black-mid">
                    Send a message
                </h2>
                <div className="emailSection space-y-small">
                    <p className="text-sub-para">Email</p>
                    <input
                        className="rounded-md w-full h-12 py-3 px-2 text-black-light text-sub-para border-2 border-[#D9D9D9] focus:border-blue focus-visible:outline-none"
                        type="text"
                        placeholder="Ex: contact@cosognepal.org"
                    />
                </div>
                <div className="phoneNumberSection space-y-small">
                    <p className="text-sub-para">Phone Number</p>
                    <input
                        className="rounded-md w-full h-12 py-3 px-2 text-black-light text-sub-para border-2 border-[#D9D9D9] focus:border-blue focus-visible:outline-none"
                        type="text"
                        placeholder="Ex: 9866776670"
                    />
                </div>

                <div className="textAreaSection space-y-small">
                    <p className="text-sub-para">Message</p>
                    <textarea
                        rows={60}
                        cols={30}
                        className="rounded-md w-full h-44 py-3 px-2 text-black-light text-sub-para border-2 border-[#D9D9D9] focus:border-blue focus-visible:outline-none"
                        placeholder="Ex: Hey CoSoG Nepal thank you for your work I love what you are doing keep doing the same work..."
                    ></textarea>
                </div>

                <div className="btn w-full flex text-para">
                    <button
                        className={` h-12 rounded-md w-full md:w-[40%] overflow-hidden px-5 py-3 bg-blue text-white hover:bg-primary transition `}
                    >
                        Submit
                    </button>
                </div>
            </div>
            <div className="socialsSection text-faded space-y-small">
                <h2 className="text-mid-title font-bold text-black-mid">
                    Our Socials
                </h2>
                <p className="text-sub-para font-medium text-black-light space-x-[5px]">
                    You can connect with us via our&nbsp;
                    <a
                        href="https://www.facebook.com/cosognepal"
                        className="text-blue"
                        target="blank"
                    >
                        Facebook
                    </a>
                    <a
                        href="https://www.instagram.com/cosognepal"
                        className=" text-blue"
                        target="blank"
                    >
                        Instagram
                    </a>
                    <a
                        href="https://www.linkedin.com/company/cosognepal/"
                        className=" text-blue"
                        target="blank"
                    >
                        Linkedin
                    </a>
                    &nbsp;and
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=cosognepal@gmail.com"
                        className="text-blue"
                        target="_blank"
                    >
                        Gmail
                    </a>.
                </p>
            </div>

            <div className="contactSection space-y-small">
                <h2 className="text-mid-title font-bold text-black-mid">
                    Contact Number
                </h2>
                <p className="text-sub-para font-medium text-black-light">
                    You can connect with us via our&nbsp;
                    <a
                        href="tel:+9779863196247"
                        className="text-blue"
                        target="blank"
                    >
                        +977 9863196247
                    </a>,
                    this contact number is available for contact during office time of
                    Nepal.
                </p>
            </div>

            <div className="organizationalMailSection space-y-small">
                <h2 className="text-mid-title font-bold text-black-mid">
                    Organization Email
                </h2>
                <p className="text-sub-para font-medium text-black-light">
                    You can get in touch by mailing us at:
                    <a
                        href="mailto:contact@cosognepal.org"
                        className="text-blue"
                        target="blank"
                    >
                        &nbsp;contact@cosognepal.org
                    </a>
                </p>
            </div>

        </main>
    );
};

export default ContactPage;
