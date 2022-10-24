import type {
  Proposal,
  ProposalCollection,
  Proposals,
} from "@/proposals/domain/proposal";

import type { App } from "vue";
import { InMemoryProposals } from "@/infrastructure/inMemoryProposals";
import { createProposal } from "@/proposals/domain/proposal";
import { proposalSymbol } from "@/infrastructure/symbols";
import { useProposalStore } from "@/stores/ProposalStore";

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
      deleteProposal: (proposal: Proposal) => {
        proposalStore.$patch((state) => {
          const existingProposals = state.proposals;
          existingProposals.filter(
            (existingProposal: Proposal) => existingProposal.id !== proposal.id
          );
          state.proposals = existingProposals.filter(
            (existingProposal: Proposal) => existingProposal.id !== proposal.id
          );
        });
        proposals.deleteProposal(proposal);
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
