import { createProposal } from "@/proposals/domain/proposal";
import type { ProposalRepository } from "@/proposals/domain/proposal";

export const ProposalInMemoryRepository: ProposalRepository = {
  createProposal,
  getProposals: () => [],
};
