import React from 'react';
import { ProposalRepository } from './domain/proposal';
import { Day } from './domain/day';
import { ProposalInMemoryRepository } from '../infrastructure/proposalInMemoryRepository';

export interface CalendarRepository {
  today: () => Day;
  getNextWeeks: (startDay: Day) => Day[];
}
const defaultCalendarRepository: CalendarRepository = {
  today: () => ({ date: new Date().toISOString() }),
  getNextWeeks: () => [],
};

export const ProposalContext = React.createContext<{
  proposalRepository: ProposalRepository;
  calendarRepository: CalendarRepository;
}>({
  proposalRepository: ProposalInMemoryRepository,
  calendarRepository: defaultCalendarRepository,
});

export const ProposalProvider: React.FC<{
  children: React.ReactElement;
  proposalRepository: ProposalRepository;
  calendarRepository: CalendarRepository;
}> = ({ children, proposalRepository, calendarRepository }) => {
  return (
    <ProposalContext.Provider
      value={{ proposalRepository, calendarRepository: calendarRepository ?? defaultCalendarRepository }}
    >
      {children}
    </ProposalContext.Provider>
  );
};
