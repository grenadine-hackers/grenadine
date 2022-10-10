import { useProposalStore } from "@/stores/proposals";

export const useGetProposals = () => {
  const proposalStore = useProposalStore();
  console.log(proposalStore.getProposals);
  return {
    proposals: proposalStore.getProposals,
  };
};
