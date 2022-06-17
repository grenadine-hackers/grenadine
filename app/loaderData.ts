import {getProposals} from "~/models/proposal.server";
import {json} from "@remix-run/node";

export type LoaderData = {
  // this is a handy way to say: "posts is whatever type getPosts resolves to"
  proposals: Awaited<ReturnType<typeof getProposals>>;
};
export const loader = async () => {
  return json<LoaderData>({
    proposals: await getProposals(),
  });
};