import type { Slot } from "./slot";
import { SlotType } from "./slot";
import type { Day } from "@/proposal/domain/day";
import { v4 as uuid } from "uuid";

export type ProposalId = string;

export type Proposal = {
  id: ProposalId;
} & Day &
  Slot;

export type Proposals = Proposal[];

export interface ProposalRepository {
  createProposal(proposal: Partial<Proposal>): Proposal;

  getProposals(): Proposals;
}

export const createProposal = (proposal: Partial<Proposal> = {}): Proposal => {
  return {
    id: proposal.id ?? uuid(),
    date: proposal.date ?? new Date().toISOString(),
    slot: proposal.slot ?? SlotType.LUNCH,
  };
};
