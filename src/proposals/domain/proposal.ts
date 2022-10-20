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

  loadProposals(): Promise<ProposalCollection>;
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
export const withOutdated = (proposal: Proposal, today: Day): boolean => {
  return dayjs(proposal.date).isSameOrAfter(
    dayjs(today.date).subtract(1, "day"),
    "day"
  );
};

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

export function findByDate<T extends Proposal>(
  collection: T[],
  date: Day
): T | undefined {
  return collection.find((d: T) => d.date === date.date) as T;
}

function incrementVote(
  voteCollection: VotedProposalCollection,
  vote: VotedProposal
): VotedProposalCollection {
  voteCollection
    .filter((voted) => voted !== vote)
    .push({ ...vote, vote: vote.vote++ } as VotedProposal);
  return voteCollection;
}

function insertVote(
  voteCollection: VotedProposalCollection,
  proposal: Proposal
): VotedProposalCollection {
  return [...voteCollection, { ...proposal, vote: 1 } as VotedProposal];
}

function addVote(
  voteCollection: VotedProposalCollection,
  proposal: Proposal
): VotedProposalCollection {
  const vote = findByDate<VotedProposal>(voteCollection, proposal);
  let votes: VotedProposalCollection;
  if (vote) {
    votes = incrementVote(voteCollection, vote);
  } else {
    votes = insertVote(voteCollection, proposal);
  }

  return votes;
}

export const toVote = (
  voteCollection: VotedProposalCollection,
  proposal: Proposal
) => {
  const votes = addVote(voteCollection, proposal);
  return sortByVotes(sortByDate(votes));
};

export const nextMeetDays = (
  proposals: ProposalCollection,
  today: Day,
  slotType: SlotType
): VotedProposalCollection => {
  return proposals
    .reduce<VotedProposalCollection>(toVote, [])
    .filter((proposal: Proposal) => withOutdated(proposal, today))
    .filter((proposal: Proposal) => withSlot(proposal, slotType))
    .slice(0, 3);
};
