import { createProposal, ProposalRepository } from '../proposal/domain/proposal';

export const ProposalInMemoryRepository: ProposalRepository = {
  createProposal,
  getNearestProposals: () => [],
};
