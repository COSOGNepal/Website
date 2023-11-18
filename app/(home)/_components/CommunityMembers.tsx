import Image from "next/image";
import Link from "next/link";
import React from "react";

const CommunityMembers = () => {
  const MembersData = [
    {
      id: 1,
      name: "Sushil Bhattarai",
      post: "Secretory",
      fb: "https://www.facebook.com/sushilbhattarai",
      insta: "https://www.instagram.com/sushilbhattarai",
      linkedin: "ttps://www.linkedin.com/sushilbhattarai",
      imageURL: "/images/members/Sushil_Bhattarai.png",
    },
    {
      id: 2,
      name: "Sanskar Lamsal",
      post: "Kam Chor",
      fb: "https://www.facebook.com/sanskarlamichhane",
      insta: "https://www.instagram.com/sanskarlamichhane",
      linkedin: "ttps://www.linkedin.com/sanskarlamichhane",
      imageURL: "/images/members/Sanskar_Lamsal.jpg",
    },
    {
      id: 3,
      name: "Bibek Pulami",
      post: "Community Leader",
      fb: "https://www.facebook.com/bibekpulami",
      insta: "https://www.instagram.com/bibekpulami",
      linkedin: "ttps://www.linkedin.com/bibekpulami",
      imageURL: "/images/members/Bibek_Pulami.jpg",
    },
    {
      id: 4,
      name: "Saroj Regmi",
      post: "IT Head",
      fb: "https://www.facebook.com/sarojregmi",
      insta: "https://www.instagram.com/sarojregmi",
      linkedin: "ttps://www.linkedin.com/sarojregmi",
      imageURL: "/images/members/Saroj_Regmi.jpg",
    },
    {
      id: 5,
      name: "Anish Raj Pandey",
      post: "Community Leader",
      fb: "https://www.facebook.com/anishrajpandey0",
      insta: "https://www.instagram.com/pandeyanishraj",
      linkedin: "ttps://www.linkedin.com/anisjrajpandey",
      imageURL: "/images/members/Anish_Raj_Pandey.jpg",
    },
    {
      id: 6,
      name: "Lenish Pandey",
      post: "Community Leader",
      fb: "https://www.facebook.com/lenishpandey",
      insta: "https://www.instagram.com/lenishpandey",
      linkedin: "ttps://www.linkedin.com/lenishpandey",
      imageURL: "/images/members/Lenish_Pandey.jpg",
    },
  ];
  return (
    <main className="px-4 md:px-16">
      <div className="flex mb-5 justify-between">
        <h2 className={"text-xl md:text-3xl text-faded font-normal "}>
          Community Members
        </h2>
        <h2 className={"text-base md:text-xl text-faded font-normal "}>
          <Link href={"/members"}> View All</Link>
        </h2>
      </div>
      {/* members list */}
      <section className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-3 px-2 md:px-20 gap-4 bg-contain ">
        {MembersData.map((MembersData) => (
          <div
            key={MembersData.id}
            className={`relative aspect-[10/12] group overflow-hidden`}
          >
            <Image
              src={MembersData.imageURL}
              fill
              className="object-cover"
              alt="dk"
            />
            <div className="absolute text-white px-4 pb-2 md:pb-6 h-1/2 w-full bg-gradient-to-t from-dark-transparent to-transparent flex justify-end flex-col gap-3 bottom-0">
              <div className="absolute bottom-5 md:-bottom-7 group-hover:bottom-5 transition-all">
                <h1 className="text-lg md:text-xl font-semibold">
                  {MembersData.name}
                </h1>
                <h2 className="text-md  md:text-md font-light">
                  {MembersData.post}{" "}
                </h2>
                <div>
                  <div className=" h-fit w-fit cursor-pointer mt-1 md:mt-3 flex gap-3">
                    <a
                      href={MembersData.fb}
                      target="blank"
                      className="cursor-pointer"
                    >
                      <Image
                        src={"/assets/facebook_logo.png"}
                        className="grayscale hover:grayscale-0"
                        width={25}
                        height={25}
                        alt="social"
                      />
                    </a>
                    <a href={MembersData.insta} target="blank">
                      <Image
                        src={"/assets/instagram_logo.png"}
                        className="grayscale hover:grayscale-0 "
                        width={25}
                        height={25}
                        alt="social"
                      />
                    </a>
                    <a href={MembersData.linkedin} target="blank">
                      <Image
                        src={"/assets/linkedin_logo.png"}
                        className="grayscale hover:grayscale-0"
                        width={25}
                        height={25}
                        alt="social"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default CommunityMembers;
