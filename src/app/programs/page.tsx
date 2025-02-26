import SectionTitle from "@/components/SectionTitle";
import InfoBanner from "@/components/InfoBanner";
import Card from "./_components/Card";
import { APP_ROUTES } from "@/lib/routes";
import Image from "next/image";

// images
import Banner from "@/assets/programs_banner.jpg";
import CS_Awareness from "@/assets/images/Programs/awareness.png";
import CodeForCharity from "@/assets/images/Programs/charity.png";
import SkillDevelopment from "@/assets/images/Programs/skills.png";
import CodingCompetitions from "@/assets/images/Programs/competitions.png";

export default async function ProgramsPage() {
  const data = [
    {
      title: "CS Awareness",
      description:
        "Promote Computer Science Education through workshops and CS Clubs in Sec/High Schools in Nepal.",
      image: CS_Awareness,
      url: APP_ROUTES.PROGRAMS.CS_AWARENESS,
    },
    {
      title: "Code for Charity",
      description:
        "Provide pro-bono coding services to national and international non-profits and charities.",
      image: CodeForCharity,
      url: APP_ROUTES.PROGRAMS.CODE_FOR_CHARITY,
    },
    {
      title: "Skill Development",
      description:
        "Provide free coding classes, workshops, and resources to underprivileged students in Nepal.",
      image: SkillDevelopment,
      url: APP_ROUTES.PROGRAMS.SKILL_DEVELOPMENT,
    },
    {
      title: "Coding Competitions",
      description:
        "Organize networking events, hackathons, and coding competitions to connect students with industry professionals.",
      image: CodingCompetitions,
      url: APP_ROUTES.PROGRAMS.CODING_COMPETITIONS,
    },
  ];

  return (
    <>
      <div className="main_container h-max flex flex-col space-y-section w-full px-standard sm:px-block  max-w-[1400px] m-auto">
        <div className="aboutSection w-full">
          <Image
            src={Banner}
            width={1400}
            height={550}
            alt="banner_about_section"
            className="banner max-h-[400px] h-auto object-cover m-auto"
          />
        </div>
        <div className="space-y-8" id="team">
          <SectionTitle title="Our Programs" />
          <div className="flex justify-between flex-wrap gap-4">
            {data.map((item, index) => (
              <Card
                key={index}
                url={item.url}
                title={item.title}
                image={item.image}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>

      <InfoBanner
        leftContent={
          <article className="max-w-[800px]">
            <h1 className="font-bold text-mid-title">
              Do you want to shape the situation of Computer Science in Nepal?
            </h1>
            <p>Let&apos;s change it together, Join Cosog Nepal.</p>
          </article>
        }
        cta={{
          text: "Volunteer with us",
          link: " https://forms.gle/euosQkdUW45P8mYc9",
        }}
      />
    </>
  );
}
