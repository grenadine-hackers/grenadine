import { NearProposals } from '~/proposal/containers/NearProposals';
import { ProposalProvider } from '~/proposal/ProposalContext';

export default function Index() {
  return (
    <ProposalProvider proposalRepository={}>
      <NearProposals />
    </ProposalProvider>
  );
}
