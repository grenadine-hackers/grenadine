import React from 'react';
import type { Proposals } from '../domain/proposal';
import { useNearProposals } from '../hooks/useNearProposals';
import { ProposalCard } from '../components/ProposalCard';

export const NearProposals: React.FC = () => {
  const proposals: Proposals = useNearProposals();
  return (
    <>
      <h1>NearProposals</h1>
      {proposals.map((proposal) => (
        <ProposalCard proposal={proposal} key={proposal.id} />
      ))}
    </>
  );
};
