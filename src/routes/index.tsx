import {ProposalProvider} from "../proposal/ProposalContext";
import {NearProposals} from "../proposal/containers/NearProposals";

export default function Index() {
  return (
    <ProposalProvider>
      <NearProposals />
    </ProposalProvider>
  );
}
