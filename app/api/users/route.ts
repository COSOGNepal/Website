import { TgResponseUser } from "&/users";
import { NextRequest, NextResponse } from "next/server"
import { fetchUserGApi } from "./_utils";

export const POST = async (req: NextRequest) => {
    try {
        const data = await req.json();
        // with accessToken Signin 

        const accessToken: string = data.accessToken;
        const userData: TgResponseUser = await fetchUserGApi(accessToken);

        // check if the user exists in the db
        // if so then return user
        // if not add it.
        //

        return NextResponse.json({ userData, jwt: "yet to implement" },
            { status: 200 })
    }
    catch (e) {
        return NextResponse.json({ msg: "Internal server error" },
            { status: 500 })
    }
}

// with jwt Signin SignUp TODO
