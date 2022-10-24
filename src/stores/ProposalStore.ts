import { defineStore } from "pinia";
import {
  nextMeetDays,
  type Proposal,
  type ProposalCollection,
} from "@/proposals/domain/proposal";
import { SlotType } from "@/proposals/domain/slot";
import type { Day } from "@/proposals/domain/day";
import type { User } from "@/proposals/domain/user";
import dayjs from "dayjs";

export const useProposalStore = defineStore("proposals", {
  state: (): { proposals: ProposalCollection } => ({
    proposals: [],
  }),
  getters: {
    nextLunch: (state) => {
      return (today: Day) =>
        nextMeetDays(state.proposals, today, SlotType.LUNCH);
    },
    nextDinner: (state) => {
      return (today: Day) =>
        nextMeetDays(state.proposals, today, SlotType.DINNER);
    },
    my: (state) => {
      return (user: User, slot: SlotType, day: Day): Proposal | undefined =>
        state.proposals.find(
          (proposal: Proposal) =>
            proposal.user.id === user.id &&
            dayjs(day.date).isSame(proposal.date, "day") &&
            proposal.slot === slot
        );
    },
  },
});
