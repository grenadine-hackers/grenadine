import { defineStore } from "pinia";
import type { ProposalCollection } from "@/proposals/domain/proposal";

type ProposalState = {
  proposals: ProposalCollection;
};

export const useProposalStore = defineStore("proposals", {
  state: (): ProposalState => ({
    proposals: [],
  }),
  getters: {
    getProposals: (state): ProposalCollection => state.proposals,
  },
});
