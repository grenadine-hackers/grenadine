import { v4 as uuid } from 'uuid';
import { Slot, SlotType } from './slot';
import { Day } from './day';

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
  return {
    id: proposal.id ?? uuid(),
    date: proposal.date ?? new Date().toISOString(),
    slot: proposal.slot ?? SlotType.LUNCH,
  };
};

export const ProposalInMemoryRepository: ProposalRepository = {
  getProposal,
  getNearestProposals: () => [getProposal({}), getProposal({})], // TODO: getNearestProposals
};
