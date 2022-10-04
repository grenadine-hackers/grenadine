import { createProposal } from "@/proposal/domain/proposal";
import type { ProposalRepository } from "@/proposal/domain/proposal";

export const ProposalInMemoryRepository: ProposalRepository = {
  createProposal,
  getProposals: () => [],
};
