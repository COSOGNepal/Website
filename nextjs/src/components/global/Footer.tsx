import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Facebook,
  GitHub,
  Instagram,
  Linkedin,
  Twitter,
} from "./SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="text-sm " style={{ background: "#0B0A27" }}>
      <div className="mx-auto max-w-screen-xl p-4 py-6 lg:py-8">
        {/* upper part */}
        <div className="flex gap-8 px-14 flex-wrap justify-between">
          <div className="mb-6 w-fit md:mb-0 ">
            <Link href="/" className="flex items-center">
              <Image
                width={70}
                height={70}
                src="/logo.png"
                className="h-14 w-14 mr-3"
                alt=" Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap ">
                Cosog Nepal
              </span>
            </Link>
            <div className="text-base my-4 ">Coding for social good Nepal</div>
          </div>
          {/* <div className="md:flex gap-8 px-14 wrap w-full   "> */}
          <div className="w-fit">
            <h2 className="mb-2 text-xl font-extrabold  ">Contact us:</h2>
            <ul className="text-gray-500 text-sm">
              <li className="mb-1">info.xyz@cosog.np</li>
              <li className="mb-1">9856554478</li>
              <li className="mb-1">Kathmandu, Nepal</li>
            </ul>
          </div>
          <div className="w-fit">
            <h2 className="mb-2 text-xl font-extrabold ">Quick links </h2>
            <ul className="text-gray-500 -400 font-medium">
              <li className="text-sm">
                <Link href="/" className="hover:underline ">
                  Home
                </Link>
              </li>
              <li className="text-sm">
                <Link href="/goals" className="hover:underline ">
                  Main Goals
                </Link>
              </li>
              <li className="text-sm">
                <Link href="/community" className="hover:underline ">
                  Community info
                </Link>
              </li>
              <li className="text-sm">
                <Link href="/projects" className="hover:underline ">
                  Projects
                </Link>
              </li>
              <li className="text-sm">
                <Link href="/blog" className="hover:underline ">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-2 text-xl font-extrabold ">Socials</h2>
            <div className="text-gray-500 grid grid-cols-3 gap-2">
              <a href="https://www.facebook.com/Cosognepal" target="blank">
                <div className="bg-white bg-opacity-10 w-10 h-10 flex justify-center items-center rounded-sm">
                  {" "}
                  <Facebook />
                </div>
              </a>

              <a href="https://www.instagram.com/" target="_blank">
                <div className="bg-white bg-opacity-10 w-10 h-10 flex justify-center items-center rounded-sm">
                  {" "}
                  <Instagram />
                </div>
              </a>
              <a href="https://twitter.com/home" target="_blank">
                <div className="bg-white bg-opacity-10 w-10 h-10 flex justify-center items-center rounded-sm">
                  {" "}
                  <Twitter />
                </div>
              </a>
              <a href="https://github.com/COSOGNepal" target="_blank">
                <div className="bg-white bg-opacity-10 w-10 h-10 flex justify-center items-center rounded-sm">
                  {" "}
                  <GitHub />
                  {/* This icon needs to be changed */}
                </div>
              </a>
              <a
                href="https://www.linkedin.com/company/cosognepal/"
                target="_blank"
              >
                <div className="bg-white bg-opacity-10 w-10 h-10 flex justify-center items-center rounded-sm">
                  {" "}
                  <Linkedin />
                </div>
              </a>
            </div>
          </div>
          {/* </div> */}
        </div>
        <hr style={{ color: "#161449" }} className="my-8" />
        <div className="pb-12  ">
          <h1 className="text-2xl font-bold mx-2 md:mx-12 mb-6">
            All the rights are reserved.
          </h1>
          <h4 className="text-md font-light mx-2 md:mx-12 ">
            All the rights and ownership of this site are reserved under the MIT
            license by COSOGNepal 2023{" "}
          </h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
