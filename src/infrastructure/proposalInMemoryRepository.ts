import { v4 as uuid } from 'uuid';
import { SlotType } from '../proposal/domain/slot';
import { Proposal, ProposalRepository } from '../proposal/domain/proposal';

const getProposal = (proposal: Partial<Proposal> = {}): Proposal => {
  return {
    id: proposal.id ?? uuid(),
    date: proposal.date ?? new Date().toISOString(),
    slot: proposal.slot ?? SlotType.LUNCH,
  };
};
export const ProposalInMemoryRepository: ProposalRepository = {
  getProposal,
  getNearestProposals: () => [getProposal({}), getProposal({})],
};
