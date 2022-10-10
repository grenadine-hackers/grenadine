import { defineStore } from "pinia";
import type { ProposalCollection } from "@/proposals/domain/proposal";
import { ref } from "vue";

export const useProposalStore = defineStore("proposals", () => {
  const proposals = ref<ProposalCollection>([]);

  return { proposals };
});
