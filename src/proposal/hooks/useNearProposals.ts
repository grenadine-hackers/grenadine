import { ProposalContext } from '../ProposalContext';
import { useContext } from 'react';

export const useNearProposals = () => {
  const { repository } = useContext(ProposalContext);
  return repository.getNearestProposals();
};
