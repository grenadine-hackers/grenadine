import { v4 as uuid } from 'uuid';
import { Day, Slot, SlotType } from './slot';

export type ProposalId = string;

export type Proposal = {
  id: ProposalId;
} & Day &
  Slot;

export type Proposals = Proposal[];

export interface ProposalRepository {
  getProposal(proposal: Partial<Proposal>): Proposal;
  getNearestProposals(): Proposals;
}

const getProposal = (proposal: Partial<Proposal> = {}): Proposal => {
  return { id: proposal.id ?? uuid(), date: proposal.date ?? new Date(), slot: proposal.slot ?? SlotType.LUNCH };
};

export const ProposalInMemoryRepository: ProposalRepository = {
  getProposal,
  getNearestProposals: () => [getProposal({}), getProposal({})], // TODO: getNearestProposals
};
