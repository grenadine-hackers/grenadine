import { useContext } from 'react';
import { ProposalContext } from '../ProposalContext';

export const useProposals = () => {
  const { proposalRepository } = useContext(ProposalContext);
  return proposalRepository;
};
