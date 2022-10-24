import { InMemoryProposals } from "@/infrastructure/inMemoryProposals";
import type { Proposals } from "@/proposals/domain/proposal";
import { inject } from "vue";
import { proposalSymbol } from "@/infrastructure/symbols";

export const useDeleteProposal = () => {
  const { deleteProposal } = inject<Proposals>(
    proposalSymbol,
    InMemoryProposals()
  );
  return { deleteProposal };
};
