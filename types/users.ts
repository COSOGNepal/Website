export type Tuser = {
    _id: string,
    name: string,
    createdAt: Date,
    email: string,
    profile: string,
}

export type TgResponseUser = Omit<Tuser, "_id" | "createdAt">;
