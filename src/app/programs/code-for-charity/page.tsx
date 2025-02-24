import SectionTitle from "@/components/SectionTitle";
import InfoBanner from "@/components/InfoBanner";
import Image from "next/image";

// images
import Banner from "@/assets/programs_banner.jpg"

export default async function CodeForCharityPage() {
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
        <div className="space-y-10 " id="team">
          <SectionTitle title="Code for Charity" />
          <div className="flex justify-between flex-wrap gap-4"></div>
        </div>
      </div>

      <InfoBanner
        leftContent={
          <article className="max-w-[800px]">
            <h1 className="font-bold text-mid-title">
              Do you want to shape the situation of Computer Science in Nepal?
            </h1>
            <p>Lets be a change together. Join Cosog Nepal.</p>
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
