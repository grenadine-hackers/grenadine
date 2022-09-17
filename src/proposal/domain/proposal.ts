import { Slot } from './slot';
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
