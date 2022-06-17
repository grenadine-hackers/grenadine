import {useLoaderData} from "@remix-run/react";
import {Card} from "~/ui/card";
import {LoaderData} from "~/loaderData";

export default function Vote() {
    const { proposals } = useLoaderData<LoaderData>();
    return (
      <div>
        <h1>Proposals</h1>
        {proposals.map((proposal) => (
          <Card 
            key={proposal.id}
            proposal={proposal}>
          </Card>
        ))}
      </div>
    );
  }