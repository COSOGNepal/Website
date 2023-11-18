import Image from "next/image";
import Link from "next/link";
import React from "react";

const CommunityMembers = () => {
  const MembersData = [
    {
      id: 1,
      name: "Bibek Bhandari",
      post: "President",
      fb: "#",
      insta: "https://www.instagram.com/vandari_7/",
      linkedin: "https://www.linkedin.com/in/bibekbha/",
      imageURL: "/images/members/Bibek Bhandari.png",
    },
    {
      id: 2,
      name: "Aashish Panthi",
      post: "Vice President",
      fb: "https://www.facebook.com/aashishpanthi11",
      insta: "https://www.instagram.com/aashishpanthi11",
      linkedin: "https://www.linkedin.com/in/aashishpanthi",
      imageURL: "/images/members/Aashish Panthi.jpeg",
    },
    {
      id: 3,
      name: "Sushil Bhattarai",
      post: "Secretary",
      fb: "https://www.facebook.com/sushilbhattaraiofficial",
      insta: "https://instagram.com/sushil_bhattarai45",
      linkedin: "https://www.linkedin.com/in/sushilbhattarai45",
      imageURL: "/images/members/Sushil_Bhattarai.png",
    },
    {
      id: 4,
      name: "Sanskar Lamsal",
      post: "Program Manager",
      fb: "https://www.facebook.com/Sanskar.lmsl",
      insta: "https://instagram.com/ssanskaar_",
      linkedin: "https://www.linkedin.com/in/sanskar-lamsal-b03a4b266",
      imageURL: "/images/members/Sanskar_Lamsal.jpg",
    },
    {
      id: 5,
      name: "Saroj Regmi",
      post: "IT Head",
      fb: "https://www.facebook.com/sarojregmi",
      insta: "https://www.instagram.com/sarojregmi",
      linkedin: "https://www.linkedin.com/sarojregmi",
      imageURL: "/images/members/Saroj_Regmi.jpg",
    },
    {
      id: 6,
      name: "Anish Raj Pandey",
      post: "Community Leader",
      fb: "https://www.facebook.com/anishrajpandey0",
      insta: "https://www.instagram.com/pandeyanishraj",
      linkedin: "ttps://www.linkedin.com/anisjrajpandey",
      imageURL: "/images/members/Anish_Raj_Pandey.jpg",
    },
  ];
  return (
    <main className="px-4 md:px-16">
      <div className="flex mb-5 justify-between">
        <h2 className={"text-xl md:text-3xl text-faded font-normal "}>
          Our team
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
