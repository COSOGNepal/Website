import { TgResponseUser, Tuser } from "&/users"


export const fetchUserGApi = async (accessToken: string): Promise<TgResponseUser> => {
    try {
        const gapi = `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${accessToken}`
        const fetchedUser = await fetch(gapi)
            .then(gres => (gres.json()))
            .then((data) => {
                return {
                    email: data?.email,
                    name: data?.name,
                    profile: data?.picture,
                }
            })

        if (!fetchedUser.email) throw new Error("Invalid auth token google auth")
        return fetchedUser
    }
    catch (e) {
        throw new Error("Error while fetching user data from google api " + e)
    }
}

