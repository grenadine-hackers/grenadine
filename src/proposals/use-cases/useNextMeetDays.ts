import { inject } from "vue";
import dayjs from "dayjs";
import type { Calendars, Day, DayCollection } from "@/proposals/domain/day";
import { calendar } from "@/infrastructure/calendars";
import type { Proposal, ProposalCollection } from "@/proposals/domain/proposal";
import { withOutdated, withSlot } from "@/proposals/domain/proposal";
import type { SlotType } from "@/proposals/domain/slot";
import { calendarSymbol } from "@/infrastructure/symbols";
import { useGetProposals } from "@/proposals/use-cases/useGetProposals";

export const useNextMeetDays = (slotType: SlotType) => {
  const calendars = inject<Calendars>(calendarSymbol, calendar);

  const { proposals: storedProposals } = useGetProposals();

  const proposals: ProposalCollection = storedProposals
    .filter((proposal: Proposal) => withOutdated(proposal, calendars.today()))
    .filter((proposal: Proposal) => withSlot(proposal, slotType));
  const sortedProposals: ProposalCollection = [...proposals].sort((a, b) =>
    dayjs(a.date).isSameOrAfter(b.date) ? 1 : -1
  );

  const days: DayCollection = sortedProposals.reduce<DayCollection>(
    (days, proposal) => {
      const existingDays = days.filter(
        (day: Day) => proposal.date === day.date
      );
      if (existingDays.length === 0 && days.length < 3) {
        days.push({ date: proposal.date } as Day);
      }
      return days;
    },
    []
  );
  return { days };
};
