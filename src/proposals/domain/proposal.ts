import type { Slot } from "./slot";
import { SlotType } from "./slot";
import type { Day } from "@/proposals/domain/day";
import { v4 as uuid } from "uuid";
import type { User } from "@/proposals/domain/user";

export type ProposalId = string;

export type Proposal = {
  id: ProposalId;
} & Day &
  Slot & { user: User };

export type ProposalCollection = Proposal[];

export interface Proposals {
  createProposal(proposal: Partial<Proposal>, user: User): Proposal;

  getProposals(): ProposalCollection;
}

export const createProposal = (
  proposal: Partial<Proposal> = {},
  user: User
): Proposal => {
  return {
    id: (proposal.id ?? uuid()) as ProposalId,
    date: proposal.date ?? new Date().toISOString(),
    slot: proposal.slot ?? SlotType.LUNCH,
    user,
  };
};
