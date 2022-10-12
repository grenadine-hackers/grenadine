import type { App } from "vue";
import { proposalSymbol } from "@/infrastructure/symbols";
import type {
  Proposal,
  ProposalCollection,
  Proposals,
} from "@/proposals/domain/proposal";
import { createProposal } from "@/proposals/domain/proposal";

import { useProposalStore } from "@/stores/ProposalStore";

export const proposalsPlugin = () => ({
  install(app: App) {
    const proposalStore = useProposalStore();
    app.provide<Proposals>(proposalSymbol, {
      addProposal: (proposal: Proposal) => {
        proposalStore.$patch((state) => {
          state.proposals.push(proposal);
        });
      },
      createProposal,
      loadProposals: (): ProposalCollection => {
        return proposalStore.proposals;
      },
    });
  },
});
