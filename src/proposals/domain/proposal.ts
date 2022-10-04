import type { Slot } from "./slot";
import { SlotType } from "./slot";
import type { Day } from "@/proposals/domain/day";
import { v4 as uuid } from "uuid";

export type ProposalId = string;

export type Proposal = {
  id: ProposalId;
} & Day &
  Slot;

export type ProposalCollection = Proposal[];

export interface Proposals {
  createProposal(proposal: Partial<Proposal>): Proposal;

  getProposals(): ProposalCollection;
}

export const createProposal = (proposal: Partial<Proposal> = {}): Proposal => {
  return {
    id: proposal.id ?? uuid(),
    date: proposal.date ?? new Date().toISOString(),
    slot: proposal.slot ?? SlotType.LUNCH,
  };
};
