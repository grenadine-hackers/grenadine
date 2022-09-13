import type { Proposal } from './proposal';
import { ProposalInMemoryRepository } from './proposal';
import { SlotType } from './slot';

const { getProposal } = ProposalInMemoryRepository;

export const proposalLunch: Proposal = getProposal({});
export const proposalDinner: Proposal = getProposal({ slot: SlotType.DINNER });

export const proposals = [proposalLunch, proposalDinner];
