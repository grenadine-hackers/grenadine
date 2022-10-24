import type { Day } from "../domain/day";
import type { SlotType } from "../domain/slot";
import { useCurrentUser } from "./useCurrentUser";
import { useProposalStore } from "@/stores/ProposalStore";

export const useMyProposals = () => {
  const me = useCurrentUser();
  const proposalStore = useProposalStore();
  return {
    isSelected: (slot: SlotType, day: Day): boolean =>
      proposalStore.my(me, slot, day),
  };
};
