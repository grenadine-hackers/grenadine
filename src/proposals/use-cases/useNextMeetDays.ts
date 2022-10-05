import { inject } from "vue";
import { ProposalInMemoryRepository } from "@/infrastructure/proposalInMemoryRepository";
import dayjs from "dayjs";
import type { Calendars, Day, DayCollection } from "@/proposals/domain/day";
import { calendar } from "@/infrastructure/calendars";
import type { Proposal, Proposals } from "@/proposals/domain/proposal";
import type { SlotType } from "@/proposals/domain/slot";

export const useNextMeetDays = (slotType: SlotType) => {
  const calendars = inject<Calendars>("calendars", calendar);
  const { getProposals } = inject<Proposals>(
    "proposals",
    ProposalInMemoryRepository
  );
  const withOutdated = (proposal: Proposal): boolean =>
    dayjs(proposal.date).isSameOrAfter(calendars.today().date);

  const withSlot = (proposal: Proposal, slotType: SlotType): boolean =>
    proposal.slot === slotType;

  const dates: DayCollection = getProposals()
    .filter(withOutdated)
    .filter((proposal: Proposal) => withSlot(proposal, slotType))
    .reduce<DayCollection>((days, proposal) => {
      const existingDays = days.filter(
        (day: Day) => proposal.date === day.date
      );
      if (existingDays.length === 0 && days.length < 3) {
        days.push({ date: proposal.date } as Day);
      }
      return days;
    }, []);
  return { days: dates };
};
