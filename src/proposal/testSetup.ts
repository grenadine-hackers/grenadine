import type { Calendars } from "./domain/day";
import { ProposalInMemoryRepository } from "@/infrastructure/proposalInMemoryRepository";
import type { ProposalRepository } from "./domain/proposal";
import type { RenderOptions } from "@testing-library/vue";
import type { SetupOptions } from "./NearProposals.test";
import { calendar } from "@/infrastructure/calendars";
import { j0 } from "./domain/day.fixture";

export const testSetup = ({
  today,
  nearProposals,
  ...options
}: SetupOptions = {}): RenderOptions => {
  const provideCalendar: Calendars = {
    ...calendar,
    today: () => today ?? j0,
  };

  const provideProposals: ProposalRepository = {
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
