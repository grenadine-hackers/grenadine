import { defineStore } from "pinia";
import {
  nextMeetDays,
  type ProposalCollection,
} from "@/proposals/domain/proposal";
import { SlotType } from "@/proposals/domain/slot";
import type { Day } from "@/proposals/domain/day";

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
  },
});
