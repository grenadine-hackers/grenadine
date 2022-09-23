import { ProposalContext } from '../ProposalContext';
import { useContext } from 'react';
import dayjs from 'dayjs';

export const useNearProposals = () => {
  const { proposalRepository, calendarRepository } = useContext(ProposalContext);
  return proposalRepository
    .getNearestProposals()
    .filter((proposal) => dayjs(proposal.date).isSameOrAfter(calendarRepository.today().date));
};
