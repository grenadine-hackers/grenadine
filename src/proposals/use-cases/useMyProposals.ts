import type { Day } from "../domain/day";
import type { Proposal } from "../domain/proposal";
import type { SlotType } from "../domain/slot";
import { computed } from "vue";
import { useCurrentUser } from "./useCurrentUser";
import { useProposalStore } from "@/stores/ProposalStore";

export const useMyProposals = () => {
  const me = useCurrentUser();
  const proposalStore = useProposalStore();

  const myProposal = computed(
    () =>
      (slot: SlotType, day: Day): Proposal | undefined =>
        proposalStore.my(me, slot, day)
  );
  return {
    myProposal,
  };
};
