import { useContext } from 'react';
import { CalendarRepository, ProposalContext } from '../ProposalContext';

export const useCalendar = (): CalendarRepository => {
  return useContext(ProposalContext).calendarRepository;
};
