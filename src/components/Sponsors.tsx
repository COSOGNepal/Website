type social = "twitter" | "linkedin" | "facebook" | "website" | "instagram";

interface SupporterSectionParam {
    supportersData: supporterCardParams[],
    sectionTitle: string,
    sectionDescription?: string,
}

interface supporterCardParams {
    name: string,
    supportTitle?: string,
    logo: string, // url of the logo or path may be
    socials: Record<social, string>
}

const SupportersSection = (props: SupporterSectionParam) => {

}

const SupporterCard = (props: supporterCardParams) => {
    return (
        <div className="supporterCard">
            <div className="imageSection">
                <img src={props.logo} alt="">

            </div>
            <div className="supporterInfo">
                <div className="name">
                    {props.name}
                </div>
                <div className="title">
                    {props.supportTitle}
                </div>
            </div>

        </div>
    )
}


export {
    SupportersSection,
    SupporterCard,
}
