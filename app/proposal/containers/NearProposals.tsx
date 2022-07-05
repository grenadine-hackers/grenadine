import React, { useContext } from 'react';
import { Timeline } from '../../ui/Timeline';
import type { Proposal } from '../domain/proposal';
import { useNearProposals } from '../hooks/useNearProposals';
import { ProposalContext } from '../ProposalContext';

export const NearProposals: React.FC = () => {
  const proposals: Proposal[] = useNearProposals();
  return (<>
    <h1>NearProposals</h1>
    <Timeline proposals={proposals}/>
  </>);
};