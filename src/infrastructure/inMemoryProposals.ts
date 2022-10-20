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
  createProposal,
  loadProposals: async () => (proposals = collection),
});
