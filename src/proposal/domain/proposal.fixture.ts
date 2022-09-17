import type { Proposal } from './proposal';
import { SlotType } from './slot';
import { ProposalInMemoryRepository } from '../../infrastructure/proposalInMemoryRepository';

const { getProposal } = ProposalInMemoryRepository;

export const proposalLunch: Proposal = getProposal({});
export const proposalDinner: Proposal = getProposal({ slot: SlotType.DINNER });

export const proposals = [proposalLunch, proposalDinner];
