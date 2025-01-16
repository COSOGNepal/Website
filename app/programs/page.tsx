import SectionTitle from "@/components/SectionTitle";
import InfoBanner from "@/components/InfoBanner";
import Image from "next/image";

export default async function AboutPage() {
  return (
    <>
      <div className="main_container h-max flex flex-col space-y-section w-full px-standard sm:px-block  max-w-[1400px] m-auto">
        <div className="aboutSection w-full">
          <img
            src="/assets/programs_banner.jpg"
            width={1400}
            height={550}
            alt="banner_about_section"
            className="banner max-h-[400px] h-auto object-cover m-auto"
          />
        </div>
        <div className="space-y-10 " id="team">
          <SectionTitle title="Our Programs" />
          <div className="flex justify-between flex-wrap gap-4">
            <div className="relative p-4 max-w-72 bg-gray-bg">
              <img
                src="/assets/images/Programs/awareness.png"
                width={1400}
                height={550}
                alt="CS Awareness"
                className="w-full h-36 object-cover"
              />
              <h2 className="font-bold sm:text-mid-title text-para text-black-mid mt-1 py-2 text-center">
                CS Awareness
              </h2>
              <p className="text-sub-para text-black-mid text-center">
                Promote Computer Science Education through workshops and CS
                Clubs in Sec/High Schools in Nepal.
              </p>

              <button
                className={`block mx-auto rounded-md w-full max-w-36 overflow-hidden px-5 py-3 bg-blue-blue text-white hover:bg-primary transition mt-4`}
              >
                Learn more
              </button>
            </div>
            <div className="relative p-4 max-w-72 bg-gray-bg">
              <img
                src="/assets/images/Programs/charity.png"
                width={1400}
                height={550}
                alt="Code for Charity"
                className="w-full h-36 object-cover"
              />
              <h2 className="font-bold sm:text-mid-title text-para text-black-mid mt-1 py-2 text-center">
                Code for Charity
              </h2>
              <p className="text-sub-para text-black-mid text-center">
                Provide pro-bono coding services to national and international
                non-profits and charities.
              </p>

              <button
                className={`block mx-auto rounded-md w-full max-w-36 overflow-hidden px-5 py-3 bg-blue-blue text-white hover:bg-primary transition mt-4`}
              >
                Learn more
              </button>
            </div>
            <div className="relative p-4 max-w-72 bg-gray-bg">
              <img
                src="/assets/images/Programs/skills.png"
                width={1400}
                height={550}
                alt="Skills Development"
                className="w-full h-36 object-cover"
              />
              <h2 className="font-bold sm:text-mid-title text-para text-black-mid mt-1 py-2 text-center">
                Skill Development
              </h2>
              <p className="text-sub-para text-black-mid text-center">
                Provide free coding classes, workshops, and resources to
                underprivileged students in Nepal.
              </p>

              <button
                className={`block mx-auto rounded-md w-full max-w-36 overflow-hidden px-5 py-3 bg-blue-blue text-white hover:bg-primary transition mt-4`}
              >
                Learn more
              </button>
            </div>
            <div className="relative p-4 max-w-72 bg-gray-bg">
              <img
                src="/assets/images/Programs/competitions.png"
                width={1400}
                height={550}
                alt="Coding Competitions"
                className="w-full h-36 object-cover"
              />
              <h2 className="font-bold sm:text-mid-title text-para text-black-mid mt-1 py-2 text-center">
                Coding Competitions
              </h2>
              <p className="text-sub-para text-black-mid text-center">
                Organize networking events, hackathons, and coding competitions
                to connect students with industry professionals.
              </p>

              <button
                className={`block mx-auto rounded-md w-full max-w-36 overflow-hidden px-5 py-3 bg-blue-blue text-white hover:bg-primary transition mt-4`}
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>

      <InfoBanner
        leftContent={
          <article className="max-w-[800px]">
            <h1 className="font-bold text-mid-title">
              Do you want to shape the situation of Computer Science in Nepal?
            </h1>
            <p>Let's change it together, Join Cosog Nepal.</p>
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
