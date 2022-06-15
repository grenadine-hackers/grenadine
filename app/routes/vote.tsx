import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { getProposals, Proposal } from "~/models/proposal.server";
import { Card } from "~/ui/card";

type LoaderData = {
  // this is a handy way to say: "posts is whatever type getPosts resolves to"
  proposals: Awaited<ReturnType<typeof getProposals>>;
};

export const loader = async () => {
  return json<LoaderData>({
    proposals: await getProposals(),
  });
};

export default function Vote() {
    const { proposals } = useLoaderData<LoaderData>();
    console.log(proposals);
    return (
      <div>
        <h1>Proposals</h1>
        {proposals.map((proposal: Proposal) => (
          <Card 
            key={proposal.id}
            proposal={proposal}>
          </Card>
        ))}
      </div>
    );
  }