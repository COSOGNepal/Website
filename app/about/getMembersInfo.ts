import type { Tmember } from "./type";
import members from "../../src/data/members.json";

export default async function getMembers(): Promise<Tmember[]> {
  const data: Tmember[] = members.map((member) => ({
    ...member,
    post: member.post as Tmember["post"],
  }));

  return data;
}
