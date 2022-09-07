export enum ProposalSlot {
  MIDI,
  SOIR,
}

export type Proposal = {
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
  return { date: proposal.date ?? new Date(), slot: proposal.slot ?? ProposalSlot.MIDI };
};

export const ProposalInMemoryRepository: ProposalRepository = {
  getProposal,
  getNearestProposals: () => [getProposal(), getProposal()], // TODO: getNearestProposals
};
