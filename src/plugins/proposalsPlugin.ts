import type { App } from "vue";
import { proposalSymbol } from "@/infrastructure/symbols";
import type {
  Proposal,
  ProposalCollection,
  Proposals,
} from "@/proposals/domain/proposal";
import { createProposal } from "@/proposals/domain/proposal";

import { useProposalStore } from "@/stores/ProposalStore";
import { InMemoryProposals } from "@/infrastructure/inMemoryProposals";

export const proposalsPlugin = (
  proposals: Proposals = InMemoryProposals()
) => ({
  async install(app: App) {
    const proposalStore = useProposalStore();
    const appProposals: Proposals = {
      addProposal: (proposal: Proposal) => {
        proposalStore.$patch((state) => {
          state.proposals.push(proposal);
        });
        proposals.addProposal(proposal);
      },
      createProposal,
      loadProposals: async (): Promise<ProposalCollection> => {
        const proposalCollection = await proposals.loadProposals();
        proposalStore.$patch((state) => {
          state.proposals = proposalCollection;
        });
        return [];
      },
    };
    app.provide<Proposals>(proposalSymbol, appProposals);
    await appProposals.loadProposals();
  },
});
