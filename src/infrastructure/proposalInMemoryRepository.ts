import { createProposal } from "@/proposals/domain/proposal";
import type { Proposals } from "@/proposals/domain/proposal";

export const ProposalInMemoryRepository: Proposals = {
  createProposal,
  getProposals: () => [],
};
