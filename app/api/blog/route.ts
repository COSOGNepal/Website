import mongoClient from "@/lib/db"
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
    try {
        const client = await mongoClient;
        const db = client.db("db");
        const collections = db.collection("users")
        await collections.insertOne({ item: "value" })

        return NextResponse.json({
            msg: Date.toString()
        }, { status: 200 })
    } catch (e) {
        return Response.json({ msg: "got some error ", e }, { status: 500 })
    }
}
