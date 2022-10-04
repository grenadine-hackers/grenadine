import type { Calendars, Day } from "./proposals/domain/day";
import { ProposalInMemoryRepository } from "@/infrastructure/proposalInMemoryRepository";
import type { Proposals } from "./proposals/domain/proposal";
import type { RenderOptions } from "@testing-library/vue";
import type { SetupOptions } from "./proposals/NearProposals.test";
import { calendar } from "@/infrastructure/calendars";
import { j0 } from "./proposals/domain/day.fixture";

export const testSetup = ({
  today,
  nearProposals,
  ...options
}: SetupOptions = {}): RenderOptions => {
  const currentDay = today ?? j0;
  const provideCalendar: Calendars = {
    ...calendar,
    today: () => currentDay,
    getNextWeeks: (): Day[] => calendar.getNextWeeks(currentDay),
  };

  const provideProposals: Proposals = {
    ...ProposalInMemoryRepository,
    getProposals: () => nearProposals ?? [],
  };

  return {
    global: {
      provide: { calendars: provideCalendar, proposals: provideProposals },
    },
    ...options,
  };
};
