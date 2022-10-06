import type { Calendars, Day } from "./proposals/domain/day";
import { ProposalInMemoryRepository } from "@/infrastructure/proposalInMemoryRepository";
import type {
  ProposalCollection,
  Proposals,
} from "./proposals/domain/proposal";
import type { RenderOptions } from "@testing-library/vue";
import { calendar } from "@/infrastructure/calendars";
import { j0 } from "./proposals/domain/day.fixture";
import { calendarSymbol, proposalSymbol } from "@/infrastructure/symbols";
import { userPlugin } from "@/proposals/userPlugin";
import type { User } from "@/proposals/domain/user";

export type SetupOptions = RenderOptions & { today?: Day } & {
  nearProposals?: ProposalCollection;
} & { user?: User };
export const testSetup = ({
  today,
  nearProposals,
  user,
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
      provide: {
        [calendarSymbol]: provideCalendar,
        [proposalSymbol]: provideProposals,
      },
      plugins: [userPlugin(user)],
    },
    ...options,
  };
};
