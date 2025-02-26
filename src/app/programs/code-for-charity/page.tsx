import InfoBanner from "@/components/InfoBanner";
import { Descriptor } from "@/app/about/_components";
import Image from "next/image";

// images
import Banner from "@/assets/images/Programs/Code_for_charity_banner.png";

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
          <Descriptor
            title="What is code for charity?"
            descriptions={[
              "Code for Charity is a flagship program of Coding for Social Good Nepal that provides pro-bono coding services to national and international non-profits. Our team of skilled developers and designers work closely with NGOs to develop websites, applications, and other digital solutions that help them achieve their goals.",
              "Our goal is to help non-profits leverage technology to increase their impact and reach more people. We believe that technology has the power to transform the way organizations work and help them achieve their mission more effectively.",
            ]}
          />

          <Descriptor
            title="How to apply?"
            descriptions={[
              "If you are a non-profit organization looking for technical support, we would love to hear from you! Please fill out the form below to tell us more about your organization and the project you need help with. Our team will review your application and get back to you as soon as possible.",
              "If you are a developer or designer interested in volunteering with Code for Charity, please reach out to us at contact@cosognepal.org or fill the form available at about us page. We are always looking for talented individuals who are passionate about using their skills for social good.",
            ]}
          />

          <Descriptor
            title="Why volunteer?"
            descriptions={[
              "Volunteering with Code for Charity is a great way to use your skills for social good and make a positive impact in the world. By volunteering with us, you will have the opportunity to work on real-world projects that help non-profits achieve their goals and make a difference in the lives of others.",
              "You'll also get a chance to learn from professionals, get your code reviewed, network with other developers, and add this experience to your resume. We'll provide you with the support, resources, and a letter of recommendation to help you succeed in your career.",
            ]}
          />
        </div>
      </div>

      <InfoBanner
        leftContent={
          <article className="max-w-[800px]">
            <h1 className="font-bold text-mid-title">
              Do you need help with a technical project?
            </h1>
            <p>We are here to help! Fill out the form.</p>
          </article>
        }
        cta={{
          text: "Access the form",
          link: " https://docs.google.com/forms/d/e/1FAIpQLScojNFk_uLuQd48KgT8zkCrbRqPjApYeWPGPVeESG19rlxZ3A/viewform?usp=pp_url&entry.76041240=President&entry.145747725=Nepal",
        }}
      />
    </>
  );
}
