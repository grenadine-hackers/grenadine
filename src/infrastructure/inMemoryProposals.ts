import type {
  Proposal,
  ProposalCollection,
  Proposals,
} from "@/proposals/domain/proposal";

import { createProposal } from "@/proposals/domain/proposal";

let proposals: ProposalCollection = [];

export const InMemoryProposals = (
  collection: ProposalCollection = []
): Proposals => ({
  addProposal: (proposal: Proposal) => {
    proposals = [...proposals, proposal];
  },
  deleteProposal: (proposal: Proposal) => {
    proposals = proposals.filter(
      (existingProposal: Proposal) => existingProposal.id !== proposal.id
    );
  },
  createProposal,
  loadProposals: async () => (proposals = collection),
});
