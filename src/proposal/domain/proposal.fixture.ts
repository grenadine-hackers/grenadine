import type { Proposal } from './proposal';
import { getProposal, ProposalSlot } from './proposal';

export const proposalLunch: Proposal = getProposal({});
export const proposalDinner: Proposal = getProposal({ slot: ProposalSlot.DINNER });

export const getProposals = [proposalLunch, proposalDinner];
