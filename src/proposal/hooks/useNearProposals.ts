import { getProposal } from '../domain/proposal';

export const useNearProposals = () => {
  const proposals = [getProposal(), getProposal()];
  return proposals;
};
