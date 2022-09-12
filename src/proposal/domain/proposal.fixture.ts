import type { Proposal } from './proposal';
import { ProposalInMemoryRepository, ProposalSlot } from './proposal';

const { getProposal } = ProposalInMemoryRepository;

export const proposalLunch: Proposal = getProposal({});
export const proposalDinner: Proposal = getProposal({ slot: ProposalSlot.DINNER });

export const proposals = [proposalLunch, proposalDinner];
