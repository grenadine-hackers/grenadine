import type { Proposal } from './proposal';
import { SlotType } from './slot';
import { ProposalInMemoryRepository } from '../../infrastructure/proposalInMemoryRepository';

const { createProposal } = ProposalInMemoryRepository;

export const proposalLunch: Proposal = createProposal({});
export const proposalDinner: Proposal = createProposal({ slot: SlotType.DINNER });

export const proposals = [proposalLunch, proposalDinner];
