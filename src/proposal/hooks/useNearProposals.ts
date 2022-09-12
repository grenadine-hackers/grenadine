import { ProposalInMemoryRepository } from '../domain/proposal';

export const useNearProposals = () => {
  const { getProposal } = ProposalInMemoryRepository;
  return [getProposal({}), getProposal({})];
};
