import type { Slot } from "./slot";
import { SlotType } from "./slot";
import type { Day } from "@/proposals/domain/day";
import { v4 as uuid } from "uuid";
import type { User } from "@/proposals/domain/user";
import dayjs from "dayjs";

export type ProposalId = string;

export type Proposal = {
  id: ProposalId;
} & Day &
  Slot & { user: User };

export type VotedProposal = Proposal & { vote: number };
export type VotedProposalCollection = VotedProposal[];

export type ProposalCollection = Proposal[];

export interface Proposals {
  createProposal(proposal: Partial<Proposal>, user: User): Proposal;

  addProposal(proposal: Proposal): void;

  loadProposals(): ProposalCollection;
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
export const withOutdated = (proposal: Proposal, today: Day): boolean =>
  dayjs(proposal.date).isAfter(dayjs(today.date).subtract(1, "day"));

export const withSlot = (proposal: Proposal, slotType: SlotType): boolean =>
  proposal.slot === slotType;

export const sortByVotes = (
  proposals: VotedProposalCollection
): VotedProposalCollection =>
  proposals.slice().sort((a, b) => (a.vote < b.vote ? 1 : -1));

export const sortByDate = (
  proposals: VotedProposalCollection
): VotedProposalCollection =>
  proposals
    .slice()
    .sort((a, b) => (dayjs(a.date).isSameOrBefore(b.date) ? 0 : -1));

export const toVoteReducer = (
  voteCollection: VotedProposalCollection,
  proposal: Proposal
) => {
  const vote = voteCollection.find(
    (voted: VotedProposal) => voted.date === proposal.date
  );

  if (vote) {
    voteCollection
      .filter((voted) => voted !== vote)
      .push({ ...vote, vote: vote.vote++ } as VotedProposal);
  } else {
    voteCollection.push({ ...proposal, vote: 1 } as VotedProposal);
  }
  return sortByVotes(sortByDate(voteCollection));
};

export const nextMeetDays = (
  proposals: ProposalCollection,
  today: Day,
  slotType: SlotType
): VotedProposalCollection => {
  return proposals
    .filter((proposal: Proposal) => withOutdated(proposal, today))
    .filter((proposal: Proposal) => withSlot(proposal, slotType))
    .reduce<VotedProposalCollection>(toVoteReducer, [])
    .slice(0, 3);
};
