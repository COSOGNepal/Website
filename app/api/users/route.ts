import { TgResponseUser } from "&/users";
import { NextRequest, NextResponse } from "next/server"
import { fetchUserGApi } from "./_utils";
import mongoClient from "@/lib/db";
import { insertDataToDb } from "../db-utils";

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
            return NextResponse.json({ userData: existingUser, jwt: "yet to implement" },
                { status: 200 })

        // adding a user 
        const newUser = (await insertDataToDb(usersCollection, [userData]))[0]

        return NextResponse.json({ userData: newUser, jwt: "yet to implement" },
            { status: 200 })
    }
    catch (e) {
        return NextResponse.json({ msg: "Internal server error" },
            { status: 500 })
    }
}

