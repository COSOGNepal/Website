import { cn } from "@/lib/utils";
import { Icon } from "./Icon";
import Icons from "@assets/index";

type social = keyof typeof Icons;

interface SupporterSectionParam {
    supportersData: supporterCardParams[],
    sectionTitle: string,
    sectionDescription?: string,
    className?: {
        description?: string,
        title?: string,
        supporterContainer?: string,
        supporterCard?: {
            contianer?: string,
            imageSection?: string,
            socials?: string,
            supporterInfo?: string,
            name?: string,
            title?: string,
        },
    }
}

type supporterCardParams = {
    name: string,
    supportTitle?: string,
    logo: string, // url of the logo or path may be
    socials?: Partial<Record<social, string>>
} & Pick<SupporterSectionParam, "className">

const SupportersSection = (props: SupporterSectionParam) => {
    return (
        <section className={cn("max-w-screen-brk-1400 brk-1400:mx-auto mx-standard", props.className?.supporterContainer)}>
            <h1 className={cn(`heading text-2xl font-semibold `, props.className?.title)}>
                {props.sectionTitle}
            </h1>
            {
                props.sectionDescription &&
                <p className={cn("section-description text-black-mid", props.className?.description)}>
                    {props.sectionDescription}
                </p>
            }
            <div className={cn("supporters flex flex-row gap-standard flex-wrap justify-center mt-block", props.className?.supporterContainer)}>
                {
                    props.supportersData.map((supporter, index) => {
                        return (
                            <SupporterCard {...supporter} className={props.className} key={`${supporter.name}-${index}`} />
                        )
                    })
                }
            </div>
        </section >
    )
}

const SupporterCard = (props: supporterCardParams) => {
    return (
        <div className={cn("supporterCard w-96 h-auto p-2  border border-gray-200 rounded-md flex flex-col gap-standard",
            // hover style
            "hover:border-gray-400",
            props.className?.supporterCard)}>
            <div className="imageSection">
                <img src={props.logo} alt="sponsorsimage" className="rounded-md w-full" />

            </div>
            <div className="supporterInfo space-y-2 mt-auto">
                <div className="title text-sub-title font-bold text-gray-600">
                    {props.supportTitle}
                </div>

                <div className="socials-supporters flex gap-2 mt-2 text-gray-400">
                    {
                        props.socials && Object.entries(props.socials).map(([key, value], index) => {
                            return <a
                                href={value}
                                key={`socials-icons-${index}-${key}-${value}`}
                                className="hover:text-gray-500"
                            >
                                <Icon iconName={key as social} />
                            </a>
                        })
                    }
                </div>

                <div className="name text-gray-500">
                    {props.name}
                </div>
            </div>
        </div>
    )
}


export {
    SupportersSection,
    SupporterCard,
}
