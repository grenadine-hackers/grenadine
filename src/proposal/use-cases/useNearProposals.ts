import dayjs from 'dayjs';
import { useProposals } from '../hooks/useProposals';
import { useCalendar } from '../hooks/useCalendar';

export const useNearProposals = () => {
  const proposals = useProposals();
  const calendar = useCalendar();

  return proposals
    .getNearestProposals()
    .filter((proposal) => dayjs(proposal.date).isSameOrAfter(calendar.today().date));
};
