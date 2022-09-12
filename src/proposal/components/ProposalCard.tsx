import React from 'react';
import { Proposal } from '../domain/proposal';

export const ProposalCard: React.FC<{ proposal: Proposal }> = ({ proposal }) => {
  return (
    <article>
      {proposal.id} &nbsp;
      {proposal.slot}
    </article>
  );
};
