import { TgResponseUser } from "&/users";
import { NextRequest, NextResponse } from "next/server"
import { fetchUserGApi } from "./_utils";
import mongoClient from "@/lib/db";
import { insertDataToDb } from "../db-utils";
import { createJWT } from "../jwt";

export const POST = async (req: NextRequest) => {
    try {
        const data = await req.json();
        // with accessToken Signin 

        const accessToken: string = data.accessToken;
        const userData: TgResponseUser = await fetchUserGApi(accessToken);

        // generate jwt 

        //db operations
        const client = await mongoClient;
        const db = client.db("db");
        const usersCollection = db.collection("users")

        const existingUser = await usersCollection.findOne({ email: userData.email });
        if (existingUser)
            return NextResponse.json({ data: existingUser, jwt: createJWT(existingUser) },
                { status: 200 })

        // adding a user 
        const newUser = (await insertDataToDb(usersCollection, [userData]))[0]

        return NextResponse.json({ data: newUser, jwt: createJWT(newUser) },
            { status: 200 })
    }
    catch (e) {
        console.log(e);
        return NextResponse.json({ msg: "Internal server error" },
            { status: 500 })
    }
}

