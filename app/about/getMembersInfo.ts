import type { Tmember } from "./type";
import members from "../../src/data/members.json";

export default async function getMembers(): Promise<Tmember[]> {
    try {
        if (!members) throw new Error("Invalid json file");
        if (members.length < 1) throw new Error("Json file cannot be empty");

        return members as Tmember[];
    }
    catch (e) {
        console.log(e)
        throw new Error(e as string)
    }
}
