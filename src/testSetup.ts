import sinon from "sinon";
import { createTestingPinia } from "@pinia/testing";

import type { Calendars, Day } from "./proposals/domain/day";
import { InMemoryProposals } from "@/infrastructure/inMemoryProposals";
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
import { InMemoryUsers } from "@/infrastructure/inMemoryUsers";

export type SetupOptions = RenderOptions & {
  today?: Day;
  nearProposals?: ProposalCollection;
  user?: User;
  proposals?: Proposals;
};
export const testSetup = ({
  today,
  nearProposals = [],
  user,
  proposals,
  ...options
}: SetupOptions = {}): RenderOptions => {
  const currentDay = today ?? j0;
  const provideCalendar: Calendars = {
    ...calendar,
    today: () => currentDay,
    getNextWeeks: (): Day[] => calendar.getNextWeeks(currentDay),
  };

  const provideProposals: Proposals = proposals ?? InMemoryProposals;

  return {
    global: {
      provide: {
        [calendarSymbol]: provideCalendar,
        [proposalSymbol]: provideProposals,
      },
      plugins: [
        createTestingPinia({
          createSpy: sinon.spy,
          initialState: { proposals: { proposals: nearProposals } },
        }),
        userPlugin(InMemoryUsers(), user),
      ],
    },
    ...options,
  };
};
