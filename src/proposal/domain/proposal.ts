import { v4 as uuid } from 'uuid';

export enum ProposalSlot {
  LUNCH,
  DINNER,
}

export type ProposalId = string;

export type Proposal = {
  id: ProposalId;
  date: Date;
  slot: ProposalSlot;
};

type ProposalProps = {
  date: Date;
  slot: ProposalSlot;
};

export type Proposals = Proposal[];

export interface ProposalRepository {
  getProposal(proposal: Partial<ProposalProps>): Proposal;
  getNearestProposals(): Proposals;
}

// TODO remove this export
export const getProposal = (proposal: Partial<ProposalProps> = {}): Proposal => {
  return { id: uuid(), date: proposal.date ?? new Date(), slot: proposal.slot ?? ProposalSlot.LUNCH };
};

export const ProposalInMemoryRepository: ProposalRepository = {
  getProposal,
  getNearestProposals: () => [getProposal(), getProposal()], // TODO: getNearestProposals
};
