import { createProposal } from "@/proposals/domain/proposal";
import type { Proposals } from "@/proposals/domain/proposal";

export const InMemoryProposals: Proposals = {
  createProposal,
  getProposals: () => [],
};
