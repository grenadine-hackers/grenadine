import { ProposalContext } from '../ProposalContext';
import { useContext } from 'react';

export const useNearProposals = () => {
  const { proposalRepository } = useContext(ProposalContext);
  return proposalRepository.getNearestProposals();
};
