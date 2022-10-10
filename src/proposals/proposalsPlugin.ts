import type { App } from "vue";
import { proposalSymbol } from "@/infrastructure/symbols";
import type {
  Proposal,
  ProposalCollection,
  Proposals,
} from "@/proposals/domain/proposal";
import { createProposal } from "@/proposals/domain/proposal";
import { useProposalStore } from "@/stores/proposals";
import { useGetProposals } from "@/proposals/use-cases/useGetProposals";

export const proposalsPlugin = () => ({
  install(app: App) {
    const proposalStore = useProposalStore();
    const { proposals } = useGetProposals();
    app.provide<Proposals>(proposalSymbol, {
      addProposal: (proposal: Proposal) => {
        proposalStore.$patch((state) => {
          state.proposals.push(proposal);
        });
      },
      createProposal,
      getProposals: (): ProposalCollection => {
        return proposals;
      },
    });
  },
});
