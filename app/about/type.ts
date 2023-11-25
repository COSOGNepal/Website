export type TdescriptorData = {
    title: string,
    description: string,
    list?: string[]
}

export type Tmember = {
    name: string,
    email: string,
    fb_link?: string,
    insta_link?: string,
    linkedin_link?: string,
    image: string,
    post: "Precident" | "Vice Precident" | "Secratory" | "Treasurer" | "It Head" | "Program Manager" | "Community Leader"
}
