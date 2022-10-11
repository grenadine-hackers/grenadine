import { defineStore } from "pinia";
import type {
  ProposalCollection,
  VotedProposalCollection,
} from "@/proposals/domain/proposal";
import { nextMeetDays } from "@/proposals/domain/proposal";
import { computed, ref } from "vue";
import { SlotType } from "@/proposals/domain/slot";
import { calendar } from "@/infrastructure/calendars";

export const useProposalStore = defineStore("proposals", () => {
  const proposals = ref<ProposalCollection>([]);

  const nextLunch = computed<VotedProposalCollection>(() =>
    nextMeetDays(proposals.value, calendar.today(), SlotType.LUNCH)
  );
  const nextDinner = computed<VotedProposalCollection>(() =>
    nextMeetDays(proposals.value, calendar.today(), SlotType.DINNER)
  );
  return { proposals, nextLunch, nextDinner };
});
