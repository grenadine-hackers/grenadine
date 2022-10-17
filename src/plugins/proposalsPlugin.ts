import type { App } from "vue";
import { proposalSymbol } from "@/infrastructure/symbols";
import type {
  Proposal,
  ProposalCollection,
  Proposals,
} from "@/proposals/domain/proposal";
import { createProposal } from "@/proposals/domain/proposal";

import { useProposalStore } from "@/stores/ProposalStore";
import { supabaseProposals } from "@/infrastructure/supabaseProposals";

export const proposalsPlugin = () => ({
  async install(app: App) {
    const proposalStore = useProposalStore();
    const proposals: Proposals = {
      addProposal: (proposal: Proposal) => {
        proposalStore.$patch((state) => {
          state.proposals.push(proposal);
        });
        supabaseProposals.addProposal(proposal);
      },
      createProposal,
      loadProposals: async (): Promise<ProposalCollection> => {
        const proposals = await supabaseProposals.loadProposals();
        proposalStore.$patch((state) => {
          state.proposals = proposals;
        });
        return [];
      },
    };
    app.provide<Proposals>(proposalSymbol, proposals);
    await proposals.loadProposals();
  },
});
