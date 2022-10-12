import type {
  Proposal,
  ProposalCollection,
  Proposals,
} from "@/proposals/domain/proposal";
import { createProposal } from "@/proposals/domain/proposal";

const getProposals = (): ProposalCollection => {
  return [];
};
const addProposal = (proposal: Proposal) => {};

export const supabaseProposals: Proposals = {
  createProposal,
  addProposal,
  loadProposals: getProposals,
};
