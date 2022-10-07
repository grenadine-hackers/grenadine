import { inject } from "vue";
import { proposalSymbol } from "@/infrastructure/symbols";
import { InMemoryProposals } from "@/infrastructure/inMemoryProposals";
import type { Proposals } from "@/proposals/domain/proposal";

export const useAddProposal = () => {
  const { addProposal } = inject<Proposals>(proposalSymbol, InMemoryProposals);
  return { addProposal };
};
