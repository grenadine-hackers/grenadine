import { useProposalStore } from "@/stores/proposals";

export const useGetProposals = () => {
  const proposalStore = useProposalStore();
  return {
    proposals: proposalStore.proposals,
  };
};
