export type TdescriptorData = {
    title: string,
    descriptions: string[],
    list?: string[]
}

export type Tmember = {
    name: string,
    email: string,
    fb_link?: string,
    insta_link?: string,
    linkedin_link?: string,
    image: string,
    post: "President" | "Vice President" | "Secretary" | "Treasurer" | "IT Head" | "Program Manager" | "Community Outreach Officer" | "Community Leader"
}
