import React from 'react';
import { Proposals } from '../domain/proposal';
import { useNearProposals } from '../hooks/useNearProposals';
import { ProposalCard } from '../components/ProposalCard';

export const NearProposals: React.FC = () => {
  const proposals: Proposals = useNearProposals();

  return (
    <>
      <h1>Prochain midi</h1>
      {proposals.length === 0 ? (
        <span>Aucun midi disponible</span>
      ) : (
        proposals.map((proposal) => <ProposalCard proposal={proposal} key={proposal.id} />)
      )}
      {}
    </>
  );
};
