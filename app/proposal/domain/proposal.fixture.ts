import { getProposal, Proposal, ProposalSlot } from "./proposal";

export const proposalMidi: Proposal = getProposal({});
export const proposalSoir: Proposal = getProposal({ slot: ProposalSlot.SOIR });

export const getProposals = [
    proposalMidi,
    proposalSoir,
]
