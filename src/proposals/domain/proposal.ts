import type { Slot } from "./slot";
import { SlotType } from "./slot";
import type { Day, DayCollection } from "@/proposals/domain/day";
import { v4 as uuid } from "uuid";
import type { User } from "@/proposals/domain/user";
import dayjs from "dayjs";

export type ProposalId = string;

export type Proposal = {
  id: ProposalId;
} & Day &
  Slot & { user: User };

export type ProposalCollection = Proposal[];

export interface Proposals {
  createProposal(proposal: Partial<Proposal>, user: User): Proposal;

  addProposal(proposal: Proposal): void;

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
export const withOutdated = (proposal: Proposal, today: Day): boolean =>
  dayjs(proposal.date).isAfter(dayjs(today.date).subtract(1, "day"));

export const withSlot = (proposal: Proposal, slotType: SlotType): boolean =>
  proposal.slot === slotType;

export const toDayReducer = (days: DayCollection, proposal: Proposal) => {
  const existingDays = days.filter((day: Day) => proposal.date === day.date);
  if (existingDays.length === 0 && days.length < 3) {
    days.push({ date: proposal.date } as Day);
  }
  return days;
};
export const sortByDate = (proposals: ProposalCollection): ProposalCollection =>
  proposals
    .slice()
    .sort((a, b) => (dayjs(a.date).isSameOrAfter(b.date) ? 1 : -1));

export const nextMeetDays = (
  proposals: ProposalCollection,
  today: Day,
  slotType: SlotType
): DayCollection => {
  return sortByDate(
    proposals
      .filter((proposal: Proposal) => withOutdated(proposal, today))
      .filter((proposal: Proposal) => withSlot(proposal, slotType))
  ).reduce<DayCollection>(toDayReducer, []);
};
