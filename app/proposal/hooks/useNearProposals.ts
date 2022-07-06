import {useContext} from "react";
import {ProposalContext} from "~/proposal/ProposalContext";

export const useNearProposals = () => {
    const { proposalRepository} = useContext(ProposalContext)
    return () => proposalRepository.getNearestProposals();
};