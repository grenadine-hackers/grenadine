import type { Proposal } from './proposal';
import { getProposal, ProposalSlot } from './proposal';

export const proposalMidi: Proposal = getProposal({});
export const proposalSoir: Proposal = getProposal({ slot: ProposalSlot.SOIR });

export const getProposals = [proposalMidi, proposalSoir];
